export type LoginInfos = {
  // Example: 'https://login.microsoftonline.com/83e8e3c7-f544-4675-a853-d81f0265c8b1/oauth2/v2.0/authorize';
  oauth2Url: string;

  // OIDC client id, it is called 'application id' in entra. E.g.: 93a3f8ec-ac1b-4cdc-bbec-36c92ab1a246
  clientId: string;

  // OIDC redirect uri. use http://localhost:4200 for local testing.
  redirectUri: string;
};
