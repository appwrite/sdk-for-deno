import { Client, TablesDb } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const tablesDb = new TablesDb(client);

const response = await tablesDb.updateEnumColumn(
    '<DATABASE_ID>', // databaseId
    '<TABLE_ID>', // tableId
    '', // key
    [], // elements
    false, // required
    '<DEFAULT>', // default
    '' // newKey (optional)
);
