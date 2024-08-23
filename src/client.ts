import { AppwriteException } from './exception.ts';

export interface Payload {
    [key: string]: any;
}

export class Client {
    static CHUNK_SIZE = 5*1024*1024; // 5MB
    static DENO_READ_CHUNK_SIZE = 16384; // 16kb; refference: https://github.com/denoland/deno/discussions/9906
    
    endpoint: string = 'https://cloud.appwrite.io/v1';
    headers: Payload = {
        'content-type': '',
        'user-agent' : `AppwriteDenoSDK/12.0.0 (${Deno.build.os}; ${Deno.build.arch})`,
        'x-sdk-name': 'Deno',
        'x-sdk-platform': 'server',
        'x-sdk-language': 'deno',
        'x-sdk-version': '12.0.0',
        'X-Appwrite-Response-Format':'1.6.0',
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

    /**
     * Set Session
     *
     * The user session to authenticate with
     *
     * @param string value
     *
     * @return self
     */
    setSession(value: string): this {
        this.addHeader('X-Appwrite-Session', value);

        return this;
    }

    /**
     * Set ForwardedUserAgent
     *
     * The user agent string of the client that made the request
     *
     * @param string value
     *
     * @return self
     */
    setForwardedUserAgent(value: string): this {
        this.addHeader('X-Forwarded-User-Agent', value);

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

    async call(method: string, path: string = "", headers: Payload = {}, params: Payload = {}, responseType: string = "json") {
        headers = {...this.headers, ...headers};
        const url = new URL(this.endpoint + path);

        let body: string | FormData | undefined = undefined;

        if (method.toUpperCase() === "GET") {
            url.search = new URLSearchParams(Client.flatten(params)).toString();
        } else if (headers["content-type"]?.toLowerCase().startsWith("multipart/form-data")) {
            delete headers["content-type"];
            const formData = new FormData();

            const flatParams = Client.flatten(params);

            for (const [key, value] of Object.entries(flatParams)) {
                if (value && value.type && value.type === "file") {
                    formData.append(key, value.file, value.filename);
                } else {
                    formData.append(key, value);
                }
            }

            body = formData;
        } else {
            body = JSON.stringify(params);
        }

        let response = undefined;
        try {
            response = await fetch(url.toString(), {
                redirect: responseType === "location" ? "manual" : "follow",
                method: method.toUpperCase(),
                headers,
                body
            });

            const warnings = response.headers.get('x-appwrite-warning');
            if (warnings) {
                warnings.split(';').forEach((warning: string) => console.warn('Warning: ' + warning));
            }
        } catch (error) {
            throw new AppwriteException(error.message);
        }

        if (response.status >= 400) {
            const text = await response.text();
            let json = undefined;
            try {
                json = JSON.parse(text);
            } catch (error) {
                throw new AppwriteException(text, response.status, "", text);
            }
            throw new AppwriteException(json.message, json.code, json.type, json);
        }

        if (responseType === "arraybuffer") {
            const data = await response.arrayBuffer();
            return data;
        }

        if (responseType === "location") {
            return response.headers.get("location");
        }

        const text = await response.text();
        let json = undefined;
        try {
            json = JSON.parse(text);
        } catch (error) {
            return text;
        }
        return json;
    }

    static flatten(data: Payload, prefix = ''): Payload {
        let output: Payload = {};

        for (const [key, value] of Object.entries(data)) {
            let finalKey = prefix ? prefix + '[' + key +']' : key;
            if (Array.isArray(value)) {
                output = { ...output, ...Client.flatten(value, finalKey) };
            } else {
                output[finalKey] = value;
            }
        }

        return output;
    }
}