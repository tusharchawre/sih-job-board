import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
});

const signIn = () => authClient.signIn.social({ provider: "google" });

const signOut = () => authClient.signOut();

export { signIn, signOut };
