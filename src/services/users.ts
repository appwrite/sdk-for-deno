import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { PasswordHash } from '../enums/password-hash.ts';
import { AuthenticatorType } from '../enums/authenticator-type.ts';
import { MessagingProviderType } from '../enums/messaging-provider-type.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Users extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.UserList<Preferences>> {
        const apiPath = '/users';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} phone
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async create<Preferences extends Models.Preferences>(userId: string, email?: string, phone?: string, password?: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users';
        const payload: Payload = {};

        if (typeof userId !== 'undefined') {
            payload['userId'] = userId;
        }
        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        if (typeof phone !== 'undefined') {
            payload['phone'] = phone;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createArgon2User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/argon2';
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
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createBcryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/bcrypt';
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
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get identities for all users.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listIdentities(queries?: string[], search?: string): Promise<Models.IdentityList> {
        const apiPath = '/users/identities';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
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

        const apiPath = '/users/identities/{identityId}'.replace('{identityId}', identityId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMD5User<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/md5';
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
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPHPassUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/phpass';
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
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {number} passwordCpu
     * @param {number} passwordMemory
     * @param {number} passwordParallel
     * @param {number} passwordLength
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createScryptUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordCpu: number, passwordMemory: number, passwordParallel: number, passwordLength: number, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordSalt === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSalt"');
        }

        if (typeof passwordCpu === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordCpu"');
        }

        if (typeof passwordMemory === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordMemory"');
        }

        if (typeof passwordParallel === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordParallel"');
        }

        if (typeof passwordLength === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordLength"');
        }

        const apiPath = '/users/scrypt';
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
        if (typeof passwordSalt !== 'undefined') {
            payload['passwordSalt'] = passwordSalt;
        }
        if (typeof passwordCpu !== 'undefined') {
            payload['passwordCpu'] = passwordCpu;
        }
        if (typeof passwordMemory !== 'undefined') {
            payload['passwordMemory'] = passwordMemory;
        }
        if (typeof passwordParallel !== 'undefined') {
            payload['passwordParallel'] = passwordParallel;
        }
        if (typeof passwordLength !== 'undefined') {
            payload['passwordLength'] = passwordLength;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the [Scrypt
     * Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc)
     * algorithm. Use the [POST
     * /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to
     * create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {string} passwordSalt
     * @param {string} passwordSaltSeparator
     * @param {string} passwordSignerKey
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createScryptModifiedUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordSalt: string, passwordSaltSeparator: string, passwordSignerKey: string, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        if (typeof passwordSalt === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSalt"');
        }

        if (typeof passwordSaltSeparator === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSaltSeparator"');
        }

        if (typeof passwordSignerKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "passwordSignerKey"');
        }

        const apiPath = '/users/scrypt-modified';
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
        if (typeof passwordSalt !== 'undefined') {
            payload['passwordSalt'] = passwordSalt;
        }
        if (typeof passwordSaltSeparator !== 'undefined') {
            payload['passwordSaltSeparator'] = passwordSaltSeparator;
        }
        if (typeof passwordSignerKey !== 'undefined') {
            payload['passwordSignerKey'] = passwordSignerKey;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Create a new user. Password provided must be hashed with the
     * [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use
     * the [POST /users](https://appwrite.io/docs/server/users#usersCreate)
     * endpoint to create users with a plain text password.
     *
     * @param {string} userId
     * @param {string} email
     * @param {string} password
     * @param {PasswordHash} passwordVersion
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSHAUser<Preferences extends Models.Preferences>(userId: string, email: string, password: string, passwordVersion?: PasswordHash, name?: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/sha';
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
        if (typeof passwordVersion !== 'undefined') {
            payload['passwordVersion'] = passwordVersion;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get a user by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async get<Preferences extends Models.Preferences>(userId: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a user by its unique ID, thereby releasing it's ID. Since ID is
     * released and can be reused, all user-related resources like documents or
     * storage files should be deleted before user deletion. If you want to keep
     * ID reserved, use the
     * [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus)
     * endpoint instead.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(userId: string): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user email by its unique ID.
     *
     * @param {string} userId
     * @param {string} email
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmail<Preferences extends Models.Preferences>(userId: string, email: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof email === 'undefined') {
            throw new AppwriteException('Missing required parameter: "email"');
        }

        const apiPath = '/users/{userId}/email'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Use this endpoint to create a JSON Web Token for user by its unique ID. You
     * can use the resulting JWT to authenticate on behalf of the user. The JWT
     * secret will become invalid if the session it uses gets deleted.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @param {number} duration
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createJWT(userId: string, sessionId?: string, duration?: number): Promise<Models.Jwt> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/jwts'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof sessionId !== 'undefined') {
            payload['sessionId'] = sessionId;
        }
        if (typeof duration !== 'undefined') {
            payload['duration'] = duration;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user labels by its unique ID. 
     * 
     * Labels can be used to grant access to resources. While teams are a way for
     * user's to share access to a resource, labels can be defined by the
     * developer to grant access without an invitation. See the [Permissions
     * docs](https://appwrite.io/docs/permissions) for more info.
     *
     * @param {string} userId
     * @param {string[]} labels
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateLabels<Preferences extends Models.Preferences>(userId: string, labels: string[]): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof labels === 'undefined') {
            throw new AppwriteException('Missing required parameter: "labels"');
        }

        const apiPath = '/users/{userId}/labels'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof labels !== 'undefined') {
            payload['labels'] = labels;
        }
        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listLogs(userId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/logs'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Get the user membership list by its unique ID.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listMemberships(userId: string, queries?: string[], search?: string): Promise<Models.MembershipList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/memberships'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Enable or disable MFA on a user account.
     *
     * @param {string} userId
     * @param {boolean} mfa
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMfa<Preferences extends Models.Preferences>(userId: string, mfa: boolean): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof mfa === 'undefined') {
            throw new AppwriteException('Missing required parameter: "mfa"');
        }

        const apiPath = '/users/{userId}/mfa'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof mfa !== 'undefined') {
            payload['mfa'] = mfa;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete an authenticator app.
     *
     * @param {string} userId
     * @param {AuthenticatorType} type
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteMfaAuthenticator(userId: string, type: AuthenticatorType): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/users/{userId}/mfa/authenticators/{type}'.replace('{userId}', userId).replace('{type}', type);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List the factors available on the account to be used as a MFA challange.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listMfaFactors(userId: string): Promise<Models.MfaFactors> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/factors'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Get recovery codes that can be used as backup for MFA flow by User ID.
     * Before getting codes, they must be generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Regenerate recovery codes that can be used as backup for MFA flow by User
     * ID. Before regenerating codes, they must be first generated using
     * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
     * method.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'put',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Generate recovery codes used as backup for MFA flow for User ID. Recovery
     * codes can be used as a MFA verification type in
     * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
     * method by client SDK.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMfaRecoveryCodes(userId: string): Promise<Models.MfaRecoveryCodes> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/mfa/recovery-codes'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user name by its unique ID.
     *
     * @param {string} userId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateName<Preferences extends Models.Preferences>(userId: string, name: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/users/{userId}/name'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user password by its unique ID.
     *
     * @param {string} userId
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePassword<Preferences extends Models.Preferences>(userId: string, password: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof password === 'undefined') {
            throw new AppwriteException('Missing required parameter: "password"');
        }

        const apiPath = '/users/{userId}/password'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user phone by its unique ID.
     *
     * @param {string} userId
     * @param {string} number
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhone<Preferences extends Models.Preferences>(userId: string, number: string): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof number === 'undefined') {
            throw new AppwriteException('Missing required parameter: "number"');
        }

        const apiPath = '/users/{userId}/phone'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof number !== 'undefined') {
            payload['number'] = number;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get the user preferences by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getPrefs<Preferences extends Models.Preferences>(userId: string): Promise<Preferences> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user preferences by its unique ID. The object you pass is stored
     * as is, and replaces any previous value. The maximum allowed prefs size is
     * 64kB and throws error if exceeded.
     *
     * @param {string} userId
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePrefs<Preferences extends Models.Preferences>(userId: string, prefs: object): Promise<Preferences> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof prefs === 'undefined') {
            throw new AppwriteException('Missing required parameter: "prefs"');
        }

        const apiPath = '/users/{userId}/prefs'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSessions(userId: string): Promise<Models.SessionList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Creates a session for a user. Returns an immediately usable session object.
     * 
     * If you want to generate a token for a custom authentication flow, use the
     * [POST
     * /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken)
     * endpoint.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSession(userId: string): Promise<Models.Session> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete all user's sessions by using the user's unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSessions(userId: string): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/sessions'.replace('{userId}', userId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a user sessions by its unique ID.
     *
     * @param {string} userId
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSession(userId: string, sessionId: string): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof sessionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sessionId"');
        }

        const apiPath = '/users/{userId}/sessions/{sessionId}'.replace('{userId}', userId).replace('{sessionId}', sessionId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user status by its unique ID. Use this endpoint as an
     * alternative to deleting a user if you want to keep user's ID reserved.
     *
     * @param {string} userId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateStatus<Preferences extends Models.Preferences>(userId: string, status: boolean): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof status === 'undefined') {
            throw new AppwriteException('Missing required parameter: "status"');
        }

        const apiPath = '/users/{userId}/status'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * List the messaging targets that are associated with a user.
     *
     * @param {string} userId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listTargets(userId: string, queries?: string[]): Promise<Models.TargetList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Create a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @param {MessagingProviderType} providerType
     * @param {string} identifier
     * @param {string} providerId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTarget(userId: string, targetId: string, providerType: MessagingProviderType, identifier: string, providerId?: string, name?: string): Promise<Models.Target> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        if (typeof providerType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerType"');
        }

        if (typeof identifier === 'undefined') {
            throw new AppwriteException('Missing required parameter: "identifier"');
        }

        const apiPath = '/users/{userId}/targets'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof targetId !== 'undefined') {
            payload['targetId'] = targetId;
        }
        if (typeof providerType !== 'undefined') {
            payload['providerType'] = providerType;
        }
        if (typeof identifier !== 'undefined') {
            payload['identifier'] = identifier;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Get a user's push notification target by ID.
     *
     * @param {string} userId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getTarget(userId: string, targetId: string): Promise<Models.Target> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};

        return await this.client.call(
            'get',
            apiPath,
            {
            },
            payload,
            'json'
        );
    }
    /**
     * Update a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @param {string} identifier
     * @param {string} providerId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTarget(userId: string, targetId: string, identifier?: string, providerId?: string, name?: string): Promise<Models.Target> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};

        if (typeof identifier !== 'undefined') {
            payload['identifier'] = identifier;
        }
        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Delete a messaging target.
     *
     * @param {string} userId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteTarget(userId: string, targetId: string): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/users/{userId}/targets/{targetId}'.replace('{userId}', userId).replace('{targetId}', targetId);
        const payload: Payload = {};

        return await this.client.call(
            'delete',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Returns a token with a secret key for creating a session. Use the user ID
     * and secret and submit a request to the [PUT
     * /account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
     * endpoint to complete the login process.
     * 
     *
     * @param {string} userId
     * @param {number} length
     * @param {number} expire
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createToken(userId: string, length?: number, expire?: number): Promise<Models.Token> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        const apiPath = '/users/{userId}/tokens'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof length !== 'undefined') {
            payload['length'] = length;
        }
        if (typeof expire !== 'undefined') {
            payload['expire'] = expire;
        }
        return await this.client.call(
            'post',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} emailVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmailVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof emailVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emailVerification"');
        }

        const apiPath = '/users/{userId}/verification'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof emailVerification !== 'undefined') {
            payload['emailVerification'] = emailVerification;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
    /**
     * Update the user phone verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} phoneVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePhoneVerification<Preferences extends Models.Preferences>(userId: string, phoneVerification: boolean): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof phoneVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "phoneVerification"');
        }

        const apiPath = '/users/{userId}/verification/phone'.replace('{userId}', userId);
        const payload: Payload = {};

        if (typeof phoneVerification !== 'undefined') {
            payload['phoneVerification'] = phoneVerification;
        }
        return await this.client.call(
            'patch',
            apiPath,
            {
                'content-type': 'application/json',
            },
            payload,
            'json'
        );
    }
}
