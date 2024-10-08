import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Teams } from "../../src/services/teams.ts";
import {Client} from "../../src/client.ts";
import {Payload} from "../../src/payload.ts"

describe('Teams service', () => {
    const client = new Client();
    const teams = new Teams(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'teams': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.list(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.create(
            '<TEAM_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.get(
            '<TEAM_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateName()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'VIP',
            'total': 7,
            'prefs': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.updateName(
            '<TEAM_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await teams.delete(
            '<TEAM_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listMemberships()', async () => {
        const data = {
            'total': 5,
            'memberships': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.listMemberships(
            '<TEAM_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.createMembership(
            '<TEAM_ID>',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.getMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMembership()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.updateMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteMembership()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await teams.deleteMembership(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMembershipStatus()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'userId': '5e5ea5c16897e',
            'userName': 'John Doe',
            'userEmail': 'john@appwrite.io',
            'teamId': '5e5ea5c16897e',
            'teamName': 'VIP',
            'invited': '2020-10-15T06:38:00.000+00:00',
            'joined': '2020-10-15T06:38:00.000+00:00',
            'confirm': true,
            'mfa': true,
            'roles': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.updateMembershipStatus(
            '<TEAM_ID>',
            '<MEMBERSHIP_ID>',
            '<USER_ID>',
            '<SECRET>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getPrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.getPrefs(
            '<TEAM_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePrefs()', async () => {
        const data = {};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await teams.updatePrefs(
            '<TEAM_ID>',
            {},
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
