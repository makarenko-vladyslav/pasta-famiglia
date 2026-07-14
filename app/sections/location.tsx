"use client";

import React from "react";
import { Reveal, Magnetic, AmbientCanvas } from "@/components/mechanics";
import { MapPin, Clock, Phone, Envelope } from "@phosphor-icons/react";

export function SectionLocation() {
  const facts = {
    address: "вул. Антоновича, 44, Київ",
    phone: "+380 (44) 333-22-11",
  };

  const copy = {
    headline: "Чекаємо в гості",
    subcopy: "Заходьте на швидкий ланч або сімейну вечерю.",
    items: [
      "вул. Антоновича, 44, Київ",
      "Пн–Нд 11:00–22:00",
      "+380 (44) 333-22-11",
      "e2e-pasta-client@example.com",
    ],
  };

  const icons = [MapPin, Clock, Phone, Envelope];
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    facts.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="relative w-full py-[var(--space-act)] bg-accent text-accent-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid grid-cols-12 gap-y-12 md:gap-x-12 items-center">
        {/* Text & Contacts Column */}
        <div className="col-span-12 md:col-span-6 flex flex-col text-center md:text-left items-center md:items-start">
          <Reveal>
            <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[0.95] mb-6">
              {copy.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-accent-foreground/80 max-w-md font-medium mb-12">
              {copy.subcopy}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <ul className="w-full max-w-md flex flex-col border-t border-accent-foreground/15">
              {copy.items.map((item, index) => {
                const Icon = icons[index] || MapPin;
                return (
                  <li
                    key={index}
                    className="py-5 border-b border-accent-foreground/15 flex items-center justify-center md:justify-start gap-4 font-body font-medium text-lg"
                  >
                    <Icon className="w-6 h-6 opacity-60 shrink-0" weight="light" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <Magnetic>
              <a
                href={`tel:${facts.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-block mt-12 font-display text-[1.5rem] border-b border-accent-foreground/30 pb-1 hover:border-accent-foreground transition-colors"
                style={{
                  transitionDuration: "700ms",
                  transitionTimingFunction: "var(--ease-out-cubic)",
                }}
              >
                Зателефонувати
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* Map & Background Ambient Column */}
        <div
          className="col-span-12 md:col-span-6 relative h-[50vh] md:h-[650px] w-full overflow-hidden"
          style={{ borderRadius: "var(--radius-surface)" }}
        >
          {/* Faint Multiply Backdrop */}
          <div className="absolute inset-0 z-0 bg-background mix-blend-multiply">
            <AmbientCanvas />
            <img
              src="https://images.pexels.com/photos/13068783/pexels-photo-13068783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Location backdrop"
              className="w-full h-full object-cover opacity-40 scale-105"
              loading="lazy"
            />
          </div>

          {/* Embedded Map */}
          <Reveal delay={0.4} className="relative z-10 w-full h-full p-3 md:p-6 flex flex-col">
            <iframe
              title="Google Maps"
              className="w-full h-full flex-grow shadow-2xl"
              style={{ border: 0, borderRadius: "var(--radius-control)" }}
              loading="lazy"
              allowFullScreen
              src={mapUrl}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}