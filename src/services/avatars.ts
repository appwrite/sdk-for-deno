import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { Browser } from '../enums/browser.ts';
import { CreditCard } from '../enums/credit-card.ts';
import { Flag } from '../enums/flag.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Avatars extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get browser icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user [GET
     * /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions)
     * endpoint. Use width, height and quality arguments to change the output
     * settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     *
     * @param {Browser} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getBrowser(code: Browser, width?: number, height?: number, quality?: number): Promise<ArrayBuffer> {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/browsers/{code}'.replace('{code}', code);
        const payload: Payload = {};

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get credit card icon
     *
     * The credit card endpoint will return you the icon of the credit card
     * provider you need. Use width, height and quality arguments to change the
     * output settings.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {CreditCard} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getCreditCard(code: CreditCard, width?: number, height?: number, quality?: number): Promise<ArrayBuffer> {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/credit-cards/{code}'.replace('{code}', code);
        const payload: Payload = {};

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     * 
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFavicon(url: string): Promise<ArrayBuffer> {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        const apiPath = '/avatars/favicon';
        const payload: Payload = {};

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get country flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings. Country codes
     * follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {Flag} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getFlag(code: Flag, width?: number, height?: number, quality?: number): Promise<ArrayBuffer> {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/flags/{code}'.replace('{code}', code);
        const payload: Payload = {};

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size
     * you want. This endpoint is very useful if you need to crop and display
     * remote images in your app or in case you want to make sure a 3rd party
     * image is properly served using a TLS protocol.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 400x400px.
     * 
     * This endpoint does not follow HTTP redirects.
     *
     * @param {string} url
     * @param {number} width
     * @param {number} height
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getImage(url: string, width?: number, height?: number): Promise<ArrayBuffer> {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        const apiPath = '/avatars/image';
        const payload: Payload = {};

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get user initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or
     * app. By default, this route will try to print your logged-in user name or
     * email initials. You can also overwrite the user name if you pass the 'name'
     * parameter. If no name is given and no user is logged, an empty avatar will
     * be returned.
     * 
     * You can use the color and background params to change the avatar colors. By
     * default, a random theme will be selected. The random theme will persist for
     * the user's initials when reloading the same theme will always return for
     * the same initials.
     * 
     * When one dimension is specified and the other is 0, the image is scaled
     * with preserved aspect ratio. If both dimensions are 0, the API provides an
     * image at source quality. If dimensions are not specified, the default size
     * of image returned is 100x100px.
     * 
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getInitials(name?: string, width?: number, height?: number, background?: string): Promise<ArrayBuffer> {
        const apiPath = '/avatars/initials';
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }

        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }

        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
    /**
     * Get QR code
     *
     * Converts a given plain text to a QR code image. You can use the query
     * parameters to change the size and style of the resulting image.
     * 
     *
     * @param {string} text
     * @param {number} size
     * @param {number} margin
     * @param {boolean} download
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getQR(text: string, size?: number, margin?: number, download?: boolean): Promise<ArrayBuffer> {
        if (typeof text === 'undefined') {
            throw new AppwriteException('Missing required parameter: "text"');
        }

        const apiPath = '/avatars/qr';
        const payload: Payload = {};

        if (typeof text !== 'undefined') {
            payload['text'] = text;
        }

        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }

        if (typeof margin !== 'undefined') {
            payload['margin'] = margin;
        }

        if (typeof download !== 'undefined') {
            payload['download'] = download;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'arraybuffer'
        );
    }
}
