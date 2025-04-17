import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Whitepaper
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Aurixion: Decentralized AI-Powered Hedge Fund</h2>
            <p className="text-gray-300 mb-6">Version 1.0 | Last Updated: April 2024</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">Abstract</h3>
                <p className="text-gray-300">
                  Aurixion introduces a revolutionary approach to investment management by combining artificial
                  intelligence, blockchain technology, and community governance to create the world's first truly
                  decentralized hedge fund. This whitepaper outlines the platform architecture, investment strategies,
                  governance mechanisms, and tokenomics that power the Aurixion ecosystem.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">1. Introduction</h3>
                <p className="text-gray-300 mb-4">
                  Traditional hedge funds have long been exclusive to high-net-worth individuals and institutional
                  investors, operating with limited transparency and centralized decision-making. Aurixion aims to
                  democratize access to sophisticated investment strategies while providing complete transparency and
                  community-driven governance.
                </p>
                <p className="text-gray-300">
                  By leveraging artificial intelligence for investment decisions and blockchain technology for
                  transparency and governance, Aurixion creates a new paradigm in asset management that is accessible,
                  transparent, and community-driven.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">2. Platform Architecture</h3>
                <p className="text-gray-300 mb-4">The Aurixion platform consists of three core components:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-bold text-white">AI Investment Engine:</span> Proprietary algorithms that
                    analyze market conditions across multiple asset classes to identify optimal investment
                    opportunities.
                  </li>
                  <li>
                    <span className="font-bold text-white">Blockchain Layer:</span> Smart contracts that handle fund
                    operations, record transactions, and enforce governance decisions.
                  </li>
                  <li>
                    <span className="font-bold text-white">Governance System:</span> Decentralized autonomous
                    organization (DAO) structure that enables token holders to vote on investment strategies and
                    platform developments.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">3. Investment Strategies</h3>
                <p className="text-gray-300 mb-4">
                  Aurixion employs a multi-strategy approach to maximize returns while managing risk:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-bold text-white">Quantitative Trading:</span> Statistical arbitrage, trend
                    following, and mean reversion strategies.
                  </li>
                  <li>
                    <span className="font-bold text-white">DeFi Yield Optimization:</span> Automated yield farming
                    across multiple protocols.
                  </li>
                  <li>
                    <span className="font-bold text-white">Cross-Chain Arbitrage:</span> Exploiting price differences
                    across different blockchain networks.
                  </li>
                  <li>
                    <span className="font-bold text-white">Strategic Investments:</span> Long-term positions in
                    promising blockchain projects.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">4. Governance Mechanism</h3>
                <p className="text-gray-300 mb-4">The Aurixion governance system follows a bottom-up approach:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-bold text-white">Token Holding:</span> Basic governance rights based on token
                    ownership.
                  </li>
                  <li>
                    <span className="font-bold text-white">Strategy Submission:</span> Token holders can propose
                    investment strategies.
                  </li>
                  <li>
                    <span className="font-bold text-white">Strategy Refinement:</span> Expert review and optimization of
                    proposed strategies.
                  </li>
                  <li>
                    <span className="font-bold text-white">Strategy Approval:</span> Community voting on strategy
                    implementation.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">5. Tokenomics</h3>
                <p className="text-gray-300 mb-4">
                  The AURIX token is the governance and utility token of the platform:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-bold text-white">Total Supply:</span> 100,000,000 AURIX tokens
                  </li>
                  <li>
                    <span className="font-bold text-white">Token Utility:</span> Governance rights, performance returns,
                    proposal submission, premium access
                  </li>
                  <li>
                    <span className="font-bold text-white">Distribution:</span> IDO (10%), Team (15%), Treasury (20%),
                    Ecosystem (25%), Liquidity (10%), Marketing (10%), Advisors (5%), Reserve (5%)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">6. Roadmap</h3>
                <p className="text-gray-300 mb-4">Aurixion's development is divided into four phases:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-bold text-white">Phase 1: Foundation</span> - Initial platform development,
                    team building, and strategic partnerships
                  </li>
                  <li>
                    <span className="font-bold text-white">Phase 2: Expansion</span> - Deployment of initial investment
                    strategies and governance system
                  </li>
                  <li>
                    <span className="font-bold text-white">Phase 3: Innovation</span> - Advanced AI strategy deployment
                    and cross-chain integration
                  </li>
                  <li>
                    <span className="font-bold text-white">Phase 4: Maturity</span> - Full decentralization of fund
                    management and global expansion
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-teal-400">7. Conclusion</h3>
                <p className="text-gray-300">
                  Aurixion represents a paradigm shift in investment management, combining the power of artificial
                  intelligence with the transparency and decentralization of blockchain technology. By democratizing
                  access to sophisticated investment strategies and empowering community governance, Aurixion is poised
                  to revolutionize the hedge fund industry and create a more inclusive financial ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join the Revolution?</h2>
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
              <a
                href="/whitepaper.pdf"
                download
                className="border border-teal-400 text-white bg-transparent hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

