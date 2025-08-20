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

export class TablesDb extends Service {

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
     */
    async list(queries?: string[], search?: string): Promise<Models.DatabaseList> {
        const apiPath = '/tablesdb';
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
     */
    async create(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb';
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
     */
    async get(databaseId: string): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     */
    async update(databaseId: string, name: string, enabled?: boolean): Promise<Models.Database> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     */
    async delete(databaseId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}'.replace('{databaseId}', databaseId);
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
     * Get a list of all tables that belong to the provided databaseId. You can
     * use the search parameter to filter your results.
     *
     * @param {string} databaseId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listTables(databaseId: string, queries?: string[], search?: string): Promise<Models.TableList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables'.replace('{databaseId}', databaseId);
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
     * Create a new Table. Before using this route, you should create a new
     * database resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateTable)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} rowSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTable(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables'.replace('{databaseId}', databaseId);
        const payload: Payload = {};

        if (typeof tableId !== 'undefined') {
            payload['tableId'] = tableId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            payload['rowSecurity'] = rowSecurity;
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
     * Get a table by its unique ID. This endpoint response returns a JSON object
     * with the table metadata.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getTable(databaseId: string, tableId: string): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a table by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} name
     * @param {string[]} permissions
     * @param {boolean} rowSecurity
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTable(databaseId: string, tableId: string, name: string, permissions?: string[], rowSecurity?: boolean, enabled?: boolean): Promise<Models.Table> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof permissions !== 'undefined') {
            payload['permissions'] = permissions;
        }
        if (typeof rowSecurity !== 'undefined') {
            payload['rowSecurity'] = rowSecurity;
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
     * Delete a table by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteTable(databaseId: string, tableId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * List columns in the table.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listColumns(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create a boolean column.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, array?: boolean): Promise<Models.ColumnBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a boolean column. Changing the `default` value will not update
     * already existing rows.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {boolean} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateBooleanColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: boolean, newKey?: string): Promise<Models.ColumnBoolean> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/boolean/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create a date time column according to the ISO 8601 standard.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a date time column. Changing the `default` value will not update
     * already existing rows.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDatetimeColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnDatetime> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/datetime/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create an email column.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEmail> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/email'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update an email column. Changing the `default` value will not update
     * already existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmailColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEmail> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/email/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create an enumeration column. The `elements` param acts as a white-list of
     * accepted values for this column.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnEnum> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/enum'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update an enum column. Changing the `default` value will not update already
     * existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {string[]} elements
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEnumColumn(databaseId: string, tableId: string, key: string, elements: string[], required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnEnum> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/enum/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create a float column. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnFloat> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/float'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a float column. Changing the `default` value will not update already
     * existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateFloatColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnFloat> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/float/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create an integer column. Optionally, minimum and maximum values can be
     * provided.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} min
     * @param {number} max
     * @param {number} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, min?: number, max?: number, xdefault?: number, array?: boolean): Promise<Models.ColumnInteger> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/integer'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update an integer column. Changing the `default` value will not update
     * already existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {number} xdefault
     * @param {number} min
     * @param {number} max
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateIntegerColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: number, min?: number, max?: number, newKey?: string): Promise<Models.ColumnInteger> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/integer/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create IP address column.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnIp> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/ip'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update an ip column. Changing the `default` value will not update already
     * existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateIpColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnIp> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/ip/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create relationship column. [Learn more about relationship
     * columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} relatedTableId
     * @param {RelationshipType} type
     * @param {boolean} twoWay
     * @param {string} key
     * @param {string} twoWayKey
     * @param {RelationMutate} onDelete
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRelationshipColumn(databaseId: string, tableId: string, relatedTableId: string, type: RelationshipType, twoWay?: boolean, key?: string, twoWayKey?: string, onDelete?: RelationMutate): Promise<Models.ColumnRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof relatedTableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "relatedTableId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof relatedTableId !== 'undefined') {
            payload['relatedTableId'] = relatedTableId;
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
     * Create a string column.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {number} size
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @param {boolean} encrypt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createStringColumn(databaseId: string, tableId: string, key: string, size: number, required: boolean, xdefault?: string, array?: boolean, encrypt?: boolean): Promise<Models.ColumnString> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/string'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update a string column. Changing the `default` value will not update
     * already existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {number} size
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStringColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, size?: number, newKey?: string): Promise<Models.ColumnString> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/string/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Create a URL column.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {boolean} array
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, array?: boolean): Promise<Models.ColumnUrl> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof required === 'undefined') {
            throw new AppwriteException('Missing required parameter: "required"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/url'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Update an url column. Changing the `default` value will not update already
     * existing rows.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {boolean} required
     * @param {string} xdefault
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateUrlColumn(databaseId: string, tableId: string, key: string, required: boolean, xdefault?: string, newKey?: string): Promise<Models.ColumnUrl> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
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

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/url/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Get column by ID.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getColumn(databaseId: string, tableId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Deletes a column.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteColumn(databaseId: string, tableId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Update relationship column. [Learn more about relationship
     * columns](https://appwrite.io/docs/databases-relationships#relationship-columns).
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {RelationMutate} onDelete
     * @param {string} newKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRelationshipColumn(databaseId: string, tableId: string, key: string, onDelete?: RelationMutate, newKey?: string): Promise<Models.ColumnRelationship> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/columns/{key}/relationship'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * List indexes on the table.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIndexes(databaseId: string, tableId: string, queries?: string[]): Promise<Models.ColumnIndexList> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Creates an index on the columns listed. Your index should include all the
     * columns you will query in a single request.
     * Type can be `key`, `fulltext`, or `unique`.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} key
     * @param {IndexType} type
     * @param {string[]} columns
     * @param {string[]} orders
     * @param {number[]} lengths
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createIndex(databaseId: string, tableId: string, key: string, type: IndexType, columns: string[], orders?: string[], lengths?: number[]): Promise<Models.ColumnIndex> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof columns === 'undefined') {
            throw new AppwriteException('Missing required parameter: "columns"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof columns !== 'undefined') {
            payload['columns'] = columns;
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
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getIndex(databaseId: string, tableId: string, key: string): Promise<Models.ColumnIndex> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * @param {string} tableId
     * @param {string} key
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteIndex(databaseId: string, tableId: string, key: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/indexes/{key}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{key}', key);
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
     * Get a list of all the user's rows in a given table. You can use the query
     * params to filter your results.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRows<Row extends Models.Row>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Create a new Row. Before using this route, you should create a new table
     * resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateTable)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRow<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, data: object, permissions?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        if (typeof data === 'undefined') {
            throw new AppwriteException('Missing required parameter: "data"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof rowId !== 'undefined') {
            payload['rowId'] = rowId;
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
     * Create new Rows. Before using this route, you should create a new table
     * resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateTable)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {object[]} rows
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRows<Row extends Models.Row>(databaseId: string, tableId: string, rows: object[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof rows !== 'undefined') {
            payload['rows'] = rows;
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
     * Create or update Rows. Before using this route, you should create a new
     * table resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateTable)
     * API or directly from your database console.
     * 
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {object[]} rows
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async upsertRows<Row extends Models.Row>(databaseId: string, tableId: string, rows: object[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rows === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rows"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
        const payload: Payload = {};

        if (typeof rows !== 'undefined') {
            payload['rows'] = rows;
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
     * Update all rows that match your queries, if no queries are submitted then
     * all rows are updated. You can pass only specific fields to be updated.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {object} data
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRows<Row extends Models.Row>(databaseId: string, tableId: string, data?: object, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Bulk delete rows using queries, if no queries are passed then all rows are
     * deleted.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteRows<Row extends Models.Row>(databaseId: string, tableId: string, queries?: string[]): Promise<Models.RowList<Row>> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows'.replace('{databaseId}', databaseId).replace('{tableId}', tableId);
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
     * Get a row by its unique ID. This endpoint response returns a JSON object
     * with the row data.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getRow<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, queries?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Create or update a Row. Before using this route, you should create a new
     * table resource using either a [server
     * integration](https://appwrite.io/docs/server/databases#databasesCreateTable)
     * API or directly from your database console.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async upsertRow<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, data?: object, permissions?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Update a row by its unique ID. Using the patch method you can pass only
     * specific fields that will get updated.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {object} data
     * @param {string[]} permissions
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRow<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, data?: object, permissions?: string[]): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Delete a row by its unique ID.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteRow(databaseId: string, tableId: string, rowId: string): Promise<Response> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId);
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
     * Decrement a specific column of a row by a given value.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string} column
     * @param {number} value
     * @param {number} min
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async decrementRowColumn<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, min?: number): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
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
     * Increment a specific column of a row by a given value.
     *
     * @param {string} databaseId
     * @param {string} tableId
     * @param {string} rowId
     * @param {string} column
     * @param {number} value
     * @param {number} max
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async incrementRowColumn<Row extends Models.Row>(databaseId: string, tableId: string, rowId: string, column: string, value?: number, max?: number): Promise<Row> {
        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        if (typeof tableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "tableId"');
        }

        if (typeof rowId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rowId"');
        }

        if (typeof column === 'undefined') {
            throw new AppwriteException('Missing required parameter: "column"');
        }

        const apiPath = '/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment'.replace('{databaseId}', databaseId).replace('{tableId}', tableId).replace('{rowId}', rowId).replace('{column}', column);
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
}
