import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
{    id: 'google',
    name            : 'Google',
    type            : 'oauth',
    version         : '2.0',
    scope           : 'openid profile email',
    params          : { grant_type: 'authorization_code' },
    accessTokenUrl  : 'https://accounts.google.com/o/oauth2/token',
    requestTokenUrl : 'https://accounts.google.com/o/oauth2/auth',
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
    profileUrl      : 'https://www.googleapis.com/oauth2/v1/userinfo',
    clientId        : process.env.GOOGLE_ID,
    clientSecret    : process.env.GOOGLE_SECRET},
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
