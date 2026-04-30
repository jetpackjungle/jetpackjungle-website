const services = [
  {
    number: "01",
    title: "Brand Films",
    description: "Compelling narratives that capture your brand essence and connect with audiences on an emotional level.",
  },
  {
    number: "02",
    title: "Commercials",
    description: "High-impact advertising content designed to drive engagement and deliver measurable results.",
  },
  {
    number: "03",
    title: "Documentaries",
    description: "Authentic storytelling that brings real stories to life with cinematic quality and depth.",
  },
  {
    number: "04",
    title: "Post-Production",
    description: "Expert editing, color grading, and sound design to elevate your footage to its full potential.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service) => (
            <div key={service.number} className="group">
              <span className="text-sm text-muted-foreground">{service.number}</span>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mt-4 mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
