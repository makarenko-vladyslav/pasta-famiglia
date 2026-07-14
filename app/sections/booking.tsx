"use client";

import { Reveal, Magnetic, TiltCard } from "@/components/mechanics";
import { PaperPlaneTilt, CheckCircle, CalendarBlank, Users, Phone } from "@phosphor-icons/react";

export function SectionBooking() {
  return (
    <section id="booking" className="relative bg-surface text-foreground overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-display font-bold">
                Забронювати стіл
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted max-w-md">
                Швидко підтвердимо ваш візит через Telegram або по телефону. Знайдемо ідеальний столик для вашого сімейного обіду чи вечері.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <a href="https://t.me/pastafamiglia" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[hsl(200_100%_46%)] text-[hsl(0_0%_100%)] px-6 py-4 font-semibold transition-opacity hover:opacity-90" style={{ borderRadius: "var(--radius-control)" }}>
                    <PaperPlaneTilt weight="fill" className="text-xl" />
                    Написати в Telegram
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="tel:+380443332211" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-border text-foreground px-6 py-4 font-semibold transition-colors hover:border-foreground" style={{ borderRadius: "var(--radius-control)" }}>
                    <Phone weight="fill" className="text-xl" />
                    Зателефонувати
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="relative flex justify-center lg:justify-end">
            <TiltCard className="w-full max-w-sm">
              <div className="relative w-full rounded-[2rem] overflow-hidden bg-background border border-border shadow-2xl">
                {/* Telegram Header Mockup */}
                <div className="bg-surface px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-lg">
                    PF
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm leading-tight">Pasta Famiglia</span>
                    <span className="text-xs text-[hsl(200_100%_46%)] leading-tight">bot</span>
                  </div>
                </div>
                
                {/* Chat Body */}
                <div className="p-5 flex flex-col gap-4 bg-[hsl(40_20%_96%)] min-h-[300px]" style={{ backgroundImage: "radial-gradient(hsl(40 10% 85%) 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
                  {/* User Message */}
                  <div className="self-end bg-[hsl(90_70%_90%)] text-[hsl(90_50%_15%)] px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm relative">
                    <p className="text-sm pb-2">Хочемо забронювати столик на 4-х сьогодні о 19:00.</p>
                    <span className="text-[10px] opacity-60 absolute bottom-1 right-2 font-medium">14:23</span>
                  </div>
                  
                  {/* Bot Message */}
                  <div className="self-start bg-surface text-foreground px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm relative mt-2">
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                      <CheckCircle weight="fill" className="text-lg" />
                      Бронювання підтверджено
                    </div>
                    <p className="text-sm mb-3">Чекаємо на вас сьогодні! Ваш столик біля вікна.</p>
                    
                    <div className="flex flex-col gap-1.5 text-xs text-muted bg-background border border-border p-3 rounded-xl mb-4">
                      <div className="flex items-center gap-2"><CalendarBlank weight="bold" /> Сьогодні, 19:00</div>
                      <div className="flex items-center gap-2"><Users weight="bold" /> 4 персони</div>
                    </div>
                    
                    <span className="text-[10px] opacity-40 absolute bottom-1.5 right-2 font-medium">14:25</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
