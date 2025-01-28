import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Locale extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get user locale
     *
     * Get the current user location based on IP. Returns an object with user
     * country code, country name, continent name, continent code, ip address and
     * suggested currency. You can use the locale header to get the data in a
     * supported language.
     * 
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get(): Promise<Models.Locale> {
        const apiPath = '/locale';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List locale codes
     *
     * List of all locale codes in [ISO
     * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCodes(): Promise<Models.LocaleCodeList> {
        const apiPath = '/locale/codes';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List continents
     *
     * List of all continents. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listContinents(): Promise<Models.ContinentList> {
        const apiPath = '/locale/continents';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List countries
     *
     * List of all countries. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCountries(): Promise<Models.CountryList> {
        const apiPath = '/locale/countries';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List EU countries
     *
     * List of all countries that are currently members of the EU. You can use the
     * locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCountriesEU(): Promise<Models.CountryList> {
        const apiPath = '/locale/countries/eu';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List countries phone codes
     *
     * List of all countries phone codes. You can use the locale header to get the
     * data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCountriesPhones(): Promise<Models.PhoneList> {
        const apiPath = '/locale/countries/phones';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List currencies
     *
     * List of all currencies, including currency symbol, name, plural, and
     * decimal digits for all major and minor currencies. You can use the locale
     * header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listCurrencies(): Promise<Models.CurrencyList> {
        const apiPath = '/locale/currencies';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List languages
     *
     * List of all languages classified by ISO 639-1 including 2-letter code, name
     * in English, and name in the respective language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLanguages(): Promise<Models.LanguageList> {
        const apiPath = '/locale/languages';
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
}
