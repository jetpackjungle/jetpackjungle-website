"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const creativeProjects = [
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
    title: "Irish Cancer Society",
    slug: "irishcancersociety",
    category: "Awareness",
  },
]

const corporateProjects = [
  {
    title: "Glenveagh",
    slug: "glenveagh",
    category: "Corporate",
  },
]

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<"creative" | "corporate">("creative")
  
  const projects = activeTab === "creative" ? creativeProjects : corporateProjects

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground">
            Selected Work
          </h2>
          
          <div className="flex items-center gap-1 p-1 bg-secondary rounded-none">
            <button
              onClick={() => setActiveTab("creative")}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeTab === "creative"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Creative
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeTab === "corporate"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Corporate
            </button>
          </div>
        </div>

        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <a
              key={`${activeTab}-${index}`}
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
