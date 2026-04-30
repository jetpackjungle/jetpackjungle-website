import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-16">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-3xl md:text-5xl font-medium text-foreground leading-tight text-balance">
              {"Let's create something extraordinary together."}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <a 
              href="mailto:hello@jetpackjungle.com"
              className="group flex items-center gap-2 text-xl md:text-2xl text-foreground hover:text-accent transition-colors"
            >
              hello@jetpackjungle.com
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex gap-8 pt-8 border-t border-border">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Vimeo
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
