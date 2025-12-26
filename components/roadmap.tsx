import { Card } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#0d1425]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Roadmap</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our structured approach to scaling professional capital management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Phase 1 - Current */}
          <Card className="bg-[#0a0f1a] border-cyan-500 p-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white">Phase 1: Live Funds & Transparency</h3>
                  <span className="px-3 py-1 bg-cyan-500 rounded-full text-xs font-medium text-white">CURRENT</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Multiple active funds with verified performance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Monthly reporting and transparent metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Professional risk management protocols
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Phase 2 */}
          <Card className="bg-[#0a0f1a] border-gray-800 p-8">
            <div className="flex items-start gap-4">
              <Circle className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Phase 2: Scaling & Automation</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Increase AUM across all fund strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Enhanced automation and execution systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Expanded market coverage and strategies
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Phase 3 - Future */}
          <Card className="bg-[#0a0f1a] border-gray-800 p-8 relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-full text-xs font-medium text-blue-400">
                FUTURE
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Circle className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Phase 3: Tokenization</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Introduce tokenized fund shares
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Smart contract integration for transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Community governance mechanisms
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Phase 4 - Future */}
          <Card className="bg-[#0a0f1a] border-gray-800 p-8 relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-full text-xs font-medium text-blue-400">
                FUTURE
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Circle className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Phase 4: On-Chain Elements</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Optional blockchain settlement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Decentralized audit trails
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    Cross-chain liquidity options
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
