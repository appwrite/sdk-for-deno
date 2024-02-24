import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Storage } from "../../src/services/storage.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Storage service', () => {
    const client = new Client();
    const storage = new Storage(client);

    afterEach(() => restore())

    
    test('test method listBuckets()', async () => {
        const data = {
            'total': 5,
            'buckets': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.listBuckets(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.createBucket(
            '<BUCKET_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.getBucket(
            '<BUCKET_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateBucket()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'fileSecurity': true,
            'name': 'Documents',
            'enabled': true,
            'maximumFileSize': 100,
            'allowedFileExtensions': [],
            'compression': 'gzip',
            'encryption': true,
            'antivirus': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.updateBucket(
            '<BUCKET_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteBucket()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await storage.deleteBucket(
            '<BUCKET_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listFiles()', async () => {
        const data = {
            'total': 5,
            'files': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.listFiles(
            '<BUCKET_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.createFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
            InputFile.fromBuffer(new Uint8Array(0), 'image.png'),
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.getFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateFile()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'bucketId': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'name': 'Pink.png',
            'signature': '5d529fd02b544198ae075bd57c1762bb',
            'mimeType': 'image/png',
            'sizeOriginal': 17890,
            'chunksTotal': 17890,
            'chunksUploaded': 17890,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await storage.updateFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteFile()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await storage.deleteFile(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method getFileDownload()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await storage.getFileDownload(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getFilePreview()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await storage.getFilePreview(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getFileView()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await storage.getFileView(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    })
