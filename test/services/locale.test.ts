import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Locale } from "../../src/services/locale.ts";
import {Client} from "../../src/client.ts";
import {Payload} from "../../src/payload.ts"

describe('Locale service', () => {
    const client = new Client();
    const locale = new Locale(client);

    afterEach(() => restore())

    
    test('test method get()', async () => {
        const data = {
            'ip': '127.0.0.1',
            'countryCode': 'US',
            'country': 'United States',
            'continentCode': 'NA',
            'continent': 'North America',
            'eu': true,
            'currency': 'USD',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.get(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listCodes()', async () => {
        const data = {
            'total': 5,
            'localeCodes': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listCodes(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listContinents()', async () => {
        const data = {
            'total': 5,
            'continents': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listContinents(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listCountries()', async () => {
        const data = {
            'total': 5,
            'countries': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listCountries(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listCountriesEU()', async () => {
        const data = {
            'total': 5,
            'countries': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listCountriesEU(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listCountriesPhones()', async () => {
        const data = {
            'total': 5,
            'phones': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listCountriesPhones(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listCurrencies()', async () => {
        const data = {
            'total': 5,
            'currencies': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listCurrencies(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listLanguages()', async () => {
        const data = {
            'total': 5,
            'languages': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await locale.listLanguages(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    })
