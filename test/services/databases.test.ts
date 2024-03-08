import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Databases } from "../../src/services/databases.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Databases service', () => {
    const client = new Client();
    const databases = new Databases(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'databases': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.list(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method create()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.create(
            '<DATABASE_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method get()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.get(
            '<DATABASE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method update()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            'name': 'My Database',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'enabled': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.update(
            '<DATABASE_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.delete(
            '<DATABASE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listCollections()', async () => {
        const data = {
            'total': 5,
            'collections': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.listCollections(
            '<DATABASE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.getCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateCollection()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Collection',
            'enabled': true,
            'documentSecurity': true,
            'attributes': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteCollection()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.deleteCollection(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listAttributes()', async () => {
        const data = {
            'total': 5,
            'attributes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.listAttributes(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createBooleanAttribute()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createBooleanAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateBooleanAttribute()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateBooleanAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createDatetimeAttribute()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'datetime',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createDatetimeAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateDatetimeAttribute()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'datetime',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateDatetimeAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createEmailAttribute()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createEmailAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEmailAttribute()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateEmailAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            'email@example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createEnumAttribute()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'elements': [],
            'format': 'enum',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createEnumAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            [],
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEnumAttribute()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'elements': [],
            'format': 'enum',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateEnumAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            [],
            true,
            '<DEFAULT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createFloatAttribute()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createFloatAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateFloatAttribute()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateFloatAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            1.0,
            1.0,
            1.0,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIntegerAttribute()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createIntegerAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateIntegerAttribute()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateIntegerAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            1,
            1,
            1,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIpAttribute()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'ip',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createIpAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateIpAttribute()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'ip',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateIpAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createRelationshipAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'relatedCollection': 'collection',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createRelationshipAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<RELATED_COLLECTION_ID>',
            'oneToOne',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createStringAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'size': 128,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createStringAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            1,
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateStringAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'size': 128,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateStringAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createUrlAttribute()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'url',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createUrlAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateUrlAttribute()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'format': 'url',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateUrlAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            true,
            'https://example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getAttribute()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.getAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteAttribute()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.deleteAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method updateRelationshipAttribute()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            'relatedCollection': 'collection',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateRelationshipAttribute(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listDocuments()', async () => {
        const data = {
            'total': 5,
            'documents': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
            {},
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.getDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateDocument()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$collectionId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.updateDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteDocument()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.deleteDocument(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '<DOCUMENT_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listIndexes()', async () => {
        const data = {
            'total': 5,
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.listIndexes(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIndex()', async () => {
        const data = {
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.createIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
            'key',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getIndex()', async () => {
        const data = {
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'attributes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await databases.getIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteIndex()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await databases.deleteIndex(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    })
