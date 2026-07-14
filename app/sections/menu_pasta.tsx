"use client";
import { Reveal } from "@/components/mechanics";

/**
 * SECTION: Signature Pasta Menu
 * ROLE: ACT II The Offer
 * STYLE: Editorial list with sticky visual anchor and giant watermark.
 */
export function SectionMenuPasta() {
  return (
    <section id="menu_pasta" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Decorative background element - giant vertical watermark */}
      <span aria-hidden className="rp-watermark top-10 pointer-events-none text-foreground select-none">
        PASTA
      </span>

      <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          
          {/* Sticky act intro: Context and visual appetizer */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-display font-bold text-[clamp(2.6rem,6vw,5.5rem)]">
                Фірмова Паста
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted font-body">
                Секрет нашої пасти — у борошні з твердих сортів пшениці та свіжих фермерських яйцях. 
                Ми готуємо її вручну щоранку, щоб ви відчули справжню італійську якість у самому центрі Києва.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
                <img 
                  src="https://images.pexels.com/photos/8102202/pexels-photo-8102202.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                  alt="Процес приготування свіжої пасти" 
                  loading="lazy" 
                  className="rp-graded aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-[1.04]" 
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial list: Text-first approach with thumbnails */}
          <div className="divide-y divide-foreground/10">
            {/* ITEM 1 */}
            <Reveal>
              <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Карбонара" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Карбонара
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted font-body">
                    Традиційна римська рецептура: гуанчале, свіжі жовтки, пармезан та чорний перець.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg lg:text-xl font-semibold text-accent">
                  245 ₴
                </span>
              </div>
            </Reveal>

            {/* ITEM 2 */}
            <Reveal delay={0.05}>
              <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/8102202/pexels-photo-8102202.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                    alt="Тальятеле з білими грибами" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Тальятеле з грибами
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted font-body">
                    Домашня паста з лісовими білими грибами, вершковим соусом та трюфельною олією.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg lg:text-xl font-semibold text-accent">
                  280 ₴
                </span>
              </div>
            </Reveal>

            {/* ITEM 3 */}
            <Reveal delay={0.1}>
              <div className="group flex items-center justify-between gap-5 py-6 lg:py-8">
                <div className="h-16 w-16 shrink-0 overflow-hidden lg:h-20 lg:w-20" style={{ borderRadius: "var(--radius-control)" }}>
                  <img 
                    src="https://images.pexels.com/photos/16774290/pexels-photo-16774290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    alt="Лазанья Болоньєзе" 
                    loading="lazy" 
                    className="rp-graded h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" 
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight transition-colors duration-200 [transition-timing-function:var(--ease-out-cubic)] group-hover:text-accent">
                    Лазанья Болоньєзе
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted font-body">
                    Класична запіканка з м'ясним рагу болоньєзе, соусом бешамель та скоринкою з пармезану.
                  </p>
                </div>
                <span className="shrink-0 pl-2 font-display text-lg lg:text-xl font-semibold text-accent">
                  310 ₴
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}