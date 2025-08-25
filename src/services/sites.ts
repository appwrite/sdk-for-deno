import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { Framework } from '../enums/framework.ts';
import { BuildRuntime } from '../enums/build-runtime.ts';
import { Adapter } from '../enums/adapter.ts';
import { VCSDeploymentType } from '../enums/vcs-deployment-type.ts';
import { DeploymentDownloadType } from '../enums/deployment-download-type.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Sites extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get a list of all the project's sites. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list(queries?: string[], search?: string): Promise<Models.SiteList> {
        const apiPath = '/sites';
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
     * Create a new site.
     *
     * @param {string} siteId
     * @param {string} name
     * @param {Framework} framework
     * @param {BuildRuntime} buildRuntime
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {number} timeout
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @param {Adapter} adapter
     * @param {string} installationId
     * @param {string} fallbackFile
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create(siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof framework === 'undefined') {
            throw new AppwriteException('Missing required parameter: "framework"');
        }

        if (typeof buildRuntime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildRuntime"');
        }

        const apiPath = '/sites';
        const payload: Payload = {};

        if (typeof siteId !== 'undefined') {
            payload['siteId'] = siteId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
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
     * Get a list of all frameworks that are currently available on the server
     * instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listFrameworks(): Promise<Models.FrameworkList> {
        const apiPath = '/sites/frameworks';
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
     * List allowed site specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSpecifications(): Promise<Models.SpecificationList> {
        const apiPath = '/sites/specifications';
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
     * Get a site by its unique ID.
     *
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(siteId: string): Promise<Models.Site> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Update site by its unique ID.
     *
     * @param {string} siteId
     * @param {string} name
     * @param {Framework} framework
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {number} timeout
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @param {BuildRuntime} buildRuntime
     * @param {Adapter} adapter
     * @param {string} fallbackFile
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async update(siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof framework === 'undefined') {
            throw new AppwriteException('Missing required parameter: "framework"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof framework !== 'undefined') {
            payload['framework'] = framework;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
        }
        if (typeof buildRuntime !== 'undefined') {
            payload['buildRuntime'] = buildRuntime;
        }
        if (typeof adapter !== 'undefined') {
            payload['adapter'] = adapter;
        }
        if (typeof fallbackFile !== 'undefined') {
            payload['fallbackFile'] = fallbackFile;
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
     * Delete a site by its unique ID.
     *
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(siteId: string): Promise<Response> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}'.replace('{siteId}', siteId);
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
     * Update the site active deployment. Use this endpoint to switch the code
     * deployment that should be used when visitor opens your site.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployment'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
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
     * Get a list of all the site's code deployments. You can use the query params
     * to filter your results.
     *
     * @param {string} siteId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listDeployments(siteId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/deployments'.replace('{siteId}', siteId);
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
     * Create a new site code deployment. Use this endpoint to upload a new
     * version of your site code. To activate your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment ID.
     *
     * @param {string} siteId
     * @param {InputFile} code
     * @param {boolean} activate
     * @param {string} installCommand
     * @param {string} buildCommand
     * @param {string} outputDirectory
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDeployment(siteId: string, code: InputFile, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }

        const apiPath = '/sites/{siteId}/deployments'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof installCommand !== 'undefined') {
            payload['installCommand'] = installCommand;
        }
        if (typeof buildCommand !== 'undefined') {
            payload['buildCommand'] = buildCommand;
        }
        if (typeof outputDirectory !== 'undefined') {
            payload['outputDirectory'] = outputDirectory;
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
     * Create a new build for an existing site deployment. This endpoint allows
     * you to rebuild a deployment with the updated site configuration, including
     * its commands and output directory if they have been modified. The build
     * process will be queued and executed asynchronously. The original
     * deployment's code will be preserved and used for the new build.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/duplicate'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
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
     * Create a deployment based on a template.
     * 
     * Use this endpoint with combination of
     * [listTemplates](https://appwrite.io/docs/server/sites#listTemplates) to
     * find the template details.
     *
     * @param {string} siteId
     * @param {string} repository
     * @param {string} owner
     * @param {string} rootDirectory
     * @param {string} version
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof repository === 'undefined') {
            throw new AppwriteException('Missing required parameter: "repository"');
        }

        if (typeof owner === 'undefined') {
            throw new AppwriteException('Missing required parameter: "owner"');
        }

        if (typeof rootDirectory === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rootDirectory"');
        }

        if (typeof version === 'undefined') {
            throw new AppwriteException('Missing required parameter: "version"');
        }

        const apiPath = '/sites/{siteId}/deployments/template'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof repository !== 'undefined') {
            payload['repository'] = repository;
        }
        if (typeof owner !== 'undefined') {
            payload['owner'] = owner;
        }
        if (typeof rootDirectory !== 'undefined') {
            payload['rootDirectory'] = rootDirectory;
        }
        if (typeof version !== 'undefined') {
            payload['version'] = version;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
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
     * Create a deployment when a site is connected to VCS.
     * 
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} siteId
     * @param {VCSDeploymentType} type
     * @param {string} reference
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVcsDeployment(siteId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        if (typeof reference === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reference"');
        }

        const apiPath = '/sites/{siteId}/deployments/vcs'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof reference !== 'undefined') {
            payload['reference'] = reference;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
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
     * Get a site deployment by its unique ID.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Delete a site deployment by its unique ID.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteDeployment(siteId: string, deploymentId: string): Promise<Response> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
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
     * Get a site deployment content by its unique ID. The endpoint response
     * return with a 'Content-Disposition: attachment' header that tells the
     * browser to start downloading the file to user downloads directory.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @param {DeploymentDownloadType} type
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getDeploymentDownload(siteId: string, deploymentId: string, type?: DeploymentDownloadType): Promise<ArrayBuffer> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}/download'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Cancel an ongoing site deployment build. If the build is already in
     * progress, it will be stopped and marked as canceled. If the build hasn't
     * started yet, it will be marked as canceled without executing. You cannot
     * cancel builds that have already completed (status 'ready') or failed. The
     * response includes the final build status and details.
     *
     * @param {string} siteId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/sites/{siteId}/deployments/{deploymentId}/status'.replace('{siteId}', siteId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

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
     * Get a list of all site logs. You can use the query params to filter your
     * results.
     *
     * @param {string} siteId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(siteId: string, queries?: string[]): Promise<Models.ExecutionList> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/logs'.replace('{siteId}', siteId);
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
     * Get a site request log by its unique ID.
     *
     * @param {string} siteId
     * @param {string} logId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getLog(siteId: string, logId: string): Promise<Models.Execution> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof logId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "logId"');
        }

        const apiPath = '/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Delete a site log by its unique ID.
     *
     * @param {string} siteId
     * @param {string} logId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteLog(siteId: string, logId: string): Promise<Response> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof logId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "logId"');
        }

        const apiPath = '/sites/{siteId}/logs/{logId}'.replace('{siteId}', siteId).replace('{logId}', logId);
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
     * Get a list of all variables of a specific site.
     *
     * @param {string} siteId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listVariables(siteId: string): Promise<Models.VariableList> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        const apiPath = '/sites/{siteId}/variables'.replace('{siteId}', siteId);
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
     * Create a new site variable. These variables can be accessed during build
     * and runtime (server-side rendering) as environment variables.
     *
     * @param {string} siteId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }

        const apiPath = '/sites/{siteId}/variables'.replace('{siteId}', siteId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Get a variable by its unique ID.
     *
     * @param {string} siteId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getVariable(siteId: string, variableId: string): Promise<Models.Variable> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
     * Update variable by its unique ID.
     *
     * @param {string} siteId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVariable(siteId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
        const payload: Payload = {};

        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
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
     * Delete a variable by its unique ID.
     *
     * @param {string} siteId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteVariable(siteId: string, variableId: string): Promise<Response> {
        if (typeof siteId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "siteId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/sites/{siteId}/variables/{variableId}'.replace('{siteId}', siteId).replace('{variableId}', variableId);
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
