"use client";

import { Reveal, Magnetic } from "@/components/mechanics";
import { ArrowRight } from "@phosphor-icons/react";

/**
 * ACT II: The Offer (Signature Items)
 * Layout: Editorial list. 2-column grid on desktop.
 * Character-for-character copy implementation.
 */
export function SectionPizza() {
  const pizzaItems = [
    {
      name: "Маргарита",
      price: "285 ₴",
      description: "Томати сан-марцано, моцарела фіор ді латте, свіжий базилік, оливкова олія",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    },
    {
      name: "Дьявола",
      price: "340 ₴",
      description: "Пікантна салямі, перець чилі, моцарела, томатний соус, орегано",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    },
    {
      name: "Чотири сири",
      price: "395 ₴",
      description: "Горгонзола, пармезан, таледжіо, моцарела, ніжна вершкова основа",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    },
    {
      name: "Прошуто е Фунгі",
      price: "365 ₴",
      description: "Шинка прошуто котто, лісові печериці, моцарела, томати",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    },
    {
      name: "Капричоза",
      price: "370 ₴",
      description: "Артишоки, гриби, оливки каламата, італійська шинка, томатний соус",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    },
    {
      name: "Груша та горгонзола",
      price: "380 ₴",
      description: "Стигла груша, сир горгонзола, волоський горіх, квітковий мед",
      image: "https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-[var(--space-act)]">
      {/* Decorative Watermark - lg only */}
      <div className="rp-watermark pointer-events-none select-none text-[20vw] opacity-[0.03] lg:block hidden">
        FAMIGLIA
      </div>

      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-sm font-medium tracking-[0.3em] text-foreground uppercase">
                МЕНЮ
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.1] text-foreground">
                Піца з печі на дровах
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-muted lg:text-xl">
                Випікаємо при температурі 400 градусів. Це створює хрустку скоринку, яка залишається м’якою всередині навіть під час доставки.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Main Act Visual */}
        <Reveal delay={0.3}>
          <div className="relative mb-20 overflow-hidden" style={{ borderRadius: "var(--radius-surface)" }}>
            <div className="aspect-[16/10] lg:aspect-[21/9]">
              <img
                src="https://images.pexels.com/photos/8388928/pexels-photo-8388928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Піца з печі"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Editorial List Grid */}
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
          {pizzaItems.map((item, index) => (
            <Reveal key={item.name} delay={0.1 + index * 0.05}>
              <div className="group relative flex flex-col border-b border-foreground/10 py-6 last:border-b-0 lg:last:border-b lg:[&:nth-last-child(2)]:border-b">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="h-16 w-16 shrink-0 overflow-hidden" style={{ borderRadius: "var(--radius-control)" }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.15]"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-2xl leading-none text-foreground lg:text-[2rem]">
                          {item.name}
                        </span>
                        <span className="font-mono text-sm tracking-tighter text-muted">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 max-w-[30ch] text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle Indicator */}
                  <div className="hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                    <ArrowRight size={20} className="text-foreground" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex justify-center">
          <Reveal delay={0.6}>
            <Magnetic>
              <a
                href="#hero"
                className="bg-accent text-accent-foreground px-5 py-3 text-sm lg:text-base inline-flex items-center gap-2 group transition-colors duration-200"
                style={{ borderRadius: "var(--radius-control)" }}
              >
                Замовити доставку
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}