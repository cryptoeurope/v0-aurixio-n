import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ActiveFunds } from "@/components/active-funds"
import { PerformanceTransparency } from "@/components/performance-transparency"
import { HowItWorks } from "@/components/how-it-works"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <Header />
      <main>
        <Hero />
        <ActiveFunds />
        <PerformanceTransparency />
        <HowItWorks />
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
