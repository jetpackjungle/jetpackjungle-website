export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-16">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-3xl md:text-4xl font-medium text-foreground leading-snug text-balance">
              A collective of filmmakers, storytellers, and visual artists dedicated to creating work that resonates.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2018, Jetpack Jungle has grown from a small production house into a full-service creative agency. We believe in the power of visual storytelling to transform brands and move audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings together decades of combined experience in film, advertising, and digital content creation. We partner with brands who share our commitment to quality and authenticity.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="text-3xl font-medium text-foreground">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <span className="text-3xl font-medium text-foreground">8</span>
                <p className="text-sm text-muted-foreground mt-1">Years</p>
              </div>
              <div>
                <span className="text-3xl font-medium text-foreground">12</span>
                <p className="text-sm text-muted-foreground mt-1">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
