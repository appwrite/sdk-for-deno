import { Client, TablesDb } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const tablesDb = new TablesDb(client);

const response = await tablesDb.upsertRow(
    '<DATABASE_ID>', // databaseId
    '<TABLE_ID>', // tableId
    '<ROW_ID>', // rowId
    {}, // data (optional)
    ["read("any")"] // permissions (optional)
);
