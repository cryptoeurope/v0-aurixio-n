import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-10">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aurixion-hero-background.png"
          alt="Aurixion background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Very subtle overlay to ensure content visibility */}
        <div className="absolute inset-0 bg-dark-900/10 backdrop-blur-[1px]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Logo container with extreme negative margin to pull buttons up into the red zone */}
          <div className="relative w-[90vw] h-[60vh] md:w-[90vw] md:h-[70vh] lg:w-[90vw] lg:h-[75vh] mb-[-120px]">
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

          {/* Buttons positioned in the red zone, directly below the tagline */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link
              href="/join-ido"
              className="bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 px-12 py-6 h-auto text-xl font-medium shadow-lg rounded-md inline-flex items-center justify-center"
            >
              Join the IDO
            </Link>
            <Link
              href="/vision"
              className="border border-teal-400 text-white bg-transparent hover:bg-white/10 px-12 py-6 h-auto text-xl font-medium backdrop-blur-sm rounded-md inline-flex items-center justify-center"
            >
              Explore Our Vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

