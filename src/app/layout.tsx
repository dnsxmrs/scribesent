import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/mock-auth-provider"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Scribesent - Never miss a YouTube video again",
  description: "Get AI-powered summaries of your favorite YouTube channels delivered straight to your inbox. Free and open source.",
  keywords: "YouTube, AI, summaries, email, automation, transcripts, open source",
  authors: [{ name: "Scribesent Team" }],
  creator: "Scribesent",
  publisher: "Scribesent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scribesent.com",
    title: "Scribesent - Never miss a YouTube video again",
    description: "Get AI-powered summaries of your favorite YouTube channels delivered straight to your inbox.",
    siteName: "Scribesent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scribesent - Never miss a YouTube video again",
    description: "Get AI-powered summaries of your favorite YouTube channels delivered straight to your inbox.",
    creator: "@scribesent",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            forcedTheme="light"
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
