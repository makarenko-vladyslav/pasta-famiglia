"use client";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

export function SectionBooking() {
  return (
    <section 
      id="booking" 
      className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <AmbientCanvas />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block text-sm uppercase tracking-[0.3em]">
          Бронювання
        </span>
        
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Чекаємо на вашу родину
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-300 hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати стіл
              <span aria-hidden className="text-xl">→</span>
            </a>
          </Magnetic>
          
          <a 
            href="tel:+380443332211" 
            className="text-lg font-medium underline underline-offset-8 opacity-70 transition-opacity hover:opacity-100"
          >
            Переглянути меню
          </a>
        </div>

        <div className="mt-20 grid gap-6 border-t border-foreground/10 pt-10 text-sm uppercase tracking-widest lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="opacity-50">Локація</span>
            <span className="font-display text-lg tracking-normal">Київ, Україна</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-50">Кухня</span>
            <span className="font-display text-lg tracking-normal">Італійська душа</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="opacity-50">Атмосфера</span>
            <span className="font-display text-lg tracking-normal">Сімейний затишок</span>
          </div>
        </div>
      </div>

      {/* Decorative Watermark */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 hidden overflow-hidden lg:block">
        <span className="rp-watermark text-[20rem] font-display opacity-[0.03] select-none">
          FAMIGLIA
        </span>
      </div>
    </section>
  );
}