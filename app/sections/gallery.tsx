"use client";

import { HorizontalPan, Reveal } from "@/components/mechanics";

const galleryPhotos = [
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=2",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=3",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=4",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=5",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=6",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=7",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=8",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=9",
  "https://images.pexels.com/photos/1648373/pexels-photo-1648373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200&v=10",
];

export function SectionGallery() {
  return (
    <section className="py-12 lg:py-[var(--space-act)] w-full bg-background overflow-hidden flex flex-col">
      <div className="px-4 md:px-8 pb-8">
        <Reveal delay={0.1}>
          <h2 className="font-mono text-sm uppercase tracking-[0.25em] text-muted">
            Галерея
          </h2>
        </Reveal>
      </div>

      <HorizontalPan>
        <div className="flex flex-nowrap gap-4 md:gap-6 px-4 md:px-8 w-max">
          {galleryPhotos.map((src, idx) => (
            <div
              key={idx}
              className="group relative shrink-0 h-[55vh] md:h-[60vh] w-[75vw] md:w-auto overflow-hidden snap-center"
              style={{ borderRadius: "var(--radius-surface)" }}
            >
              <img
                src={src}
                alt={`Атмосфера ${idx + 1}`}
                loading="lazy"
                className="w-full h-full md:w-auto object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}