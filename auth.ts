import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// Mock Google OAuth provider for development
const MockGoogleProvider = Credentials({
  id: "google",
  name: "Google",
  credentials: {},
  async authorize() {
    // Return mock Google user data
    return {
      id: "google-user-123",
      name: "Demo User",
      email: "demo@gmail.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  }
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [MockGoogleProvider],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
})
