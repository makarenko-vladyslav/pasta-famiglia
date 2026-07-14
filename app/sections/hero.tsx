"use client";

import { useState, useEffect } from "react";
import { Reveal, Magnetic } from "@/components/mechanics";

const PHOTOS = [
  "https://images.pexels.com/photos/4947388/pexels-photo-4947388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/6287451/pexels-photo-6287451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];

export function SectionHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[100svh] relative w-full grid grid-cols-12 items-end pb-12 pt-32 px-4 md:px-8 z-10 overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {PHOTOS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Premium film grain overlay */}
        <div className="absolute inset-0 pointer-events-none rp-grain opacity-30 mix-blend-overlay" />
        {/* Directional gradient to protect typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="col-span-12 md:col-start-2 md:col-span-10 flex flex-col w-full relative z-20">
        
        {/* Trust Line */}
        <Reveal delay={0.05}>
          <div className="mb-6 font-mono text-[14px] uppercase text-foreground/90 flex items-center gap-2">
            <span className="text-accent">★</span>
            <span>4.9 (127 відгуків)</span>
          </div>
        </Reveal>

        {/* Display Heading */}
        <Reveal delay={0.1}>
          <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] leading-[0.92] text-foreground flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] mb-12">
            {"Паста за 20 хвилин".split(" ").map((word, i) => (
              <span
                key={i}
                className="word-rise block"
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </Reveal>

        {/* Subcopy & CTA Seam */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-foreground/10">
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-md font-body leading-relaxed">
              Замішуємо тісто з борошна Semola щоранку. Обід без затримок у центрі Києва.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="w-full md:w-auto">
              <Magnetic>
                <a
                  href="#top"
                  className="w-full md:w-auto flex justify-center items-center px-6 py-3.5 text-base bg-foreground text-background font-medium hover:scale-[1.04] transition-transform duration-300 group"
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати стіл
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}