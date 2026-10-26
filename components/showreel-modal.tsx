"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ShowreelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vimeoId: string;
  title?: string;
}

export function ShowreelModal({
  open,
  onOpenChange,
  vimeoId,
  title = "Showreel",
}: ShowreelModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-dvh max-h-dvh w-screen max-w-none gap-0 overflow-hidden rounded-none border-0 bg-black p-0 shadow-none duration-300 ease-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 data-[state=closed]:duration-200 sm:max-w-none">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative aspect-video max-h-full w-full max-w-full">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
