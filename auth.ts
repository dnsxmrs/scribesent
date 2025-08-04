import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // Development mode credentials provider for bypassing Google OAuth
    Credentials({
      id: "dev-bypass",
      name: "Development Mode",
      credentials: {},
      async authorize() {
        // Only allow in development with dummy credentials
        if (process.env.AUTH_GOOGLE_ID === "dummy-google-client-id-for-development") {
          return {
            id: "dev-user-123",
            name: "Development User",
            email: "dev@example.com",
            image: "https://via.placeholder.com/40"
          }
        }
        return null
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after successful authentication
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return `${baseUrl}/dashboard`
    }
  },
})
