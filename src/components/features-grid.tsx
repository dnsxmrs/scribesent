"use client"

import {
  Monitor,
  Bot,
  Mail,
  Search
} from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Automatic Monitoring",
    description: "Track up to 10 YouTube channels automatically. We monitor RSS feeds every 5 minutes for new uploads."
  },
  {
    icon: Bot,
    title: "AI-Powered Summaries",
    description: "Get intelligent summaries using Gemini AI with customizable formats and styles for each channel."
  },
  {
    icon: Mail,
    title: "Email Delivery",
    description: "Receive summaries directly in your inbox with customizable preferences for each channel you follow."
  },
  {
    icon: Search,
    title: "Full Transcript History",
    description: "Access complete video transcripts for 30 days. Search through your transcript history anytime."
  }
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-0 bg-white">
      <div className="w-full">
        {/* Features Grid - 2x2 layout with neobrutalism styling */}
        <div className="grid grid-cols-2 border-4 border-black">
          {features.map((feature, index) => {
            const Icon = feature.icon
            // Diagonal pattern: top-left and bottom-right are light, top-right and bottom-left are blue
            const isBlueBackground = (index === 1) || (index === 2)

            return (
              <div
                key={feature.title}
                className={`
                  relative p-8 min-h-[300px]
                  ${isBlueBackground ? 'bg-blue-600 text-white' : 'bg-white text-black'}
                  ${index % 2 === 1 ? 'border-l-2 border-black' : ''}
                  ${index >= 2 ? 'border-t-2 border-black' : ''}
                `}
              >
                {/* Icon in top-left corner */}
                <div className="mb-6">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-black mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
