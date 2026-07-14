"use client";

import { useState } from "react";
import { Reveal } from "@/components/mechanics";

const FAQ_ITEMS = [
  {
    question: "Де залишити авто?",
    answer: "У центрі міста буває складно з паркуванням, тому радимо залишати машину вздовж сусідніх вулиць або на найближчих паркінгах."
  },
  {
    question: "Чи приїде піца теплою?",
    answer: "Ми пакуємо її у фольговані термосумки. Скоринка залишається хрусткою."
  },
  {
    question: "Як забронювати столик?",
    answer: "Натисніть кнопку на сайті. Миттєво підтвердимо у Telegram або Viber без телефонних розмов."
  }
];

export function SectionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-[var(--space-act)] w-full bg-surface text-foreground overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-8 relative">
          
          {/* Left Column: Heading & Graphic Element */}
          <div className="col-span-12 md:col-span-4 relative z-10">
            {/* Oversized typographic '?' hidden on mobile, acting as a watermark */}
            <span
              className="hidden md:block absolute -top-10 -left-6 font-display text-[15rem] leading-none text-foreground/5 pointer-events-none select-none"
              aria-hidden="true"
            >
              ?
            </span>
            
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-tight relative z-10">
                Часті запитання
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Accordion List */}
          <div className="col-span-12 md:col-span-8 relative z-20">
            <div className="border-t border-foreground/10">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <Reveal key={idx} delay={0.2 + idx * 0.1}>
                    <div className="border-b border-foreground/10">
                      <button
                        onClick={() => toggleItem(idx)}
                        className="group w-full py-6 lg:py-8 flex items-start justify-between text-left gap-4 cursor-pointer outline-none focus-visible:bg-foreground/5 transition-colors duration-500"
                        aria-expanded={isOpen}
                        style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                      >
                        <span
                          className="font-display font-semibold text-[1.25rem] transition-colors duration-500 group-hover:text-accent pr-8"
                          style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                        >
                          {item.question}
                        </span>
                        <span className="flex-shrink-0 mt-1 text-foreground/40 transition-colors duration-500 group-hover:text-accent">
                          <svg
                            className={`w-6 h-6 transition-transform duration-700 ${
                              isOpen ? "rotate-[135deg]" : "rotate-0"
                            }`}
                            style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M12 5v14m-7-7h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </button>
                      
                      <div
                        className={`grid transition-all duration-700 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                        style={{ transitionTimingFunction: "var(--ease-out-cubic)" }}
                      >
                        <div className="overflow-hidden">
                          <p className="font-body text-base text-muted pb-6 lg:pb-8 pr-4 lg:pr-12 max-w-2xl">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}