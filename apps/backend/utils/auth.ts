import { betterAuth, type Account } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "@repo/db/client";
import type { User } from "../../../packages/db/generated/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

      async callback({ user, account }: { user: any; account: any }) {
        const email = user.email?.toLowerCase();
        const allowedDomain = "nhtim.ac.in";

        if (!email || !email.endsWith(`@${allowedDomain}`)) {
          throw new Error(
            `Google sign-in is only allowed for ${allowedDomain} email addresses`,
          );
        }

        return { user, account };
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
});
