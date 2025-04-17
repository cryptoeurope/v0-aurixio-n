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
    <header className="sticky top-0 z-50 w-full border-b border-dark-700/30 bg-dark-900/70 backdrop-blur-md">
      <div className="container flex h-32 items-center justify-between px-6 md:px-8">
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
            <div className="relative h-20 w-56">
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

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="/#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="/#investment"
            onClick={(e) => scrollToSection(e, "investment")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Investment
          </a>
          <a
            href="/#how-it-works"
            onClick={(e) => scrollToSection(e, "how-it-works")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            How It Works
          </a>
          <a
            href="/#governance"
            onClick={(e) => scrollToSection(e, "governance")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Governance
          </a>
          <a
            href="/#roadmap"
            onClick={(e) => scrollToSection(e, "roadmap")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Roadmap
          </a>
          <a
            href="/#education"
            onClick={(e) => scrollToSection(e, "education")}
            className="text-lg font-medium text-gray-200 hover:text-teal-400 transition-colors cursor-pointer"
          >
            Education
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/explore"
            className="border-2 border-teal-400 text-teal-400 hover:bg-dark-700/70 px-6 py-3 rounded-md text-lg font-medium"
          >
            Explore
          </Link>
          <Link
            href="/join-ido"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-6 py-3 rounded-md text-lg font-medium"
          >
            Join IDO
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-32 left-0 right-0 bg-dark-800/90 border-b border-dark-700/30 shadow-lg backdrop-blur-md">
          <div className="container px-6 py-6 flex flex-col gap-6">
            <a
              href="/#features"
              onClick={(e) => scrollToSection(e, "features")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              Features
            </a>
            <a
              href="/#investment"
              onClick={(e) => scrollToSection(e, "investment")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              Investment
            </a>
            <a
              href="/#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="/#governance"
              onClick={(e) => scrollToSection(e, "governance")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              Governance
            </a>
            <a
              href="/#roadmap"
              onClick={(e) => scrollToSection(e, "roadmap")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              Roadmap
            </a>
            <a
              href="/#education"
              onClick={(e) => scrollToSection(e, "education")}
              className="text-lg font-medium p-3 text-gray-200 hover:bg-dark-700/70 hover:text-white rounded cursor-pointer"
            >
              Education
            </a>
            <div className="flex flex-col gap-4 pt-4 border-t border-dark-600">
              <Link
                href="/explore"
                className="border-2 border-teal-400 text-teal-400 w-full p-3 rounded-md text-center text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/join-ido"
                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white w-full p-3 rounded-md text-center text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Join IDO
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
