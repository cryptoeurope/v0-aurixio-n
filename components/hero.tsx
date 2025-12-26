import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1425] to-[#0a0f1a]"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Professional headline focused on performance */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Real Fund Performance.
            <br />
            <span className="text-cyan-400">Transparent Risk.</span>
            <br />
            Professional Capital Management.
          </h1>

          {/* Clear, professional subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Multiple active funds delivering performance-first investment strategies. Crypto tokenization is part of our
            future roadmap.
          </p>

          {/* Professional CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#active-funds">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-medium">
                View Active Funds
              </Button>
            </Link>
            <Link href="#performance">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-medium bg-transparent"
              >
                See Performance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
