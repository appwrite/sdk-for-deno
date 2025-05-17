import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Tokens } from "../../src/services/tokens.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Tokens service', () => {
    const client = new Client();
    const tokens = new Tokens(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'tokens': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tokens.list(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createFileToken()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'resourceId': '5e5ea5c168bb8:5e5ea5c168bb8',
            'resourceType': 'files',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tokens.createFileToken(
            '<BUCKET_ID>',
            '<FILE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method get()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'resourceId': '5e5ea5c168bb8:5e5ea5c168bb8',
            'resourceType': 'files',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tokens.get(
            '<TOKEN_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method update()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'resourceId': '5e5ea5c168bb8:5e5ea5c168bb8',
            'resourceType': 'files',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tokens.update(
            '<TOKEN_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tokens.delete(
            '<TOKEN_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    })
