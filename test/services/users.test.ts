import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Users } from "../../src/services/users.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Users service', () => {
    const client = new Client();
    const users = new Users(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'users': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.list(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method create()', async () => {
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

        const response = await users.create(
            '[USER_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createArgon2User()', async () => {
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

        const response = await users.createArgon2User(
            '[USER_ID]',
            'email@example.com',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createBcryptUser()', async () => {
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

        const response = await users.createBcryptUser(
            '[USER_ID]',
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

        const response = await users.listIdentities(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteIdentity()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteIdentity(
            '[IDENTITY_ID]',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method createMD5User()', async () => {
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

        const response = await users.createMD5User(
            '[USER_ID]',
            'email@example.com',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createPHPassUser()', async () => {
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

        const response = await users.createPHPassUser(
            '[USER_ID]',
            'email@example.com',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createScryptUser()', async () => {
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

        const response = await users.createScryptUser(
            '[USER_ID]',
            'email@example.com',
            'password',
            '[PASSWORD_SALT]',
            1,
            1,
            1,
            1,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createScryptModifiedUser()', async () => {
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

        const response = await users.createScryptModifiedUser(
            '[USER_ID]',
            'email@example.com',
            'password',
            '[PASSWORD_SALT]',
            '[PASSWORD_SALT_SEPARATOR]',
            '[PASSWORD_SIGNER_KEY]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSHAUser()', async () => {
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

        const response = await users.createSHAUser(
            '[USER_ID]',
            'email@example.com',
            'password',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
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

        const response = await users.get(
            '[USER_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.delete(
            '[USER_ID]',
        );

        const text = await response.text();
        assertEquals(text, data);
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

        const response = await users.updateEmail(
            '[USER_ID]',
            'email@example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateLabels()', async () => {
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

        const response = await users.updateLabels(
            '[USER_ID]',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.listLogs(
            '[USER_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listMemberships()', async () => {
        const data = {
            'total': 5,
            'memberships': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.listMemberships(
            '[USER_ID]',
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

        const response = await users.updateName(
            '[USER_ID]',
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

        const response = await users.updatePassword(
            '[USER_ID]',
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

        const response = await users.updatePhone(
            '[USER_ID]',
            '+12065550100',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getPrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.getPrefs(
            '[USER_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updatePrefs(
            '[USER_ID]',
            {},
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listSessions()', async () => {
        const data = {
            'total': 5,
            'sessions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.listSessions(
            '[USER_ID]',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSessions()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteSessions(
            '[USER_ID]',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSession()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteSession(
            '[USER_ID]',
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

        const response = await users.updateStatus(
            '[USER_ID]',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEmailVerification()', async () => {
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

        const response = await users.updateEmailVerification(
            '[USER_ID]',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePhoneVerification()', async () => {
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

        const response = await users.updatePhoneVerification(
            '[USER_ID]',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
