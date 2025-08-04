"use client"

import { 
  Monitor, 
  Bot, 
  Mail, 
  Search
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Monitor,
    title: "Automatic Monitoring",
    description: "Track up to 10 YouTube channels automatically. We monitor RSS feeds every 5 minutes for new uploads.",
    details: [
      "RSS feed monitoring",
      "5-minute check intervals", 
      "Up to 10 channels",
      "Real-time notifications"
    ]
  },
  {
    icon: Bot,
    title: "AI-Powered Summaries",
    description: "Get intelligent summaries using Gemini AI with customizable formats and styles for each channel.",
    details: [
      "Gemini AI integration",
      "Multiple format options",
      "Customizable styles",
      "Channel-specific settings"
    ]
  },
  {
    icon: Mail,
    title: "Email Delivery",
    description: "Receive summaries directly in your inbox with customizable preferences for each channel you follow.",
    details: [
      "Direct inbox delivery",
      "Custom preferences",
      "Per-channel settings",
      "Scheduled delivery"
    ]
  },
  {
    icon: Search,
    title: "Full Transcript History",
    description: "Access complete video transcripts for 30 days. Search through your transcript history anytime.",
    details: [
      "30-day storage",
      "Full transcript access",
      "Search functionality",
      "Download capability"
    ]
  }
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Features Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay updated with your favorite YouTube channels
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title} 
                className="group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-lg transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-main text-main-foreground p-3 rounded-base border-2 border-border shadow-neo group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all duration-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Feature details list */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-main rounded-full"></div>
                        <span className="text-foreground font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Call to action at bottom of section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-main/10 text-main border-2 border-main/20 rounded-base px-6 py-3">
            <Bot className="h-5 w-5" />
            <span className="font-bold">Open source project under MIT License</span>
          </div>
        </div>
      </div>
    </section>
  )
}
