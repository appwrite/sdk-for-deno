import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Account extends Service {
    /**
     * Get Account
     *
     * Get currently logged in user data as JSON object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>> {
        let path = '/account';
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Account Email
     *
     * Update currently logged in user account email address. After changing user
     * address, the user confirmation status will get reset. A new confirmation
     * email is not sent automatically however you can use the send confirmation
     * email endpoint again to send the confirmation email. For security measures,
     * user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     * 
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmail<Preferences extends Models.Preferences>(email: string, password: string): Promise<Models.User<Preferences>> {
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        let path = '/account/email';
        let payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Account Logs
     *
     * Get currently logged in user list of latest security activity logs. Each
     * log returns user IP address, location and date and time of log.
     *
     * @param {number} limit
     * @param {number} offset
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getLogs(limit?: number, offset?: number): Promise<Models.LogList> {
        let path = '/account/logs';
        let payload: Payload = {};

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Account Name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateName<Preferences extends Models.Preferences>(name: string): Promise<Models.User<Preferences>> {
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        let path = '/account/name';
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Account Password
     *
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth, Team Invites and Magic URL, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePassword<Preferences extends Models.Preferences>(password: string, oldPassword?: string): Promise<Models.User<Preferences>> {
        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        let path = '/account/password';
        let payload: Payload = {};

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof oldPassword !== 'undefined') {
            payload['oldPassword'] = oldPassword;
        }
        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs<Preferences extends Models.Preferences>(): Promise<Preferences> {
        let path = '/account/prefs';
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Account Preferences
     *
     * Update currently logged in user account preferences. The object you pass is
     * stored as is, and replaces any previous value. The maximum allowed prefs
     * size is 64kB and throws error if exceeded.
     *
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePrefs<Preferences extends Models.Preferences>(prefs: object): Promise<Models.User<Preferences>> {
        if (typeof prefs === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prefs"');
        }

        let path = '/account/prefs';
        let payload: Payload = {};

        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }
        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
     * complete the process. The verification link sent to the user's email
     * address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createRecovery(email: string, url: string): Promise<Models.Token> {
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        let path = '/account/recovery';
        let payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Password Recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @param {string} passwordAgain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordAgain === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordAgain"');
        }

        let path = '/account/recovery';
        let payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof passwordAgain !== 'undefined') {
            payload['passwordAgain'] = passwordAgain;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Account Sessions
     *
     * Get currently logged in user list of active sessions across different
     * devices.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSessions(): Promise<Models.SessionList> {
        let path = '/account/sessions';
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete All Account Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions(): Promise<Response> {
        let path = '/account/sessions';
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get Session By ID
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSession(sessionId: string): Promise<Models.Session> {
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Session (Refresh Tokens)
     *
     * Access tokens have limited lifespan and expire to mitigate security risks.
     * If session was created using an OAuth provider, this route can be used to
     * "refresh" the access token.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSession(sessionId: string): Promise<Models.Session> {
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload: Payload = {};

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Account Session
     *
     * Use this endpoint to log out the currently logged in user from all their
     * account sessions across all of their different devices. When using the
     * Session ID argument, only the unique session ID provided is deleted.
     * 
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(sessionId: string): Promise<Response> {
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        let path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Account Status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>> {
        let path = '/account/status';
        let payload: Payload = {};

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdateVerification). The verification
     * link sent to the user's email address is valid for 7 days.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     * 
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVerification(url: string): Promise<Models.Token> {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        let path = '/account/verification';
        let payload: Payload = {};

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create Email Verification (confirmation)
     *
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVerification(userId: string, secret: string): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        let path = '/account/verification';
        let payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        return await this.client.call('put', path, {
            'content-type': 'application/json',
        }, payload);
    }
}