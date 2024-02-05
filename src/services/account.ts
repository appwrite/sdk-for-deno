import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { AuthenticatorProvider } from '../enums/authenticator-provider.ts';
import { AuthenticatorFactor } from '../enums/authenticator-factor.ts';
import { OAuthProvider } from '../enums/o-auth-provider.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Account extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get account
     *
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>> {
        const apiPath = '/account';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create account
     *
     * Use this endpoint to allow a new user to register a new account in your
     * project. After the user registration completes successfully, you can use
     * the
     * [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification)
     * route to start verifying the user email address. To allow the new user to
     * login to their new account, you need to create a new [account
     * session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/account';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update email
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

        const apiPath = '/account/email';
        const payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Identities
     *
     * Get the list of identities for the currently logged in user.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIdentities(queries?: string[]): Promise<Models.IdentityList> {
        const apiPath = '/account/identities';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete identity
     *
     * Delete an identity by its unique ID.
     *
     * @param {string} identityId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteIdentity(identityId: string): Promise<Response> {
        if (typeof identityId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identityId"');
        }

        const apiPath = '/account/identities/{identityId}'.replace('{identityId}', identityId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create JWT
     *
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
     * to authenticate on behalf of the current user when working with the
     * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
     * from its creation and will be invalid if the user will logout in that time
     * frame.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createJWT(): Promise<Models.Jwt> {
        const apiPath = '/account/jwt';
        const payload: Payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List logs
     *
     * Get the list of latest security activity logs for the currently logged in
     * user. Each log returns user IP address, location and date and time of log.
     *
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(queries?: string[]): Promise<Models.LogList> {
        const apiPath = '/account/logs';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update MFA
     *
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMFA<Preferences extends Models.Preferences>(mfa: boolean): Promise<Models.User<Preferences>> {
        if (typeof mfa === 'undefined') {
            throw new AppwriteException('Missing required parameter: "mfa"');
        }

        const apiPath = '/account/mfa';
        const payload: Payload = {};

        if (typeof mfa !== 'undefined') {
            payload['mfa'] = mfa;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create MFA Challenge
     *
     * @param {AuthenticatorProvider} provider
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createChallenge(provider: AuthenticatorProvider): Promise<Models.MfaChallenge> {
        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }

        const apiPath = '/account/mfa/challenge';
        const payload: Payload = {};

        if (typeof provider !== 'undefined') {
            payload['provider'] = provider;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create MFA Challenge (confirmation)
     *
     * @param {string} challengeId
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateChallenge(challengeId: string, otp: string): Promise<Response> {
        if (typeof challengeId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "challengeId"');
        }

        if (typeof otp === 'undefined') {
            throw new AppwriteException('Missing required parameter: "otp"');
        }

        const apiPath = '/account/mfa/challenge';
        const payload: Payload = {};

        if (typeof challengeId !== 'undefined') {
            payload['challengeId'] = challengeId;
        }
        if (typeof otp !== 'undefined') {
            payload['otp'] = otp;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List Factors
     *
     * Get the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listFactors(): Promise<Models.MfaProviders> {
        const apiPath = '/account/mfa/factors';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Add Authenticator
     *
     * @param {AuthenticatorFactor} factor
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async addAuthenticator(factor: AuthenticatorFactor): Promise<Models.MfaProvider> {
        if (typeof factor === 'undefined') {
            throw new AppwriteException('Missing required parameter: "factor"');
        }

        const apiPath = '/account/mfa/{factor}'.replace('{factor}', factor);
        const payload: Payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Verify Authenticator
     *
     * @param {AuthenticatorFactor} factor
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async verifyAuthenticator<Preferences extends Models.Preferences>(factor: AuthenticatorFactor, otp: string): Promise<Models.User<Preferences>> {
        if (typeof factor === 'undefined') {
            throw new AppwriteException('Missing required parameter: "factor"');
        }

        if (typeof otp === 'undefined') {
            throw new AppwriteException('Missing required parameter: "otp"');
        }

        const apiPath = '/account/mfa/{factor}'.replace('{factor}', factor);
        const payload: Payload = {};

        if (typeof otp !== 'undefined') {
            payload['otp'] = otp;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete Authenticator
     *
     * @param {AuthenticatorProvider} provider
     * @param {string} otp
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteAuthenticator<Preferences extends Models.Preferences>(provider: AuthenticatorProvider, otp: string): Promise<Models.User<Preferences>> {
        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }

        if (typeof otp === 'undefined') {
            throw new AppwriteException('Missing required parameter: "otp"');
        }

        const apiPath = '/account/mfa/{provider}'.replace('{provider}', provider);
        const payload: Payload = {};

        if (typeof otp !== 'undefined') {
            payload['otp'] = otp;
        }
        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update name
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

        const apiPath = '/account/name';
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update password
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

        const apiPath = '/account/password';
        const payload: Payload = {};

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof oldPassword !== 'undefined') {
            payload['oldPassword'] = oldPassword;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update phone
     *
     * Update the currently logged in user's phone number. After updating the
     * phone number, the phone verification status will be reset. A confirmation
     * SMS is not sent automatically, however you can use the [POST
     * /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification)
     * endpoint to send a confirmation SMS.
     *
     * @param {string} phone
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhone<Preferences extends Models.Preferences>(phone: string, password: string): Promise<Models.User<Preferences>> {
        if (typeof phone === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phone"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/account/phone';
        const payload: Payload = {};

        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get account preferences
     *
     * Get the preferences as a key-value object for the currently logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs<Preferences extends Models.Preferences>(): Promise<Preferences> {
        const apiPath = '/account/prefs';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update preferences
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

        const apiPath = '/account/prefs';
        const payload: Payload = {};

        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }
        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create password recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery)
     * endpoint to complete the process. The verification link sent to the user's
     * email address is valid for 1 hour.
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

        const apiPath = '/account/recovery';
        const payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create password recovery (confirmation)
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery)
     * endpoint.
     * 
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateRecovery(userId: string, secret: string, password: string): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/account/recovery';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * List sessions
     *
     * Get the list of active sessions across different devices for the currently
     * logged in user.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSessions(): Promise<Models.SessionList> {
        const apiPath = '/account/sessions';
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions(): Promise<Response> {
        const apiPath = '/account/sessions';
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create anonymous session
     *
     * Use this endpoint to allow a new user to register an anonymous account in
     * your project. This route will also create a new session for the user. To
     * allow the new user to convert an anonymous account to a normal account, you
     * need to update its [email and
     * password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail)
     * or create an [OAuth2
     * session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createAnonymousSession(): Promise<Models.Session> {
        const apiPath = '/account/sessions/anonymous';
        const payload: Payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create email password session
     *
     * Allow the user to login into their account by providing a valid email and
     * password combination. This route will create a new session for the user.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmailPasswordSession(email: string, password: string): Promise<Models.Session> {
        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/account/sessions/email';
        const payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create session (deprecated)
     *
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMagicURLSession(userId: string, secret: string): Promise<Models.Session> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        const apiPath = '/account/sessions/magic-url';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create OAuth2 session
     *
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed.
     * 
     * If there is already an active session, the new session will be attached to
     * the logged-in account. If there are no active sessions, the server will
     * attempt to look for a user with the same email address as the email
     * received from the OAuth2 provider and attach the new session to the
     * existing user. If no matching user is found - the server will create a new
     * user.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     * 
     *
     * @param {OAuthProvider} provider
     * @param {string} success
     * @param {string} failure
     * @param {boolean} token
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createOAuth2Session(provider: OAuthProvider, success?: string, failure?: string, token?: boolean, scopes?: string[]): Promise<Response> {
        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }

        const apiPath = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
        const payload: Payload = {};

        if (typeof success !== 'undefined') {
            payload['success'] = success;
        }

        if (typeof failure !== 'undefined') {
            payload['failure'] = failure;
        }

        if (typeof token !== 'undefined') {
            payload['token'] = token;
        }

        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create session
     *
     * Use this endpoint to create a session from token. Provide the **userId**
     * and **secret** parameters from the successful response of authentication
     * flows initiated by token creation. For example, magic URL and phone login.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSession(userId: string, secret: string): Promise<Models.Session> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        const apiPath = '/account/sessions/token';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get session
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

        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        const payload: Payload = {};

        return await this.client.call('get', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update (or renew) a session
     *
     * Extend session's expiry to increase it's lifespan. Extending a session is
     * useful when session length is short such as 5 minutes.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSession(sessionId: string): Promise<Models.Session> {
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        const payload: Payload = {};

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete session
     *
     * Logout the user. Use 'current' as the session ID to logout on this device,
     * use a session ID to logout on another device. If you're looking to logout
     * the user on all devices, use [Delete
     * Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions)
     * instead.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(sessionId: string): Promise<Response> {
        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        const apiPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
        const payload: Payload = {};

        return await this.client.call('delete', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update status
     *
     * Block the currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. To
     * completely delete a user, use the Users API instead.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus<Preferences extends Models.Preferences>(): Promise<Models.User<Preferences>> {
        const apiPath = '/account/status';
        const payload: Payload = {};

        return await this.client.call('patch', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create email token (OTP)
     *
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's email
     * is valid for 15 minutes.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} email
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmailToken(userId: string, email: string, phrase?: boolean): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        const apiPath = '/account/tokens/email';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof phrase !== 'undefined') {
            payload['phrase'] = phrase;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create magic URL token
     *
     * Sends the user an email with a secret key for creating a session. If the
     * provided user ID has not been registered, a new user will be created. When
     * the user clicks the link in the email, the user is redirected back to the
     * URL you provided with the secret key and userId values attached to the URL
     * query string. Use the query string parameters to submit a request to the
     * [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The link sent to the user's email
     * address is valid for 1 hour. If you are on a mobile device you can leave
     * the URL parameter empty, so that the login completion will be handled by
     * your Appwrite instance by default.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     * 
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} url
     * @param {boolean} phrase
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMagicURLToken(userId: string, email: string, url?: string, phrase?: boolean): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        const apiPath = '/account/tokens/magic-url';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof phrase !== 'undefined') {
            payload['phrase'] = phrase;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create phone token
     *
     * Sends the user an SMS with a secret key for creating a session. If the
     * provided user ID has not be registered, a new user will be created. Use the
     * returned user ID and secret and submit a request to the [POST
     * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process. The secret sent to the user's phone
     * is valid for 15 minutes.
     * 
     * A user is limited to 10 active sessions at a time by default. [Learn more
     * about session
     * limits](https://appwrite.io/docs/authentication-security#limits).
     *
     * @param {string} userId
     * @param {string} phone
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPhoneToken(userId: string, phone: string): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof phone === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phone"');
        }

        const apiPath = '/account/tokens/phone';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create email verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification).
     * The verification link sent to the user's email address is valid for 7 days.
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

        const apiPath = '/account/verification';
        const payload: Payload = {};

        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create email verification (confirmation)
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

        const apiPath = '/account/verification';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create phone verification
     *
     * Use this endpoint to send a verification SMS to the currently logged in
     * user. This endpoint is meant for use after updating a user's phone number
     * using the
     * [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone)
     * endpoint. Learn more about how to [complete the verification
     * process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification).
     * The verification code sent to the user's phone number is valid for 15
     * minutes.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPhoneVerification(): Promise<Models.Token> {
        const apiPath = '/account/verification/phone';
        const payload: Payload = {};

        return await this.client.call('post', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create phone verification (confirmation)
     *
     * Use this endpoint to complete the user phone verification process. Use the
     * **userId** and **secret** that were sent to your user's phone number to
     * verify the user email ownership. If confirmed this route will return a 200
     * status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhoneVerification(userId: string, secret: string): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof secret === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secret"');
        }

        const apiPath = '/account/verification/phone';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        return await this.client.call('put', apiPath, {
            'content-type': 'application/json',
        }, payload);
    }
}