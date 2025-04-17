import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Tokenomics
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">AURIX Token Distribution</h2>
            <p className="text-gray-300 mb-6">
              The AURIX token is the governance and utility token of the Aurixion platform. It provides holders with
              voting rights on investment strategies, platform developments, and fund allocations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-teal-400">Total Supply</h3>
                <p className="text-gray-300">100,000,000 AURIX tokens</p>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Initial Price</h3>
                <p className="text-gray-300">$0.50 USD per AURIX token</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-white">Token Allocation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-teal-400">IDO</h4>
                <p className="text-gray-300">10% (10,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-blue-400">Team</h4>
                <p className="text-gray-300">15% (15,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-teal-400">Treasury</h4>
                <p className="text-gray-300">20% (20,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-blue-400">Ecosystem</h4>
                <p className="text-gray-300">25% (25,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-teal-400">Liquidity</h4>
                <p className="text-gray-300">10% (10,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-blue-400">Marketing</h4>
                <p className="text-gray-300">10% (10,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-teal-400">Advisors</h4>
                <p className="text-gray-300">5% (5,000,000 AURIX)</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-blue-400">Reserve</h4>
                <p className="text-gray-300">5% (5,000,000 AURIX)</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Token Utility</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  1
                </div>
                <div>
                  <span className="font-bold text-white">Governance Rights</span> - Vote on investment strategies,
                  platform developments, and fund allocations.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  2
                </div>
                <div>
                  <span className="font-bold text-white">Performance Returns</span> - Receive proportional returns based
                  on platform performance.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  3
                </div>
                <div>
                  <span className="font-bold text-white">Proposal Submission</span> - Submit investment proposals once
                  certain holding thresholds are met.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-400 flex-shrink-0 flex items-center justify-center text-dark-900 font-bold">
                  4
                </div>
                <div>
                  <span className="font-bold text-white">Premium Access</span> - Gain access to premium educational
                  resources and market analyses.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-gray-300 mb-6">
              Participate in our IDO and become a token holder with governance rights in our ecosystem.
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
