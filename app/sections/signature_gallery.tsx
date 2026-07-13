"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SECTION: signature_gallery
 * ROLE: ACT II: The Offer (Part 2). Signature dishes showcase.
 * STACK: Next.js + Tailwind 4 + WoW Toolkit (HorizontalPan).
 */
export function SectionSignatureGallery() {
  const signatureItems = [
    {
      id: "01",
      title: "Паста ручної роботи",
      src: "https://images.pexels.com/photos/35819050/pexels-photo-35819050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Домашня паста Pasta Famiglia",
    },
    {
      id: "02",
      title: "Фірмова фокачча",
      src: "https://images.pexels.com/photos/18084692/pexels-photo-18084692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Свіжоспечена італійська фокачча",
    },
    {
      id: "03",
      title: "Авторська подача",
      src: "https://images.pexels.com/photos/31779533/pexels-photo-31779533.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Мистецтво сервірування страв",
    },
    {
      id: "04",
      title: "Свіжі морепродукти",
      src: "https://images.pexels.com/photos/18084692/pexels-photo-18084692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800", // Reused per spec if limited
      alt: "Дари моря в італійському виконанні",
    },
  ];

  return (
    <section id="signature_gallery" className="relative overflow-hidden bg-background py-[var(--space-act)]">
      {/* Header Container */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="rp-actno mb-5 text-sm uppercase tracking-[0.3em] text-muted block">
          Фірмові страви
        </span>
        <Reveal>
          <h2 className="font-display font-bold leading-[0.9] text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch] mb-12 lg:mb-20">
            Естетика та традиції нашої кухні
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Pan Mechanic */}
      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-12 lg:px-10">
          {signatureItems.map((item) => (
            <figure 
              key={item.id} 
              className="rp-pan-item relative shrink-0 overflow-hidden w-[75vw] lg:w-[35vw]"
            >
              <div className="overflow-hidden group">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between text-sm lg:text-base text-muted">
                <span className="font-body italic opacity-80">{item.title}</span>
                <span className="font-display text-lg lg:text-xl text-foreground/40">{item.id}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>
    </section>
  );
}