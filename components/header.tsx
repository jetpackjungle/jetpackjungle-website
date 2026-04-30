"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-wider uppercase text-white font-serif">
          Jetpack Jungle
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="#work" className="text-base text-white/90 hover:text-white transition-colors font-medium">
            Work
          </Link>
          <Link href="#services" className="text-base text-white/90 hover:text-white transition-colors font-medium">
            Services
          </Link>
          <Link href="#about" className="text-base text-white/90 hover:text-white transition-colors font-medium">
            About
          </Link>
          <Link href="#contact" className="text-base text-white/90 hover:text-white transition-colors font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link 
              href="#work" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Work
            </Link>
            <Link 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
