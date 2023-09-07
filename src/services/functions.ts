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

export class Functions extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(queries?: string[], search?: string): Promise<Models.FunctionList> {
        const apiPath = '/functions';
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
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateBranch
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(functionId: string, name: string, runtime: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateBranch?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
        }

        const apiPath = '/functions';
        const payload: Payload = {};

        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof templateRepository !== 'undefined') {
            payload['templateRepository'] = templateRepository;
        }
        if (typeof templateOwner !== 'undefined') {
            payload['templateOwner'] = templateOwner;
        }
        if (typeof templateRootDirectory !== 'undefined') {
            payload['templateRootDirectory'] = templateRootDirectory;
        }
        if (typeof templateBranch !== 'undefined') {
            payload['templateBranch'] = templateBranch;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRuntimes(): Promise<Models.RuntimeList> {
        const apiPath = '/functions/runtimes';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(functionId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(functionId: string, name: string, runtime?: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(functionId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
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
     * Create Deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {InputFile} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDeployment(functionId: string, code: InputFile, activate: boolean, entrypoint?: string, commands?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }

        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};

        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof code !== 'undefined') {
            payload['code'] = code;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate.toString();
        }

        const size = code.size;
        
        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        };

        let id: string | undefined = undefined;
        let response: any = undefined;

        let chunksUploaded = 0;


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
                apiHeaders['content-range'] = 'bytes ' + start + '-' + end + '/' + size;
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
                apiHeaders['x-appwrite-id'] = id;
            }

            payload['code'] = { type: 'file', file: new File([uploadableChunkTrimmed], code.filename), filename: code.filename };

            response = await this.client.call('post', apiPath, apiHeaders, payload);

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

        for await (const chunk of code.stream) {
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
     * Get Deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Function Deployment
     *
     * Update the function code deployment ID using the unique function ID. Use
     * this endpoint to switch the code deployment that should be executed by the
     * execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDeployment(functionId: string, deploymentId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDeployment(functionId: string, deploymentId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Build
     *
     * Create a new build for an Appwrite Function deployment. This endpoint can
     * be used to retry a failed build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBuild(functionId: string, deploymentId: string, buildId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        if (typeof buildId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId).replace('{buildId}', buildId);
        const payload: Payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Download Deployment
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async downloadDeployment(functionId: string, deploymentId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listExecutions(functionId: string, queries?: string[], search?: string): Promise<Models.ExecutionList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
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
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {string} method
     * @param {object} headers
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: string, headers?: object): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};

        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof async !== 'undefined') {
            payload['async'] = async;
        }
        if (typeof xpath !== 'undefined') {
            payload['path'] = xpath;
        }
        if (typeof method !== 'undefined') {
            payload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            payload['headers'] = headers;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getExecution(functionId: string, executionId: string): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listVariables(functionId: string): Promise<Models.VariableList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Variable
     *
     * Create a new function environment variable. These variables can be accessed
     * in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVariable(functionId: string, key: string, value: string): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
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
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getVariable(functionId: string, variableId: string): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Variable
     *
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVariable(functionId: string, variableId: string, key: string, value?: string): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
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
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteVariable(functionId: string, variableId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}