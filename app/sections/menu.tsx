"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal, Magnetic } from "@/components/mechanics";

const PHOTO_BASE = "https://images.pexels.com/photos/5490976/pexels-photo-5490976.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const COPY_ITEMS = [
  { name: "Бізнес-ланч (Пн-Пт)", desc: "суп, паста на вибір та напій", price: "320 грн" },
  { name: "Сімейний обід", desc: "дві піци з печі, дві порції пасти та лимонад", price: "1150 грн" },
  { name: "Романтична вечеря", desc: "просекко, плато антипасті та десерти", price: "1450 грн" },
  { name: "Піца Маргарита", desc: "Томатний соус, моцарела, свіжий базилік", price: "210 грн" },
  { name: "Паста Карбонара", desc: "Панчета, яєчний жовток, пекоріно", price: "260 грн" },
  { name: "Піца Пепероні", desc: "Томатний соус, моцарела, пепероні", price: "250 грн" },
  { name: "Паста Болоньєзе", desc: "М'ясне рагу, пармезан, томати", price: "280 грн" },
  { name: "Тірамісу", desc: "Маскарпоне, савоярді, кава", price: "180 грн" }
];

export function SectionMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Fast direct DOM manipulation for 60fps standard cursor tracking
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    
    // Only attach listener if on a device that supports hover
    const isHoverable = window.matchMedia("(hover: hover)").matches;
    if (isHoverable) {
      window.addEventListener("mousemove", moveCursor, { passive: true });
    }
    
    return () => {
      if (isHoverable) {
        window.removeEventListener("mousemove", moveCursor);
      }
    };
  }, []);

  return (
    <section 
      id="menu" 
      className="relative py-[var(--space-act)] bg-surface text-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 lg:gap-x-8 gap-y-16">
          
          {/* Cols 1-3: Sticky Sidebar */}
          <div className="md:col-span-4 lg:col-span-3 lg:col-start-1">
            <div className="md:sticky md:top-32 flex flex-col items-start">
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-foreground tracking-tight mb-8">
                  Точний розрахунок
                </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="font-body text-lg lg:text-xl text-foreground leading-snug mb-4">
                  Ціни на основні страви від 210 до 380 гривень.
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <p className="font-body text-sm text-muted uppercase tracking-[0.25em] mb-10">
                  Три формати для різних годин дня.
                </p>
              </Reveal>
              
              <Reveal delay={0.4}>
                <Magnetic>
                  <a 
                    href="#menu-list" 
                    className="inline-flex items-center justify-center bg-foreground text-background px-5 py-3 text-sm lg:text-base transition-transform duration-300 ease-[var(--ease-out-cubic)] hover:scale-[1.02]"
                    style={{ borderRadius: "var(--radius-control)" }}
                  >
                    Відкрити меню
                  </a>
                </Magnetic>
              </Reveal>
            </div>
          </div>

          {/* Cols 5-12: Editorial Menu List */}
          <div 
            id="menu-list"
            className="md:col-span-8 lg:col-span-8 lg:col-start-5"
          >
            <ul className="flex flex-col border-t border-foreground/10">
              {COPY_ITEMS.map((item, index) => (
                <Reveal key={index} delay={0.1 + index * 0.05}>
                  <li
                    className="group relative flex flex-col md:flex-row md:items-end justify-between py-5 md:py-8 border-b border-foreground/10 transition-transform duration-[600ms] ease-[var(--ease-out-cubic)] hover:translate-x-2 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex flex-col gap-1 md:gap-2 pr-4 max-w-xl">
                      <span className="font-display text-[1.5rem] leading-none text-foreground">
                        {item.name}
                      </span>
                      <span className="font-body text-[0.875rem] font-light text-muted">
                        {item.desc}
                      </span>
                    </div>
                    <div className="mt-4 md:mt-0 font-display text-[1rem] md:text-[1.125rem] leading-none text-foreground whitespace-nowrap">
                      {item.price}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {/* Floating Cursor Thumbnail (Hidden on touch/mobile) */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 h-[16rem] w-[16rem] -ml-[8rem] -mt-[8rem] overflow-hidden hidden md:block transition-opacity duration-300 ease-[var(--ease-out-cubic)] ${
          hoveredIndex !== null ? "opacity-100" : "opacity-0"
        }`}
        style={{
          borderRadius: "var(--radius-surface)",
          willChange: "transform"
        }}
      >
        <div className="relative w-full h-full bg-surface">
          {COPY_ITEMS.map((_, i) => (
            <img
              key={i}
              src={`${PHOTO_BASE}&v=${i}`}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[var(--ease-out-cubic)] ${
                hoveredIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.08]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}