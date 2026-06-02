"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SHOWREELS = [
  { id: "commercial", label: "Commercial", vimeoId: "1190123579" },
  { id: "corporate", label: "Corporate", vimeoId: "1186264537" },
] as const;

type ShowreelId = (typeof SHOWREELS)[number]["id"];

interface ShowreelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShowreelModal({ open, onOpenChange }: ShowreelModalProps) {
  const [active, setActive] = useState<ShowreelId>("commercial");

  // Reset to commercial every time the modal opens
  useEffect(() => {
    if (open) setActive("commercial");
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  const current = SHOWREELS.find((s) => s.id === active)!;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Showreel"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-white/10 p-1">
          {SHOWREELS.map((reel) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => setActive(reel.id)}
              className={`px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none ${
                active === reel.id
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {reel.label}
            </button>
          ))}
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="flex h-9 w-9 items-center justify-center text-white/60 transition-colors hover:text-white focus-visible:outline-none"
          aria-label="Close showreel"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Video */}
      <div className="flex flex-1 items-center justify-center px-4 pb-6 md:px-8">
        <div className="relative w-full max-w-6xl" style={{ paddingBottom: "min(56.25%, calc(100vh - 100px))" }}>
          <iframe
            key={current.vimeoId}
            className="absolute inset-0 h-full w-full"
            src={`https://player.vimeo.com/video/${current.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&color=ffffff`}
            title={`${current.label} Showreel`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
