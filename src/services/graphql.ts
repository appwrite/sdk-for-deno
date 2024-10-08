import { Service } from '../service.ts';
import { Params, Client } from '../client.ts';
import { Payload } from '../payload.ts';
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

export class Graphql extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async query(query: object): Promise<Response> {
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }

        const apiPath = '/graphql';
        const payload: Params = {};

        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'x-sdk-graphql': 'true',
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * GraphQL endpoint
     *
     * Execute a GraphQL mutation.
     *
     * @param {object} query
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async mutation(query: object): Promise<Response> {
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }

        const apiPath = '/graphql/mutation';
        const payload: Params = {};

        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'x-sdk-graphql': 'true',
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
}