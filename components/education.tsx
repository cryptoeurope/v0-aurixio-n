import Image from "next/image"

export function Education() {
  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Educational Resources</h2>
            <p className="text-lg text-gray-300 mb-6">
              Learn and grow with our diverse DeFi educational content, from webinars to guides, designed for investors
              at all levels.
            </p>
            <p className="text-gray-300 mb-8">
              Empower yourself with our comprehensive learning materials. Access webinars, strategy explainers, market
              insights, and downloadable guides designed to help both novice and experienced investors navigate the
              decentralized finance landscape.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-4 bg-dark-700 rounded-lg">
                <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium text-white">Webinars</span>
              </div>
              <div className="flex items-center gap-2 p-4 bg-dark-700 rounded-lg">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="font-medium text-white">Strategy Guides</span>
              </div>
              <div className="flex items-center gap-2 p-4 bg-dark-700 rounded-lg">
                <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-medium text-white">Market Insights</span>
              </div>
              <div className="flex items-center gap-2 p-4 bg-dark-700 rounded-lg">
                <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="font-medium text-white">Downloadable PDFs</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-dark-700 p-6 rounded-xl shadow-lg border border-dark-600">
                <div className="aspect-video bg-gray-400/80 rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[144px] h-[144px]">
                      <Image
                        src="/images/aurixion-full-logo-with-text.png"
                        alt="Aurixion Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-dark-700/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-6 border-t-transparent border-l-10 border-l-teal-400 border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Introduction to DeFi & Aurixion</h3>
                <p className="text-gray-300 mb-4">
                  Learn the basics of decentralized finance and how Aurixion is revolutionizing the space.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>45 minutes</span>
                  <span className="mx-2">•</span>
                  <span>Beginner friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
