"use client"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white py-16 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="mb-6">
                <Link href="/">
                  <div className="relative h-12 w-40">
                    <Image
                      src="/images/aurixion-full-logo-with-text.png"
                      alt="Aurixion Logo"
                      fill
                      className="object-contain"
                      style={{
                        backgroundColor: "transparent",
                      }}
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-xl">
                Professional capital management focused on delivering transparent performance across multiple active
                funds. Tokenization and on-chain elements are part of our future roadmap.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/aurixion"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/aurixion"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://github.com/aurixion"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="mailto:info@aurixion.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#active-funds" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Active Funds
                  </Link>
                </li>
                <li>
                  <Link href="#performance" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Performance
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Investor Access
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Aurixion. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 transition-colors text-xs">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors text-xs">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-gray-500 hover:text-cyan-400 transition-colors text-xs">
                  Legal Disclaimer
                </Link>
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-4 text-center md:text-left">
              Investment involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
