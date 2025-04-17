import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Learn More About Aurixion
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">What is Aurixion?</h3>
                <p className="text-gray-300">
                  Aurixion is the world's first truly decentralized hedge fund, combining AI-powered investment
                  strategies with blockchain transparency and community governance. We're democratizing access to
                  sophisticated investment strategies that have traditionally been available only to the ultra-wealthy.
                </p>
              </div>

              <div className="border-b border-dark-600 pb-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">How does the AI investment strategy work?</h3>
                <p className="text-gray-300">
                  Our proprietary AI algorithms continuously analyze market conditions across multiple asset classes,
                  identifying optimal entry and exit points while managing risk. The AI adapts to changing market
                  conditions in real-time, optimizing the portfolio allocation to maximize returns while maintaining the
                  risk parameters set by the community governance.
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
                <h3 className="text-xl font-bold mb-3 text-teal-400">How can I participate in the IDO?</h3>
                <p className="text-gray-300">
                  To participate in our Initial DEX Offering (IDO), you'll need to create a compatible wallet, complete
                  KYC verification, and register for the whitelist. The IDO will accept ETH, BNB, and USDT. Visit our{" "}
                  <Link href="/join-ido" className="text-teal-400 hover:underline">
                    IDO page
                  </Link>{" "}
                  for detailed instructions.
                </p>
              </div>

              <div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Educational Resources</h2>
              <p className="text-gray-300 mb-6">
                Access our comprehensive learning materials designed for investors at all levels.
              </p>
              <ul className="space-y-3">
                <li>
                  <Link href="/education/webinars" className="text-teal-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Webinars & Video Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/education/guides" className="text-teal-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Investment Strategy Guides
                  </Link>
                </li>
                <li>
                  <Link href="/education/market-insights" className="text-teal-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Market Insights & Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/education/glossary" className="text-teal-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> DeFi & Investment Glossary
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-dark-800 border border-dark-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Community</h2>
              <p className="text-gray-300 mb-6">Join our growing community of investors and enthusiasts.</p>
              <ul className="space-y-3">
                <li>
                  <Link href="https://discord.gg/aurixion" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Discord Community
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/aurixion" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Telegram Group
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/aurixion" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Twitter Updates
                  </Link>
                </li>
                <li>
                  <Link href="https://medium.com/aurixion" className="text-blue-400 hover:underline flex items-center">
                    <span className="mr-2">→</span> Medium Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join the Revolution?</h2>
            <p className="text-gray-300 mb-6">Take the next step and become part of the Aurixion community today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-ido"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Join the IDO
              </Link>
              <Link
                href="/whitelist"
                className="border border-teal-400 text-white bg-transparent hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Join Whitelist
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

