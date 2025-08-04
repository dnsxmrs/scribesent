import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ScribeSent
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {/* Getting Started */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Getting Started
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    What is ScribeSent?
                  </h3>
                  <p className="text-muted-foreground">
                    ScribeSent is an AI-powered service that monitors your favorite YouTube channels and delivers 
                    concise, intelligent summaries of new videos directly to your email inbox. Never miss 
                    important content from creators you follow.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    How do I get started?
                  </h3>
                  <p className="text-muted-foreground">
                    Simply sign up with your Google account, add the YouTube channels you want to monitor, 
                    set your summary preferences, and we&apos;ll handle the rest. You&apos;ll start receiving 
                    email summaries within 24 hours of new video uploads.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    Is ScribeSent free to use?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! ScribeSent is completely free for all users. There are no pricing tiers, subscriptions, or premium plans—everyone can enjoy the full set of features at no cost.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                How It Works
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    How accurate are the AI summaries?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI uses advanced language models to create highly accurate summaries that capture 
                    the key points, main arguments, and important details from each video. The summaries 
                    are designed to give you the essential information without losing context.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    What types of videos work best with ScribeSent?
                  </h3>
                  <p className="text-muted-foreground">
                    ScribeSent works excellently with educational content, tutorials, news updates, tech reviews, 
                    and informational videos. While it can summarize entertainment content, it&apos;s most valuable 
                    for content where you need to quickly understand key insights and information.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    How quickly are summaries delivered?
                  </h3>
                  <p className="text-muted-foreground">
                    Summaries are typically generated and sent within 1-4 hours of a new video being uploaded. 
                    Processing time depends on video length and current system load. You can also choose to 
                    receive daily digest emails instead of individual summaries.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    Can I customize the summary format?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! You can choose between different summary lengths (brief, standard, detailed) and 
                    formats (bullet points, paragraphs, or structured sections). Premium users also get access 
                    to custom templates and advanced formatting options.
                  </p>
                </div>
              </div>
            </section>

            {/* Account & Settings */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Account & Settings
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    How do I add or remove YouTube channels?
                  </h3>
                  <p className="text-muted-foreground">
                    In your dashboard, simply paste the YouTube channel URL or search for the channel name. 
                    To remove channels, go to your subscription list and click the remove button next to any channel. 
                    Changes take effect immediately.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    Can I pause summaries temporarily?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! You can pause summaries for individual channels or your entire account. 
                    This is perfect for vacations or busy periods when you don&apos;t want to receive emails. 
                    Resume anytime from your account settings.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    What email address will summaries come from?
                  </h3>
                  <p className="text-muted-foreground">
                    All summary emails are sent from summaries@scribesent.com. Make sure to add this address 
                    to your safe sender list to ensure delivery. We recommend creating a dedicated folder 
                    for ScribeSent emails to keep them organized.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy & Security */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Privacy & Security
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    What data does ScribeSent collect?
                  </h3>
                  <p className="text-muted-foreground">
                    We follow a privacy-first approach and only collect the minimum data necessary: your email address, 
                    the YouTube channels you want to monitor, and your summary preferences. We never store video content 
                    or personal viewing history. Read our Privacy Policy for complete details.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    Is my account secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! We use Google OAuth for authentication, which means we never store your password. 
                    All data is encrypted in transit and at rest. We also implement industry-standard 
                    security practices and regularly audit our systems.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    Can I delete my account and data?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. You can delete your account at any time from your account settings. 
                    This will permanently remove all your data, subscriptions, and preferences. 
                    The deletion is immediate and irreversible.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Support */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Technical Support
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    I&apos;m not receiving email summaries. What should I do?
                  </h3>
                  <p className="text-muted-foreground">
                    First, check your spam/junk folder and add summaries@scribesent.com to your safe sender list. 
                    If you&apos;re still not receiving emails, verify that your monitored channels have uploaded 
                    new content recently. Contact support if the issue persists.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    What browsers are supported?
                  </h3>
                  <p className="text-muted-foreground">
                    ScribeSent works on all modern browsers including Chrome, Firefox, Safari, and Edge. 
                    We recommend using the latest version of your preferred browser for the best experience. 
                    The interface is fully responsive and works on mobile devices too.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-base shadow-neo p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-main" />
                    How do I contact support?
                  </h3>
                  <p className="text-muted-foreground">
                    You can reach our support team at support@scribesent.com. We typically respond within 24 hours. 
                    For faster assistance, check this FAQ first as it covers the most common questions and issues.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-main text-main-foreground border-2 border-border rounded-base shadow-neo p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-main-foreground/80 mb-6">
                Our support team is here to help you get the most out of ScribeSent
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:support@scribesent.com">
                  <button className="bg-background text-foreground px-6 py-3 rounded-base border-2 border-border font-bold hover:translate-x-[2px] hover:translate-y-[2px] transition-transform">
                    Contact Support
                  </button>
                </a>
                <a href="/login">
                  <button className="bg-transparent border-2 border-main-foreground text-main-foreground px-6 py-3 rounded-base font-bold hover:bg-main-foreground hover:text-main transition-colors">
                    Try ScribeSent Free
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
