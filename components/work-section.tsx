"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

// Helper to get YouTube thumbnail from video ID
function getYouTubeThumbnail(videoId: string | null) {
  if (!videoId) return "https://placehold.co/600x400/1a1a1a/666666?text=Coming+Soon"
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

const creativeProjects = [
  {
    title: "Aviva",
    slug: "aviva",
    category: "Brand Film",
    videoId: null, // No YouTube ID yet
  },
  {
    title: "West Cork Distillers",
    slug: "westcorkdistillers",
    category: "Commercial",
    videoId: null,
  },
  {
    title: "Candido",
    slug: "candido",
    category: "Documentary",
    videoId: null,
  },
  {
    title: "Sport Ireland",
    slug: "sportireland",
    category: "Campaign",
    videoId: null,
  },
  {
    title: "Her Sport",
    slug: "hersport",
    category: "Campaign",
    videoId: null,
  },
  {
    title: "IOM",
    slug: "iom",
    category: "Awareness",
    videoId: null,
  },
  {
    title: "Guinness",
    slug: "guinness",
    category: "Commercial",
    videoId: null,
  },
  {
    title: "Department of Justice",
    slug: "doj",
    category: "Public Service",
    videoId: null,
  },
  {
    title: "West Cork Distillers",
    slug: "wcd",
    category: "Series",
    videoId: null,
  },
  {
    title: "The Shoot",
    slug: "theshoot",
    category: "Behind the Scenes",
    videoId: null,
  },
  {
    title: "IOM Ireland",
    slug: "iomireland",
    category: "Awareness",
    videoId: null,
  },
  {
    title: "Irish Cancer Society",
    slug: "irishcancersociety",
    category: "Awareness",
    videoId: null,
  },
]

const corporateProjects = [
  {
    title: "Glenveagh",
    slug: "glenveagh",
    category: "Corporate",
    videoId: "lkkabqHg2Ak",
  },
  {
    title: "Common Purpose",
    slug: "commonpurpose",
    category: "Corporate",
    videoId: "BmQQpckdAq8",
  },
]

function VideoCard({ project }: { project: typeof creativeProjects[0] }) {
  const thumbnail = getYouTubeThumbnail(project.videoId)

  return (
    <a
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden bg-secondary mb-4">
        <Image
          src={thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
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
