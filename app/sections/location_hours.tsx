"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowUpRight } from "@phosphor-icons/react";

/**
 * ACT V The Close: Location and Map
 * A premium typographic layout for Pasta Famiglia location details.
 */
export function SectionLocationHours() {
  const address = "вул. Антоновича, 44, Київ";
  const hours = "Пн–Нд 11:00–22:00";
  const phone = "+380 (44) 333-22-11";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location_hours" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-2 lg:px-10">
        <div>
          <span className="mb-5 block text-sm uppercase tracking-[0.3em] text-muted">Локація</span>
          
          <Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9]">
              Завітайте до нас
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug">
              {address}
            </p>
          </Reveal>

          {/* Google map frame */}
          <div className="relative mt-8 overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
            {/* styled underlay so a slow/blocked map never reads as a grey void */}
            <div aria-hidden className="absolute inset-0 grid place-items-center bg-foreground/5">
              <span className="px-6 text-center font-display text-lg font-semibold text-muted">
                {address}
              </span>
            </div>
            <iframe 
              src={mapEmbedSrc} 
              title={address} 
              loading="lazy" 
              className="relative aspect-[4/3] w-full border-0 grayscale-[0.25] contrast-[1.04]" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          </div>

          <div className="mt-6">
            <Magnetic>
              <a 
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors hover:text-accent lg:text-base"
              >
                Відкрити в Google Maps
                <ArrowUpRight weight="bold" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="divide-y divide-foreground/10 border-t border-foreground/10">
            {/* HOURS ROWS */}
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="font-body text-muted">Понеділок — Пʼятниця</span>
              <span className="font-display font-semibold tracking-tight">11:00 — 22:00</span>
            </div>
            <div className="flex items-baseline justify-between py-6 text-base lg:text-lg">
              <span className="font-body text-muted">Субота — Неділя</span>
              <span className="font-display font-semibold tracking-tight">11:00 — 22:00</span>
            </div>
          </div>

          <div className="mt-16 lg:mt-24">
            <span className="text-sm uppercase tracking-[0.25em] text-muted">Бронювання столів</span>
            <Reveal delay={0.2}>
              <a 
                href={`tel:${phone.replace(/[^\d+]/g, '')}`} 
                className="mt-4 block font-display text-[clamp(1.8rem,3vw,3rem)] font-bold transition-colors duration-300 hover:text-accent"
              >
                {phone}
              </a>
            </Reveal>
            <p className="mt-4 max-w-sm font-body text-sm text-muted">
              Радимо бронювати столик заздалегідь, особливо для вечірніх візитів та вихідних днів.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration - subtle watermark for desktop only */}
      <div className="pointer-events-none absolute -bottom-12 -right-12 hidden select-none overflow-hidden lg:block">
        <span className="font-display text-[15rem] font-black leading-none opacity-[0.03]">
          ROMA
        </span>
      </div>
    </section>
  );
}