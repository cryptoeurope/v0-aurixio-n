import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Roadmap
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Journey to Revolutionize Decentralized Finance</h2>

            <div className="space-y-16 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500 transform -translate-x-1/2"></div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-teal-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="bg-dark-700 p-6 rounded-lg md:text-right md:mr-8">
                    <h3 className="text-xl font-bold mb-2 text-teal-400">Q1 2025</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Foundation Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc md:list-none pl-5 md:pl-0">
                      <li>Concept development and market research</li>
                      <li>Core team formation</li>
                      <li>Initial whitepaper draft</li>
                      <li>Strategic partnerships exploration</li>
                      <li>Brand identity development</li>
                    </ul>
                  </div>
                  <div className="md:ml-8 hidden md:block"></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-blue-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="md:mr-8 hidden md:block"></div>
                  <div className="bg-dark-700 p-6 rounded-lg md:ml-8">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Q2 2025</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Development Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc pl-5">
                      <li>Platform architecture design</li>
                      <li>Smart contract development</li>
                      <li>AI algorithm prototype</li>
                      <li>Security audit preparations</li>
                      <li>Community building initiatives</li>
                      <li>Marketing campaign planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-teal-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="bg-dark-700 p-6 rounded-lg md:text-right md:mr-8">
                    <h3 className="text-xl font-bold mb-2 text-teal-400">Q3 2025</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Launch Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc md:list-none pl-5 md:pl-0">
                      <li>Initial DEX Offering (IDO)</li>
                      <li>Mainnet launch</li>
                      <li>Governance system activation</li>
                      <li>Initial investment strategies deployment</li>
                      <li>Exchange listings</li>
                      <li>Marketing campaign launch</li>
                    </ul>
                  </div>
                  <div className="md:ml-8 hidden md:block"></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-blue-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="md:mr-8 hidden md:block"></div>
                  <div className="bg-dark-700 p-6 rounded-lg md:ml-8">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Q4 2025</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Expansion Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc pl-5">
                      <li>Advanced AI strategy implementation</li>
                      <li>Cross-chain integration</li>
                      <li>Mobile application development</li>
                      <li>Institutional partnerships</li>
                      <li>Global expansion initiatives</li>
                      <li>Enhanced governance features</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-teal-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="bg-dark-700 p-6 rounded-lg md:text-right md:mr-8">
                    <h3 className="text-xl font-bold mb-2 text-teal-400">Q1 2026</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Growth Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc md:list-none pl-5 md:pl-0">
                      <li>Expanded investment portfolio</li>
                      <li>Advanced risk management systems</li>
                      <li>Enhanced user interface</li>
                      <li>Strategic acquisitions</li>
                      <li>Ecosystem partnerships</li>
                    </ul>
                  </div>
                  <div className="md:ml-8 hidden md:block"></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 w-8 h-8 bg-blue-400 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-dark-900 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                  <div className="md:mr-8 hidden md:block"></div>
                  <div className="bg-dark-700 p-6 rounded-lg md:ml-8">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">Q2-Q4 2026</h3>
                    <h4 className="text-lg font-bold mb-3 text-white">Maturity Phase</h4>
                    <ul className="space-y-2 text-gray-300 list-disc pl-5">
                      <li>Full decentralization of fund management</li>
                      <li>Industry-leading AI capabilities</li>
                      <li>Global market presence</li>
                      <li>Institutional-grade infrastructure</li>
                      <li>Ecosystem expansion</li>
                      <li>Research and innovation initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
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
