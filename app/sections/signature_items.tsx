"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: signature_items
 * ROLE: ACT II: The Offer (Part 1)
 * LAYOUT: Horizontal scrolling editorial strip
 */
export function SectionSignatureItems() {
  const photos = [
    "https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200&q=80",
    "https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200&q=60",
    "https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200&q=40",
  ];

  const items = [
    { title: "Паста Карбонара з гуанчале", index: "01" },
    { title: "Різото з білими грибами", index: "02" },
    { title: "Равіолі з ніжною рікотою", index: "03" },
    { title: "Фірмовий десерт Тірамісу", index: "04" },
  ];

  return (
    <section id="signature_items" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em] text-muted">
          Філософія смаку
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Гастрономічні шедеври нашої родини
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {items.map((item, idx) => (
          <figure key={idx} className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] md:w-[45vw] lg:w-[32vw]">
            <div className="overflow-hidden group">
              <img 
                src={photos[idx % photos.length]} 
                alt={item.title} 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between text-sm text-muted">
              <span className="font-body uppercase tracking-wider">{item.title}</span>
              <span className="font-display text-lg lg:text-xl text-foreground/40">{item.index}</span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
    </section>
  );
}