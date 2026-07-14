"use client";

import { useState } from "react";
import { Reveal } from "@/components/mechanics";

const faqData = [
  {
    q: "Де залишити авто?",
    a: "Біля закладу працює платний міський паркінг, місця зазвичай звільняються кожні 15 хвилин.",
  },
  {
    q: "А якщо паста здасться надто твердою?",
    a: "Ми варимо al dente за замовчуванням. Якщо любите м'якше тісто, скажіть про це під час замовлення.",
  },
  {
    q: "Чи потрібна передоплата за стіл?",
    a: "Ні, бронювання через сайт або бот абсолютно безкоштовне.",
  },
  {
    q: "Як працює доставка?",
    a: "Відправляємо кур'єрами, пакуємо у вентильовані коробки, щоб пар виходив і тісто не розмокало.",
  },
];

export function SectionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-[var(--space-act)]">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative items-start">
          
          {/* Sticky Heading Column */}
          <div className="md:col-span-4 md:col-start-1">
            <div className="md:sticky md:top-[20vh]">
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-foreground">
                  Часті запитання
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Accordion Column */}
          <div className="md:col-span-7 md:col-start-6 mt-8 md:mt-0">
            <div className="flex flex-col border-t border-foreground/10">
              {faqData.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <Reveal key={idx} delay={0.15 + idx * 0.1}>
                    <div className="border-b border-foreground/10">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="group flex w-full items-center justify-between py-6 md:py-8 text-left outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-2xl text-foreground pr-8 transition-transform duration-[400ms] ease-[var(--ease-out-cubic)] group-hover:translate-x-2">
                          {item.q}
                        </span>
                        
                        {/* Animated Plus/Minus Icon */}
                        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                          <span
                            className={`absolute h-[1.5px] w-5 bg-foreground transition-all duration-[700ms] ease-[var(--ease-out-cubic)] ${
                              isOpen ? "rotate-180 opacity-40" : "rotate-0 opacity-100"
                            }`}
                          />
                          <span
                            className={`absolute h-5 w-[1.5px] bg-foreground transition-all duration-[700ms] ease-[var(--ease-out-cubic)] ${
                              isOpen ? "rotate-90 scale-y-0 opacity-40" : "rotate-0 scale-y-100 opacity-100"
                            }`}
                          />
                        </span>
                      </button>
                      
                      <div
                        className={`grid transition-[grid-template-rows] duration-[700ms] ease-[var(--ease-out-cubic)] ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="font-body text-base text-muted pb-6 md:pb-8 pr-12 md:pr-24">
                            {item.a}
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