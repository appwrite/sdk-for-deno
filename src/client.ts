import { AppwriteException } from './exception.ts';

export interface Payload {
    [key: string]: any;
}

export class Client {
    static CHUNK_SIZE = 5*1024*1024; // 5MB
    static DENO_READ_CHUNK_SIZE = 16384; // 16kb; refference: https://github.com/denoland/deno/discussions/9906
    
    endpoint: string = 'https://HOSTNAME/v1';
    headers: Payload = {
        'content-type': '',
        'x-sdk-name': 'Deno',
        'x-sdk-platform': 'server',
        'x-sdk-language': 'deno',
        'x-sdk-version': '6.0.0-RC1',
        'X-Appwrite-Response-Format':'1.0.0-RC1',
    };

    /**
     * Set Project
     *
     * Your project ID
     *
     * @param string value
     *
     * @return self
     */
    setProject(value: string): this {
        this.addHeader('X-Appwrite-Project', value);

        return this;
    }

    /**
     * Set Key
     *
     * Your secret API key
     *
     * @param string value
     *
     * @return self
     */
    setKey(value: string): this {
        this.addHeader('X-Appwrite-Key', value);

        return this;
    }

    /**
     * Set JWT
     *
     * Your secret JSON Web Token
     *
     * @param string value
     *
     * @return self
     */
    setJWT(value: string): this {
        this.addHeader('X-Appwrite-JWT', value);

        return this;
    }

    /**
     * Set Locale
     *
     * @param string value
     *
     * @return self
     */
    setLocale(value: string): this {
        this.addHeader('X-Appwrite-Locale', value);

        return this;
    }


    /***
     * @param endpoint
     * @return this
     */
    setEndpoint(endpoint: string): this {
        this.endpoint = endpoint;

        return this;
    }

    /**
     * @param key string
     * @param value string
     */
    addHeader(key: string, value: string): this {
        this.headers[key.toLowerCase()] = value;

        return this;
    }

    withoutHeader(key: string, headers: Payload): Payload {
        return Object.keys(headers).reduce((acc: Payload, cv) => {
            if (cv == 'content-type') return acc;
            acc[cv] = headers[cv];
            return acc;
        }, {})
    }

    async call(method: string, path: string = '', headers: Payload = {}, params: Payload = {}) {
        headers = Object.assign({}, this.headers, headers);

        let body;
        const url = new URL(this.endpoint + path);
        if (method.toUpperCase() === 'GET') {
            url.search = new URLSearchParams(this.flatten(params)).toString();
            body = null;
        } else if (headers['content-type'].toLowerCase().startsWith('multipart/form-data')) {
            headers = this.withoutHeader('content-type', headers);
            const formData = new FormData();
            const flatParams = this.flatten(params);
            for (const key in flatParams) {
                const value = flatParams[key];

                if(value && value.type && value.type === 'file') {
                    formData.append(key, value.file, value.filename);
                } else {
                    formData.append(key, flatParams[key]);
                }
            }
            body = formData;
        } else {
            body = JSON.stringify(params);
        }

        const options = {
            method: method.toUpperCase(),
            headers: headers,
            body: body,
        };

        try {
            let response = await fetch(url.toString(), options);
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.includes('application/json')) {
                if (response.status >= 400) {
                    let res = await response.json();
                    throw new AppwriteException(res.message, res.status, res.type ?? "", res);
                }

                return response.json();
            } else {
                if (response.status >= 400) {
                    let res = await response.text();
                    throw new AppwriteException(res, response.status, "", null);
                }
                return response;
            }
        } catch(error) {
            throw new AppwriteException(error?.response?.message || error.message, error?.response?.code, error?.response?.type, error.response);
        }
    }

    flatten(data: Payload, prefix = '') {
        let output: Payload = {};

        for (const key in data) {
            let value = data[key];
            let finalKey = prefix ? prefix + '[' + key +']' : key;

            if (Array.isArray(value)) {
                output = { ...output, ...this.flatten(value, finalKey) }; // @todo: handle name collision here if needed
            }
            else {
                output[finalKey] = value;
            }
        }

        return output;
    }
}