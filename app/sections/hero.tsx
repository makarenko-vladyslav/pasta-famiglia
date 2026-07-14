"use client";

import React, { useState, useEffect } from "react";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionHero() {
  const images = [
    "https://images.pexels.com/photos/10046961/pexels-photo-10046961.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const words = "Паста за 20 хвилин".split(" ");

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-end pt-32 pb-[var(--space-act)] px-4 lg:px-6 bg-surface overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-foreground">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Pasta Famiglia"
            loading={idx === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-[var(--ease-out-cubic)] ${
              idx === currentIndex
                ? "opacity-60 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
        {/* Scrim for text readability over photos */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-12 gap-x-4 lg:gap-x-6 gap-y-12 items-end">
        
        {/* Trust Line */}
        <div className="col-span-12 md:col-span-3 flex flex-col justify-end">
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-1 text-background">
              <span className="font-body text-base text-background/90">
                ★ 4.9 · 127 відгуків
              </span>
              <span className="font-body text-sm text-background/70">
                вул. Антоновича, 44
              </span>
            </div>
          </Reveal>
        </div>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          
          <div className="flex flex-col justify-end max-w-2xl">
            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] mb-6 md:mb-8 text-background">
              {words.map((word, i) => (
                <React.Fragment key={i}>
                  <span 
                    className="word-rise inline-block" 
                    style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                  >
                    {word}
                  </span>
                  {i < words.length - 1 && " "}
                </React.Fragment>
              ))}
            </h1>
            
            <Reveal delay={0.6}>
              <p className="font-body text-lg md:text-xl text-background/90 leading-relaxed max-w-lg">
                Замішуємо тісто щоранку. Тихий обід у центрі Києва, а столик можна забронювати за 30 секунд.
              </p>
            </Reveal>
          </div>

          {/* CTA */}
          <div className="shrink-0 w-full md:w-auto pb-1 md:pb-2">
            <Reveal delay={0.8}>
              <Magnetic>
                <a 
                  href="#book"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3.5 text-base uppercase tracking-widest bg-accent text-accent-foreground font-display hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати стіл
                </a>
              </Magnetic>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}