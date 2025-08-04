import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using ScribeSent
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Last updated: August 5, 2025
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using ScribeSent, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Description</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent is an open-source platform that provides AI-powered summaries of YouTube videos 
                  from channels you choose to monitor. Our service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automated monitoring of YouTube channels</li>
                  <li>AI-generated video summaries</li>
                  <li>Email delivery of summaries</li>
                  <li>Channel management and preferences</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>As a user of ScribeSent, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and current information</li>
                  <li>Use the service for lawful purposes only</li>
                  <li>Not attempt to circumvent or abuse the service</li>
                  <li>Respect the intellectual property of content creators</li>
                  <li>Not use the service to spam or harass others</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Content and Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent generates summaries of publicly available YouTube content. We respect 
                  the intellectual property rights of content creators. Our summaries are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Transformative in nature (summaries, not copies)</li>
                  <li>Used for informational purposes</li>
                  <li>Always include attribution to original creators</li>
                  <li>Can be removed upon request from content owners</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Availability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to provide reliable service, ScribeSent is provided &quot;as is&quot; without 
                  warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uninterrupted service availability</li>
                  <li>Error-free operation</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Accuracy of AI-generated summaries</li>
                </ul>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent and its creators shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages resulting from your use of the service.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Open Source License</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScribeSent is released under the MIT License. You are free to use, modify, 
                  and distribute the software according to the terms of this license.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these terms at any time. Users will be notified 
                  of significant changes via email or through the service interface.
                </p>
              </div>
            </section>

            <section className="bg-card border-2 border-border rounded-base shadow-neo p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms of Service, please contact us through our 
                  GitHub repository or reach out to our development team.
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
