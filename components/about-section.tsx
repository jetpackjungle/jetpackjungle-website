export function AboutSection() {
  return (
    <section id="about" className="bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 text-3xl font-medium text-white sm:mb-14 md:mb-16 md:text-4xl">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-2xl font-medium leading-snug text-foreground text-balance sm:text-3xl md:text-4xl">
              A collective of filmmakers, storytellers, and visual artists dedicated to creating
              work that resonates.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2018, Jetpack Jungle has grown from a small production house into a
              full-service creative agency. We believe in the power of visual storytelling to
              transform brands and move audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings together decades of combined experience in film, advertising, and
              digital content creation. We partner with brands who share our commitment to quality
              and authenticity.
            </p>
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
              <div>
                <span className="text-2xl font-medium text-foreground sm:text-3xl"></span>
                <p className="text-sm text-muted-foreground mt-1"></p>
              </div>
              <div>
                <span className="text-2xl font-medium text-foreground sm:text-3xl"></span>
                <p className="text-sm text-muted-foreground mt-1"></p>
              </div>
              <div>
                <span className="text-2xl font-medium text-foreground sm:text-3xl"></span>
                <p className="text-sm text-muted-foreground mt-1"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
