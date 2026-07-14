
"use client";

import { Reveal } from "@/components/mechanics";

export function SectionGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 lg:px-6 relative">
      <Reveal>
        <div className="rp-actno mb-8">Галерея</div>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">Атмосфера Pasta Famiglia</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.1}>
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" alt="Інтер'єр ресторану" className="w-full h-64 object-cover" style={{ borderRadius: "var(--radius-surface)" }} />
        </Reveal>
      </div>
    </section>
  );
}
