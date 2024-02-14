import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Account } from "../../src/services/account.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Account service', () => {
    const client = new Client();
    const account = new Account(client);

    afterEach(() => restore())

    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.get(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateEmail(
            'email@example.com',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listIdentities()', async () => {
        const data = {
            'total': 5,
            'identities': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.listIdentities(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteIdentity()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await account.deleteIdentity(
            '[IDENTITY_ID]',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.listLogs(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateName()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateName(
            '[NAME]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePassword()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updatePassword(
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePhone()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updatePhone(
            '+12065550100',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getPrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.getPrefs(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePrefs()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updatePrefs(
            {},
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createRecovery()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.createRecovery(
            'email@example.com',
            'https://example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateRecovery()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateRecovery(
            '[USER_ID]',
            '[SECRET]',
            'password',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listSessions()', async () => {
        const data = {
            'total': 5,
            'sessions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.listSessions(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSessions()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await account.deleteSessions(
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method getSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.getSession(
            '[SESSION_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5bb8c16897e',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'provider': 'email',
            'providerUid': 'user@example.com',
            'providerAccessToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'providerAccessTokenExpiry': '2020-10-15T06:38:00.000+00:00',
            'providerRefreshToken': 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
            'ip': '127.0.0.1',
            'osCode': 'Mac',
            'osName': 'Mac',
            'osVersion': 'Mac',
            'clientType': 'browser',
            'clientCode': 'CM',
            'clientName': 'Chrome Mobile iOS',
            'clientVersion': '84.0',
            'clientEngine': 'WebKit',
            'clientEngineVersion': '605.1.15',
            'deviceName': 'smartphone',
            'deviceBrand': 'Google',
            'deviceModel': 'Nexus 5',
            'countryCode': 'US',
            'countryName': 'United States',
            'current': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateSession(
            '[SESSION_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSession()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await account.deleteSession(
            '[SESSION_ID]',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method updateStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'John Doe',
            'registration': '2020-10-15T06:38:00.000+00:00',
            'status': true,
            'labels': [],
            'passwordUpdate': '2020-10-15T06:38:00.000+00:00',
            'email': 'john@appwrite.io',
            'phone': '+4930901820',
            'emailVerification': true,
            'phoneVerification': true,
            'prefs': {},
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateStatus(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.createVerification(
            'https://example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updateVerification(
            '[USER_ID]',
            '[SECRET]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createPhoneVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.createPhoneVerification(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePhoneVerification()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await account.updatePhoneVerification(
            '[USER_ID]',
            '[SECRET]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
