"use client";

import { Reveal } from "@/components/mechanics";

export function SectionPhilosophy() {
  return (
    <section id="philosophy" className="relative min-h-[72vh] overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/6659618/pexels-photo-6659618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
        alt="Філософія гостинності Pasta Famiglia" 
        className="rp-graded absolute inset-0 h-full w-full object-cover" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="rp-grain absolute inset-0" />
      
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[88rem] flex-col justify-end px-4 pb-16 lg:px-10">
        <Reveal>
          <h2 className="font-display font-semibold leading-[1.05] text-background text-[clamp(1.9rem,4vw,3.4rem)] max-w-[22ch]">
            Вечеря як удома
          </h2>
        </Reveal>
        
        <Reveal delay={0.12}>
          <span className="mt-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-background/70">
            <span className="h-px w-10 bg-accent" aria-hidden />
            МІСЦЕ ДЛЯ СУСІДІВ
          </span>
        </Reveal>
      </div>
    </section>
  );
}