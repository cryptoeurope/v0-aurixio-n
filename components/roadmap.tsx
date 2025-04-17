export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-dark-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Roadmap</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The journey to revolutionize decentralized finance through AI-powered investment strategies and community
            governance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative">
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
                    <li>Global expansion initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/roadmap"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium"
            >
              View Full Roadmap
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

