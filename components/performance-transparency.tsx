import { Card } from "@/components/ui/card"
import { Shield, BarChart3, FileText } from "lucide-react"

export function PerformanceTransparency() {
  return (
    <section id="performance" className="py-24 bg-[#0d1425]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Performance & Transparency</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real data, regular reporting, and rigorous risk controls define our approach to capital management.
          </p>
        </div>

        {/* Large chart placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          <Card className="bg-[#0a0f1a] border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Equity Curve</h3>
            <div className="h-64 bg-[#0d1425] rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-sm text-gray-600">Equity Curve Visualization</span>
            </div>
          </Card>

          <Card className="bg-[#0a0f1a] border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Drawdown Analysis</h3>
            <div className="h-64 bg-[#0d1425] rounded-lg border border-gray-800 flex items-center justify-center">
              <span className="text-sm text-gray-600">Drawdown Visualization</span>
            </div>
          </Card>
        </div>

        {/* Key principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-[#0a0f1a] border-gray-800 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real Data</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All performance metrics are derived from live trading accounts with verified execution.
            </p>
          </Card>

          <Card className="bg-[#0a0f1a] border-gray-800 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Regular Reporting</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Monthly performance reports and quarterly audits ensure complete transparency.
            </p>
          </Card>

          <Card className="bg-[#0a0f1a] border-gray-800 p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Risk Controls</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strict risk management protocols protect capital across all market conditions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
