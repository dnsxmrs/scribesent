"use client"

import { ArrowRight, Zap, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-main py-12 lg:py-16">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px"
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            {/* Pre-headline with icon */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="bg-main-foreground text-main p-2 rounded-base border-2 border-main-foreground shadow-neo">
                <Star className="h-5 w-5" />
              </div>
              <span className="text-main-foreground/90 font-bold">FREE FOR ALL USERS</span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-3xl font-bold text-main-foreground sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
              Ready to never miss a  video again?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl text-main-foreground/90 sm:text-2xl lg:text-3xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Start tracking your favorite channels today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background text-foreground hover:bg-background/90 border-background gap-3 font-bold"
                >
                  Sign Up Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/demo">
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="text-main-foreground border-2 border-main-foreground/30 hover:border-main-foreground hover:bg-main-foreground/10 gap-3 font-bold"
                >
                  <Zap className="h-5 w-5" />
                  See Demo
                </Button>
              </Link>
            </div>
            
            {/* Benefits list */}
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-main-foreground/90 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-bold">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-bold">Set up in under 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-bold">Auto Summary</span>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="text-center">
              <p className="text-main-foreground/70 text-sm">
                Trusted by content creators, researchers, and busy professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 h-24 w-24 border-4 border-main-foreground/20 rounded-base transform rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 h-20 w-20 border-4 border-main-foreground/20 rounded-base transform -rotate-12 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 h-16 w-16 border-4 border-main-foreground/20 rounded-base transform rotate-45 hidden xl:block"></div>
      <div className="absolute top-20 right-20 h-12 w-12 border-4 border-main-foreground/20 rounded-base transform -rotate-45 hidden xl:block"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 opacity-20 hidden lg:block animate-bounce-subtle">
        <div className="bg-main-foreground text-main p-3 rounded-base border-2 border-main-foreground">
          <Star className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-20 hidden lg:block animate-bounce-subtle" style={{ animationDelay: "1s" }}>
        <div className="bg-main-foreground text-main p-3 rounded-base border-2 border-main-foreground">
          <Zap className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
}
