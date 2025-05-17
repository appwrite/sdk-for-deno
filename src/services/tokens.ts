import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Tokens extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List all the tokens created for a specific file or bucket. You can use the
     * query params to filter your results.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(bucketId: string, fileId: string, queries?: string[]): Promise<Models.ResourceTokenList> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new token. A token is linked to a file. Token can be passed as a
     * header or request get parameter.
     *
     * @param {string} bucketId
     * @param {string} fileId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFileToken(bucketId: string, fileId: string, expire?: string): Promise<Models.ResourceToken> {
        if (typeof bucketId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucketId"');
        }

        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }

        const apiPath = '/tokens/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
        const payload: Payload = {};

        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get a token by its unique ID.
     *
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(tokenId: string): Promise<Models.ResourceToken> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Update a token by its unique ID. Use this endpoint to update a token's
     * expiry date.
     *
     * @param {string} tokenId
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(tokenId: string, expire?: string): Promise<Models.ResourceToken> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};

        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a token by its unique ID.
     *
     * @param {string} tokenId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(tokenId: string): Promise<Response> {
        if (typeof tokenId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tokenId"');
        }

        const apiPath = '/tokens/{tokenId}'.replace('{tokenId}', tokenId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
}
