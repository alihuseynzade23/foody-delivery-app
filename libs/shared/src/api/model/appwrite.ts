import { Client, Databases, Account, ID, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint((import.meta as any).env.VITE_PROJECT_ENDPOINT)
  .setProject((import.meta as any).env.VITE_PROJECT_ID);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

// const promise = database.createDocument(
//   '66b9b3f2003b336eb466',
//   '66b9b40d0017b022f91e',
//   ID.unique(),
//   {
//     image: 'https://via.placeholder.com/150',
//     name: 'John Doe',
//     description: 'Lorem ipsum',
//     price: 20,
//     restaurants: ['kfc', 'mcdonalds'],
//   },
// );

// async function listDocuments() {
//   const res = await database.listDocuments('66b9b3f2003b336eb466', '66b9b40d0017b022f91e');
//   console.log(res);
// }

// listDocuments();

// promise.then(
//   function (response) {
//     console.log(response);
//   },
//   function (error) {
//     console.log(error);
//   },
// );

export { ID } from 'appwrite';
