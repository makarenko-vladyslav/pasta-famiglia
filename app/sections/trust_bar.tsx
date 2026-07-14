"use client";
import { Reveal, CountUp } from "@/components/mechanics";
import { Star } from "@phosphor-icons/react";

/**
 * SECTION: Trust Bar (Act I: Context)
 * ROLE: Immediate social proof in the hero flow.
 * STYLE: Mono labels, Playfair values, minimal dividers.
 */
export function SectionTrustBar() {
  const rating = 4.9;
  const reviewsCount = 127;
  const city = "Київ";
  const niche = "італійський ресторан";
  const photoUrl = "https://images.pexels.com/photos/35760009/pexels-photo-35760009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

  return (
    <section className="relative border-b border-foreground/10 bg-background py-6 px-4 lg:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-center md:text-left">
          
          {/* COLUMN 1: RATING */}
          <div className="md:border-r border-foreground/10 md:pr-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-muted">
                  Рейтинг Google
                </span>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="font-display text-2xl leading-none">
                    {rating.toFixed(1)}
                  </span>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={14} />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* COLUMN 2: CONTEXT / VISUAL */}
          <div className="md:px-8 flex flex-col items-center justify-center gap-4">
            <Reveal delay={0.2}>
              <div className="relative group w-full max-w-[240px] aspect-[16/7] overflow-hidden bg-surface" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src={photoUrl} 
                  alt="Pasta Famiglia Atmosphere" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/5 rp-grain" />
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <span className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-muted">
                {city} — {niche}
              </span>
            </Reveal>
          </div>

          {/* COLUMN 3: REVIEWS */}
          <div className="md:border-l border-foreground/10 md:pl-8 md:text-right">
            <Reveal delay={0.3}>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.3em] text-muted">
                  Відгуків гостей
                </span>
                <span className="font-display text-2xl leading-none">
                  <CountUp to={reviewsCount} suffix="+" locale="uk-UA" />
                </span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}