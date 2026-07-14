"use client";
import { Reveal, Magnetic } from "@/components/mechanics";

/**
 * SectionProof - ACT IV: The Proof.
 * Vetted award composition with a spotlight testimonial and supplementary reviews.
 * Uses an inverted theme (bg-foreground) with grain texture and poster-scale typography.
 */
export function SectionProof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-foreground pt-0 pb-[var(--space-act)] lg:pt-[var(--space-act)] text-background"
    >
      {/* Texture Layer */}
      <div className="rp-grain absolute inset-0 opacity-40 pointer-events-none" />

      {/* Floating Magnetic Photo Element */}
      <div className="absolute right-[5%] top-[15%] hidden lg:block z-20">
        <Magnetic>
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-background/20 shadow-2xl transition-transform duration-700 hover:scale-110">
            <img
              src="https://images.pexels.com/photos/18908596/pexels-photo-18908596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600"
              alt="Atmosfera Pasta Famiglia"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Magnetic>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-10">
        {/* Act Label */}
        <Reveal>
          <span className="rp-actno mb-8 block text-sm uppercase tracking-[0.3em] text-background/50">
            Враження
          </span>
        </Reveal>

        {/* Huge Accent Quote Mark */}
        <span
          aria-hidden
          className="block font-display text-[clamp(4rem,10vw,7rem)] leading-none text-accent"
        >
          “
        </span>

        {/* Main Spotlight Quote */}
        <Reveal delay={0.1}>
          <blockquote className="font-display font-medium leading-[1.1] text-[clamp(1.9rem,4.2vw,3.6rem)] tracking-tight">
            Pasta Famiglia — це не просто ресторан, а справжній шматочок Італії в
            серці Києва. Кожна страва, від аромату свіжого базиліку до текстури
            пасти, дихає автентичністю та любов&apos;ю до своєї справи.
          </blockquote>
        </Reveal>

        {/* Main Author & Trust Line */}
        <Reveal delay={0.2}>
          <figcaption className="mt-10 flex flex-wrap items-center gap-4 text-sm font-medium uppercase tracking-wider text-background/70">
            <span className="h-px w-12 bg-accent" aria-hidden />
            <span>Марія Федоренко</span>
            <span className="text-background/30"></span>
            <span className="flex items-center gap-1.5">
              Google Review
              <span className="flex text-accent">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </span>
              4.9/5
            </span>
          </figcaption>
        </Reveal>

        {/* Supplementary Reviews Grid */}
        <div className="mt-16 grid gap-10 border-t border-background/15 pt-12 md:mt-24 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.3}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85 lg:text-lg">
                Неймовірна атмосфера та найсмачніша карбонара, яку я коли-небудь
                куштувала в Україні. Справжня домашня кухня та теплий прийом.
              </blockquote>
              <figcaption className="mt-4 font-mono text-[0.8rem] uppercase tracking-widest text-background/50">
                — Олена Кравченко
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.4}>
            <figure>
              <blockquote className="text-base leading-relaxed text-background/85 lg:text-lg">
                Затишок, сервіс та винна карта — все на найвищому рівні. Ідеальне
                місце для сімейної вечері або романтичного вечора.
              </blockquote>
              <figcaption className="mt-4 font-mono text-[0.8rem] uppercase tracking-widest text-background/50">
                — Дмитро Вакуленко
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}