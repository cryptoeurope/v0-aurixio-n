export function Partners() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Trusted Partners</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strategic partnerships with key industry players providing technical, security, and exchange support for our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "BlueZilla",
              description: "Incubator support",
              logo: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Security Auditors",
              description: "Code verification",
              logo: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Uniswap",
              description: "Exchange partner",
              logo: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Coinbase",
              description: "Listing platform",
              logo: "/placeholder.svg?height=200&width=200",
            },
          ].map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-dark-700 rounded-full shadow-sm flex items-center justify-center mb-4 p-4 border border-dark-600">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 text-white">{partner.name}</h3>
              <p className="text-sm text-gray-300 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

