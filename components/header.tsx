"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ContactFormModal } from "@/components/contact-form-modal";

const HEADER_IDLE_DELAY = 1800;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [hasHeaderFocus, setHasHeaderFocus] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isTouchViewport, setIsTouchViewport] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shouldKeepHeaderVisible =
    isMenuOpen || isHeaderHovered || hasHeaderFocus || isTouchViewport;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updateTouchViewport = () => setIsTouchViewport(mediaQuery.matches);

    updateTouchViewport();
    mediaQuery.addEventListener("change", updateTouchViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateTouchViewport);
    };
  }, []);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const scheduleHide = () => {
      clearHideTimer();

      if (shouldKeepHeaderVisible || !isHeroVisible) {
        return;
      }

      hideTimerRef.current = setTimeout(() => {
        setIsHeaderVisible(false);
      }, HEADER_IDLE_DELAY);
    };

    const revealHeader = () => {
      setIsHeaderVisible(true);
      scheduleHide();
    };

    if (shouldKeepHeaderVisible || !isHeroVisible) {
      setIsHeaderVisible(true);
      clearHideTimer();

      return clearHideTimer;
    }

    const activityEvents = [
      "scroll",
      "wheel",
      "pointermove",
      "pointerdown",
      "keydown",
      "touchstart",
      "focusin",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, revealHeader, { passive: true });
    });

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, revealHeader);
      });
      clearHideTimer();
    };
  }, [isHeroVisible, shouldKeepHeaderVisible]);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setIsHeroVisible(false);
      return;
    }

    const updateHeroVisibility = () => {
      const { bottom, top } = hero.getBoundingClientRect();
      setIsHeroVisible(top < window.innerHeight && bottom > 0);
    };

    updateHeroVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.01 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Opened via the /contact-us route, which sets this flag and redirects
    // to a clean "/" URL. Reading from sessionStorage (instead of a query
    // param) keeps the URL free of state that would otherwise be carried
    // into in-page hash links like "/#work".
    try {
      if (sessionStorage.getItem("open-contact-form") === "1") {
        sessionStorage.removeItem("open-contact-form");
        setIsContactFormOpen(true);
      }
    } catch {
      // Ignore storage access errors (e.g. privacy mode)
    }
  }, []);

  const openContactForm = () => {
    setIsMenuOpen(false);
    setIsContactFormOpen(true);
  };

  // Smoothly scroll to an in-page section. Handling the click ourselves (only
  // when already on the home page) avoids Next.js appending a second hash —
  // e.g. clicking "Work" while at "/#work" would otherwise produce
  // "/#work#work", an invalid target that breaks the scroll position.
  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (window.location.pathname !== "/") {
      // On other routes (e.g. /team) let the link navigate to "/#section".
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,opacity] duration-500 ease-out motion-reduce:transition-none ${
          isHeroVisible ? "bg-transparent" : "bg-black"
        } ${isHeaderVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onPointerEnter={() => setIsHeaderHovered(true)}
        onPointerLeave={() => setIsHeaderHovered(false)}
        onFocus={() => setHasHeaderFocus(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setHasHeaderFocus(false);
          }
        }}
      >
        <nav className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-12 md:py-6">
          <Link
            href="/"
            className="font-serif text-lg font-bold uppercase tracking-wider text-white md:text-xl"
          >
            Jetpack Jungle
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/#work"
              className="text-base text-white/90 hover:text-white transition-colors font-medium"
            >
              Work
            </Link>
            <Link
              href="/#services"
              className="text-base text-white/90 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-base text-white/90 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-base text-white/90 hover:text-white transition-colors font-medium"
            >
              Team
            </Link>
            <button
              type="button"
              onClick={openContactForm}
              className="border border-transparent bg-white/5 px-4 py-2 text-base font-medium text-white/90 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex size-11 items-center justify-center text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-0 overflow-y-auto bg-background/85 backdrop-blur-md md:hidden">
            <div className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-24">
              <Link
                href="/#work"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-foreground hover:text-accent transition-colors"
              >
                Work
              </Link>
              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-foreground hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-foreground hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="/team"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-foreground hover:text-accent transition-colors"
              >
                Team
              </Link>
              <button
                type="button"
                onClick={openContactForm}
                className="border border-transparent bg-transparent px-6 py-3 text-2xl text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:border-primary focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
      <ContactFormModal open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
    </>
  );
}
