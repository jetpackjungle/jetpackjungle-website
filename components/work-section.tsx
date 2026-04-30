"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

const creativeProjects = [
  {
    title: "Aviva",
    slug: "aviva",
    category: "Brand Film",
    thumbnail: "/work/aviva.jpg",
    videoId: "aviva",
  },
  {
    title: "West Cork Distillers",
    slug: "westcorkdistillers",
    category: "Commercial",
    thumbnail: "/work/westcork.jpg",
    videoId: "westcorkdistillers",
  },
  {
    title: "Candido",
    slug: "candido",
    category: "Documentary",
    thumbnail: "/work/candido.jpg",
    videoId: "candido",
  },
  {
    title: "Sport Ireland",
    slug: "sportireland",
    category: "Campaign",
    thumbnail: "/work/sportireland.jpg",
    videoId: "sportireland",
  },
  {
    title: "Her Sport",
    slug: "hersport",
    category: "Campaign",
    thumbnail: "/work/hersport.jpg",
    videoId: "hersport",
  },
  {
    title: "IOM",
    slug: "iom",
    category: "Awareness",
    thumbnail: "/work/iom.jpg",
    videoId: "iom",
  },
  {
    title: "Guinness",
    slug: "guinness",
    category: "Commercial",
    thumbnail: "/work/guinness.jpg",
    videoId: "guinness",
  },
  {
    title: "Department of Justice",
    slug: "doj",
    category: "Public Service",
    thumbnail: "/work/doj.jpg",
    videoId: "doj",
  },
  {
    title: "West Cork Distillers",
    slug: "wcd",
    category: "Series",
    thumbnail: "/work/wcd.jpg",
    videoId: "wcd",
  },
  {
    title: "The Shoot",
    slug: "theshoot",
    category: "Behind the Scenes",
    thumbnail: "/work/theshoot.jpg",
    videoId: "theshoot",
  },
  {
    title: "IOM Ireland",
    slug: "iomireland",
    category: "Awareness",
    thumbnail: "/work/iomireland.jpg",
    videoId: "iomireland",
  },
  {
    title: "Irish Cancer Society",
    slug: "irishcancersociety",
    category: "Awareness",
    thumbnail: "/work/irishcancer.jpg",
    videoId: "irishcancersociety",
  },
]

const corporateProjects = [
  {
    title: "Glenveagh",
    slug: "glenveagh",
    category: "Corporate",
    thumbnail: "/work/glenveagh.jpg",
    videoId: "lkkabqHg2Ak",
  },
]

function VideoCard({ project }: { project: typeof creativeProjects[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <a
      href={`/work/${project.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-secondary mb-4">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors font-serif">
          {project.title}
        </h3>
        <span className="text-sm text-muted-foreground">
          {project.category}
        </span>
      </div>
    </a>
  )
}

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
          
          <div className="flex items-center gap-1 p-1 bg-secondary">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <VideoCard key={`${activeTab}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
