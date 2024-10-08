import { Client, Functions, ExecutionMethod } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new Functions(client);

const response = await functions.createExecution(
    '<FUNCTION_ID>', // functionId
    Payload.fromJson({ x: "y" }), // body (optional)
    false, // async (optional)
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '' // scheduledAt (optional)
);
