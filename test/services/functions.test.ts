import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Functions } from "../../src/services/functions.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Functions service', () => {
    const client = new Client();
    const functions = new Functions(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'functions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.list(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'execute': [],
            'name': 'My Function',
            'enabled': true,
            'live': true,
            'logging': true,
            'runtime': 'python-3.8',
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'scopes': [],
            'vars': [],
            'events': [],
            'schedule': '5 4 * * *',
            'timeout': 300,
            'entrypoint': 'index.js',
            'commands': 'npm install',
            'version': 'v2',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'functions/helloWorld',
            'providerSilentMode': true,
            'specification': 's-1vcpu-512mb',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.create(
            '<FUNCTION_ID>',
            '<NAME>',
            'node-14.5',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listRuntimes()', async () => {
        const data = {
            'total': 5,
            'runtimes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.listRuntimes(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listSpecifications()', async () => {
        const data = {
            'total': 5,
            'specifications': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.listSpecifications(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'execute': [],
            'name': 'My Function',
            'enabled': true,
            'live': true,
            'logging': true,
            'runtime': 'python-3.8',
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'scopes': [],
            'vars': [],
            'events': [],
            'schedule': '5 4 * * *',
            'timeout': 300,
            'entrypoint': 'index.js',
            'commands': 'npm install',
            'version': 'v2',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'functions/helloWorld',
            'providerSilentMode': true,
            'specification': 's-1vcpu-512mb',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.get(
            '<FUNCTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method update()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'execute': [],
            'name': 'My Function',
            'enabled': true,
            'live': true,
            'logging': true,
            'runtime': 'python-3.8',
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'scopes': [],
            'vars': [],
            'events': [],
            'schedule': '5 4 * * *',
            'timeout': 300,
            'entrypoint': 'index.js',
            'commands': 'npm install',
            'version': 'v2',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'functions/helloWorld',
            'providerSilentMode': true,
            'specification': 's-1vcpu-512mb',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.update(
            '<FUNCTION_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await functions.delete(
            '<FUNCTION_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method updateFunctionDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'execute': [],
            'name': 'My Function',
            'enabled': true,
            'live': true,
            'logging': true,
            'runtime': 'python-3.8',
            'deploymentId': '5e5ea5c16897e',
            'deploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentId': '5e5ea5c16897e',
            'latestDeploymentCreatedAt': '2020-10-15T06:38:00.000+00:00',
            'latestDeploymentStatus': 'ready',
            'scopes': [],
            'vars': [],
            'events': [],
            'schedule': '5 4 * * *',
            'timeout': 300,
            'entrypoint': 'index.js',
            'commands': 'npm install',
            'version': 'v2',
            'installationId': '6m40at4ejk5h2u9s1hboo',
            'providerRepositoryId': 'appwrite',
            'providerBranch': 'main',
            'providerRootDirectory': 'functions/helloWorld',
            'providerSilentMode': true,
            'specification': 's-1vcpu-512mb',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.updateFunctionDeployment(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listDeployments()', async () => {
        const data = {
            'total': 5,
            'deployments': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.listDeployments(
            '<FUNCTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createDeployment(
            '<FUNCTION_ID>',
            InputFile.fromBuffer(new Uint8Array(0), 'image.png'),
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createDuplicateDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createDuplicateDeployment(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTemplateDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createTemplateDeployment(
            '<FUNCTION_ID>',
            '<REPOSITORY>',
            '<OWNER>',
            '<ROOT_DIRECTORY>',
            '<VERSION>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createVcsDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createVcsDeployment(
            '<FUNCTION_ID>',
            'branch',
            '<REFERENCE>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getDeployment()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.getDeployment(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteDeployment()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await functions.deleteDeployment(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method getDeploymentDownload()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await functions.getDeploymentDownload(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method updateDeploymentStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'type': 'vcs',
            'resourceId': '5e5ea6g16897e',
            'resourceType': 'functions',
            'entrypoint': 'index.js',
            'sourceSize': 128,
            'buildSize': 128,
            'totalSize': 128,
            'buildId': '5e5ea5c16897e',
            'activate': true,
            'screenshotLight': '5e5ea5c16897e',
            'screenshotDark': '5e5ea5c16897e',
            'status': 'ready',
            'buildLogs': 'Compiling source files...',
            'buildDuration': 128,
            'providerRepositoryName': 'database',
            'providerRepositoryOwner': 'utopia',
            'providerRepositoryUrl': 'https://github.com/vermakhushboo/g4-node-function',
            'providerBranch': '0.7.x',
            'providerCommitHash': '7c3f25d',
            'providerCommitAuthorUrl': 'https://github.com/vermakhushboo',
            'providerCommitAuthor': 'Khushboo Verma',
            'providerCommitMessage': 'Update index.js',
            'providerCommitUrl': 'https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb',
            'providerBranchUrl': 'https://github.com/vermakhushboo/appwrite/tree/0.7.x',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.updateDeploymentStatus(
            '<FUNCTION_ID>',
            '<DEPLOYMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listExecutions()', async () => {
        const data = {
            'total': 5,
            'executions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.listExecutions(
            '<FUNCTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createExecution()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'functionId': '5e5ea6g16897e',
            'deploymentId': '5e5ea5c16897e',
            'trigger': 'http',
            'status': 'processing',
            'requestMethod': 'GET',
            'requestPath': '/articles?id=5',
            'requestHeaders': [],
            'responseStatusCode': 200,
            'responseBody': '',
            'responseHeaders': [],
            'logs': '',
            'errors': '',
            'duration': 0.4,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createExecution(
            '<FUNCTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getExecution()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'functionId': '5e5ea6g16897e',
            'deploymentId': '5e5ea5c16897e',
            'trigger': 'http',
            'status': 'processing',
            'requestMethod': 'GET',
            'requestPath': '/articles?id=5',
            'requestHeaders': [],
            'responseStatusCode': 200,
            'responseBody': '',
            'responseHeaders': [],
            'logs': '',
            'errors': '',
            'duration': 0.4,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.getExecution(
            '<FUNCTION_ID>',
            '<EXECUTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteExecution()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await functions.deleteExecution(
            '<FUNCTION_ID>',
            '<EXECUTION_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listVariables()', async () => {
        const data = {
            'total': 5,
            'variables': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.listVariables(
            '<FUNCTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.createVariable(
            '<FUNCTION_ID>',
            '<KEY>',
            '<VALUE>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.getVariable(
            '<FUNCTION_ID>',
            '<VARIABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateVariable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'API_KEY',
            'value': 'myPa\$\$word1',
            'secret': true,
            'resourceType': 'function',
            'resourceId': 'myAwesomeFunction',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await functions.updateVariable(
            '<FUNCTION_ID>',
            '<VARIABLE_ID>',
            '<KEY>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteVariable()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await functions.deleteVariable(
            '<FUNCTION_ID>',
            '<VARIABLE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    })
