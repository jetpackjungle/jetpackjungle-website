"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-12 md:pb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight text-balance">
            We craft cinematic stories that move audiences
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl">
            Full-service video production for brands that demand excellence
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-6 md:right-12">
          <a 
            href="#work" 
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <span className="hidden md:inline">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
