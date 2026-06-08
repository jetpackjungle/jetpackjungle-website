"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { ShowreelModal } from "@/components/showreel-modal";

const HERO_TEXT_IDLE_DELAY = 1800;

export function Hero() {
  const [isHeroTextVisible, setIsHeroTextVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isTouchViewport, setIsTouchViewport] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updateTouchViewport = () => setIsTouchViewport(mediaQuery.matches);

    updateTouchViewport();
    mediaQuery.addEventListener("change", updateTouchViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateTouchViewport);
    };
  }, []);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const scheduleHide = () => {
      clearHideTimer();

      if (!isHeroVisible || isTouchViewport) {
        return;
      }

      hideTimerRef.current = setTimeout(() => {
        setIsHeroTextVisible(false);
      }, HERO_TEXT_IDLE_DELAY);
    };

    const revealHeroText = () => {
      setIsHeroTextVisible(true);
      scheduleHide();
    };

    if (!isHeroVisible) {
      setIsHeroTextVisible(false);
      clearHideTimer();

      return clearHideTimer;
    }

    if (isTouchViewport) {
      setIsHeroTextVisible(true);
      clearHideTimer();

      return clearHideTimer;
    }

    const activityEvents = [
      "scroll",
      "wheel",
      "pointermove",
      "pointerdown",
      "keydown",
      "touchstart",
      "focusin",
    ];

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, revealHeroText, { passive: true });
    });

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, revealHeroText);
      });
      clearHideTimer();
    };
  }, [isHeroVisible, isTouchViewport]);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setIsHeroVisible(false);
      return;
    }

    const updateHeroVisibility = () => {
      const { bottom, top } = hero.getBoundingClientRect();
      setIsHeroVisible(top < window.innerHeight && bottom > 0);
    };

    updateHeroVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.01 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  // iOS Safari can defer autoplay and pause the video when the element scrolls
  // out of view. Explicitly call play() whenever the hero is visible so the
  // background video starts on load and resumes after scrolling back up.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isHeroVisible) {
      const playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay can reject on some browsers; the muted + playsInline
          // attributes make this unlikely, and we retry on the next visibility
          // change, so we can safely ignore the rejection here.
        });
      }
    }
  }, [isHeroVisible]);

  return (
    <section id="hero" className="relative h-svh min-h-[34rem] w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* MP4 first so iOS Safari (which doesn't reliably support WebM) picks it */}
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 md:px-12 md:pb-24">
        <div
          className={`max-w-4xl transition-opacity duration-500 ease-out motion-reduce:transition-none ${
            isHeroTextVisible ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold leading-tight text-white text-balance md:text-6xl lg:text-7xl">
            We craft cinematic content that moves people
          </h1>
          <p className="mt-5 max-w-xl text-base text-white sm:text-lg md:mt-6 md:text-xl">
            Jetpack Jungle is a Dublin-based creative video agency. Concept to delivery for brands that want work worth watching.
          </p>
          <button
            type="button"
            onClick={() => setShowreelOpen(true)}
            className="mt-8 inline-flex items-center gap-3 border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:text-base"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Watch Showreel
          </button>
        </div>
      </div>

      <ShowreelModal
        open={showreelOpen}
        onOpenChange={setShowreelOpen}
      />
    </section>
  );
}
