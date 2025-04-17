import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-8">General Questions</h2>

            <div className="space-y-8">
              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">What is Aurixion?</h3>
                <p className="text-gray-300">
                  Aurixion is the world's first truly decentralized hedge fund, combining AI-powered investment
                  strategies with blockchain transparency and community governance. We're democratizing access to
                  sophisticated investment strategies that have traditionally been available only to the ultra-wealthy.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">How does Aurixion work?</h3>
                <p className="text-gray-300">
                  Aurixion combines three key elements: (1) AI-powered investment algorithms that analyze market
                  conditions and execute trades, (2) blockchain technology that ensures complete transparency of all
                  transactions, and (3) community governance that allows token holders to vote on investment strategies
                  and platform developments.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">What is the AURIX token?</h3>
                <p className="text-gray-300">
                  AURIX is the governance and utility token of the Aurixion platform. Token holders can vote on
                  investment strategies, platform developments, and fund allocations. Additionally, token holders
                  receive proportional returns based on platform performance and gain access to premium educational
                  resources.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">
                  How is Aurixion different from traditional hedge funds?
                </h3>
                <p className="text-gray-300">
                  Unlike traditional hedge funds that operate behind closed doors with high minimum investments,
                  Aurixion provides complete transparency through blockchain verification, community governance through
                  token voting, and accessibility with lower minimum investment thresholds. Our AI-driven strategies are
                  also continuously optimized without human bias.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-8">Investment & IDO Questions</h2>

            <div className="space-y-8">
              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">How can I participate in the IDO?</h3>
                <p className="text-gray-300">
                  To participate in our Initial DEX Offering (IDO), you'll need to create a compatible wallet, complete
                  KYC verification, and register for the whitelist. The IDO will accept ETH, BNB, and USDT. Visit our{" "}
                  <Link href="/join-ido" className="text-blue-400 hover:underline">
                    IDO page
                  </Link>{" "}
                  for detailed instructions.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">What is the minimum investment?</h3>
                <p className="text-gray-300">
                  The minimum investment for the IDO is $100 USD, which will give you 200 AURIX tokens at the initial
                  price of $0.50 per token.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">How are returns distributed?</h3>
                <p className="text-gray-300">
                  Returns are distributed proportionally to token holders based on their holdings. A portion of the
                  returns is reinvested into the fund to compound growth, while the remainder is distributed to token
                  holders. The exact distribution ratio is determined by community governance.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">What are the risks?</h3>
                <p className="text-gray-300">
                  As with any investment, there are risks involved. These include market risks, smart contract risks,
                  regulatory risks, and technology risks. We implement robust risk management strategies and security
                  measures to mitigate these risks, but they cannot be eliminated entirely. Please review our risk
                  disclosure document before investing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-8">Technical Questions</h2>

            <div className="space-y-8">
              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">How does the AI investment engine work?</h3>
                <p className="text-gray-300">
                  Our AI investment engine uses a combination of machine learning algorithms, including deep learning,
                  reinforcement learning, and natural language processing, to analyze market data and identify
                  investment opportunities. The system continuously learns and adapts based on market conditions and
                  performance feedback.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">How is transparency ensured?</h3>
                <p className="text-gray-300">
                  All fund activities, including investments, trades, and performance metrics, are recorded on the
                  blockchain and accessible to token holders. Smart contracts ensure that the rules of the fund are
                  enforced automatically and cannot be altered without community approval.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">How does the governance system work?</h3>
                <p className="text-gray-300">
                  Token holders can vote on investment strategies, platform developments, and fund allocations
                  proportional to their holdings. Proposals go through a structured process of submission, refinement,
                  and approval before implementation. The governance system is designed to be inclusive while ensuring
                  that decisions are made by those with the most stake in the platform's success.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">Is Aurixion audited?</h3>
                <p className="text-gray-300">
                  Yes, all smart contracts and platform code undergo rigorous security audits by reputable third-party
                  auditors before deployment. Audit reports are made publicly available to ensure transparency and build
                  trust with our community.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
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
