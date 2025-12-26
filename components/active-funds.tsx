import { Card } from "@/components/ui/card"
import { LineChart, TrendingUp, Activity, Bitcoin } from "lucide-react"

const funds = [
  {
    name: "AEF",
    fullName: "Expert Advisors Fund",
    strategy: "Algorithmic Trading",
    risk: "Medium",
    monthlyReturn: "+8.4%",
    maxDrawdown: "-4.2%",
    status: "Live",
    icon: LineChart,
    riskColor: "text-yellow-400",
    statusColor: "bg-green-500",
  },
  {
    name: "AMF",
    fullName: "Manual Fund",
    strategy: "Discretionary Trading",
    risk: "Low",
    monthlyReturn: "+5.2%",
    maxDrawdown: "-2.8%",
    status: "Live",
    icon: TrendingUp,
    riskColor: "text-green-400",
    statusColor: "bg-green-500",
  },
  {
    name: "AHF",
    fullName: "High-Frequency Fund",
    strategy: "HFT & Arbitrage",
    risk: "High",
    monthlyReturn: "+12.7%",
    maxDrawdown: "-7.5%",
    status: "Scaling",
    icon: Activity,
    riskColor: "text-red-400",
    statusColor: "bg-blue-500",
  },
  {
    name: "ACF",
    fullName: "Crypto Fund",
    strategy: "Digital Assets",
    risk: "High",
    monthlyReturn: "+15.3%",
    maxDrawdown: "-9.1%",
    status: "Pilot",
    icon: Bitcoin,
    riskColor: "text-red-400",
    statusColor: "bg-orange-500",
  },
]

export function ActiveFunds() {
  return (
    <section id="active-funds" className="py-24 bg-[#0a0f1a]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Active Funds Overview</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Performance-driven investment strategies across multiple asset classes and trading approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {funds.map((fund) => {
            const Icon = fund.icon
            return (
              <Card
                key={fund.name}
                className="bg-[#0d1425] border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{fund.name}</h3>
                      <p className="text-sm text-gray-400">{fund.fullName}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 ${fund.statusColor} rounded-full text-xs font-medium text-white`}>
                    {fund.status}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Strategy</span>
                    <span className="text-white font-medium">{fund.strategy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Risk Level</span>
                    <span className={`${fund.riskColor} font-medium`}>{fund.risk}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Monthly Return</p>
                    <p className="text-xl font-bold text-green-400">{fund.monthlyReturn}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Max Drawdown</p>
                    <p className="text-xl font-bold text-red-400">{fund.maxDrawdown}</p>
                  </div>
                </div>

                {/* Placeholder for performance chart */}
                <div className="mt-4 h-24 bg-[#0a0f1a] rounded-lg border border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-gray-600">Performance Chart</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
