export function InvestmentOpportunities() {
  return (
    <section id="investment" className="py-20 bg-dark-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Investment Opportunities</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aurixion offers a $10M IDO investment opportunity with 24/7 AI-optimized market access and 100% blockchain
            transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold text-teal-400">$10M</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Funding Goal</h3>
            <p className="text-gray-300">
              Our Initial DEX Offering aims to raise capital to fuel our innovative investment strategies.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold text-blue-400">24/7</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Market Access</h3>
            <p className="text-gray-300">
              Continuous trading across global markets with AI-optimized entry and exit points.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center">
                <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold text-teal-400">100%</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Transparency</h3>
            <p className="text-gray-300">
              Complete visibility of all transactions and investment decisions through blockchain verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

