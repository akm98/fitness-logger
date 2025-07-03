import { Client, Account } from "appwrite";

export const client = new Client();

client
	.setEndpoint("https://fra.cloud.appwrite.io/v1")
	.setProject("6862d206003cf08df90e"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
