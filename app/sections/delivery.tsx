"use client";

import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionDelivery() {
  return (
    <section className="py-[var(--space-act)] w-full px-4 lg:px-6 bg-surface text-foreground overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* TEXT BLOCK */}
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center z-10 relative">
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] mb-6">
              Доставка та самовивіз
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-body text-lg md:text-xl text-muted mb-10 leading-relaxed">
              Розвозимо Печерським, Подільським, Оболонським, Голосіївським та Шевченківським районами. Забираєте самі — робимо знижку та не беремо грошей за пакування.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Magnetic>
              <a
                href="#order"
                className="inline-flex font-mono font-medium text-sm lg:text-base text-foreground border-b border-foreground/30 pb-1 hover:border-foreground/80 transition-colors duration-300"
              >
                Замовити з собою
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* ARCH MASK IMAGE */}
        <div className="w-full max-w-5xl mx-auto mt-12 md:mt-20">
          <Reveal delay={0.4}>
            <div 
              className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden group transform-gpu transition-all duration-700"
              style={{
                borderBottomLeftRadius: "var(--radius-surface)",
                borderBottomRightRadius: "var(--radius-surface)",
              }}
            >
              {/* Responsive mask logic: standard surface radius on mobile, sweeping 500px arch on desktop */}
              <div className="absolute inset-0 w-full h-full rounded-[var(--radius-surface)] md:rounded-b-none md:rounded-t-[500px] overflow-hidden z-0">
                <img
                  src="https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                  alt="Доставка та самовивіз"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[var(--ease-out-cubic)] group-hover:scale-[1.04]"
                />
                {/* Premium optical tuning: slight shading to anchor the image into the surface */}
                <div className="absolute inset-0 bg-foreground/5 mix-blend-overlay pointer-events-none transition-opacity duration-1000 group-hover:opacity-0" />
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}