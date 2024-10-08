import { Service } from '../service.ts';
import { Params, Client } from '../client.ts';
import { Payload } from '../payload.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { Runtime } from '../enums/runtime.ts';
import { ExecutionMethod } from '../enums/execution-method.ts';

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
     * List functions
     *
     * Get a list of all the project&#039;s functions. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(queries?: string[], search?: string): Promise<Models.FunctionList> {
        const apiPath = '/functions';
        const payload: Params = {};

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
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Create function
     *
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string[]} scopes
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateVersion
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateVersion?: string, specification?: string): Promise<Models.Function> {
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
        const payload: Params = {};

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
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
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
        if (typeof templateVersion !== 'undefined') {
            payload['templateVersion'] = templateVersion;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
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
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listRuntimes(): Promise<Models.RuntimeList> {
        const apiPath = '/functions/runtimes';
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * List available function runtime specifications
     *
     * List allowed function specifications for this instance.

     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSpecifications(): Promise<Models.SpecificationList> {
        const apiPath = '/functions/specifications';
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Get function
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
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Update function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string[]} scopes
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Params = {};

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
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
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
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
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
     * Delete function
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
        const payload: Params = {};

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
     * List deployments
     *
     * Get a list of all the project&#039;s code deployments. You can use the query params to filter your results.
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
        const payload: Params = {};

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
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Create deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you&#039;ll need to update the function&#039;s deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the &quot;command&quot; param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {Payload} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDeployment(functionId: string, code: Payload, activate: boolean, entrypoint?: string, commands?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
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
        const payload: Params = {};

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
            'content-type': 'multipart/form-data',        };

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
            let end = start + currentPosition;

            if (end === size) {
                end -= 1;
            }

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

            payload['code'] = { type: 'file', file: new File([uploadableChunkTrimmed], code.filename ?? ''), filename: code.filename ?? '' };

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

        const chunk = code.toBinary();
        let i = 0;
        for(const _ of chunk) {
            uploadableChunk[currentPosition] = chunk[i];

            if(currentPosition + 1 >= Client.CHUNK_SIZE) {
                await uploadChunk();
                currentPosition--;
            }

            i++;
            currentPosition++;
        }

        await uploadChunk(true);

        return response;    }

    /**
     * Get deployment
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
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Update deployment
     *
     * Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.
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
        const payload: Params = {};

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
     * Delete deployment
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
        const payload: Params = {};

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
     * Rebuild deployment
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBuild(functionId: string, deploymentId: string, buildId?: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/build'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Params = {};

        if (typeof buildId !== 'undefined') {
            payload['buildId'] = buildId;
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
     * Cancel deployment
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDeploymentBuild(functionId: string, deploymentId: string): Promise<Models.Build> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/build'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Params = {};

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
     * Download deployment
     *
     * Get a Deployment&#039;s contents by its unique ID. This endpoint supports range requests for partial or streaming file download.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeploymentDownload(functionId: string, deploymentId: string): Promise<ArrayBuffer> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }

    /**
     * List executions
     *
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
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
        const payload: Params = {};

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
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Create execution
     *
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {Payload} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {ExecutionMethod} method
     * @param {object} headers
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createExecution(functionId: string, body?: Payload, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Params = {};

        if (typeof body !== 'undefined') {
            payload['body'] = body.toString();
        }
        if (typeof async !== 'undefined') {
            payload['async'] = async.toString();
        }
        if (typeof xpath !== 'undefined') {
            payload['path'] = xpath;
        }
        if (typeof method !== 'undefined') {
            payload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            payload['headers'] = headers.toString();
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'multipart/form-data',
            },
            payload,
            'json'
        );
    }

    /**
     * Get execution
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
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Delete execution
     *
     * Delete a function execution by its unique ID.

     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteExecution(functionId: string, executionId: string): Promise<Response> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        const payload: Params = {};

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
     * List variables
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
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Create variable
     *
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
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
        const payload: Params = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
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
     * Get variable
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
        const payload: Params = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }

    /**
     * Update variable
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
        const payload: Params = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
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
     * Delete variable
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
        const payload: Params = {};

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