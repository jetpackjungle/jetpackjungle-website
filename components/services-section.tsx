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
    title: "Documentaries",
    description:
      "Authentic storytelling that brings real stories to life with cinematic quality and depth.",
    detail:
      "Character-led films with a sharp editorial spine, crafted for impact without sanding off the truth.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Expert editing, color grading, and sound design to elevate your footage to its full potential.",
    detail:
      "A full finishing pipeline for films that need rhythm, polish, and a final grade that lands.",
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
            Production, direction, and finishing for films that need to feel considered from the
            first frame.
          </p>

          <div className="flex flex-col">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              From the first rough idea to the final export, we build films with a production brain
              and a storyteller&apos;s pulse.
            </p>

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

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground md:grid-cols-3">
          <p className="text-foreground">
            Creative direction, production, and finishing under one roof.
          </p>
          <p>Built for brand teams, agencies, founders, and campaign leads.</p>
          <p>Scaled from nimble content shoots to full cinematic productions.</p>
        </div>
      </div>
    </section>
  );
}
