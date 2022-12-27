import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Storage extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List buckets
     *
     * Get a list of all the storage buckets. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listBuckets(queries?: string[], search?: string): Promise<Models.BucketList> {
        let path = '/storage/buckets';
        let payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create bucket
     *
     * Create a new storage bucket.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {string} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: string, encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/storage/buckets';
        let payload: Payload = {};

        if (typeof bucketId !== 'undefined') {
            payload['bucketId'] = bucketId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }
        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }
        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Bucket
     *
     * Get a storage bucket by its unique ID. This endpoint response returns a
     * JSON object with the storage bucket metadata.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getBucket(bucketId: string): Promise<Models.Bucket> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Bucket
     *
     * Update a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} fileSecurity
     * @param {boolean} enabled
     * @param {number} maximumFileSize
     * @param {string[]} allowedFileExtensions
     * @param {string} compression
     * @param {boolean} encryption
     * @param {boolean} antivirus
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateBucket(bucketId: string, name: string, permissions?: string[], fileSecurity?: boolean, enabled?: boolean, maximumFileSize?: number, allowedFileExtensions?: string[], compression?: string, encryption?: boolean, antivirus?: boolean): Promise<Models.Bucket> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof fileSecurity !== 'undefined') {
            payload['fileSecurity'] = fileSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof maximumFileSize !== 'undefined') {
            payload['maximumFileSize'] = maximumFileSize;
        }
        if (typeof allowedFileExtensions !== 'undefined') {
            payload['allowedFileExtensions'] = allowedFileExtensions;
        }
        if (typeof compression !== 'undefined') {
            payload['compression'] = compression;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof antivirus !== 'undefined') {
            payload['antivirus'] = antivirus;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Bucket
     *
     * Delete a storage bucket by its unique ID.
     *
     * @param {string} bucketId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteBucket(bucketId: string): Promise<Response> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}'.replace('{bucketId}', bucketId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results.
     *
     * @param {string} bucketId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listFiles(bucketId: string, queries?: string[], search?: string): Promise<Models.FileList> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        let path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        let payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create File
     *
     * Create a new file. Before using this route, you should create a new bucket
     * resource using either a [server
     * integration](/docs/server/storage#storageCreateBucket) API or directly from
     * your Appwrite console.
     * 
     * Larger files should be uploaded using multiple requests with the
     * [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
     * header to send a partial request with a maximum supported chunk of `5MB`.
     * The `content-range` header values should always be in bytes.
     * 
     * When the first request is sent, the server will return the **File** object,
     * and the subsequent part request must include the file's **id** in
     * `x-appwrite-id` header to allow the server to know that the partial upload
     * is for the existing file and not for a new one.
     * 
     * If you're creating a new file using one of the Appwrite SDKs, all the
     * chunking logic will be managed by the SDK internally.
     * 
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {InputFile} file
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFile(bucketId: string, fileId: string, file: InputFile, permissions?: string[], onProgress = (progress: UploadProgress) => {}): Promise<Models.File> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        if (typeof file === 'undefined') {
            throw new AppwriteException('Missing required parameter: "file"');
        }

        let path = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
        let payload: Payload = {};

        if (typeof fileId !== 'undefined') {
            payload['fileId'] = fileId;
        }
        if (typeof file !== 'undefined') {
            payload['file'] = file;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }

        const size = file.size;
        
        const headers: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        };

        let id: string | undefined = undefined;
        let response: any = undefined;

        let chunksUploaded = 0;

        if(fileId != 'unique()') {
            try {
                response = await this.client.call('get', path + '/' + fileId, headers);
                chunksUploaded = response.chunksUploaded;
            } catch(e) {
            }
        }

        let currentChunk = 1;
        let currentPosition = 0;
        let uploadableChunk = new Uint8Array(Client.CHUNK_SIZE);

        const uploadChunk = async (lastUpload = false) => {
            if(currentChunk <= chunksUploaded) {
                return;
            }

            const start = ((currentChunk - 1) * Client.CHUNK_SIZE);
            const end = start + currentPosition;

            if(!lastUpload || currentChunk !== 1) {
                headers['content-range'] = 'bytes ' + start + '-' + end + '/' + size;
            }

            let uploadableChunkTrimmed: Uint8Array;
            
            if(currentPosition + 1 >= Client.CHUNK_SIZE) {
                uploadableChunkTrimmed = uploadableChunk;
            } else {
                uploadableChunkTrimmed = new Uint8Array(currentPosition);
                for(let i = 0; i <= currentPosition; i++) {
                    uploadableChunkTrimmed[i] = uploadableChunk[i];
                }
            }

            if (id) {
                headers['x-appwrite-id'] = id;
            }

            payload['file'] = { type: 'file', file: new File([uploadableChunkTrimmed], file.filename), filename: file.filename };

            response = await this.client.call('post', path, headers, payload);

            if (!id) {
                id = response['$id'];
            }

            if (onProgress !== null) {
                onProgress({
                    $id: response['$id'],
                    progress: Math.min((currentChunk) * Client.CHUNK_SIZE, size) / size * 100,
                    sizeUploaded: end+1,
                    chunksTotal: response['chunksTotal'],
                    chunksUploaded: response['chunksUploaded']
                });
            }

            uploadableChunk = new Uint8Array(Client.CHUNK_SIZE);
            currentPosition = 0;
            currentChunk++;
        }

        for await (const chunk of file.stream) {
            let i = 0;
            for(const b of chunk) {
                uploadableChunk[currentPosition] = chunk[i];

                if(currentPosition + 1 >= Client.CHUNK_SIZE) {
                    await uploadChunk();
                    currentPosition--;
                }

                i++;
                currentPosition++;
            }
        }

        await uploadChunk(true);

        return response;
    }
    /**
     * Get File
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object
     * with the file metadata.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFile(bucketId: string, fileId: string): Promise<Models.File> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update File
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateFile(bucketId: string, fileId: string, permissions?: string[]): Promise<Models.File> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteFile(bucketId: string, fileId: string): Promise<Response> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get File for Download
     *
     * Get a file content by its unique ID. The endpoint response return with a
     * 'Content-Disposition: attachment' header that tells the browser to start
     * downloading the file to user downloads directory.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFileDownload(bucketId: string, fileId: string): Promise<Response> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get File Preview
     *
     * Get a file preview image. Currently, this method supports preview for image
     * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
     * and spreadsheets, will return the file icon image. You can also pass query
     * string arguments for cutting and resizing your preview image. Preview is
     * supported only for image files smaller than 10MB.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {number} width
     * @param {number} height
     * @param {string} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {string} output
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: string, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: string): Promise<Response> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof gravity !== 'undefined') {
            payload['gravity'] = gravity;
        }

        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }

        if (typeof borderWidth !== 'undefined') {
            payload['borderWidth'] = borderWidth;
        }

        if (typeof borderColor !== 'undefined') {
            payload['borderColor'] = borderColor;
        }

        if (typeof borderRadius !== 'undefined') {
            payload['borderRadius'] = borderRadius;
        }

        if (typeof opacity !== 'undefined') {
            payload['opacity'] = opacity;
        }

        if (typeof rotation !== 'undefined') {
            payload['rotation'] = rotation;
        }

        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }

        if (typeof output !== 'undefined') {
            payload['output'] = output;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get File for View
     *
     * Get a file content by its unique ID. This endpoint is similar to the
     * download method but returns with no  'Content-Disposition: attachment'
     * header.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFileView(bucketId: string, fileId: string): Promise<Response> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        let path = '/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
}