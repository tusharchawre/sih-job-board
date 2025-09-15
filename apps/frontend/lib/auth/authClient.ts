import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
});

const signIn = () => {
  const isAdminContext = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');
  const callbackURL = isAdminContext
    ? `${process.env.NEXT_PUBLIC_FRONTEND_URL!}/admin`
    : `${process.env.NEXT_PUBLIC_FRONTEND_URL!}/home`;

  return authClient.signIn.social({
    provider: "google",
    callbackURL,
    errorCallbackURL: `${process.env.NEXT_PUBLIC_FRONTEND_URL!}/about`,
  });
};

const signOut = () => authClient.signOut();

export { signIn, signOut };
