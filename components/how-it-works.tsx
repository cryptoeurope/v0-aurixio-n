import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0a0f1a]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A simple, professional approach to capital management and performance tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <Card className="bg-[#0d1425] border-gray-800 p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Choose Fund</h3>
              <p className="text-gray-400 leading-relaxed">
                Select from our range of active funds based on your risk tolerance and investment objectives.
              </p>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-cyan-500" />
            </div>

            {/* Step 2 */}
            <Card className="bg-[#0d1425] border-gray-800 p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Capital Allocated</h3>
              <p className="text-gray-400 leading-relaxed">
                Your capital is deployed under strict risk management rules and professional oversight.
              </p>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center md:col-start-2">
              <ArrowRight className="w-8 h-8 text-cyan-500" />
            </div>

            {/* Step 3 */}
            <Card className="bg-[#0d1425] border-gray-800 p-8 relative md:col-start-3">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Performance Monitored</h3>
              <p className="text-gray-400 leading-relaxed">
                Regular reporting and transparent performance tracking keep you informed at every stage.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
