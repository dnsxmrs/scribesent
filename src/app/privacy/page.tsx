import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your information
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Last updated: August 5, 2025
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent collects minimal information necessary to provide our YouTube summarization service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address (for account creation and notifications)</li>
                  <li>YouTube channel URLs you choose to monitor</li>
                  <li>Email delivery preferences</li>
                  <li>Basic usage analytics to improve our service</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Your information is used solely to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generate and deliver AI-powered video summaries</li>
                  <li>Send you notifications about new content</li>
                  <li>Improve our summarization algorithms</li>
                  <li>Provide customer support when requested</li>
                </ul>
                <p className="font-medium text-foreground">
                  We never sell, rent, or share your personal information with third parties.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted data transmission (HTTPS)</li>
                  <li>Secure data storage with encryption at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Update or correct your data</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data</li>
                  <li>Opt out of non-essential communications</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Open Source Commitment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent is an open-source project. Our code is publicly available on GitHub, 
                  allowing you to review exactly how we handle your data. Transparency is core to our mission.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about this Privacy Policy or how we handle your data, 
                  please contact us through our GitHub repository or reach out to our team.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
