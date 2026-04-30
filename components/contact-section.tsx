import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 text-3xl font-medium text-white sm:mb-14 md:mb-16 md:text-4xl">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-2xl font-medium leading-snug text-foreground text-balance sm:text-3xl md:text-4xl">
              {"Let's create something extraordinary together."}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <a
              href="mailto:questions@jetpackjungle.com"
              className="group flex min-w-0 items-center gap-2 break-all text-xl text-foreground transition-colors hover:text-accent md:text-2xl"
            >
              questions@jetpackjungle.com
              <ArrowUpRight
                size={20}
                className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
            <a
              href="tel:+353832067752"
              className="text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
            >
              +353832067752
            </a>
            <address className="text-base leading-relaxed text-muted-foreground not-italic">
              77 Camden Street Lower,
              <br />
              Dublin, D02 XE80
              <br />
              Ireland
            </address>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              If you are a freelancer looking to join our freelance list, fill out this{" "}
              <a
                href="#"
                className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
              >
                Freelancer Form
              </a>
              .
            </p>
            <div className="pt-8 border-t border-border">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
