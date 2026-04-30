"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  corporateProjects,
  creativeProjects,
  type WorkProject,
} from "@/lib/work-projects"

// Helper to get YouTube thumbnail from video ID
function getYouTubeThumbnail(videoId: string | null) {
  if (!videoId) return "https://placehold.co/600x400/1a1a1a/666666?text=Coming+Soon"
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

function getYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
}

function VideoCard({
  project,
  onSelect,
}: {
  project: WorkProject
  onSelect: (project: WorkProject) => void
}) {
  const thumbnail = getYouTubeThumbnail(project.videoId)

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
    </button>
  )
}

function VideoModal({
  project,
  open,
  onOpenChange,
}: {
  project: WorkProject | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-dvh max-h-dvh w-screen max-w-none translate-y-[-50%] gap-0 overflow-hidden rounded-none border-0 bg-black p-0 shadow-none duration-300 ease-out data-[state=closed]:duration-200 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 sm:max-w-none">
        <div className="grid h-full grid-rows-[auto_1fr] lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:grid-rows-1">
          <div className="flex min-h-[42vh] items-center bg-black p-4 md:p-8 lg:min-h-0">
            <div className="relative aspect-video w-full overflow-hidden bg-secondary">
              {project.videoId ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={getYouTubeEmbedUrl(project.videoId)}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={getYouTubeThumbnail(project.videoId)}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-sm text-muted-foreground">
                    Video coming soon
                  </div>
                </>
              )}
            </div>
          </div>

          <aside className="overflow-y-auto border-t border-border bg-background px-6 py-12 md:px-10 lg:border-l lg:border-t-0 lg:px-14 lg:py-16 xl:px-16">
            <div className="mx-auto flex max-w-2xl flex-col gap-10">
              <div className="flex flex-col gap-4">
                <DialogTitle className="text-5xl font-medium leading-none md:text-6xl xl:text-7xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-2xl text-muted-foreground md:text-3xl">
                  {project.category}
                </DialogDescription>
              </div>

              <div className="grid gap-8 border-t border-border pt-10">
                <div>
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">
                    Client
                  </h3>
                  <p className="mt-4 text-2xl text-muted-foreground md:text-3xl">
                    {project.client}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">
                    Details
                  </h3>
                  <p className="mt-4 text-2xl leading-relaxed text-muted-foreground md:text-3xl">
                    {project.details}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<"creative" | "corporate">("creative")
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const projects = activeTab === "creative" ? creativeProjects : corporateProjects

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const selectProject = (project: WorkProject) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setSelectedProject(project)
    setModalOpen(true)
  }

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open)

    if (!open) {
      closeTimerRef.current = setTimeout(() => {
        setSelectedProject(null)
        closeTimerRef.current = null
      }, 220)
    }
  }

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white">
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
            <VideoCard
              key={`${activeTab}-${index}`}
              project={project}
              onSelect={selectProject}
            />
          ))}
        </div>
      </div>

      <VideoModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
      />
    </section>
  )
}
