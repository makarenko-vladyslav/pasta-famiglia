"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * signature_marquee
 * Interstitial editorial strip using HorizontalPan to showcase brand principles and facts.
 * Features a high-contrast sideways scroll with factual photo captions.
 */
export function SectionSignatureMarquee() {
  const photoUrl = "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  const items = [
    { label: "СВІЖА ПАСТА", index: "01" },
    { label: "ПІЦА З ПЕЧІ", index: "02" },
    { label: "БОРОШНО СЕМОЛА", index: "03" },
    { label: "AL DENTE", index: "04" },
    { label: "БЕЗ ПРИХОВАНИХ ЗБОРІВ", index: "05" },
    { label: "ШВИДКА ПОДАЧА", index: "06" },
    { label: "СІМЕЙНИЙ ДІМ", index: "07" },
    { label: "РЕЙТИНГ 4.9", index: "08" },
    { label: "127 ВІДГУКІВ", index: "09" },
    { label: "МІСТО КИЇВ", index: "10" },
  ];

  return (
    <section id="signature_marquee" className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5">Принципи</span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Ресторан італійської кухні в Києві
          </h2>
        </Reveal>
      </div>

      <HorizontalPan heightVh={220}>
        {items.map((item, i) => (
          <figure key={i} className="rp-pan-item relative shrink-0 overflow-hidden w-[280px] lg:w-[450px]">
            <div className="overflow-hidden">
              <img 
                src={photoUrl} 
                alt={`${item.label} caption`} 
                className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                loading="lazy" 
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-sm text-muted">
              <span className="font-mono uppercase tracking-widest">{item.label}</span>
              <span className="font-display">{item.index}</span>
            </figcaption>
          </figure>
        ))}
      </HorizontalPan>
    </section>
  );
}