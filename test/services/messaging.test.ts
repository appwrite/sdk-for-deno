import {afterEach, describe, it as test} from "https://deno.land/std@0.204.0/testing/bdd.ts";
import {restore, stub} from "https://deno.land/std@0.204.0/testing/mock.ts";
import {assertEquals} from "https://deno.land/std@0.204.0/assert/assert_equals.ts";
import { Messaging } from "../../src/services/messaging.ts";
import {Client} from "../../src/client.ts";
import {InputFile} from "../../src/inputFile.ts"

describe('Messaging service', () => {
    const client = new Client();
    const messaging = new Messaging(client);

    afterEach(() => restore())

    
    test('test method listMessages()', async () => {
        const data = {
            'total': 5,
            'messages': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listMessages(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createEmail(
            '<MESSAGE_ID>',
            '<SUBJECT>',
            '<CONTENT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateEmail()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateEmail(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createPush()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createPush(
            '<MESSAGE_ID>',
            '<TITLE>',
            '<BODY>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updatePush()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updatePush(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSms()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createSms(
            '<MESSAGE_ID>',
            '<CONTENT>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateSms()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateSms(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getMessage()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'providerType': 'email',
            'topics': [],
            'users': [],
            'targets': [],
            'deliveredTotal': 1,
            'data': {},
            'status': 'Message status can be one of the following: draft, processing, scheduled, sent, or failed.',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.getMessage(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method delete()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await messaging.delete(
            '<MESSAGE_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listMessageLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listMessageLogs(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listTargets()', async () => {
        const data = {
            'total': 5,
            'targets': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listTargets(
            '<MESSAGE_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listProviders()', async () => {
        const data = {
            'total': 5,
            'providers': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listProviders(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createApnsProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createApnsProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateApnsProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateApnsProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createFcmProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createFcmProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateFcmProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateFcmProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createMailgunProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createMailgunProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMailgunProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateMailgunProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createMsg91Provider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createMsg91Provider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateMsg91Provider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateMsg91Provider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSendgridProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createSendgridProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateSendgridProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateSendgridProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSmtpProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createSmtpProvider(
            '<PROVIDER_ID>',
            '<NAME>',
            '<HOST>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateSmtpProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateSmtpProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTelesignProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createTelesignProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTelesignProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateTelesignProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTextmagicProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createTextmagicProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTextmagicProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateTextmagicProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTwilioProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createTwilioProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTwilioProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateTwilioProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createVonageProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createVonageProvider(
            '<PROVIDER_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateVonageProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateVonageProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getProvider()', async () => {
        const data = {
            '\$id': '5e5ea5c16897e',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'Mailgun',
            'provider': 'mailgun',
            'enabled': true,
            'type': 'sms',
            'credentials': {},};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.getProvider(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteProvider()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await messaging.deleteProvider(
            '<PROVIDER_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listProviderLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listProviderLogs(
            '<PROVIDER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listSubscriberLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listSubscriberLogs(
            '<SUBSCRIBER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listTopics()', async () => {
        const data = {
            'total': 5,
            'topics': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listTopics(
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createTopic(
            '<TOPIC_ID>',
            '<NAME>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.getTopic(
            '<TOPIC_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method updateTopic()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'name': 'events',
            'emailTotal': 100,
            'smsTotal': 100,
            'pushTotal': 100,
            'subscribe': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.updateTopic(
            '<TOPIC_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteTopic()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await messaging.deleteTopic(
            '<TOPIC_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    
    test('test method listTopicLogs()', async () => {
        const data = {
            'total': 5,
            'logs': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listTopicLogs(
            '<TOPIC_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method listSubscribers()', async () => {
        const data = {
            'total': 5,
            'subscribers': [],};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.listSubscribers(
            '<TOPIC_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method createSubscriber()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'targetId': '259125845563242502',
            'target': {},
            'userId': '5e5ea5c16897e',
            'userName': 'Aegon Targaryen',
            'topicId': '259125845563242502',
            'providerType': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.createSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
            '<TARGET_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method getSubscriber()', async () => {
        const data = {
            '\$id': '259125845563242502',
            '\$createdAt': '2020-10-15T06:38:00.000+00:00',
            '\$updatedAt': '2020-10-15T06:38:00.000+00:00',
            'targetId': '259125845563242502',
            'target': {},
            'userId': '5e5ea5c16897e',
            'userName': 'Aegon Targaryen',
            'topicId': '259125845563242502',
            'providerType': 'email',};

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(Response.json(data)));

        const response = await messaging.getSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
        );

        assertEquals(response, data);
        stubbedFetch.restore();
    });

    
    test('test method deleteSubscriber()', async () => {
        const data = '';

        const stubbedFetch = stub(globalThis, 'fetch', () => Promise.resolve(new Response(data)))

        const response = await messaging.deleteSubscriber(
            '<TOPIC_ID>',
            '<SUBSCRIBER_ID>',
        );

        const text = await response.text();
        assertEquals(text, data);
        stubbedFetch.restore();
    });

    })
