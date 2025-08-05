"use client"

import { useEffect } from "react"
import { 
  Youtube,
  Mail, 
  Bot,
  Zap,
  Clock,
  Search
} from "lucide-react"

const features = [
  { icon: Youtube, text: "YouTube Channel Monitoring" },
  { icon: Bot, text: "AI-Powered Summaries" },
  { icon: Mail, text: "Email Delivery" },
  { icon: Zap, text: "Automatic Processing" },
  { icon: Clock, text: "Real-time Updates" },
  { icon: Search, text: "Full Transcript Search" },
  { icon: Youtube, text: "Up to 10 Channels" },
  { icon: Bot, text: "Gemini AI Integration" },
  { icon: Mail, text: "Custom Preferences" },
]

export function SlidingTicker() {
  useEffect(() => {
    console.log("🎯 SlidingTicker mounted with", features.length, "features")
    console.log("🎯 Features content:", features.map(f => f.text).join(", "))
  }, [])
  
  return (
    <section className="relative overflow-hidden bg-white border-y-4 border-black py-4">
      {/* Sliding content with perfect seamless loop */}
      <div className="relative">
        <div 
          className="flex animate-marquee-preloaded whitespace-nowrap" 
          style={{
            animationDuration: '30s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationFillMode: 'none',
            width: 'max-content'
          }}
        >
          {/* First set */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 mx-6 min-w-max flex-shrink-0"
              >
                <Icon className="h-5 w-5 text-black" />
                <span className="text-sm text-black whitespace-nowrap">
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
                className="flex items-center gap-3 mx-6 min-w-max flex-shrink-0"
              >
                <Icon className="h-5 w-5 text-black" />
                <span className="text-sm text-black whitespace-nowrap">
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
                className="flex items-center gap-3 mx-6 min-w-max flex-shrink-0"
              >
                <Icon className="h-5 w-5 text-black" />
                <span className="text-sm text-black whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
