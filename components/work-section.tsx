import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Aviva",
    slug: "aviva",
    category: "Brand Film",
  },
  {
    title: "West Cork Distillers",
    slug: "westcorkdistillers",
    category: "Commercial",
  },
  {
    title: "Candido",
    slug: "candido",
    category: "Documentary",
  },
  {
    title: "Sport Ireland",
    slug: "sportireland",
    category: "Campaign",
  },
  {
    title: "Her Sport",
    slug: "hersport",
    category: "Campaign",
  },
  {
    title: "IOM",
    slug: "iom",
    category: "Awareness",
  },
  {
    title: "Guinness",
    slug: "guinness",
    category: "Commercial",
  },
  {
    title: "Department of Justice",
    slug: "doj",
    category: "Public Service",
  },
  {
    title: "West Cork Distillers",
    slug: "wcd",
    category: "Series",
  },
  {
    title: "The Shoot",
    slug: "theshoot",
    category: "Behind the Scenes",
  },
  {
    title: "IOM Ireland",
    slug: "iomireland",
    category: "Awareness",
  },
  {
    title: "NDC",
    slug: "ndc",
    category: "Documentary",
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
              href={`/work/${project.slug}`}
              className="group flex items-center justify-between py-8 md:py-12 hover:opacity-70 transition-opacity"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <span className="text-2xl md:text-4xl font-medium text-foreground">
                  {project.title}
                </span>
                <span className="text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-4">
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
