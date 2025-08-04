import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              ScribeSent Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Updates, insights, and stories from our development journey
            </p>
          </div>

          {/* Unified Blog Article */}
          <article className="bg-card border-2 border-border rounded-base shadow-neo p-8 w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="bg-main text-main-foreground px-3 py-1 rounded-base text-sm font-bold border-2 border-border w-fit">Featured</div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <span>August 5, 2025</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-2">Built for Kiro Hackathon: Never Miss YouTube Content Again</h2>
            <div className="text-foreground space-y-4">
              <p>
                We&apos;re excited to announce that ScribeSent was created as part of the{" "}
                <Link 
                  href="https://kiro.devpost.com/" 
                  target="_blank"
                  className="text-main hover:underline font-medium inline-flex items-center gap-1"
                >
                  Kiro Hackathon
                  <ExternalLink className="h-3 w-3" />
                </Link>
                ! Our mission is simple: help you never miss important content from your favorite YouTube creators.
              </p>
              <p>
                In today&apos;s fast-paced world, staying updated with your favorite YouTube channels can be overwhelming. 
                With creators posting multiple videos per week and the sheer volume of content available, 
                it&apos;s easy to miss valuable insights, tutorials, or updates that matter to you.
              </p>
              <p>
                That&apos;s where ScribeSent comes in. Our AI-powered platform monitors YouTube channels you care about 
                and delivers concise, intelligent summaries straight to your inbox. No more endless scrolling 
                or FOMO - just the key insights you need, when you need them.
              </p>
            </div>

            <div className="bg-muted/20 border-2 border-border rounded-base p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Meet the Team
              </h3>
              <div className="space-y-2 text-foreground">
                  <p>
                    <strong className="text-foreground">
                      <a href="https://github.com/4regab" target="_blank" rel="noopener noreferrer" className="hover:underline text-main">
                        4regab
                      </a>
                    </strong> - Lead Developer &amp; UI/UX Designer
                  </p>
                  <p>
                    <strong className="text-foreground">
                      <a href="https://github.com/dnsxmrs" target="_blank" rel="noopener noreferrer" className="hover:underline text-main">
                        dnsxmrs
                      </a>
                    </strong> - Backend Developer &amp; Technical Lead
                  </p>
              </div>
            </div>

            <div className="space-y-4 text-foreground">
              <h3 className="text-xl font-bold text-foreground">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automated YouTube channel monitoring</li>
                <li>AI-powered video summarization using advanced language models</li>
                <li>Personalized email delivery with clean, readable summaries</li>
                <li>Open-source codebase for transparency and community contributions</li>
                <li>Privacy-first approach with minimal data collection</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-2">Technical Deep Dive: How ScribeSent Works</h2>
            <div className="text-foreground space-y-4">
              <p>
                ScribeSent leverages a modern tech stack to deliver reliable, accurate video summaries:
              </p>
              <div className="bg-muted/20 border-2 border-border rounded-base p-4">
                <h4 className="font-bold text-foreground mb-2">Tech Stack:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-foreground">
                  <li><strong>Frontend:</strong> Next.js 15, TypeScript, Tailwind CSS, Shadcn</li>
                  <li><strong>Authentication:</strong> Supabase with Google OAuth</li>
                  <li><strong>AI Processing:</strong> Gemini AI for summarization</li>
                  <li><strong>Email Delivery:</strong> Automated email service integration</li>
                  <li><strong>YouTube Monitoring:</strong> YouTube API integration for content monitoring</li>
                </ul>
              </div>
              <p>
                Our neobrutalism design approach ensures a bold, accessible interface that works 
                beautifully across all devices while maintaining the serious, professional tone 
                appropriate for a productivity tool.
              </p>
            </div>


            {/* Extended Blog Content */}
            <div className="text-foreground space-y-4 mt-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Why ScribeSent Matters</h2>
              <p>
                The explosion of content on YouTube has made it both a blessing and a challenge for viewers. While there is more valuable information than ever before, it has become increasingly difficult to keep up with the channels and creators that matter most to you. ScribeSent was born out of this need—to help users cut through the noise and focus on what truly matters.
              </p>
              <p>
                Our team spent countless hours researching the pain points of YouTube users. We discovered that many people subscribe to dozens of channels but only have time to watch a handful of videos each week. Important tutorials, news, and deep-dive discussions often get lost in the shuffle. ScribeSent solves this by delivering concise, AI-generated summaries that highlight the key points, so you never miss out on valuable content.
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">How We Built ScribeSent</h2>
              <p>
                Building ScribeSent was a collaborative effort that combined expertise in AI, web development, and user experience design. We leveraged the latest advancements in natural language processing to ensure our summaries are not only accurate but also easy to read and actionable. Our frontend is built with Next.js and Tailwind CSS, providing a fast and responsive user interface that looks great on any device.
              </p>
              <p>
                Security and privacy were top priorities from day one. We use Google OAuth for authentication, ensuring that your credentials are never stored on our servers. All data is encrypted in transit and at rest, and we collect only the minimum information necessary to provide our service. Our commitment to privacy is reflected in every aspect of our platform.
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">Community and Open Source</h2>
              <p>
                ScribeSent is more than just a tool—it's a community-driven project. We believe in the power of open source and welcome contributions from developers, designers, and users alike. Whether you want to add new features, improve documentation, or simply share your feedback, your input is valued and appreciated.
              </p>
              <p>
                Our vision is to create a platform that empowers users to take control of their digital content consumption. By making ScribeSent free and open to all, we hope to foster a community of learners, creators, and enthusiasts who are passionate about making the most of their time online.
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-2">Looking Ahead</h2>
              <p>
                As we continue to develop ScribeSent, our focus remains on delivering value to our users. We are constantly exploring new ways to enhance the summarization process, improve the user interface, and expand the range of supported content. Your feedback drives our roadmap, and we encourage you to reach out with suggestions, bug reports, or feature requests.
              </p>
              <p>
                Thank you for being part of the ScribeSent journey. Together, we can make information more accessible, manageable, and meaningful for everyone.
              </p>
            </div>

            <div className="bg-main text-main-foreground border-2 border-border rounded-base shadow-neo p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-main-foreground/80 mb-6">
                Join thousands of users who never miss important YouTube content
              </p>
              <Link href="/login">
                <button className="bg-background text-foreground px-6 py-3 rounded-base border-2 border-border font-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                  Start Your Free Account
                </button>
              </Link>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  )
}
