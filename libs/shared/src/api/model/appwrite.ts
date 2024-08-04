import { Client, Databases, Account } from 'appwrite';

const client = new Client();

console.log(import.meta.env.VITE_PROJECT_ENDPOINT); // Should print your endpoint
console.log(import.meta.env.VITE_PROJECT_ID); // Should print your project ID

client.setEndpoint(import.meta.env.VITE_PROJECT_ENDPOINT).setProject(import.meta.env.VITE_PROJECT_ID);
// client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66ab66ab002e3208f3ff');

export const account = new Account(client);
export const database = new Databases(client);

export { ID } from 'appwrite';
