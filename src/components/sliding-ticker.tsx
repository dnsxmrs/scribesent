"use client"

import { useEffect } from "react"
import { 
  Star, 
  Youtube, 
  Bot, 
  Zap, 
  Mail, 
  Search, 
  Target,
  Shield,
  Clock,
  Users,
  Rocket,
  Heart,
  Brain,
  Globe,
  Download
} from "lucide-react"

const features = [
  { icon: Star, text: "Scribesent" },
  { icon: Youtube, text: "YouTube Summaries" },
  { icon: Bot, text: "AI-Powered" },
  { icon: Zap, text: "Open Source" },
  { icon: Mail, text: "Email Delivery" },
  { icon: Search, text: "Full Transcripts" },
  { icon: Target, text: "Channel Tracking" },
  { icon: Shield, text: "Privacy First" },
  { icon: Clock, text: "Real-time Updates" },
  { icon: Users, text: "Community Driven" },
  { icon: Rocket, text: "Fast Processing" },
  { icon: Heart, text: "User Friendly" },
  { icon: Brain, text: "Smart Analysis" },
  { icon: Globe, text: "Global Access" },
  { icon: Download, text: "Easy Setup" },
  { icon: Star, text: "Free Forever" },
  { icon: Youtube, text: "Video Intelligence" },
  { icon: Bot, text: "Machine Learning" },
  { icon: Zap, text: "Lightning Fast" },
  { icon: Mail, text: "Smart Notifications" },
  { icon: Search, text: "Advanced Search" },
  { icon: Target, text: "Perfect Accuracy" },
  { icon: Shield, text: "Secure Platform" },
  { icon: Clock, text: "Instant Updates" },
  { icon: Users, text: "Growing Community" },
  { icon: Rocket, text: "High Performance" },
  { icon: Heart, text: "Love to Use" },
  { icon: Brain, text: "Deep Learning" },
  { icon: Globe, text: "Worldwide" },
  { icon: Download, text: "Quick Install" },
]

export function SlidingTicker() {
  useEffect(() => {
    console.log("🎯 SlidingTicker mounted with", features.length, "features (30 total)")
    console.log("🎯 Features content:", features.map(f => f.text).join(", "))
    console.log("🎯 Using preloaded animation starting at -25% position")
  }, [])
  return (
    <section className="relative overflow-hidden bg-background border-y-4 border-border py-8">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-main via-accent to-main"></div>
      
      {/* Sliding content with perfect seamless loop */}
      <div className="relative">
        <div 
          className="flex animate-marquee-preloaded whitespace-nowrap" 
          style={{
            animationDuration: '45s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationFillMode: 'none',
            width: 'max-content'
          }}
          onAnimationStart={() => console.log("🎯 Ticker animation started")}
          onAnimationIteration={() => console.log("🎯 Ticker animation iteration completed")}
        >
          {/* First set */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={`first-${index}`}
                className="flex items-center gap-6 mx-8 min-w-max flex-shrink-0"
              >
                <div className="bg-main text-main-foreground p-3 rounded-base border-3 border-border shadow-neo-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-foreground whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            )
          })}
          
          {/* Second set for seamless loop */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={`second-${index}`}
                className="flex items-center gap-6 mx-8 min-w-max flex-shrink-0"
              >
                <div className="bg-main text-main-foreground p-3 rounded-base border-3 border-border shadow-neo-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-foreground whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            )
          })}

          {/* Third set for extra continuous content */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={`third-${index}`}
                className="flex items-center gap-6 mx-8 min-w-max flex-shrink-0"
              >
                <div className="bg-main text-main-foreground p-3 rounded-base border-3 border-border shadow-neo-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-foreground whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Bottom border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-main via-accent to-main"></div>
      
      {/* Enhanced fade edges for seamless effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
    </section>
  )
}
