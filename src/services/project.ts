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

export class Project extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Variables
     *
     * Get a list of all project variables. These variables will be accessible in
     * all Appwrite Functions at runtime.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listVariables(): Promise<Models.VariableList> {
        const apiPath = '/project/variables';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Variable
     *
     * Create a new project variable. This variable will be accessible in all
     * Appwrite Functions at runtime.
     *
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVariable(key: string, value: string): Promise<Models.Variable> {
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/project/variables';
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Variable
     *
     * Get a project variable by its unique ID.
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getVariable(variableId: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Variable
     *
     * Update project variable by its unique ID. This variable will be accessible
     * in all Appwrite Functions at runtime.
     *
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVariable(variableId: string, key: string, value?: string): Promise<Models.Variable> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Variable
     *
     * Delete a project variable by its unique ID. 
     *
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteVariable(variableId: string): Promise<Response> {
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/project/variables/{variableId}'.replace('{variableId}', variableId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}