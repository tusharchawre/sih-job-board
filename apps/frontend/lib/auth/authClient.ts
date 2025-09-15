import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
});

const signIn = () =>
  authClient.signIn.social({
    provider: "google",
    callbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL!}/home`,
    errorCallbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL!}/about`,
  });

const signOut = () => authClient.signOut();

export { signIn, signOut };
