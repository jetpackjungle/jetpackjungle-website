const services = [
  {
    number: "01",
    title: "Brand Films",
    description:
      "Compelling narratives that capture your brand essence and connect with audiences on an emotional level.",
    detail:
      "Concept, scripting, direction, and delivery for launches, campaigns, and evergreen brand worlds.",
    deliverables: ["Strategy", "Story", "Production"],
  },
  {
    number: "02",
    title: "Commercials",
    description:
      "High-impact advertising content designed to drive engagement and deliver measurable results.",
    detail:
      "Fast-moving spots built for broadcast, paid social, and the places your audience actually watches.",
    deliverables: ["Campaigns", "Cutdowns", "Social"],
  },
  {
    number: "03",
    title: "Documentaries",
    description:
      "Authentic storytelling that brings real stories to life with cinematic quality and depth.",
    detail:
      "Character-led films with a sharp editorial spine, crafted for impact without sanding off the truth.",
    deliverables: ["Research", "Interviews", "Editorial"],
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Expert editing, color grading, and sound design to elevate your footage to its full potential.",
    detail:
      "A full finishing pipeline for films that need rhythm, polish, and a final grade that lands.",
    deliverables: ["Edit", "Grade", "Sound"],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-secondary px-6 py-24 md:px-12 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="text-4xl font-medium leading-tight text-white md:text-6xl">
            Services
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:justify-self-end">
            From the first rough idea to the final export, we build films with a
            production brain and a storyteller&apos;s pulse.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative min-h-[22rem] bg-secondary p-6 transition-colors duration-300 hover:bg-card md:p-8 lg:p-10"
            >
              <div className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 md:inset-x-8 lg:inset-x-10" />

              <div className="flex h-full flex-col">
                <div className="mb-12 flex items-start justify-between gap-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.number}
                  </span>
                  <div className="h-12 w-12 border border-white/15 bg-background/50 transition-colors duration-300 group-hover:border-accent/70">
                    <div className="h-full w-full bg-[linear-gradient(135deg,transparent_48%,rgb(255_255_255_/_0.18)_49%,rgb(255_255_255_/_0.18)_51%,transparent_52%)] transition-opacity duration-300 group-hover:opacity-40" />
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="max-w-sm text-3xl font-medium leading-tight text-foreground md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/75">
                    {service.detail}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="border border-white/10 px-3 py-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-foreground"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
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
  )
}
