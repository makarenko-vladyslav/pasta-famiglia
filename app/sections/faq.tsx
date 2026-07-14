"use client";

import { useState } from "react";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      q: "Що, як ми запізнимося на бронь?",
      a: "Тримаємо стіл 15 хвилин, далі телефонуємо для уточнення."
    },
    {
      q: "Чи можна прийти без запису?",
      a: "Так, але в години пік доведеться чекати. Бронь онлайн займає пів хвилини."
    },
    {
      q: "Як працює гарантія подачі?",
      a: "Час фіксується у чеку. Якщо за 20 хвилин тарілки немає на столі — пригощаємо напоєм."
    }
  ];

  return (
    <section className="py-[var(--space-act)] relative overflow-hidden bg-background text-foreground border-t border-border">
      {/* Giant Background Watermark */}
      <div 
        className="rp-watermark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        FAQ
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column (1-4): Headline */}
          <div className="lg:col-span-4 lg:sticky lg:top-[20vh]">
            <Reveal>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] uppercase">
                Часті запитання
              </h2>
            </Reveal>
          </div>

          {/* Right Column (5-12): Accordion List */}
          <div className="lg:col-span-8 lg:col-start-5 flex flex-col">
            <div className="border-t border-foreground/10">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-foreground/10 group"
                >
                  <Reveal delay={0.1 * index}>
                    <button
                      onClick={() => setOpenId(openId === index ? null : index)}
                      className="w-full text-left py-6 lg:py-8 flex items-center justify-between gap-6 cursor-pointer"
                      aria-expanded={openId === index}
                    >
                      <span className="font-display text-xl lg:text-[1.5rem] leading-tight pr-4 transition-colors duration-200 group-hover:text-accent-foreground">
                        {faq.q}
                      </span>
                      <span className="shrink-0 text-muted group-hover:text-foreground transition-colors duration-200">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          className={`transition-transform duration-[700ms] ease-[var(--ease-out-cubic)] ${
                            openId === index ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-[700ms] ease-[var(--ease-out-cubic)]"
                      style={{
                        gridTemplateRows: openId === index ? "1fr" : "0fr"
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-base lg:text-lg text-muted pb-8 lg:pb-10 pr-12 lg:pr-24 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}