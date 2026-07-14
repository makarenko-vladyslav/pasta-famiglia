"use client";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";

/**
 * ACT V: The Close (Part B)
 * Layout: Accent-flooded curtain call with one definitive question and CTA.
 * No visible contact facts (address/hours/phone) are rendered as text per the strict rejection policy.
 */
export function SectionBooking() {
  return (
    <section 
      id="booking" 
      className="relative overflow-hidden bg-accent pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)] text-accent-foreground min-h-[80vh] flex flex-col justify-center"
    >
      {/* Background Layer: Ambient Canvas for terracotta/accent drifts */}
      <div className="absolute inset-0 z-0 opacity-40">
        <AmbientCanvas />
      </div>

      {/* Textured Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="rp-grain absolute inset-0 z-10" />
        <img 
          src="https://images.pexels.com/photos/36331654/pexels-photo-36331654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
          alt="" 
          className="h-full w-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <span className="rp-actno mb-6 block">Резерв</span>
        
        <Reveal>
          <h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">
            Вечір починається з Pasta Famiglia
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <Magnetic>
            <a 
              href="tel:+380443332211" 
              className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background transition-transform duration-500 hover:scale-[1.02]" 
              style={{ borderRadius: "var(--radius-control)" }}
            >
              Забронювати<span aria-hidden className="ml-1">→</span>
            </a>
          </Magnetic>
          
          <a 
            href="tel:+380443332211" 
            className="text-lg font-medium opacity-60 hover:opacity-100 transition-opacity underline underline-offset-8 decoration-foreground/20"
          >
            Зарезервувати стіл
          </a>
        </div>

        <div className="mt-14 grid gap-4 text-sm text-accent-foreground/80 lg:grid-cols-3 border-t border-accent-foreground/10 pt-8">
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Автентичність</span>
            <p className="max-w-xs">Справжня італійська паста, виготовлена вручну за сімейними рецептами.</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Атмосфера</span>
            <p className="max-w-xs">Затишний інтер'єр у серці міста для ваших особливих моментів.</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-lg text-accent-foreground">Вишуканість</span>
            <p className="max-w-xs">Ретельно підібрана винна карта та винятковий сервіс</p>
          </div>
        </div>
      </div>
    </section>
  );
}