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

export class Graphql extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * GraphQL Endpoint
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

        let path = '/graphql';
        let payload: Payload = {};

        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }
        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * GraphQL Endpoint
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

        let path = '/graphql/mutation';
        let payload: Payload = {};

        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }
        return await this.client.call('post', path, {
            'x-sdk-graphql': 'true',
            'content-type': 'application/json',
        }, payload);
    }
}