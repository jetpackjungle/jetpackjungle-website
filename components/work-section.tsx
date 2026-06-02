"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { corporateProjects, creativeProjects, type WorkProject } from "@/lib/work-projects";

function getYouTubeId(videoUrl: string | null) {
  if (!videoUrl) return null;

  const url = new URL(videoUrl);

  if (url.hostname.includes("youtu.be")) {
    return url.pathname.split("/").filter(Boolean)[0] ?? null;
  }

  if (url.hostname.includes("youtube.com")) {
    return url.searchParams.get("v");
  }

  return null;
}

function getVimeoId(videoUrl: string | null) {
  if (!videoUrl) return null;

  const url = new URL(videoUrl);

  if (!url.hostname.includes("vimeo.com")) {
    return null;
  }

  return url.pathname.split("/").filter(Boolean)[0] ?? null;
}

function getVideoThumbnail(project: WorkProject) {
  if (project.thumbnail) {
    return project.thumbnail;
  }

  return "https://placehold.co/600x400/1a1a1a/666666?text=Coming+Soon";
}

function getVideoEmbedUrl(videoUrl: string | null) {
  const youtubeId = getYouTubeId(videoUrl);

  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  }

  const vimeoId = getVimeoId(videoUrl);

  if (vimeoId) {
    return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
  }

  return null;
}

function VideoCard({
  project,
  onSelect,
}: {
  project: WorkProject;
  onSelect: (project: WorkProject) => void;
}) {
  const thumbnail = getVideoThumbnail(project);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group block w-full cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-left"
    >
      <div className="relative aspect-video overflow-hidden bg-secondary mb-4">
        <Image
          src={thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 group-hover:opacity-60 group-focus-visible:scale-105 group-focus-visible:opacity-60"
          unoptimized
        />
        <div className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="absolute inset-0 border-2 border-accent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
          <div className="flex h-12 w-20 translate-y-2 items-center justify-center bg-accent text-accent-foreground shadow-lg transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <Play className="h-5 w-5 fill-current" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors font-serif">
          {project.title}
        </h3>
      </div>
    </button>
  );
}

function VideoModal({
  project,
  open,
  onOpenChange,
}: {
  project: WorkProject | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  const embedUrl = getVideoEmbedUrl(project.videoUrl);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-dvh max-h-dvh w-screen max-w-none translate-y-[-50%] gap-0 overflow-hidden rounded-none border-0 bg-black p-0 shadow-none duration-300 ease-out data-[state=closed]:duration-200 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 sm:max-w-none">
        <div className="grid h-full grid-rows-[auto_minmax(0,1fr)] lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:grid-rows-1">
          <div className="flex items-center bg-black p-3 pt-12 sm:p-4 sm:pt-12 md:p-8 lg:min-h-0 lg:pt-8">
            <div className="relative aspect-video w-full overflow-hidden bg-secondary">
              {embedUrl ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedUrl}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={getVideoThumbnail(project)}
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

          <aside className="overflow-y-auto border-t border-border bg-background px-4 py-8 sm:px-6 md:px-10 md:py-12 lg:border-l lg:border-t-0 lg:px-14 lg:py-16 xl:px-16">
            <div className="mx-auto flex max-w-2xl flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-4">
                <DialogTitle className="text-4xl font-medium leading-none text-balance md:text-6xl xl:text-7xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-xl text-muted-foreground md:text-3xl">
                  {project.category}
                </DialogDescription>
              </div>

              <div className="grid gap-7 border-t border-border pt-8 md:gap-8 md:pt-10">
                <div>
                  <h3 className="text-lg font-medium text-foreground md:text-2xl">Client</h3>
                  <p className="mt-3 text-xl text-muted-foreground md:mt-4 md:text-3xl">
                    {project.client}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground md:text-2xl">Services</h3>
                  <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 md:mt-4">
                    {project.services.split("|").map((s) => (
                      <span key={s.trim()} className="whitespace-nowrap text-xl text-muted-foreground md:text-3xl">
                        {s.trim()}
                        {project.services.split("|").indexOf(s) < project.services.split("|").length - 1 && (
                          <span className="ml-2 text-border">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<"creative" | "corporate">("creative");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const projects = activeTab === "creative" ? creativeProjects : corporateProjects;

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const selectProject = (project: WorkProject) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);

    if (!open) {
      closeTimerRef.current = setTimeout(() => {
        setSelectedProject(null);
        closeTimerRef.current = null;
      }, 220);
    }
  };

  return (
    <section id="work" className="bg-background px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Selected Work heading + tab filters */}
        <div className="mb-10 flex flex-col items-center gap-6 text-center sm:mb-14 md:mb-16 md:flex-row md:justify-between md:text-left">
          <h2 className="text-3xl md:text-4xl font-medium text-white">Selected Work</h2>

          <div className="flex w-full max-w-sm items-center justify-center gap-1 bg-secondary p-1 sm:w-auto">
            <button
              onClick={() => setActiveTab("creative")}
              className={`min-w-0 flex-1 whitespace-nowrap px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-6 ${
                activeTab === "creative"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`min-w-0 flex-1 whitespace-nowrap px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-6 ${
                activeTab === "corporate"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Corporate
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <VideoCard key={`${activeTab}-${index}`} project={project} onSelect={selectProject} />
          ))}
        </div>
      </div>

      <VideoModal project={selectedProject} open={modalOpen} onOpenChange={handleModalOpenChange} />
    </section>
  );
}
