import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials"
import { mongooseConnection } from "@/lib/moongose";
import { Register } from "@/modals/register";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        // email: { label: "Email", type: "text" },
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await mongooseConnection();
        try {
          const user = await Register.findOne({ username: credentials.username });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
});