"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // First navigate to homepage if not already there
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`)
      return
    }

    // If already on homepage, scroll to the section
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      window.scrollBy(0, -120) // Adjust for header height
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-[#0a0f1a]/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-6 md:px-8">
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              if (window.location.pathname !== "/") {
                router.push("/")
              } else {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            }}
          >
            <div className="relative h-12 w-32">
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
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#active-funds"
            onClick={(e) => scrollToSection(e, "active-funds")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Funds
          </a>
          <a
            href="#performance"
            onClick={(e) => scrollToSection(e, "performance")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Performance
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => scrollToSection(e, "how-it-works")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            How It Works
          </a>
          <a
            href="#roadmap"
            onClick={(e) => scrollToSection(e, "roadmap")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Roadmap
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/ido-project"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 px-5 py-2 rounded-md text-sm font-medium transition-colors"
          >
            IDO Project
          </Link>
          <Link
            href="/contact"
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-5 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Investor Access
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0d1425]/95 border-b border-gray-800/50 shadow-lg backdrop-blur-md">
          <div className="container px-6 py-6 flex flex-col gap-4">
            <a
              href="#active-funds"
              onClick={(e) => scrollToSection(e, "active-funds")}
              className="text-sm font-medium p-3 text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 rounded cursor-pointer transition-colors"
            >
              Funds
            </a>
            <a
              href="#performance"
              onClick={(e) => scrollToSection(e, "performance")}
              className="text-sm font-medium p-3 text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 rounded cursor-pointer transition-colors"
            >
              Performance
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="text-sm font-medium p-3 text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 rounded cursor-pointer transition-colors"
            >
              How It Works
            </a>
            <a
              href="#roadmap"
              onClick={(e) => scrollToSection(e, "roadmap")}
              className="text-sm font-medium p-3 text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 rounded cursor-pointer transition-colors"
            >
              Roadmap
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
              <Link
                href="/ido-project"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full p-3 rounded-md text-center text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                IDO Project
              </Link>
              <Link
                href="/contact"
                className="border border-cyan-500 text-cyan-400 w-full p-3 rounded-md text-center text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Investor Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
