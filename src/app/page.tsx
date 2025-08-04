import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SlidingTicker } from "@/components/sliding-ticker"
import { FeaturesGrid } from "@/components/features-grid"
import { EmailSamples } from "@/components/email-samples"
import { HowItWorks } from "@/components/how-it-works"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SlidingTicker />
      <FeaturesGrid />
      <EmailSamples />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  )
}
