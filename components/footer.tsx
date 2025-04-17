"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  const router = useRouter()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // First navigate to homepage if not already there
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`)
    } else {
      // If already on homepage, scroll to the section
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        window.scrollBy(0, -120) // Adjust for header height
      }
    }
  }

  return (
    <footer className="bg-dark-900 text-white py-24 border-t border-dark-700">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-8">
              <Link href="/">
                <div className="relative h-24 w-64">
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
            <p className="text-gray-400 mb-8 text-lg">
              AI-Powered Hedge Fund on the Blockchain. Uniting Global Capital with Intelligent, Decentralized Investing.
            </p>
            <div className="flex space-x-6">
              <Link href="https://twitter.com/aurixion" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-7 w-7" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/aurixion"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-7 w-7" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/aurixion" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:info@aurixion.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Mail className="h-7 w-7" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-6 text-white">Platform</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#features"
                  onClick={(e) => handleNavigation(e, "features")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-lg cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleNavigation(e, "how-it-works")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-lg cursor-pointer"
                >
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/tokenomics" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">
                  Tokenomics
                </Link>
              </li>
              <li>
                <a
                  href="/#roadmap"
                  onClick={(e) => handleNavigation(e, "roadmap")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-lg cursor-pointer"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-6 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">
                  Whitepaper
                </Link>
              </li>
              <li>
                <a
                  href="/#education"
                  onClick={(e) => handleNavigation(e, "education")}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-lg cursor-pointer"
                >
                  Education
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-teal-400 transition-colors text-lg">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-2xl mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" action="/api/subscribe" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="px-5 py-3 bg-dark-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border border-dark-600 text-lg"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg hover:from-teal-500 hover:to-blue-600 transition-colors text-lg font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-dark-700 text-center text-gray-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} Aurixion. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors text-lg">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors text-lg">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
