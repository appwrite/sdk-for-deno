import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { TablesDb } from "../../src/services/tablesDb.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('TablesDb service', () => {
    const client = new Client();
    const tablesDb = new TablesDb(client);

    afterEach(() => restore())

    
    test('test method list()', async () => {
        const data = {
            'total': 5,
            'databases': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.list(
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
            'enabled': true,
            'type': 'legacy',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.create(
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
            'enabled': true,
            'type': 'legacy',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.get(
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
            'enabled': true,
            'type': 'legacy',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.update(
            '<DATABASE_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.delete(
            '<DATABASE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listTables()', async () => {
        const data = {
            'total': 5,
            'tables': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.listTables(
            '<DATABASE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.getTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTable()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],
            'databaseId': '5e5ea5c16897e',
            'name': 'My Table',
            'enabled': true,
            'rowSecurity': true,
            'columns': [],
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteTable()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.deleteTable(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listColumns()', async () => {
        const data = {
            'total': 5,
            'columns': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.listColumns(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createBooleanColumn()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateBooleanColumn()', async () => {
        const data = {
            'key': 'isEnabled',
            'type': 'boolean',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateBooleanColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createDatetimeColumn()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'datetime',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateDatetimeColumn()', async () => {
        const data = {
            'key': 'birthDay',
            'type': 'datetime',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'datetime',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateDatetimeColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createEmailColumn()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEmailColumn()', async () => {
        const data = {
            'key': 'userEmail',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateEmailColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            'email@example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createEnumColumn()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'elements': [],
            'format': 'enum',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            [],
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEnumColumn()', async () => {
        const data = {
            'key': 'status',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'elements': [],
            'format': 'enum',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateEnumColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            [],
            true,
            '<DEFAULT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createFloatColumn()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateFloatColumn()', async () => {
        const data = {
            'key': 'percentageCompleted',
            'type': 'double',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateFloatColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            1.0,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIntegerColumn()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateIntegerColumn()', async () => {
        const data = {
            'key': 'count',
            'type': 'integer',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateIntegerColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            1,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIpColumn()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'ip',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateIpColumn()', async () => {
        const data = {
            'key': 'ipAddress',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'ip',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateIpColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createRelationshipColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedTable': 'table',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<RELATED_TABLE_ID>',
            'oneToOne',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createStringColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            1,
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateStringColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'size': 128,};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateStringColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            '<DEFAULT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createUrlColumn()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'url',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateUrlColumn()', async () => {
        const data = {
            'key': 'githubUrl',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'format': 'url',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateUrlColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            true,
            'https://example.com',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getColumn()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.getColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteColumn()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.deleteColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method updateRelationshipColumn()', async () => {
        const data = {
            'key': 'fullName',
            'type': 'string',
            'status': 'available',
            'error': 'string',
            'required': true,
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'relatedTable': 'table',
            'relationType': 'oneToOne|oneToMany|manyToOne|manyToMany',
            'twoWay': true,
            'twoWayKey': 'string',
            'onDelete': 'restrict|cascade|setNull',
            'side': 'parent|child',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateRelationshipColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listIndexes()', async () => {
        const data = {
            'total': 5,
            'indexes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.listIndexes(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'columns': [],
            'lengths': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
            'key',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getIndex()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'key': 'index1',
            'type': 'primary',
            'status': 'available',
            'error': 'string',
            'columns': [],
            'lengths': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.getIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteIndex()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.deleteIndex(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.listRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            {},
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.createRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method upsertRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.upsertRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            [],
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteRows()', async () => {
        const data = {
            'total': 5,
            'rows': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.deleteRows(
            '<DATABASE_ID>',
            '<TABLE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.getRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method upsertRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.upsertRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateRow()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.updateRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteRow()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await tablesDb.deleteRow(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method decrementRowColumn()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.decrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method incrementRowColumn()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$sequence': 1,
            '\$tableId': '5e5ea5c15117e',
            '\$databaseId': '5e5ea5c15117e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            '\$permissions': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await tablesDb.incrementRowColumn(
            '<DATABASE_ID>',
            '<TABLE_ID>',
            '<ROW_ID>',
            '',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
