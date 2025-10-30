// src/lib/appwrite.ts
import { Client, Account } from "appwrite";

export const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT as string)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID as string);

export const account = new Account(client);

/** Ensure a session exists (needed if your table is not public-read). */
export async function ensureSession() {
  try {
    await account.get(); // has a session
  } catch {
    // create anonymous session (no API key in browser!)
    await account.createAnonymousSession();
  }
}
