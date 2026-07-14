"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const phone = "+380 (44) 333-22-11";
  const phoneClean = phone.replace(/[^0-9+]/g, "");
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо у гості
            </h2>
          </Reveal>
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>
          
          <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                {address}
              </span>
            </div>
            <iframe 
              src={mapEmbedUrl} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
          
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold tracking-wide uppercase text-muted hover:text-foreground transition-colors"
          >
            Відкрити в Google Maps
          </a>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:pl-6">
          <div>
            <h3 className="mb-4 text-sm uppercase text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              <div className="flex items-baseline justify-between py-3 text-base">
                <span className="text-muted">Пн–Нд</span>
                <span className="font-semibold font-display text-lg">11:00–22:00</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-2xl font-bold lg:text-3xl">
              <a href={`tel:${phoneClean}`} className="hover:text-accent transition-colors duration-300">
                {phone}
              </a>
            </p>
            <Magnetic>
              <a 
                href={`tel:${phoneClean}`} 
                className="mt-6 inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform active:scale-95" 
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Забронювати стіл<span aria-hidden>→</span>
              </a>
            </Magnetic>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Рекомендуємо забронювати столик заздалегідь для затишного вечора у колі близьких.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}