export function Features() {
  return (
    <section id="features" className="py-20 bg-dark-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Cutting-Edge Technology</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aurixion combines AI-driven investment strategies, blockchain security, and community governance to create a
            revolutionary decentralized finance platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI-Powered Allocation</h3>
            <p className="text-gray-300">
              Dynamic investment strategies driven by advanced artificial intelligence algorithms that adapt to market
              conditions in real-time.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Blockchain Security</h3>
            <p className="text-gray-300">
              Transparent operations secured by blockchain technology, ensuring immutable records and complete
              visibility of fund activities.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-dark-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">DAO Governance</h3>
            <p className="text-gray-300">
              Community-led decision making through our decentralized autonomous organization, giving investors direct
              input on fund direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
