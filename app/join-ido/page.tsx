import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function JoinIDOPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Join the Aurixion IDO
          </h1>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Initial DEX Offering Details</h2>
            <p className="text-gray-300 mb-6">
              The Aurixion Initial DEX Offering (IDO) represents a unique opportunity to participate in the future of
              decentralized hedge funds. By joining our IDO, you'll gain early access to AURIX tokens, which serve as
              both governance rights and a share in the fund's performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-teal-400">IDO Allocation</h3>
                <p className="text-gray-300">10,000,000 AURIX tokens (10% of total supply)</p>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Token Price</h3>
                <p className="text-gray-300">$0.50 USD per AURIX token</p>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-teal-400">Minimum Investment</h3>
                <p className="text-gray-300">$100 USD (200 AURIX tokens)</p>
              </div>

              <div className="bg-dark-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Vesting Period</h3>
                <p className="text-gray-300">25% at TGE, then 25% every 3 months</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">How to Participate</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li className="pl-2">
                <span className="font-bold text-white">Create a compatible wallet</span> - We recommend MetaMask or
                Trust Wallet
              </li>
              <li className="pl-2">
                <span className="font-bold text-white">Complete KYC verification</span> - This is required for
                regulatory compliance
              </li>
              <li className="pl-2">
                <span className="font-bold text-white">Register for the whitelist</span> - Early registration provides
                priority access
              </li>
              <li className="pl-2">
                <span className="font-bold text-white">Prepare funds</span> - The IDO will accept ETH, BNB, and USDT
              </li>
              <li className="pl-2">
                <span className="font-bold text-white">Participate during the IDO window</span> - The sale will be open
                for 48 hours
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-gray-300 mb-6">
              The Aurixion IDO is coming soon. Register now to secure your place on our whitelist and receive exclusive
              updates about the launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/whitelist"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Join Whitelist
              </Link>
              <Link
                href="/"
                className="border border-teal-400 text-white bg-transparent hover:bg-white/10 px-8 py-3 rounded-md inline-flex items-center justify-center font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
