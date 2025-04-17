import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Documentation
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Platform Documentation</h2>
            <p className="text-gray-300 mb-8">
              Welcome to the Aurixion documentation. Here you'll find comprehensive guides and documentation to help you
              start working with Aurixion as quickly as possible, as well as support if you get stuck.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-400">Getting Started</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/introduction" className="text-gray-300 hover:text-white transition-colors">
                      Introduction to Aurixion
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/quick-start" className="text-gray-300 hover:text-white transition-colors">
                      Quick Start Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/wallet-setup" className="text-gray-300 hover:text-white transition-colors">
                      Wallet Setup
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/ido-participation" className="text-gray-300 hover:text-white transition-colors">
                      IDO Participation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Platform Features</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/ai-strategies" className="text-gray-300 hover:text-white transition-colors">
                      AI Investment Strategies
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/governance" className="text-gray-300 hover:text-white transition-colors">
                      Governance System
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/transparency" className="text-gray-300 hover:text-white transition-colors">
                      Blockchain Transparency
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/returns" className="text-gray-300 hover:text-white transition-colors">
                      Performance Returns
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-400">Tokenomics</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/token-utility" className="text-gray-300 hover:text-white transition-colors">
                      Token Utility
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/distribution" className="text-gray-300 hover:text-white transition-colors">
                      Token Distribution
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/vesting" className="text-gray-300 hover:text-white transition-colors">
                      Vesting Schedule
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/staking" className="text-gray-300 hover:text-white transition-colors">
                      Staking Mechanism
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Technical Documentation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/docs/smart-contracts" className="text-gray-300 hover:text-white transition-colors">
                      Smart Contracts
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/api" className="text-gray-300 hover:text-white transition-colors">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/security" className="text-gray-300 hover:text-white transition-colors">
                      Security Measures
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/integrations" className="text-gray-300 hover:text-white transition-colors">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Developer Resources</h2>
            <p className="text-gray-300 mb-6">
              Resources for developers looking to build on or integrate with the Aurixion platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-teal-400">GitHub Repository</h3>
                <p className="text-gray-300 mb-4">Access our open-source code and contribute to the platform.</p>
                <Link href="https://github.com/aurixion" className="text-teal-400 hover:underline flex items-center">
                  View Repository →
                </Link>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-blue-400">Developer API</h3>
                <p className="text-gray-300 mb-4">Comprehensive API documentation for platform integration.</p>
                <Link href="/docs/api" className="text-blue-400 hover:underline flex items-center">
                  Explore API →
                </Link>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-teal-400">SDK</h3>
                <p className="text-gray-300 mb-4">Software Development Kit for building applications on Aurixion.</p>
                <Link href="/docs/sdk" className="text-teal-400 hover:underline flex items-center">
                  Get SDK →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Our support team is always ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Contact Support
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
