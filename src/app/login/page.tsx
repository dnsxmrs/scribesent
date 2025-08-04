"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleGoogleSignIn = async () => {
    if (!acceptedTerms) {
      alert("Please accept the terms and conditions to continue.")
      return
    }
    
    setIsLoading(true)
    try {
      // Use development bypass for local development
      // This will automatically use the dev-bypass provider when dummy credentials are detected
      await signIn("dev-bypass", { 
        callbackUrl: "/dashboard",
        redirect: true 
      })
    } catch (error) {
      console.error("Sign in error:", error)
      // Fallback to Google OAuth if dev-bypass fails
      try {
        await signIn("google", { 
          callbackUrl: "/dashboard",
          redirect: true 
        })
      } catch (fallbackError) {
        console.error("Fallback sign in error:", fallbackError)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Column - Hero Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-main p-12 flex-col justify-center items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-main-foreground transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-4 border-main-foreground transform -rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-main-foreground transform rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 border-4 border-main-foreground"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-md">
          <h1 className="text-6xl font-bold text-main-foreground mb-6 leading-tight">
            Never miss a<br />
            YouTube video again
          </h1>
          
          <p className="text-xl text-main-foreground/80 mb-8 leading-relaxed">
            Get AI-powered summaries of your favorite YouTube channels delivered straight to your inbox.
          </p>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* ScribeSent Branding - Always visible */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
          </div>

          <div className="bg-card border-2 border-border rounded-base shadow-neo p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Sign in to ScribeSent
              </h2>
              <p className="text-muted-foreground">
                Use your Google account to continue
              </p>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
                  I accept the{" "}
                  <a href="/terms" className="text-main hover:underline font-medium">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-main hover:underline font-medium">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </div>

            {/* Google Sign In Button */}
            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading || !acceptedTerms}
              className="w-full h-12 text-base font-bold bg-background text-foreground border-2 border-border hover:bg-muted flex items-center justify-center gap-3 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-neo"
              variant="outline"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>

            <div className="mt-6 text-center text-xs text-muted-foreground">
              By continuing, you confirm that you have read and understood our terms and policies.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
