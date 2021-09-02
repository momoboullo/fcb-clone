import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.BOULLO_CLIENT_ID,
      clientSecret: process.env.BOULLO_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
