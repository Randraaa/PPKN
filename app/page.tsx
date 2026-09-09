"use client";

import React, { useEffect, useState, useRef } from "react";
import { Slide1Cover, Slide2History, Slide3Congress } from "@/components/slides1";
import { Slide4Pledge, Slide5Legacy, Slide6WRSupratman } from "@/components/slides2";
import { Slide7Lyrics, Slide8Analysis, Slide9Relevance, Slide10Credits } from "@/components/slides3";
import { cn } from "@/lib/utils";

const slidesData = [
  { Component: Slide1Cover, time: "~1 min", label: "Cover" },
  { Component: Slide2History, time: "~2.5 min", label: "History" },
  { Component: Slide3Congress, time: "~2.5 min", label: "Congress" },
  { Component: Slide4Pledge, time: "~2 min", label: "Pledge" },
  { Component: Slide5Legacy, time: "~1.5 min", label: "Legacy" },
  { Component: Slide6WRSupratman, time: "~3 min", label: "W.R. Supratman" },
  { Component: Slide7Lyrics, time: "~2 min", label: "Lyrics" },
  { Component: Slide8Analysis, time: "~2.5 min", label: "Analysis" },
  { Component: Slide9Relevance, time: "~2 min", label: "Relevance" },
  { Component: Slide10Credits, time: "~0.5 min", label: "Credits" },
];

export default function Presentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) setActiveSlide(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(Math.min(activeSlide + 1, slidesData.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToSlide(Math.max(activeSlide - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const progress = ((activeSlide) / (slidesData.length - 1)) * 100;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-background">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full z-50">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Top Info Bar (Slide Number) */}
      <div className="absolute top-6 left-6 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center">
        <span className="font-bold text-primary">Slide {activeSlide + 1}/{slidesData.length}</span>
      </div>

      {/* Sidebar Navigation Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={cn(
              "absolute right-6 px-2 py-1 rounded bg-black/80 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity mr-2 pointer-events-none",
              activeSlide === idx && "font-bold text-primary"
            )}>
              {slidesData[idx].label}
            </div>
            <div className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border-2",
              activeSlide === idx 
                ? "bg-primary border-primary scale-125" 
                : "bg-transparent border-gray-400 hover:border-primary"
            )} />
          </button>
        ))}
      </div>

      {/* Main Slides Container */}
      <div 
        ref={containerRef}
        className="slides-container"
      >
        {slidesData.map((slide, idx) => {
          const SlideComponent = slide.Component;
          return (
            <section
              key={idx}
              data-index={idx}
              ref={(el) => { sectionRefs.current[idx] = el; }}
              className="slide-section"
            >
              <SlideComponent />
            </section>
          );
        })}
      </div>
    </main>
  );
}
