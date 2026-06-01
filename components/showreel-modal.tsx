"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ShowreelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vimeoId: string;
  title?: string;
}

export function ShowreelModal({ open, onOpenChange, vimeoId, title = "Showreel" }: ShowreelModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full gap-0 rounded-none border-0 bg-black p-0 shadow-none">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative aspect-video w-full">
          {open && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              title={title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
