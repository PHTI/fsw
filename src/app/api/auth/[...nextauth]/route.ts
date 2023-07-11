import NextAuth, {AuthOptions} from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

import { prisma } from "@/lib/prisma";

export const AuthOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  prividers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ] 
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };