// appwrite.ts

import { Client, Databases, Account } from 'appwrite';
// Import type models for Appwrite
// import { type Models } from 'appwrite';

const client: Client = new Client();

client.setEndpoint(`${process.env['PROJECT_DEPLOY']}`).setProject(`${process.env['PROJECT_ID']}`); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(email, password);
