"use client"

import { useEffect } from "react"
import { Mail, Play, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const emailFormats = [
  {
    title: "Standard Format",
    subject: "New Video: Building Next.js Apps - TechTutorials",
    summary: "This video covers the fundamentals of building modern Next.js applications. Key topics include: server-side rendering, API routes, and deployment strategies.",
    type: "standard"
  },
  {
    title: "Executive Summary",
    subject: "Quick Brief: AI in Business - BusinessInsights",
    summary: "Main Point: AI adoption increasing 40% in enterprise. Key Stats: ROI improved by 25% average. Takeaway: Start with automation, scale gradually today.",
    type: "executive"
  },
  {
    title: "Detailed Format",
    subject: "Complete Analysis: Python Tips & Tricks - CodeMaster",
    summary: "Comprehensive breakdown of advanced Python techniques: List Comprehensions (0:00-3:45) - Performance benefits over loops. Decorators Deep Dive (3:45-8:20).",
    type: "detailed"
  },
  {
    title: "Executive Summary",
    subject: "Key Points: Design Systems - UXDesign",
    summary: "• Component libraries save 60% development time • Design tokens ensure brand consistency • Documentation is crucial for team adoption and scaling",
    type: "bullets"
  },
  {
    title: "Detailed Format",
    subject: "Fast Update: React 19 Features - ReactNews",
    summary: "React 19 introduces: Server Components, Concurrent Features, and Enhanced DevTools. Main benefits: Better performance and developer experience.",
    type: "quick"
  },
  {
    title: "Detailed Format",
    subject: "In-Depth: Docker Best Practices - DevOps Weekly",
    summary: "Advanced Docker techniques: Multi-stage builds reduce image size by 70%. Layer caching optimization. Security scanning integration. Production deployment strategies.",
    type: "technical"
  },
  {
    title: "Executive Summary",
    subject: "Learning Path: Machine Learning - AI Academy",
    summary: "Complete ML roadmap covered: Data preprocessing (0-15min), Model training (15-30min), Evaluation metrics (30-45min), Deployment strategies (45-60min).",
    type: "tutorial"
  },
  {
    title: "Standard Format",
    subject: "Tech Weekly: Industry Updates - TechDigest",
    summary: "This week: Apple's new M4 chip, Google's AI improvements, Microsoft's cloud expansion. Key impact: Performance gains across all platforms.",
    type: "news"
  },
  {
    title: "Standard Format",
    subject: "Code Analysis: React Patterns - CodeReview Pro",
    summary: "Clean code practices demonstrated: Custom hooks usage, component composition patterns, performance optimization with useMemo and useCallback.",
    type: "code"
  },
  {
    title: "Executive Summary",
    subject: "Launch Alert: New Framework Released - TechNews",
    summary: "Revolutionary new framework announced: 50% faster builds, improved developer experience, backward compatibility. Early access available now.",
    type: "product"
  },
  {
    title: "Standard Format",
    subject: "Security Brief: Latest Vulnerabilities - CyberSec",
    summary: "Critical security patches: CVE-2024-001 fixed, new authentication methods, best practices for secure deployment in production environments.",
    type: "security"
  },
  {
    title: "Standard Format",
    subject: "Optimization Guide: Speed Up Your Apps - Performance Pro",
    summary: "Performance optimization techniques: Bundle splitting strategies, lazy loading implementation, caching mechanisms, monitoring and profiling tools.",
    type: "performance"
  }
]

export function EmailSamples() {
  useEffect(() => {
    console.log("📧 EmailSamples mounted with", emailFormats.length, "formats (12 total)")
    console.log("📧 Email formats:", emailFormats.map(f => f.title).join(", "))
    console.log("📧 Using preloaded animation starting at -25% position")
  }, [])
  return (
    <section className="py-8 lg:py-12 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6">
            Email Format Examples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the summary style that works best for each channel you follow.
          </p>
        </div>

        {/* Sliding Email Examples */}
        <div className="relative overflow-hidden border-4 border-border rounded-base bg-background">
          {/* Ticker container with perfect seamless loop */}
          <div 
            className="flex animate-marquee-preloaded py-6" 
            style={{
              animationDuration: '60s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationFillMode: 'none',
              width: 'max-content'
            }}
            onAnimationStart={() => console.log("📧 Email samples animation started")}
            onAnimationIteration={() => console.log("📧 Email samples animation iteration completed")}
          >
            {/* First set */}
            {emailFormats.map((format, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-3 first:ml-6 last:mr-6">
                <Card className="w-80 h-[420px] bg-background border-3 border-border shadow-neo-lg hover:shadow-neo-xl hover:translate-y-[-2px] transition-all duration-300">
                  <CardHeader className="border-b-3 border-border bg-gradient-to-r from-main/10 to-accent/10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-main text-main-foreground p-2 rounded-base border-2 border-border shadow-neo">
                        <Mail className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm font-bold text-main">
                        {format.title}
                      </CardTitle>
                    </div>
                    <div className="bg-background border-2 border-border rounded-sm p-3 shadow-inner">
                      <p className="text-xs font-bold text-foreground">
                        <span className="text-muted-foreground">Subject:</span> {format.subject}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col p-4">
                    <div className="flex-1 overflow-hidden">
                      <div className="text-sm text-foreground leading-relaxed h-full overflow-y-auto scrollbar-thin scrollbar-thumb-main/30 scrollbar-track-transparent">
                        {format.summary}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4 pt-4 border-t-2 border-border">
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <Play className="h-3 w-3" />
                        Watch Video
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <FileText className="h-3 w-3" />
                        Full Transcript
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Second set for seamless loop */}
            {emailFormats.map((format, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-3 first:ml-6 last:mr-6">
                <Card className="w-80 h-[420px] bg-background border-3 border-border shadow-neo-lg hover:shadow-neo-xl hover:translate-y-[-2px] transition-all duration-300">
                  <CardHeader className="border-b-3 border-border bg-gradient-to-r from-main/10 to-accent/10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-main text-main-foreground p-2 rounded-base border-2 border-border shadow-neo">
                        <Mail className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm font-bold text-main">
                        {format.title}
                      </CardTitle>
                    </div>
                    <div className="bg-background border-2 border-border rounded-sm p-3 shadow-inner">
                      <p className="text-xs font-bold text-foreground">
                        <span className="text-muted-foreground">Subject:</span> {format.subject}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col p-4">
                    <div className="flex-1 overflow-hidden">
                      <div className="text-sm text-foreground leading-relaxed h-full overflow-y-auto scrollbar-thin scrollbar-thumb-main/30 scrollbar-track-transparent">
                        {format.summary}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4 pt-4 border-t-2 border-border">
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <Play className="h-3 w-3" />
                        Watch Video
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <FileText className="h-3 w-3" />
                        Full Transcript
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* Third set for extra continuous content */}
            {emailFormats.map((format, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 mx-3 first:ml-6 last:mr-6">
                <Card className="w-80 h-[420px] bg-background border-3 border-border shadow-neo-lg hover:shadow-neo-xl hover:translate-y-[-2px] transition-all duration-300">
                  <CardHeader className="border-b-3 border-border bg-gradient-to-r from-main/10 to-accent/10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-main text-main-foreground p-2 rounded-base border-2 border-border shadow-neo">
                        <Mail className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-sm font-bold text-main">
                        {format.title}
                      </CardTitle>
                    </div>
                    <div className="bg-background border-2 border-border rounded-sm p-3 shadow-inner">
                      <p className="text-xs font-bold text-foreground">
                        <span className="text-muted-foreground">Subject:</span> {format.subject}
                      </p>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col p-4">
                    <div className="flex-1 overflow-hidden">
                      <div className="text-sm text-foreground leading-relaxed h-full overflow-y-auto scrollbar-thin scrollbar-thumb-main/30 scrollbar-track-transparent">
                        {format.summary}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4 pt-4 border-t-2 border-border">
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <Play className="h-3 w-3" />
                        Watch Video
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 gap-2 text-xs font-bold border-2 hover:shadow-neo">
                        <FileText className="h-3 w-3" />
                        Full Transcript
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Enhanced fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-main/10 text-main border-2 border-main/30 rounded-base px-6 py-3">
            <Mail className="h-5 w-5" />
            <span className="font-bold">Customize format for each channel you follow</span>
          </div>
        </div>
      </div>
    </section>
  )
}
