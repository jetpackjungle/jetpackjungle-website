"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

const HEADER_IDLE_DELAY = 1800

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)
  const [hasHeaderFocus, setHasHeaderFocus] = useState(false)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const shouldKeepHeaderVisible = isMenuOpen || isHeaderHovered || hasHeaderFocus

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
    }

    const scheduleHide = () => {
      clearHideTimer()

      if (shouldKeepHeaderVisible) {
        return
      }

      hideTimerRef.current = setTimeout(() => {
        setIsHeaderVisible(false)
      }, HEADER_IDLE_DELAY)
    }

    const revealHeader = () => {
      setIsHeaderVisible(true)
      scheduleHide()
    }

    if (shouldKeepHeaderVisible) {
      setIsHeaderVisible(true)
      clearHideTimer()

      return clearHideTimer
    }

    revealHeader()

    const activityEvents = ["scroll", "wheel", "pointermove", "pointerdown", "keydown", "touchstart", "focusin"]

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, revealHeader, { passive: true })
    })

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, revealHeader)
      })
      clearHideTimer()
    }
  }, [shouldKeepHeaderVisible])

  useEffect(() => {
    const hero = document.getElementById("hero")

    if (!hero) {
      setIsHeroVisible(false)
      return
    }

    const updateHeroVisibility = () => {
      const { bottom, top } = hero.getBoundingClientRect()
      setIsHeroVisible(top < window.innerHeight && bottom > 0)
    }

    updateHeroVisibility()

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      { threshold: 0.01 },
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,opacity] duration-500 ease-out motion-reduce:transition-none ${
        isHeroVisible ? "border-transparent bg-transparent" : "border-white/10 bg-black"
      } ${
        isHeaderVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onPointerEnter={() => setIsHeaderHovered(true)}
      onPointerLeave={() => setIsHeaderHovered(false)}
      onFocus={() => setHasHeaderFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasHeaderFocus(false)
        }
      }}
    >
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
