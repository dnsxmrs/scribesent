"use client"

import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
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
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-4xl font-bold text-main-foreground sm:text-5xl lg:text-6xl xl:text-7xl leading-relaxed mb-6 tracking-normal">
              Never miss a <span className="text-white px-3 py-2 mx-1">YouTube</span> video again
            </h1>
            
            {/* Subheading */}
            <p className="text-xl text-main-foreground/90 sm:text-2xl lg:text-3xl leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
              Get AI-powered summaries delivered straight to your inbox.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-background text-foreground hover:bg-background/90 border-background gap-3"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="text-main-foreground border-2 border-main-foreground/30 hover:border-main-foreground hover:bg-main-foreground/10 gap-3"
                >
                  <Play className="h-5 w-5" />
                  See Demo
                </Button>
              </Link>
            </div>
            
            {/* Stats or social proof */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-main-foreground/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-medium">Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-medium">Track Multiple Channels</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-main-foreground rounded-full"></div>
                <span className="text-sm font-medium">AI-Powered Summaries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements - positioned to avoid content overlap */}
      <div className="absolute top-10 left-10 h-20 w-20 border-4 border-main-foreground/20 rounded-base transform rotate-12 hidden lg:block z-0"></div>
      <div className="absolute bottom-10 right-10 h-16 w-16 border-4 border-main-foreground/20 rounded-base transform -rotate-12 hidden lg:block z-0"></div>
      <div className="absolute top-1/2 left-20 h-12 w-12 border-4 border-main-foreground/20 rounded-base transform rotate-45 hidden xl:block z-0"></div>
    </section>
  )
}
