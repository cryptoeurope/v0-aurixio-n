export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-dark-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How Aurixion Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Aurixion combines AI-powered investment strategies with community governance, allowing token holders to
            participate, access advanced algorithms, vote on proposals, and earn proportional returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Join the Community",
              description: "Participate in our IDO and become a token holder with governance rights in our ecosystem.",
            },
            {
              step: 2,
              title: "Access AI Strategies",
              description:
                "Benefit from sophisticated investment algorithms that continuously analyze market conditions.",
            },
            {
              step: 3,
              title: "Vote on Proposals",
              description: "Shape the future of the fund by voting on investment strategies and platform developments.",
            },
            {
              step: 4,
              title: "Earn Returns",
              description: "Receive proportional returns based on your token holdings and community participation.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="absolute top-0 left-0 -mt-2 -ml-2 w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <div className="bg-dark-700 p-8 pt-12 rounded-xl border border-dark-600 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
