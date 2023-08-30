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

export class Proxy extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Rules
     *
     * Get a list of all the proxy rules. You can use the query params to filter
     * your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRules(queries?: string[], search?: string): Promise<Models.ProxyRuleList> {
        const apiPath = '/proxy/rules';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Rule
     *
     * Create a new proxy rule.
     *
     * @param {string} domain
     * @param {string} resourceType
     * @param {string} resourceId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRule(domain: string, resourceType: string, resourceId?: string): Promise<Models.ProxyRule> {
        if (typeof domain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "domain"');
        }

        if (typeof resourceType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "resourceType"');
        }

        const apiPath = '/proxy/rules';
        const payload: Payload = {};

        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof resourceType !== 'undefined') {
            payload['resourceType'] = resourceType;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Rule
     *
     * Get a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getRule(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Rule
     *
     * Delete a proxy rule by its unique ID.
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteRule(ruleId: string): Promise<Response> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}'.replace('{ruleId}', ruleId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Rule Verification Status
     *
     * @param {string} ruleId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRuleVerification(ruleId: string): Promise<Models.ProxyRule> {
        if (typeof ruleId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "ruleId"');
        }

        const apiPath = '/proxy/rules/{ruleId}/verification'.replace('{ruleId}', ruleId);
        const payload: Payload = {};

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}