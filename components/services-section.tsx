import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Brand Films",
    description:
      "Compelling narratives that capture your brand essence and connect with audiences on an emotional level.",
    detail:
      "Concept, scripting, direction, and delivery for launches, campaigns, and evergreen brand worlds.",
  },
  {
    number: "02",
    title: "Commercials",
    description:
      "High-impact advertising content designed to drive engagement and deliver measurable results.",
    detail:
      "Fast-moving spots built for broadcast, paid social, and the places your audience actually watches.",
  },
  {
    number: "03",
    title: "Corporate Video",
    description:
      "Professional video content for internal communications, case studies, testimonials, and brand storytelling. ",
    detail:
      "Every organisation has a story worth telling. We just make sure it looks the part.",
  },
  {
    number: "04",
    title: "Events",
    description:
      "Live event coverage, highlight reels, and conference films. We capture the energy of your event and turn it into content that works long after the day is done.",
    detail:
      "From festival highlights to corporate events, we document moments that matter and craft them into compelling stories.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Professional editing, colour grading, and sound design to elevate your footage to its full potential.",
    detail:
      "Whether you shot it yourself or need a finishing pipeline for a larger production, we'll make it land.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-medium text-white sm:mb-14 md:mb-16 md:text-4xl">
          Services
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:gap-24">
          <p className="text-2xl font-medium leading-snug text-foreground text-balance sm:text-3xl md:text-4xl">
            Full-service video production based in Dublin. We handle everything from the first conversation to the final export.
          </p>

          <div className="flex flex-col">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              From the first rough idea to the final export, we build films with a production brain
              and a storyteller&apos;s pulse.
            </p>

            {/* Image Gallery */}
            <div className="mt-10 grid gap-4 grid-cols-2 sm:mt-12 md:mt-14">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/services/production-monitor.webp"
                  alt="On-set production monitor showing filmed footage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/services/clapperboard.webp"
                  alt="Filmmaker holding clapperboard during production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="mt-12 border-t border-border">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group grid gap-3 border-b border-border py-7 sm:gap-5 sm:py-8 md:grid-cols-[4.5rem_1fr]"
                >
                  <span className="font-mono text-sm text-muted-foreground">{service.number}</span>

                  <div>
                    <h3 className="text-xl font-medium leading-tight text-foreground sm:text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75">
                      {service.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
