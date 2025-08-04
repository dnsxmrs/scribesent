import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-scribesent">
                  <AccordionTrigger>What is ScribeSent?</AccordionTrigger>
                  <AccordionContent>
                    ScribeSent is an AI-powered service that monitors your favorite YouTube channels and delivers 
                    concise, intelligent summaries of new videos directly to your email inbox. Never miss 
                    important content from creators you follow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-to-get-started">
                  <AccordionTrigger>How do I get started?</AccordionTrigger>
                  <AccordionContent>
                    Simply sign up with your Google account, add the YouTube channels you want to monitor, 
                    set your summary preferences, and we&apos;ll handle the rest. You&apos;ll start receiving 
                    email summaries within 24 hours of new video uploads.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="is-free">
                  <AccordionTrigger>Is ScribeSent free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes! ScribeSent is completely free for all users. There are no pricing tiers, subscriptions, or premium plans—everyone can enjoy the full set of features at no cost.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                How It Works
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ai-accuracy">
                  <AccordionTrigger>How accurate are the AI summaries?</AccordionTrigger>
                  <AccordionContent>
                    Our AI uses advanced language models to create highly accurate summaries that capture 
                    the key points, main arguments, and important details from each video. The summaries 
                    are designed to give you the essential information without losing context.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="video-types">
                  <AccordionTrigger>What types of videos work best with ScribeSent?</AccordionTrigger>
                  <AccordionContent>
                    ScribeSent works excellently with educational content, tutorials, news updates, tech reviews, 
                    and informational videos. While it can summarize entertainment content, it&apos;s most valuable 
                    for content where you need to quickly understand key insights and information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery-speed">
                  <AccordionTrigger>How quickly are summaries delivered?</AccordionTrigger>
                  <AccordionContent>
                    Summaries are typically generated and sent within 1-4 hours of a new video being uploaded. 
                    Processing time depends on video length and current system load. You can also choose to 
                    receive daily digest emails instead of individual summaries.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="customize-format">
                  <AccordionTrigger>Can I customize the summary format?</AccordionTrigger>
                  <AccordionContent>
                    Yes! You can choose between different summary lengths (brief, standard, detailed) and 
                    formats (bullet points, paragraphs, or structured sections). Premium users also get access 
                    to custom templates and advanced formatting options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Account & Settings */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Account & Settings
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="add-remove-channels">
                  <AccordionTrigger>How do I add or remove YouTube channels?</AccordionTrigger>
                  <AccordionContent>
                    In your dashboard, simply paste the YouTube channel URL or search for the channel name. 
                    To remove channels, go to your subscription list and click the remove button next to any channel. 
                    Changes take effect immediately.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pause-summaries">
                  <AccordionTrigger>Can I pause summaries temporarily?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! You can pause summaries for individual channels or your entire account. 
                    This is perfect for vacations or busy periods when you don&apos;t want to receive emails. 
                    Resume anytime from your account settings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="email-address">
                  <AccordionTrigger>What email address will summaries come from?</AccordionTrigger>
                  <AccordionContent>
                    All summary emails are sent from summaries@scribesent.com. Make sure to add this address 
                    to your safe sender list to ensure delivery. We recommend creating a dedicated folder 
                    for ScribeSent emails to keep them organized.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Privacy & Security */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Privacy & Security
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="data-collection">
                  <AccordionTrigger>What data does ScribeSent collect?</AccordionTrigger>
                  <AccordionContent>
                    We follow a privacy-first approach and only collect the minimum data necessary: your email address, 
                    the YouTube channels you want to monitor, and your summary preferences. We never store video content 
                    or personal viewing history. Read our Privacy Policy for complete details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-security">
                  <AccordionTrigger>Is my account secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We use Google OAuth for authentication, which means we never store your password. 
                    All data is encrypted in transit and at rest. We also implement industry-standard 
                    security practices and regularly audit our systems.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delete-account">
                  <AccordionTrigger>Can I delete my account and data?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. You can delete your account at any time from your account settings. 
                    This will permanently remove all your data, subscriptions, and preferences. 
                    The deletion is immediate and irreversible.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Technical Support */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-border pb-4">
                Technical Support
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="email-issues">
                  <AccordionTrigger>I&apos;m not receiving email summaries. What should I do?</AccordionTrigger>
                  <AccordionContent>
                    First, check your spam/junk folder and add summaries@scribesent.com to your safe sender list. 
                    If you&apos;re still not receiving emails, verify that your monitored channels have uploaded 
                    new content recently. Contact support if the issue persists.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="browser-support">
                  <AccordionTrigger>What browsers are supported?</AccordionTrigger>
                  <AccordionContent>
                    ScribeSent works on all modern browsers including Chrome, Firefox, Safari, and Edge. 
                    We recommend using the latest version of your preferred browser for the best experience. 
                    The interface is fully responsive and works on mobile devices too.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="contact-support">
                  <AccordionTrigger>How do I contact support?</AccordionTrigger>
                  <AccordionContent>
                    You can reach our support team at support@scribesent.com. We typically respond within 24 hours. 
                    For faster assistance, check this FAQ first as it covers the most common questions and issues.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
