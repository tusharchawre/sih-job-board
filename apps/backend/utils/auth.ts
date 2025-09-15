import { prisma } from "@repo/db/client";
import { APIError, betterAuth, type Account } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { createAuthMiddleware } from "better-auth/api";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.FRONTEND_URL!, "http://localhost:3000"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      hd: "nhtim.ac.in",
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.context.session && !ctx.context.session?.user.email.endsWith("@nhtim.ac.in")) {
        console.log(ctx.context.session.user.email)
      }
    }),
  },
});
