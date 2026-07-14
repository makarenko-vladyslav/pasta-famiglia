"use client";

import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";
import { Phone, MapPin } from "@phosphor-icons/react";

export function SectionLocation() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const phone = "+380 (44) 333-22-11";
  const phoneClean = phone.replace(/[^0-9+]/g, "");

  return (
    <section id="location" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Ambient tones to reflect the terracotta intent from the spec */}
      <AmbientCanvas />
      
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на Антоновича
            </h2>
          </Reveal>
          
          <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
            {address}
          </p>

          <div className="relative mt-8 overflow-hidden bg-surface shadow-2xl" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* Styled underlay for loading state */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <div className="flex flex-col items-center gap-2">
                <MapPin size={32} className="text-muted" />
                <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                  {address}
                </span>
              </div>
            </div>
            
            <iframe 
              src={mapEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04] transition-all duration-700 hover:grayscale-0 lg:aspect-video" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 lg:pl-6">
          <div className="relative">
            {/* Small inset photo decoration as requested in spec */}
            <div className="absolute -top-12 -right-4 z-20 hidden w-32 overflow-hidden shadow-xl lg:block" style={{ borderRadius: "var(--radius-surface)" }}>
               <img 
                src="https://images.pexels.com/photos/13307545/pexels-photo-13307545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Pasta Famiglia interior detail"
                className="aspect-[3/4] object-cover rp-grain"
                loading="lazy"
              />
            </div>

            <h3 className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">Графік роботи</h3>
            <div className="divide-y divide-foreground/10">
              <div className="flex items-baseline justify-between py-4 text-base lg:text-lg">
                <span className="text-muted">Пн–Нд</span>
                <span className="font-display font-semibold">11:00–22:00</span>
              </div>
            </div>
          </div>

          <div>
            <div className="group flex flex-col gap-1">
              <h3 className="text-sm uppercase tracking-[0.25em] text-muted">Контакти</h3>
              <a 
                href={`tel:${phoneClean}`} 
                className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold transition-colors hover:text-accent"
              >
                {phone}
              </a>
              <a 
                href="mailto:e2e-pasta-client@example.com" 
                className="text-sm text-muted underline decoration-foreground/10 underline-offset-4 transition-colors hover:text-foreground"
              >
                e2e-pasta-client@example.com
              </a>
            </div>

            <div className="mt-10 flex flex-col items-start gap-6">
              <Magnetic>
                <a 
                  href={`tel:${phoneClean}`} 
                  className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-lg transition-transform active:scale-95" 
                  style={{ borderRadius: "var(--radius-control)" }}
                >
                  Замовити доставку <span aria-hidden className="text-xl">→</span>
                </a>
              </Magnetic>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Забронюйте столик онлайн або зателефонуйте нам для замовлення доставки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}