"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionKids() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [imgInView, setImgInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImgInView(true);
      },
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-[var(--space-act)] bg-background text-foreground overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-6 items-center min-h-[50vh] lg:min-h-[70vh]">
          
          {/* Text Column (Cols 2-5) */}
          <div className="md:col-start-2 md:col-span-4 flex flex-col items-start space-y-6 md:space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <span className="text-sm uppercase tracking-[0.25em] text-muted block font-display">
                  Дітям
                </span>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
                  Тиша біля столу
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg lg:text-xl text-muted font-body leading-relaxed max-w-md">
                Ви спокійно обідаєте, поки діти зайняті у спеціально обладнаній зоні з аніматором. Доступно у вихідні дні.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Magnetic>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center bg-foreground text-background px-5 py-3 text-sm lg:text-base transition-colors hover:bg-foreground/90 group"
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Забронювати на вихідні
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Magnetic>
            </Reveal>
          </div>

          {/* Image Column (Cols 8-11) */}
          <div className="md:col-start-8 md:col-span-4 flex justify-center md:justify-end">
            <div
              ref={imgRef}
              className={`relative w-[80%] md:w-full aspect-square rounded-full overflow-hidden transition-all duration-[1500ms] ${
                imgInView ? "opacity-100 scale-100" : "opacity-0 scale-[0.8]"
              }`}
              style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
            >
              <img
                src="https://images.pexels.com/photos/38499051/pexels-photo-38499051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="Дітям у закладі"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 rp-grain opacity-10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}