"use client"

import { 
  Plus, 
  Monitor, 
  Bot, 
  Mail,
  ArrowRight,
  Youtube,
  Brain,
  Inbox,
  Zap,
  Eye,
  Settings
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Add YouTube Channels",
    description: "Simply paste the channel URL or search by name. Configure your preferred summary style and email settings for each channel.",
    icon: Plus,
    color: "bg-blue-500"
  },
  {
    number: "2", 
    title: "We Monitor for New Videos",
    description: "Our system checks RSS feeds every 5 minutes for new uploads. You'll never miss content from your favorite creators.",
    icon: Monitor,
    color: "bg-green-500"
  },
  {
    number: "3",
    title: "AI Creates Smart Summaries", 
    description: "Gemini AI analyzes video transcripts and generates customized summaries based on your preferences for each channel.",
    icon: Bot,
    color: "bg-purple-500"
  },
  {
    number: "4",
    title: "Get Email Summaries",
    description: "Receive beautifully formatted summaries in your inbox with links to watch the full video or read complete transcripts.",
    icon: Mail,
    color: "bg-orange-500"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-8 lg:py-12 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
            How Scribesent Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started in minutes. Our automated system takes care of everything else.
          </p>
        </div>

        {/* Steps Container - Simplified without numbered circles and icons */}
        <div className="max-w-6xl mx-auto">
          {/* Step Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step) => (
              <Card key={step.number} className="h-full group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-neo-xl transition-all duration-300 border-3 border-border">
                <CardContent className="p-6 h-full flex flex-col">
                  <h4 className="font-bold text-foreground mb-4 text-lg">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: "< 5 min", label: "Setup Time", icon: Zap },
            { value: "24/7", label: "Monitoring", icon: Eye },
            { value: "100%", label: "Automated", icon: Settings }
          ].map((stat) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="bg-gradient-to-br from-main/10 to-accent/10 border-3 border-main/30 rounded-base p-8 text-center group hover:translate-y-[-4px] hover:shadow-neo-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-main text-main-foreground p-3 rounded-base border-2 border-border shadow-neo">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-main mb-2">{stat.value}</div>
                <div className="text-sm text-foreground font-bold uppercase tracking-wide">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
