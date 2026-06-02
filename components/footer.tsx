"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { ContactFormModal } from "@/components/contact-form-modal";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jetpackjungle/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "http://instagram.com/jetpackjungle",
    icon: Instagram,
  },
];

export function Footer() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-white/10 bg-background px-4 py-14 sm:px-6 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Top row: wordmark + social */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <Link
              href="/"
              className="font-serif text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
            >
              Jetpack Jungle
            </Link>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-background"
                >
                  <Icon size={19} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-10">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-base text-white/60 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setIsContactFormOpen(true)}
              className="text-base text-white/60 transition-colors hover:text-white"
            >
              Contact
            </button>
          </nav>

          {/* Bottom row: copyright + credit */}
          <div className="mt-10 flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} Jetpack Jungle. All rights reserved.</span>
            <span>
              Website by{" "}
              <a
                href="https://www.galactus.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                Galactus
              </a>
            </span>
          </div>
        </div>
      </footer>

      <ContactFormModal open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
    </>
  );
}
