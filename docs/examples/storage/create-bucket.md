import { Client, Storage,  } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2'); // Your secret API key

const storage = new Storage(client);

const response = await storage.createBucket(
    '<BUCKET_ID>', // bucketId
    '<NAME>', // name
    ["read("any")"], // permissions (optional)
    false, // fileSecurity (optional)
    false, // enabled (optional)
    1, // maximumFileSize (optional)
    [], // allowedFileExtensions (optional)
    .None, // compression (optional)
    false, // encryption (optional)
    false // antivirus (optional)
);
