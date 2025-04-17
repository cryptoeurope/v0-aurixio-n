import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Our Vision
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Revolutionizing Hedge Funds</h2>
                <p className="text-gray-300">
                  Aurixion is building the world's first truly decentralized hedge fund, combining the power of
                  artificial intelligence with blockchain transparency and community governance. Our vision is to
                  democratize access to sophisticated investment strategies that have traditionally been available only
                  to the ultra-wealthy and institutional investors.
                </p>
              </div>
              <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Increased logo size to be 3x larger */}
                  <div className="relative h-72 w-72">
                    <Image
                      src="/images/aurixion-full-logo-with-text.png"
                      alt="Aurixion Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-teal-400">Our Core Principles</h3>
            <ul className="space-y-4 mb-6 text-gray-300">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  1
                </div>
                <div>
                  <span className="font-bold text-white">Transparency</span> - All fund activities, investments, and
                  performance metrics are recorded on the blockchain and accessible to token holders.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  2
                </div>
                <div>
                  <span className="font-bold text-white">Decentralization</span> - Investment decisions and platform
                  development are governed by the community through token-based voting.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  3
                </div>
                <div>
                  <span className="font-bold text-white">Intelligence</span> - AI-driven investment strategies
                  continuously analyze market conditions to optimize returns while managing risk.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  4
                </div>
                <div>
                  <span className="font-bold text-white">Accessibility</span> - Low minimum investment thresholds and
                  fractional ownership enable participation for investors of all sizes.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Roadmap to Revolution</h2>
            <div className="space-y-8 relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500"></div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-dark-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Phase 1: Foundation</h3>
                <p className="text-gray-300">
                  Initial platform development, team building, and strategic partnerships. Launch of the IDO and token
                  distribution.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-dark-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Phase 2: Expansion</h3>
                <p className="text-gray-300">
                  Deployment of initial investment strategies, governance system implementation, and community building.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-dark-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Phase 3: Innovation</h3>
                <p className="text-gray-300">
                  Advanced AI strategy deployment, cross-chain integration, and expanded investment opportunities.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                  <div className="w-3 h-3 bg-dark-900 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Phase 4: Maturity</h3>
                <p className="text-gray-300">
                  Full decentralization of fund management, global expansion, and institutional partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Vision</h2>
            <p className="text-gray-300 mb-6">
              Be part of the financial revolution. Join Aurixion and help shape the future of decentralized investing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-ido"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Join the IDO
              </Link>
              <Link
                href="/"
                className="border border-teal-400 text-white bg-transparent hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

