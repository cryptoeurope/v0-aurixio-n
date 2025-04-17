import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Explore Aurixion
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Link href="/vision" className="group">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-teal-400/50 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]">
                <h2 className="text-2xl font-bold mb-4 text-teal-400">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  Learn about our mission to revolutionize hedge funds through AI, blockchain, and community governance.
                </p>
                <span className="text-teal-400 group-hover:underline">Discover more →</span>
              </div>
            </Link>

            <Link href="/join-ido" className="group">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Join the IDO</h2>
                <p className="text-gray-300 mb-6">
                  Participate in our Initial DEX Offering and become an early investor in the Aurixion platform.
                </p>
                <span className="text-blue-400 group-hover:underline">Participate now →</span>
              </div>
            </Link>

            <Link href="/whitepaper" className="group">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-teal-400/50 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.15)]">
                <h2 className="text-2xl font-bold mb-4 text-teal-400">Whitepaper</h2>
                <p className="text-gray-300 mb-6">
                  Dive deep into the technical details, tokenomics, and investment strategies of the Aurixion platform.
                </p>
                <span className="text-teal-400 group-hover:underline">Read whitepaper →</span>
              </div>
            </Link>

            <Link href="/team" className="group">
              <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Team</h2>
                <p className="text-gray-300 mb-6">
                  Meet the experts behind Aurixion, bringing together experience in finance, AI, and blockchain.
                </p>
                <span className="text-blue-400 group-hover:underline">Meet the team →</span>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Join the Aurixion community today and be part of the financial revolution.
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

