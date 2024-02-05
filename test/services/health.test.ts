import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Health } from "../../src/services/health.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Health service', () => {
    const client = new Client();
    const health = new Health(client);

    afterEach(() => restore())

    
    test('test method get()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.get(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getAntivirus()', async () => {
        const data = {
            'version': '1.0.0',
            'status': 'online',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getAntivirus(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getCache()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getCache(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getDB()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getDB(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getPubSub()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getPubSub(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueue()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueue(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueBuilds()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueBuilds(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueCertificates()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueCertificates(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueDatabases()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueDatabases(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueDeletes()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueDeletes(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueFunctions()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueFunctions(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueLogs()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueLogs(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueMails()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueMails(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueMessaging()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueMessaging(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueMigrations()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueMigrations(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getQueueWebhooks()', async () => {
        const data = {
            'size': 8,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getQueueWebhooks(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getStorageLocal()', async () => {
        const data = {
            'name': 'database',
            'ping': 128,
            'status': 'pass',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getStorageLocal(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getTime()', async () => {
        const data = {
            'remoteTime': 1639490751,
            'localTime': 1639490844,
            'diff': 93,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await health.getTime(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
