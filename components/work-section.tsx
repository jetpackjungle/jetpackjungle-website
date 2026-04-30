import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Brand Film",
    client: "Horizon Tech",
    year: "2026",
  },
  {
    title: "Product Launch",
    client: "Nova Audio",
    year: "2025",
  },
  {
    title: "Documentary",
    client: "Ocean Foundation",
    year: "2025",
  },
  {
    title: "Commercial",
    client: "Metro Coffee",
    year: "2024",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-16">
          Selected Work
        </h2>

        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className="group flex items-center justify-between py-8 md:py-12 hover:opacity-70 transition-opacity"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <span className="text-2xl md:text-4xl font-medium text-foreground">
                  {project.title}
                </span>
                <span className="text-muted-foreground">
                  {project.client}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {project.year}
                </span>
                <ArrowUpRight 
                  size={24} 
                  className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
