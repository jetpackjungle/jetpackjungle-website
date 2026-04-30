import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background px-4 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold leading-none text-white md:text-6xl">
              Jetpack Jungle
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/70 sm:mt-6 sm:text-lg">
              Full-service video production for cinematic brand stories, campaigns, and
              documentary-led work.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <SocialLinks />
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 text-sm text-white/60 md:grid-cols-[1fr_auto]">
          <div className="grid min-w-0 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <a
                href="mailto:questions@jetpackjungle.com"
                className="group flex min-w-0 items-center gap-2 break-all transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0" />
                <span className="min-w-0">questions@jetpackjungle.com</span>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <a
                href="tel:+353832067752"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0" />
                +353832067752
              </a>
            </div>

            <div className="grid gap-4">
              <address className="flex gap-2 leading-relaxed not-italic">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  77 Camden Street Lower,
                  <br />
                  Dublin, D02 XE80
                  <br />
                  Ireland
                </span>
              </address>
            </div>
          </div>

          <div className="md:text-right">
            <span>{new Date().getFullYear()} Jetpack Jungle. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
