"use client";

import { useState, useEffect } from "react";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1576018/pexels-photo-1576018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/6287450/pexels-photo-6287450.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ];

  const headline = "Паста за 20 хвилин".split(" ");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[90vh] bg-background text-foreground overflow-hidden">
      {/* Slider Background - Right Desktop, Top Mobile */}
      <div className="absolute top-0 left-0 right-0 h-[60svh] md:h-full md:left-[45%] md:w-[55%] z-0 overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out-cubic ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt="Pasta Famiglia"
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${
                i === activeIndex ? "scale-100" : "scale-[1.05]"
              }`}
            />
          </div>
        ))}

        {/* Sheer Protection Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 via-30% to-transparent md:hidden z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent hidden md:block z-10" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-6 h-full grid grid-cols-12 items-end md:items-center min-h-[100svh] md:min-h-[90vh] pb-[var(--space-act)] md:pt-[20vh] md:pb-[10vh]">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-6 md:gap-8 pt-[45svh] md:pt-0">
          
          <Reveal delay={0.1}>
            <div className="text-sm uppercase tracking-[0.25em] font-body text-muted flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-foreground">★ 4.9</span>
              <span className="opacity-20">|</span>
              <span>127 ВІДГУКІВ</span>
            </div>
          </Reveal>

          <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] text-foreground flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
            {headline.map((word, i) => (
              <span
                key={i}
                className="word-rise inline-block"
                style={{ animationDelay: `${0.15 + i * 0.09}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <Reveal delay={0.5}>
            <p className="text-lg md:text-xl text-foreground/90 max-w-md font-body leading-relaxed">
              Робимо тісто щоранку. Бронь тихого столика біля метро Олімпійська за 30 секунд.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="pt-4 md:pt-6">
              <Magnetic>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3.5 text-base font-body w-full md:w-auto hover:bg-foreground/90 transition-colors"
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати стіл
                </a>
              </Magnetic>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}