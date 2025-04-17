export function CommunityGovernance() {
  return (
    <section id="governance" className="py-20 bg-dark-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Community Governance</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Token holders participate in a bottom-up governance process, progressing from basic ownership rights to
            proposing, refining, and approving investment strategies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-blue-500 transform -translate-x-1/2"></div>

          {[
            {
              step: 1,
              title: "Strategy Approval",
              description: "Final community vote",
              align: "right",
            },
            {
              step: 2,
              title: "Strategy Refinement",
              description: "Expert review and optimization",
              align: "left",
            },
            {
              step: 3,
              title: "Strategy Submission",
              description: "Community-proposed investment ideas",
              align: "right",
            },
            {
              step: 4,
              title: "Token Holding",
              description: "Governance rights based on ownership",
              align: "left",
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`flex items-center mb-12 ${item.align === "left" ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${item.align === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              <div className="relative">
                <div className="w-10 h-10 bg-dark-700 border-4 border-teal-400 rounded-full z-10 relative"></div>
              </div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

