"use client";
import { Reveal, HorizontalPan } from "@/components/mechanics";

/**
 * SignatureItems Section
 * ACT II: The Offer. Signature handmade pasta.
 * Featuring an editorial sideways-scrolling strip of signature pasta dishes.
 */
export function SectionSignatureItems() {
  const dishes = [
    {
      title: "Тальятеле з білими грибами",
      price: "320₴",
      time: "20 хв",
      img: "https://images.pexels.com/photos/18126715/pexels-photo-18126715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Папарделле з м'ясним рагу",
      price: "385₴",
      time: "25 хв",
      img: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Равіолі з рікотою та шпинатом",
      price: "290₴",
      time: "15 хв",
      img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Лінгвіні з морепродуктами",
      price: "450₴",
      time: "22 хв",
      img: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Класична лазанья Болоньєзе",
      price: "360₴",
      time: "30 хв",
      img: "https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Фузіллі з соусом песто",
      price: "275₴",
      time: "18 хв",
      img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Капелетті у бульйоні",
      price: "240₴",
      time: "20 хв",
      img: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    },
    {
      title: "Ньоккі чотири сири",
      price: "310₴",
      time: "15 хв",
      img: "https://images.pexels.com/photos/18126715/pexels-photo-18126715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000",
    }
  ];

  return (
    <section id="signature_items" className="relative overflow-hidden bg-background">
      {/* Header Content */}
      <div className="mx-auto max-w-[92rem] px-4 pt-[var(--space-act)] lg:px-10">
        <span className="mb-5 block text-sm font-medium tracking-[0.3em] uppercase text-muted">
          Фірмові Страви
        </span>
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)] max-w-[16ch]">
            Мистецтво ручної італійської пасти
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <HorizontalPan heightVh={220}>
        <div className="flex gap-6 px-4 lg:gap-10 lg:px-10">
          {dishes.map((dish, index) => (
            <figure 
              key={index} 
              className="rp-pan-item relative w-[75vw] shrink-0 overflow-hidden md:w-[45vw] lg:w-[32vw]"
            >
              <div className="overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src={dish.img} 
                  alt={dish.title} 
                  className="rp-graded aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                  loading="lazy" 
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg lg:text-xl">{dish.title}</span>
                  <span className="font-display text-base ml-4 shrink-0">{dish.price}</span>
                </div>
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-muted">
                  <span className="font-body opacity-70">Час приготування: {dish.time}</span>
                  <span className="font-display opacity-40">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </HorizontalPan>

      {/* Subtle border separator at the bottom of the act */}
      <div className="mx-auto max-w-[92rem] px-4 lg:px-10">
        <div className="h-px w-full border-b border-foreground/10" />
      </div>
    </section>
  );
}