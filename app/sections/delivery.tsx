"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

export function SectionDelivery() {
  return (
    <section id="delivery" className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      <div className="mx-auto max-w-[88rem] px-4 lg:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <span className="rp-actno">THE SOUL</span>
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
                Гаряча піца вдома
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              ★ 4.9 · 127 відгуків · вул. Антоновича, 44, Київ
            </p>
          </Reveal>
        </div>

        <div className="mt-8 max-w-2xl">
          <Reveal delay={0.3}>
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Доставляємо по центру та прилеглих районах у термосумках. Ніяких гумових бортиків.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-foreground/10 border-t border-foreground/10">
          {/* Row 1 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">01</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Печерський та Голосіївський райони</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Пріоритетна зона доставки. Забезпечуємо найшвидший шлях від печі до ваших дверей.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">30-45 ХВ</span>
            </div>
          </Reveal>

          {/* Row 2 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">02</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Поділ та Оболонь</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Надійна доставка навіть у години пік. Використовуємо спеціальні термосумки для збереження хрусткої скоринки.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">45-60 ХВ</span>
            </div>
          </Reveal>

          {/* Row 3 */}
          <Reveal>
            <div className="grid gap-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,7fr)_minmax(0,3fr)] lg:items-baseline">
              <span className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-none text-accent">03</span>
              <div>
                <h3 className="font-display text-2xl font-semibold">Пакування за наш рахунок</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  Високоякісні коробки, що дихають, запобігають відсирінню тіста. Все для ідеального смаку.
                </p>
              </div>
              <span className="text-sm uppercase tracking-[0.2em] text-muted lg:text-right">БЕЗКОШТОВНО</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 text-center">
          <Reveal>
            <Magnetic>
              <a
                href="tel:+380443332211"
                className="group relative flex items-center gap-3 bg-foreground px-12 py-6 text-background transition-colors hover:bg-accent hover:text-white"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                <span className="font-display text-lg font-bold uppercase tracking-wider">
                  Замовити доставку
                </span>
                <ArrowRight size={20} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative mt-8 w-full max-w-5xl overflow-hidden shadow-2xl" style={{ borderRadius: "var(--radius-surface)" }}>
              <img
                src="https://images.pexels.com/photos/25474365/pexels-photo-25474365.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Pasta Famiglia Delivery Packaging"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="rp-grain absolute inset-0 opacity-20 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}