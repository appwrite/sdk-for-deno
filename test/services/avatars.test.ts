import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Avatars } from "../../src/services/avatars.ts";
import {Client} from "../../src/client.ts";
import {Payload} from "../../src/payload.ts"

describe('Avatars service', () => {
    const client = new Client();
    const avatars = new Avatars(client);

    afterEach(() => restore())

    
    test('test method getBrowser()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getBrowser(
            'aa',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getCreditCard()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getCreditCard(
            'amex',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getFavicon()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getFavicon(
            'https://example.com',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getFlag()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getFlag(
            'af',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getImage()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getImage(
            'https://example.com',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getInitials()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getInitials(
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    
    test('test method getQR()', async () => {
        const data = new Uint8Array(0);

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data.buffer)));

        const response = await avatars.getQR(
            '<TEXT>',
        );

        const buffer = await response.arrayBuffer();
        assertEquals(buffer.byteLength, 0);
        stubbedFetch.restore();
    });

    })
