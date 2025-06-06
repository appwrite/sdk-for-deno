import { basename } from "https://deno.land/std@0.122.0/path/mod.ts";
import { Service } from '../service.ts';
import { Payload, Client } from '../client.ts';
import { InputFile } from '../inputFile.ts';
import { AppwriteException } from '../exception.ts';
import type { Models } from '../models.d.ts';
import { Query } from '../query.ts';
import { MessagePriority } from '../enums/message-priority.ts';
import { SmtpEncryption } from '../enums/smtp-encryption.ts';

export type UploadProgress = {
    $id: string;
    progress: number;
    sizeUploaded: number;
    chunksTotal: number;
    chunksUploaded: number;
}

export class Messaging extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listMessages(queries?: string[], search?: string): Promise<Models.MessageList> {
        const apiPath = '/messaging/messages';
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
     * Create a new email message.
     *
     * @param {string} messageId
     * @param {string} subject
     * @param {string} content
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string[]} cc
     * @param {string[]} bcc
     * @param {string[]} attachments
     * @param {boolean} draft
     * @param {boolean} html
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createEmail(messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        if (typeof subject === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subject"');
        }

        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }

        const apiPath = '/messaging/messages/email';
        const payload: Payload = {};

        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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
     * Update an email message by its unique ID. This endpoint only works on
     * messages that are in draft status. Messages that are already processing,
     * sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} subject
     * @param {string} content
     * @param {boolean} draft
     * @param {boolean} html
     * @param {string[]} cc
     * @param {string[]} bcc
     * @param {string} scheduledAt
     * @param {string[]} attachments
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateEmail(messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[]): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/email/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};

        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof subject !== 'undefined') {
            payload['subject'] = subject;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof html !== 'undefined') {
            payload['html'] = html;
        }
        if (typeof cc !== 'undefined') {
            payload['cc'] = cc;
        }
        if (typeof bcc !== 'undefined') {
            payload['bcc'] = bcc;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof attachments !== 'undefined') {
            payload['attachments'] = attachments;
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
     * Create a new push notification.
     *
     * @param {string} messageId
     * @param {string} title
     * @param {string} body
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {object} data
     * @param {string} action
     * @param {string} image
     * @param {string} icon
     * @param {string} sound
     * @param {string} color
     * @param {string} tag
     * @param {number} badge
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @param {boolean} contentAvailable
     * @param {boolean} critical
     * @param {MessagePriority} priority
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createPush(messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/push';
        const payload: Payload = {};

        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
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
     * Update a push notification by its unique ID. This endpoint only works on
     * messages that are in draft status. Messages that are already processing,
     * sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} title
     * @param {string} body
     * @param {object} data
     * @param {string} action
     * @param {string} image
     * @param {string} icon
     * @param {string} sound
     * @param {string} color
     * @param {string} tag
     * @param {number} badge
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @param {boolean} contentAvailable
     * @param {boolean} critical
     * @param {MessagePriority} priority
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updatePush(messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/push/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};

        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof title !== 'undefined') {
            payload['title'] = title;
        }
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof data !== 'undefined') {
            payload['data'] = data;
        }
        if (typeof action !== 'undefined') {
            payload['action'] = action;
        }
        if (typeof image !== 'undefined') {
            payload['image'] = image;
        }
        if (typeof icon !== 'undefined') {
            payload['icon'] = icon;
        }
        if (typeof sound !== 'undefined') {
            payload['sound'] = sound;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof tag !== 'undefined') {
            payload['tag'] = tag;
        }
        if (typeof badge !== 'undefined') {
            payload['badge'] = badge;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        if (typeof contentAvailable !== 'undefined') {
            payload['contentAvailable'] = contentAvailable;
        }
        if (typeof critical !== 'undefined') {
            payload['critical'] = critical;
        }
        if (typeof priority !== 'undefined') {
            payload['priority'] = priority;
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
     * Create a new SMS message.
     *
     * @param {string} messageId
     * @param {string} content
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSms(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        if (typeof content === 'undefined') {
            throw new AppwriteException('Missing required parameter: "content"');
        }

        const apiPath = '/messaging/messages/sms';
        const payload: Payload = {};

        if (typeof messageId !== 'undefined') {
            payload['messageId'] = messageId;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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
     * Update an SMS message by its unique ID. This endpoint only works on
     * messages that are in draft status. Messages that are already processing,
     * sent, or failed cannot be updated.
     * 
     *
     * @param {string} messageId
     * @param {string[]} topics
     * @param {string[]} users
     * @param {string[]} targets
     * @param {string} content
     * @param {boolean} draft
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSms(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/sms/{messageId}'.replace('{messageId}', messageId);
        const payload: Payload = {};

        if (typeof topics !== 'undefined') {
            payload['topics'] = topics;
        }
        if (typeof users !== 'undefined') {
            payload['users'] = users;
        }
        if (typeof targets !== 'undefined') {
            payload['targets'] = targets;
        }
        if (typeof content !== 'undefined') {
            payload['content'] = content;
        }
        if (typeof draft !== 'undefined') {
            payload['draft'] = draft;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
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
     * Get a message by its unique ID.
     * 
     *
     * @param {string} messageId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getMessage(messageId: string): Promise<Models.Message> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}'.replace('{messageId}', messageId);
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
     * Delete a message. If the message is not a draft or scheduled, but has been
     * sent, this will not recall the message.
     *
     * @param {string} messageId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async delete(messageId: string): Promise<Response> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}'.replace('{messageId}', messageId);
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
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} messageId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listMessageLogs(messageId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}/logs'.replace('{messageId}', messageId);
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
     * Get a list of the targets associated with a message.
     *
     * @param {string} messageId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listTargets(messageId: string, queries?: string[]): Promise<Models.TargetList> {
        if (typeof messageId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "messageId"');
        }

        const apiPath = '/messaging/messages/{messageId}/targets'.replace('{messageId}', messageId);
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
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listProviders(queries?: string[], search?: string): Promise<Models.ProviderList> {
        const apiPath = '/messaging/providers';
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
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} authKey
     * @param {string} authKeyId
     * @param {string} teamId
     * @param {string} bundleId
     * @param {boolean} sandbox
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createApnsProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/apns';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} authKey
     * @param {string} authKeyId
     * @param {string} teamId
     * @param {string} bundleId
     * @param {boolean} sandbox
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateApnsProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/apns/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof authKeyId !== 'undefined') {
            payload['authKeyId'] = authKeyId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof bundleId !== 'undefined') {
            payload['bundleId'] = bundleId;
        }
        if (typeof sandbox !== 'undefined') {
            payload['sandbox'] = sandbox;
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
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {object} serviceAccountJSON
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createFcmProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/fcm';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {object} serviceAccountJSON
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateFcmProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/fcm/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof serviceAccountJSON !== 'undefined') {
            payload['serviceAccountJSON'] = serviceAccountJSON;
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
     * Create a new Mailgun provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} domain
     * @param {boolean} isEuRegion
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMailgunProvider(providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/mailgun';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} domain
     * @param {boolean} isEuRegion
     * @param {boolean} enabled
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMailgunProvider(providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/mailgun/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof domain !== 'undefined') {
            payload['domain'] = domain;
        }
        if (typeof isEuRegion !== 'undefined') {
            payload['isEuRegion'] = isEuRegion;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
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
     * Create a new MSG91 provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} templateId
     * @param {string} senderId
     * @param {string} authKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createMsg91Provider(providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/msg91';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} templateId
     * @param {string} senderId
     * @param {string} authKey
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateMsg91Provider(providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/msg91/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof templateId !== 'undefined') {
            payload['templateId'] = templateId;
        }
        if (typeof senderId !== 'undefined') {
            payload['senderId'] = senderId;
        }
        if (typeof authKey !== 'undefined') {
            payload['authKey'] = authKey;
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
     * Create a new Sendgrid provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} apiKey
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSendgridProvider(providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/sendgrid';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} apiKey
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSendgridProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/sendgrid/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
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
     * Create a new SMTP provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {SmtpEncryption} encryption
     * @param {boolean} autoTLS
     * @param {string} mailer
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSmtpProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof host === 'undefined') {
            throw new AppwriteException('Missing required parameter: "host"');
        }

        const apiPath = '/messaging/providers/smtp';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {SmtpEncryption} encryption
     * @param {boolean} autoTLS
     * @param {string} mailer
     * @param {string} fromName
     * @param {string} fromEmail
     * @param {string} replyToName
     * @param {string} replyToEmail
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateSmtpProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/smtp/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof host !== 'undefined') {
            payload['host'] = host;
        }
        if (typeof port !== 'undefined') {
            payload['port'] = port;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof password !== 'undefined') {
            payload['password'] = password;
        }
        if (typeof encryption !== 'undefined') {
            payload['encryption'] = encryption;
        }
        if (typeof autoTLS !== 'undefined') {
            payload['autoTLS'] = autoTLS;
        }
        if (typeof mailer !== 'undefined') {
            payload['mailer'] = mailer;
        }
        if (typeof fromName !== 'undefined') {
            payload['fromName'] = fromName;
        }
        if (typeof fromEmail !== 'undefined') {
            payload['fromEmail'] = fromEmail;
        }
        if (typeof replyToName !== 'undefined') {
            payload['replyToName'] = replyToName;
        }
        if (typeof replyToEmail !== 'undefined') {
            payload['replyToEmail'] = replyToEmail;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Create a new Telesign provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} customerId
     * @param {string} apiKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTelesignProvider(providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/telesign';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} customerId
     * @param {string} apiKey
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTelesignProvider(providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/telesign/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof customerId !== 'undefined') {
            payload['customerId'] = customerId;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
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
     * Create a new Textmagic provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} username
     * @param {string} apiKey
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTextmagicProvider(providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/textmagic';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} username
     * @param {string} apiKey
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTextmagicProvider(providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/textmagic/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
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
     * Create a new Twilio provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} accountSid
     * @param {string} authToken
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTwilioProvider(providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/twilio';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} accountSid
     * @param {string} authToken
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTwilioProvider(providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/twilio/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof accountSid !== 'undefined') {
            payload['accountSid'] = accountSid;
        }
        if (typeof authToken !== 'undefined') {
            payload['authToken'] = authToken;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
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
     * Create a new Vonage provider.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {string} from
     * @param {string} apiKey
     * @param {string} apiSecret
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createVonageProvider(providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/providers/vonage';
        const payload: Payload = {};

        if (typeof providerId !== 'undefined') {
            payload['providerId'] = providerId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
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
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} providerId
     * @param {string} name
     * @param {boolean} enabled
     * @param {string} apiKey
     * @param {string} apiSecret
     * @param {string} from
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateVonageProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/vonage/{providerId}'.replace('{providerId}', providerId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof apiKey !== 'undefined') {
            payload['apiKey'] = apiKey;
        }
        if (typeof apiSecret !== 'undefined') {
            payload['apiSecret'] = apiSecret;
        }
        if (typeof from !== 'undefined') {
            payload['from'] = from;
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
     * Get a provider by its unique ID.
     * 
     *
     * @param {string} providerId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getProvider(providerId: string): Promise<Models.Provider> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}'.replace('{providerId}', providerId);
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
     * Delete a provider by its unique ID.
     *
     * @param {string} providerId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteProvider(providerId: string): Promise<Response> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}'.replace('{providerId}', providerId);
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
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} providerId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listProviderLogs(providerId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof providerId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerId"');
        }

        const apiPath = '/messaging/providers/{providerId}/logs'.replace('{providerId}', providerId);
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
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} subscriberId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSubscriberLogs(subscriberId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/subscribers/{subscriberId}/logs'.replace('{subscriberId}', subscriberId);
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
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listTopics(queries?: string[], search?: string): Promise<Models.TopicList> {
        const apiPath = '/messaging/topics';
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
     * Create a new topic.
     *
     * @param {string} topicId
     * @param {string} name
     * @param {string[]} subscribe
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createTopic(topicId: string, name: string, subscribe?: string[]): Promise<Models.Topic> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/messaging/topics';
        const payload: Payload = {};

        if (typeof topicId !== 'undefined') {
            payload['topicId'] = topicId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
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
     * Get a topic by its unique ID.
     * 
     *
     * @param {string} topicId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getTopic(topicId: string): Promise<Models.Topic> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
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
     * Update a topic by its unique ID.
     * 
     *
     * @param {string} topicId
     * @param {string} name
     * @param {string[]} subscribe
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async updateTopic(topicId: string, name?: string, subscribe?: string[]): Promise<Models.Topic> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
        const payload: Payload = {};

        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof subscribe !== 'undefined') {
            payload['subscribe'] = subscribe;
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
     * Delete a topic by its unique ID.
     *
     * @param {string} topicId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteTopic(topicId: string): Promise<Response> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}'.replace('{topicId}', topicId);
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
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} topicId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listTopicLogs(topicId: string, queries?: string[]): Promise<Models.LogList> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}/logs'.replace('{topicId}', topicId);
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
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} topicId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async listSubscribers(topicId: string, queries?: string[], search?: string): Promise<Models.SubscriberList> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
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
     * Create a new subscriber.
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @param {string} targetId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async createSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Models.Subscriber> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        if (typeof targetId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
        const payload: Payload = {};

        if (typeof subscriberId !== 'undefined') {
            payload['subscriberId'] = subscriberId;
        }
        if (typeof targetId !== 'undefined') {
            payload['targetId'] = targetId;
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
     * Get a subscriber by its unique ID.
     * 
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async getSubscriber(topicId: string, subscriberId: string): Promise<Models.Subscriber> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
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
     * Delete a subscriber by its unique ID.
     *
     * @param {string} topicId
     * @param {string} subscriberId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    async deleteSubscriber(topicId: string, subscriberId: string): Promise<Response> {
        if (typeof topicId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "topicId"');
        }

        if (typeof subscriberId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "subscriberId"');
        }

        const apiPath = '/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
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
}
