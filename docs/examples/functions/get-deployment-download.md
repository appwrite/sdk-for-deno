import { Client, Functions } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new Functions(client);

const result = functions.getDeploymentDownload(
    '<FUNCTION_ID>', // functionId
    '<DEPLOYMENT_ID>' // deploymentId
);