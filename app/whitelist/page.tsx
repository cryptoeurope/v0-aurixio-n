import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function WhitelistPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-12 mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Whitelist Coming Soon
            </h1>

            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-dark-800 flex items-center justify-center">
                <svg className="w-12 h-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're preparing our whitelist registration system. Be among the first to participate in the Aurixion IDO
              when we launch.
            </p>

            <div className="bg-dark-700 p-8 rounded-xl max-w-md mx-auto mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative w-56 h-20">
                  <Image
                    src="/images/aurixion-full-logo-with-text.png"
                    alt="Aurixion Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">Get Notified</h2>
              <p className="text-gray-300 mb-6">Leave your email to be notified when our whitelist opens.</p>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3 bg-dark-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border border-dark-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-5 py-3 rounded-lg font-medium"
                >
                  Notify Me
                </button>
              </form>
            </div>

            <Link
              href="/"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium"
            >
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
