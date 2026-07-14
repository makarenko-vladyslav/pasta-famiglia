"use client";
import { Reveal, TiltCard } from "@/components/mechanics";

export function SectionMenuPizza() {
  return (
    <section id="menu_pizza" className="mx-auto max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="space-y-8">
          <header>
            <span className="rp-actno mb-4">04</span>
            <Reveal as="h2" className="text-4xl font-bold lg:text-5xl">Піца з Дровʼяної Печі</Reveal>
          </header>
          
          <Reveal delay={0.1}>
            <p className="text-lg text-muted">
              Тонке, хрустке тісто, що ферментується 48 годин, та начинка, яка тане у роті. Справжній смак неаполітанської традиції.
            </p>
          </Reveal>

          <div className="grid gap-6">
            {[
              { name: "Маргарита з моцарелою Буффало", price: "245 ₴", desc: "Сан-Марцано томати, базилік, оливкова олія" },
              { name: "Чотири Сири з трюфельним медом", price: "320 ₴", desc: "Горгонзола, таледжіо, пармезан, моцарела" },
              { name: "Діавола з гострим салямі", price: "285 ₴", desc: "Салямі вентрічіна, перець чилі, орегано" }
            ].map((item, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div className="group flex items-end justify-between border-b border-border pb-4">
                  <div className="pr-4">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                  <span className="text-lg font-bold">{item.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <TiltCard className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-surface)] bg-surface">
          <img 
            src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Artisanal Pizza" 
            className="rp-graded absolute inset-0 h-full w-full object-cover" 
          />
          <div className="rp-grain absolute inset-0 mix-blend-overlay opacity-30" />
        </TiltCard>
      </div>
    </section>
  );
}