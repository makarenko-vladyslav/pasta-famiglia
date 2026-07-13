"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

export function SectionLocationHours() {
  const address = "вул. Антоновича, 44, Київ";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location_hours" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="rp-actno mb-5 block">Локація</span>
          <Reveal>
            <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)]">
              Чекаємо на вас у гості
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

          <div className="mt-8">
            <Magnetic>
              <a 
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/90 lg:text-base"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Прокласти маршрут <ArrowUpRight size={18} weight="bold" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-16">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
            <div className="flex items-baseline justify-between py-4 text-base">
              <span className="text-muted">Понеділок — Неділя</span>
              <span className="font-display text-xl font-semibold">11:00 — 22:00</span>
            </div>
            {/* Placeholder for additional specific day rules if needed from FACTS, but here we use the uniform one */}
          </div>

          <div className="mt-12 border-t border-foreground/10 pt-8">
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-muted">Бронювання столів</span>
            <div className="mt-4">
              <a 
                href="tel:+380443332211" 
                className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold transition-opacity duration-200 hover:opacity-70"
              >
                +380 (44) 333-22-11
              </a>
              <p className="mt-2 text-sm text-muted">
                Зателефонуйте нам або завітайте особисто
              </p>
            </div>
          </div>

          <div className="mt-12 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
            <img 
              src="https://images.pexels.com/photos/6213751/pexels-photo-6213751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800" 
              alt="Pasta Famiglia interior"
              className="aspect-[16/10] w-full object-cover grayscale-[0.1] transition-transform duration-1000 hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}