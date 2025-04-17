import Link from "next/link"

export function JoinRevolution() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join the Financial Revolution</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aurixion offers a groundbreaking blend of AI-powered investment with blockchain transparency and community
            governance through decentralized token holder voting rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-white">Redefining Traditional Hedge Funds</h3>
            <p className="text-gray-300">
              Aurixion combines AI-driven investment strategies with blockchain transparency and community governance,
              allowing for decentralized decision-making and complete visibility that traditional funds cannot offer.
              Unlike traditional hedge funds that operate behind closed doors, our platform provides real-time
              transaction verification through blockchain technology and distributes decision-making power among token
              holders.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-white">Participate in Our Initial DEX Offering</h3>
            <p className="text-gray-300">
              The IDO will be hosted on partner platforms with KYC/AML requirements. Sign up for our newsletter to
              receive detailed instructions when the offering goes live. We'll provide step-by-step guidance on wallet
              setup, KYC verification processes, and participation limits. Early subscribers will receive priority
              access to pre-sale allocations with potential bonuses.
            </p>
          </div>

          <div className="bg-dark-700 p-8 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-white">Token Holder Rights & Benefits</h3>
            <p className="text-gray-300">
              Token holders can vote on investment strategies, platform developments, and fund allocations proportional
              to their holdings, truly embodying our community-led approach. Additionally, token holders receive
              proportional returns based on platform performance, can submit their own investment proposals once certain
              holding thresholds are met, and gain access to premium educational resources and market analyses.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-2xl overflow-hidden border border-dark-600">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Join the Financial Revolution!</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Aurixion offers a groundbreaking blend of AI-powered investment. We use blockchain transparency and
              community governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-ido"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-8 py-6 text-lg inline-flex items-center justify-center rounded-md"
              >
                Join the IDO
              </Link>
              <Link
                href="/learn-more"
                className="border border-teal-400 text-teal-400 hover:bg-dark-700 px-8 py-6 text-lg inline-flex items-center justify-center rounded-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
