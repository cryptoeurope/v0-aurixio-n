import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { InvestmentOpportunities } from "@/components/investment-opportunities"
import { HowItWorks } from "@/components/how-it-works"
import { CommunityGovernance } from "@/components/community-governance"
import { Partners } from "@/components/partners"
import { Education } from "@/components/education"
import { Roadmap } from "@/components/roadmap"
import { JoinRevolution } from "@/components/join-revolution"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <InvestmentOpportunities />
        <HowItWorks />
        <CommunityGovernance />
        <Roadmap />
        <Education />
        <Partners />
        <JoinRevolution />
      </main>
      <Footer />
    </div>
  )
}

