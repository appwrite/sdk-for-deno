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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.create(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createArgon2User(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createBcryptUser(
            '<USER_ID>',
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
            '<IDENTITY_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createMD5User(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createPHPassUser(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createScryptUser(
            '<USER_ID>',
            'email@example.com',
            'password',
            '<PASSWORD_SALT>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createScryptModifiedUser(
            '<USER_ID>',
            'email@example.com',
            'password',
            '<PASSWORD_SALT>',
            '<PASSWORD_SALT_SEPARATOR>',
            '<PASSWORD_SIGNER_KEY>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createSHAUser(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.get(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.delete(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateEmail(
            '<USER_ID>',
            'email@example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createJWT()', async () => {
        const data = {
            'jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createJWT(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateLabels(
            '<USER_ID>',
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
            '<USER_ID>',
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
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMfa()', async () => {
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateMfa(
            '<USER_ID>',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteMfaAuthenticator()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteMfaAuthenticator(
            '<USER_ID>',
            'totp',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listMfaFactors()', async () => {
        const data = {
            'totp': true,
            'phone': true,
            'email': true,
            'recoveryCode': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.listMfaFactors(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.getMfaRecoveryCodes(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateMfaRecoveryCodes(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createMfaRecoveryCodes()', async () => {
        const data = {
            'recoveryCodes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createMfaRecoveryCodes(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateName(
            '<USER_ID>',
            '<NAME>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updatePassword(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updatePhone(
            '<USER_ID>',
            '+12065550100',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getPrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.getPrefs(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updatePrefs(
            '<USER_ID>',
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
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSession()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
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
            'current': true,
            'factors': [],
            'secret': '5e5bb8c16897e',
            'mfaUpdatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createSession(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSessions()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteSessions(
            '<USER_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSession()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteSession(
            '<USER_ID>',
            '<SESSION_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateStatus(
            '<USER_ID>',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listTargets()', async () => {
        const data = {
            'total': 5,
            'targets': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.listTargets(
            '<USER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTarget()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Apple iPhone 12',
            'userId': '259125845563242502',
            'providerType': 'email',
            'identifier': 'token',
            'expired': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createTarget(
            '<USER_ID>',
            '<TARGET_ID>',
            'email',
            '<IDENTIFIER>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getTarget()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Apple iPhone 12',
            'userId': '259125845563242502',
            'providerType': 'email',
            'identifier': 'token',
            'expired': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.getTarget(
            '<USER_ID>',
            '<TARGET_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTarget()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Apple iPhone 12',
            'userId': '259125845563242502',
            'providerType': 'email',
            'identifier': 'token',
            'expired': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateTarget(
            '<USER_ID>',
            '<TARGET_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteTarget()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await users.deleteTarget(
            '<USER_ID>',
            '<TARGET_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method createToken()', async () => {
        const data = {
            '\$id': 'bb8ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c168bb8',
            'secret': '',
            'expire': '2020-10-15T06:38:00.000+00:00',
            'phrase': 'Golden Fox',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.createToken(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updateEmailVerification(
            '<USER_ID>',
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
            'mfa': true,
            'prefs': {},
            'targets': [],
            'accessedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await users.updatePhoneVerification(
            '<USER_ID>',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
