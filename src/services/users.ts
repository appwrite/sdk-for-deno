import { Service } from '../service.ts';
import { Payload } from '../client.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts'

export class Users extends Service {
    /**
     * List Users
     *
     * Get a list of all the project's users. You can use the query params to
     * filter your results.
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} cursor
     * @param {string} cursorDirection
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async list<Preferences extends Models.Preferences>(search?: string, limit?: number, offset?: number, cursor?: string, cursorDirection?: string, orderType?: string): Promise<Models.UserList<Preferences>> {
        let path = '/users';
        let payload: Payload = {};

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }

        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }

        if (typeof cursor !== 'undefined') {
            payload['cursor'] = cursor;
        }

        if (typeof cursorDirection !== 'undefined') {
            payload['cursorDirection'] = cursorDirection;
        }

        if (typeof orderType !== 'undefined') {
            payload['orderType'] = orderType;
        }

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Create User
     *
     * Create a new user.
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

        let path = '/users';
        let payload: Payload = {};

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

        return await this.client.call('post', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get User
     *
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

        let path = '/users/{userId}'.replace('{userId}', userId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete User
     *
     * Delete a user by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(userId: string): Promise<Response> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        let path = '/users/{userId}'.replace('{userId}', userId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Email
     *
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

        let path = '/users/{userId}/email'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof email !== 'undefined') {
            payload['email'] = email;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get User Logs
     *
     * Get the user activity logs list by its unique ID.
     *
     * @param {string} userId
     * @param {number} limit
     * @param {number} offset
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getLogs(userId: string, limit?: number, offset?: number): Promise<Models.LogList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        let path = '/users/{userId}/logs'.replace('{userId}', userId);
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
     * Update Name
     *
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

        let path = '/users/{userId}/name'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Password
     *
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

        let path = '/users/{userId}/password'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get User Preferences
     *
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

        let path = '/users/{userId}/prefs'.replace('{userId}', userId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update User Preferences
     *
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

        let path = '/users/{userId}/prefs'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof prefs !== 'undefined') {
            payload['prefs'] = prefs;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Get User Sessions
     *
     * Get the user sessions list by its unique ID.
     *
     * @param {string} userId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSessions(userId: string): Promise<Models.SessionList> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        let path = '/users/{userId}/sessions'.replace('{userId}', userId);
        let payload: Payload = {};

        return await this.client.call('get', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete User Sessions
     *
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

        let path = '/users/{userId}/sessions'.replace('{userId}', userId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Delete User Session
     *
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

        let path = '/users/{userId}/sessions/{sessionId}'.replace('{userId}', userId).replace('{sessionId}', sessionId);
        let payload: Payload = {};

        return await this.client.call('delete', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update User Status
     *
     * Update the user status by its unique ID.
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

        let path = '/users/{userId}/status'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
    /**
     * Update Email Verification
     *
     * Update the user email verification status by its unique ID.
     *
     * @param {string} userId
     * @param {boolean} emailVerification
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVerification<Preferences extends Models.Preferences>(userId: string, emailVerification: boolean): Promise<Models.User<Preferences>> {
        if (typeof userId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "userId"');
        }

        if (typeof emailVerification === 'undefined') {
            throw new AppwriteException('Missing required parameter: "emailVerification"');
        }

        let path = '/users/{userId}/verification'.replace('{userId}', userId);
        let payload: Payload = {};

        if (typeof emailVerification !== 'undefined') {
            payload['emailVerification'] = emailVerification;
        }

        return await this.client.call('patch', path, {
            'content-type': 'application/json',
        }, payload);
    }
}