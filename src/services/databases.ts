import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { RelationshipType } from '../enums/relationship-type.ts';
import { RelationMutate } from '../enums/relation-mutate.ts';
import { IndexType } from '../enums/index-type.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Databases extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get a list of all databases from the current Appwrite project. You can use
     * the search parameter to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.list` instead.
     */
    async list(queries?: string[], search?: string): Promise<Models.DatabaseList> {
        const apiPath = '/databases';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new Database.
     * 
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.create` instead.
     */
    async create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases';
        const payload: Payload = {};

        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a database by its unique ID. This endpoint response returns a JSON
     * object with the database metadata.
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.get` instead.
     */
    async get(databaseId: string): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
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
     * Update a database by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} name
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.update` instead.
     */
    async update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a database by its unique ID. Only API keys with with databases.write
     * scope can delete a database.
     *
     * @param {string} databaseId
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.delete` instead.
     */
    async delete(databaseId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/databases/{databaseId}'.replace('{databaseId}', databaseId);
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
    /**
     * Get a list of all collections that belong to the provided databaseId. You
     * can use the search parameter to filter your results.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listTables` instead.
     */
    async listCollections(databaseId: string, queries?: string[], search?: string): Promise<Models.CollectionList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
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
     * Create a new Collection. Before using this route, you should create a new
     * database resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createTable` instead.
     */
    async createCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases/{databaseId}/collections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};

        if (typeof collectionId !== 'undefined') {
            payload['collectionId'] = collectionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Get a collection by its unique ID. This endpoint response returns a JSON
     * object with the collection metadata.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getTable` instead.
     */
    async getCollection(databaseId: string, collectionId: string): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Update a collection by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} documentSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateTable` instead.
     */
    async updateCollection(databaseId: string, collectionId: string, name: string, permissions?: string[], documentSecurity?: boolean, enabled?: boolean): Promise<Models.Collection> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof documentSecurity !== 'undefined') {
            payload['documentSecurity'] = documentSecurity;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a collection by its unique ID. Only users with write permissions
     * have access to delete this resource.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteTable` instead.
     */
    async deleteCollection(databaseId: string, collectionId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
    /**
     * List attributes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listColumns` instead.
     */
    async listAttributes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.AttributeList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Create a boolean attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createBooleanColumn` instead.
     */
    async createBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.AttributeBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a boolean attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateBooleanColumn` instead.
     */
    async updateBooleanAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.AttributeBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a date time attribute according to the ISO 8601 standard.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createDatetimeColumn` instead.
     */
    async createDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/datetime'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a date time attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateDatetimeColumn` instead.
     */
    async updateDatetimeAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an email attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEmailColumn` instead.
     */
    async createEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEmail> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/email'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an email attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEmailColumn` instead.
     */
    async updateEmailAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEmail> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an enum attribute. The `elements` param acts as a white-list of
     * accepted values for this attribute. 
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createEnumColumn` instead.
     */
    async createEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeEnum> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof elements === 'undefined') {
            throw new AppwriteException('Missing required parameter: "elements"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/enum'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an enum attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateEnumColumn` instead.
     */
    async updateEnumAttribute(databaseId: string, collectionId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeEnum> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof elements === 'undefined') {
            throw new AppwriteException('Missing required parameter: "elements"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof elements !== 'undefined') {
            payload['elements'] = elements;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a float attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createFloatColumn` instead.
     */
    async createFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeFloat> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/float'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update a float attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateFloatColumn` instead.
     */
    async updateFloatAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeFloat> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create an integer attribute. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIntegerColumn` instead.
     */
    async createIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.AttributeInteger> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/integer'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an integer attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIntegerColumn` instead.
     */
    async updateIntegerAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.AttributeInteger> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create IP address attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIpColumn` instead.
     */
    async createIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeIp> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/ip'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an ip attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateIpColumn` instead.
     */
    async updateIpAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeIp> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric line attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createLineColumn` instead.
     */
    async createLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributeLine> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/line'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a line attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateLineColumn` instead.
     */
    async updateLineAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeLine> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/line/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric 2d point attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPointColumn` instead.
     */
    async createPointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributePoint> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/point'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a point attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePointColumn` instead.
     */
    async updatePointAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributePoint> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/point/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a geometric polygon attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createPolygonColumn` instead.
     */
    async createPolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string): Promise<Models.AttributePolygon> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/polygon'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
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
     * Update a polygon attribute. Changing the `default` value will not update
     * already existing documents.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updatePolygonColumn` instead.
     */
    async updatePolygonAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributePolygon> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/polygon/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create relationship attribute. [Learn more about relationship
     * attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} relatedCollectionId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRelationshipColumn` instead.
     */
    async createRelationshipAttribute(databaseId: string, collectionId: string, relatedCollectionId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.AttributeRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof relatedCollectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "relatedCollectionId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof relatedCollectionId !== 'undefined') {
            payload['relatedCollectionId'] = relatedCollectionId;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof twoWay !== 'undefined') {
            payload['twoWay'] = twoWay;
        }
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof twoWayKey !== 'undefined') {
            payload['twoWayKey'] = twoWayKey;
        }
        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
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
     * Create a string attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createStringColumn` instead.
     */
    async createStringAttribute(databaseId: string, collectionId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.AttributeString> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof size === 'undefined') {
            throw new AppwriteException('Missing required parameter: "size"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/string'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
        }
        if (typeof encrypt !== 'undefined') {
            payload['encrypt'] = encrypt;
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
     * Update a string attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {number} size
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateStringColumn` instead.
     */
    async updateStringAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.AttributeString> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Create a URL attribute.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createUrlColumn` instead.
     */
    async createUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.AttributeUrl> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/url'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof array !== 'undefined') {
            payload['array'] = array;
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
     * Update an url attribute. Changing the `default` value will not update
     * already existing documents.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateUrlColumn` instead.
     */
    async updateUrlAttribute(databaseId: string, collectionId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.AttributeUrl> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        if (typeof xdefault === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xdefault"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof required !== 'undefined') {
            payload['required'] = required;
        }
        if (typeof xdefault !== 'undefined') {
            payload['default'] = xdefault;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Get attribute by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getColumn` instead.
     */
    async getAttribute(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Deletes an attribute.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteColumn` instead.
     */
    async deleteAttribute(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
    /**
     * Update relationship attribute. [Learn more about relationship
     * attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRelationshipColumn` instead.
     */
    async updateRelationshipAttribute(databaseId: string, collectionId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.AttributeRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
        const payload: Payload = {};

        if (typeof onDelete !== 'undefined') {
            payload['onDelete'] = onDelete;
        }
        if (typeof newKey !== 'undefined') {
            payload['newKey'] = newKey;
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
     * Get a list of all the user's documents in a given collection. You can use
     * the query params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listRows` instead.
     */
    async listDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRow` instead.
     */
    async createDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof documentId !== 'undefined') {
            payload['documentId'] = documentId;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * Create new Documents. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {object[]} documents
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createRows` instead.
     */
    async createDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
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
     * Create or update Documents. Before using this route, you should create a
     * new collection resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     * 
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {object[]} documents
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRows` instead.
     */
    async upsertDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, documents: object[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documents === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documents"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof documents !== 'undefined') {
            payload['documents'] = documents;
        }
        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update all documents that match your queries, if no queries are submitted
     * then all documents are updated. You can pass only specific fields to be
     * updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {object} data
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRows` instead.
     */
    async updateDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, data?: object, queries?: string[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
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
     * Bulk delete documents using queries, if no queries are passed then all
     * documents are deleted.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRows` instead.
     */
    async deleteDocuments<Document extends Models.Document>(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.DocumentList<Document>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
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
    /**
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getRow` instead.
     */
    async getDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
     * Create or update a Document. Before using this route, you should create a
     * new collection resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.upsertRow` instead.
     */
    async upsertDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data: object, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.updateRow` instead.
     */
    async updateDocument<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, data?: object, permissions?: string[]): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
        const payload: Payload = {};

        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
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
     * Delete a document by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteRow` instead.
     */
    async deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
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
    /**
     * Decrement a specific attribute of a document by a given value.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string} attribute
     * @param {number} value
     * @param {number} min
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.decrementRowColumn` instead.
     */
    async decrementDocumentAttribute<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, min?: number): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof attribute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attribute"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId).replace('{attribute}', attribute);
        const payload: Payload = {};

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof min !== 'undefined') {
            payload['min'] = min;
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
     * Increment a specific attribute of a document by a given value.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} documentId
     * @param {string} attribute
     * @param {number} value
     * @param {number} max
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.incrementRowColumn` instead.
     */
    async incrementDocumentAttribute<Document extends Models.Document>(databaseId: string, collectionId: string, documentId: string, attribute: string, value?: number, max?: number): Promise<Document> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof documentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "documentId"');
        }

        if (typeof attribute === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attribute"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId).replace('{attribute}', attribute);
        const payload: Payload = {};

        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof max !== 'undefined') {
            payload['max'] = max;
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
     * List indexes in the collection.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.listIndexes` instead.
     */
    async listIndexes(databaseId: string, collectionId: string, queries?: string[]): Promise<Models.IndexList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
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
     * Creates an index on the attributes listed. Your index should include all
     * the attributes you will query in a single request.
     * Attributes can be `key`, `fulltext`, and `unique`.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} attributes
     * @param {string[]} orders
     * @param {number[]} lengths
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.createIndex` instead.
     */
    async createIndex(databaseId: string, collectionId: string, key: string, type: IndexType, attributes: string[], orders?: string[], lengths?: number[]): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof attributes === 'undefined') {
            throw new AppwriteException('Missing required parameter: "attributes"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof attributes !== 'undefined') {
            payload['attributes'] = attributes;
        }
        if (typeof orders !== 'undefined') {
            payload['orders'] = orders;
        }
        if (typeof lengths !== 'undefined') {
            payload['lengths'] = lengths;
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
     * Get index by ID.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.getIndex` instead.
     */
    async getIndex(databaseId: string, collectionId: string, key: string): Promise<Models.Index> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
     * Delete an index.
     *
     * @param {string} databaseId
     * @param {string} collectionId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     * @deprecated This API has been deprecated since 1.8.0. Please use `TablesDB.deleteIndex` instead.
     */
    async deleteIndex(databaseId: string, collectionId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof collectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "collectionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/databases/{databaseId}/collections/{collectionId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{key}', key);
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
