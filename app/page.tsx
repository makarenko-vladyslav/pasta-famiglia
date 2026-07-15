import { CountUp, HorizontalPan, Magnetic } from "@/components/mechanics";

export default function LandingPage() {
  const images = {
    hero1: "https://images.pexels.com/photos/35550884/pexels-photo-35550884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    hero2: "https://images.pexels.com/photos/14590691/pexels-photo-14590691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    craft: "https://images.pexels.com/photos/6996211/pexels-photo-6996211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    menu1: "https://images.pexels.com/photos/5908206/pexels-photo-5908206.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    menu2: "https://images.pexels.com/photos/35160053/pexels-photo-35160053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    menu3: "https://images.pexels.com/photos/10519486/pexels-photo-10519486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    combos: "https://images.pexels.com/photos/15878786/pexels-photo-15878786.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    speed: "https://images.pexels.com/photos/5953584/pexels-photo-5953584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    social: "https://images.pexels.com/photos/3662821/pexels-photo-3662821.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    delivery: "https://images.pexels.com/photos/34326273/pexels-photo-34326273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    faqHover: "https://images.pexels.com/photos/6287322/pexels-photo-6287322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  };

  const galleryImages = [
    images.hero1, images.hero2, images.craft, images.menu1, 
    images.menu2, images.menu3, images.combos, images.speed, 
    images.social, images.delivery, images.faqHover, 
    "https://images.pexels.com/photos/6848396/pexels-photo-6848396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
  ];

  const heroWords = ["Тісто", "розкочуємо", "щоранку"];

  return (
    <>
      {/* ACT I - Arrival */}
      <section className="relative w-full h-[100dvh] overflow-hidden pt-0 md:pt-0">
        <div className="absolute inset-0 z-0 bg-foreground">
          <img src={images.hero1} alt="Тісто розкочуємо щоранку" className="absolute inset-0 w-full h-full object-cover animate-hero-1" />
          <img src={images.hero2} alt="Італійський ресторан" className="absolute inset-0 w-full h-full object-cover animate-hero-2" />
        </div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent"></div>
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none rp-grain"></div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12 pt-32 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end w-full">
            <div className="md:col-span-9">
              <h1 className="text-balance-display text-surface text-[clamp(3rem,8vw,7.5rem)] mb-6 flex flex-wrap gap-x-4">
                {heroWords.map((word, i) => (
                  <span key={i} className="word-rise block" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-surface/90 font-body text-lg max-w-xl mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                Готуємо з італійського борошна на відкритій кухні. Тихий обід у Києві, поки діти граються.
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col items-start md:items-end text-left md:text-right animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/10 backdrop-blur-sm rounded-full border border-surface/20 text-surface/90 mb-4">
                <span className="text-[#d97706] text-lg leading-none">&#9733;</span>
                <span className="font-medium">4.9</span>
                <span className="opacity-60 text-sm">·</span>
                <span className="text-sm">127 відгуків Google</span>
              </div>
              <p className="text-surface/80 text-sm font-display uppercase tracking-widest">
                вул. Антоновича, 44
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT III - The Soul (Story/Craft) */}
      <section id="pro-nas" className="py-[var(--spacing-act)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            <div className="md:col-span-5 relative">
              <div className="rp-watermark hidden md:block">SEMOLA</div>
              <div className="font-display uppercase tracking-widest text-xs text-accent mb-6 font-bold">Ручна праця</div>
              <h2 className="text-balance-display text-[clamp(2.5rem,5vw,4.5rem)] mb-6">
                Борошно та живий вогонь
              </h2>
              <p className="font-body text-foreground/80 text-lg leading-relaxed max-w-md">
                Ви бачите кожен рух кухаря з-за стійки. Ми замішуємо порції з борошна Semola та варимо густі соуси з томатів Mutti.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-[16/9] md:aspect-[4/5] w-full rounded-[var(--radius-md)] overflow-hidden bg-muted">
                <img src={images.craft} alt="Ручна праця на відкритій кухні" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Band */}
      <div className="w-full overflow-hidden bg-surface py-6 border-y border-border/30">
        <div className="flex w-fit animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap items-center">
              <span className="font-display uppercase text-[clamp(2rem,4vw,3rem)] text-foreground px-6 leading-none">СВІЖА ПАСТА</span>
              <span className="w-2 h-2 rounded-full bg-accent/60 mx-2"></span>
              <span className="font-display uppercase text-[clamp(2rem,4vw,3rem)] text-foreground px-6 leading-none">З ПЕЧІ</span>
              <span className="w-2 h-2 rounded-full bg-accent/60 mx-2"></span>
              <span className="font-display uppercase text-[clamp(2rem,4vw,3rem)] text-foreground px-6 leading-none">РУЧНА РОБОТА</span>
              <span className="w-2 h-2 rounded-full bg-accent/60 mx-2"></span>
            </div>
          ))}
        </div>
      </div>

      {/* ACT II - The Offer (Menu) */}
      <section id="menu" className="py-[var(--spacing-act)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <div className="md:sticky md:top-32 font-display uppercase tracking-widest text-xs text-muted-foreground mb-8 md:mb-0">
                Що у тарілках
              </div>
            </div>
            <div className="md:col-span-9 flex flex-col">
              {[
                { name: "Паста власного виробництва", price: "ВІД 210 ₴", desc: "Зберігаємо правильну пружність форми. Вартість від 210 гривень за порцію.", thumb: images.menu1 },
                { name: "Піца з печі", price: "ВІД 280 ₴", desc: "Випікаємо при 400 градусах. Тонка основа, розплавлена моцарела та хрусткі бортики.", thumb: images.menu2 },
                { name: "Бізнес-ланч", price: "320 ₴", desc: "Суп, друга страва на вибір та напій за 320 гривень. Подаємо у будні до шістнадцятої.", thumb: images.menu3 }
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start justify-between py-8 border-b border-foreground/10 last:border-b-0 cursor-default">
                  <div className="flex-1 pr-6">
                    <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] mb-3 transition-transform duration-700 ease-[var(--ease-out-cubic)] md:group-hover:translate-x-3">
                      {item.name}
                    </h3>
                    <p className="font-body text-muted-foreground max-w-xl leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-2 md:mt-0">
                    <div className="font-display uppercase tracking-widest text-sm text-foreground/80">{item.price}</div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 bg-muted">
                      <img src={item.thumb} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out-cubic)] group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACT II - Combos */}
      <section className="py-[var(--spacing-act)] overflow-hidden">
        <div className="container mx-auto px-0 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-center">
            <div className="md:col-span-6 w-full h-[50vh] md:h-auto md:aspect-[3/4] overflow-hidden md:rounded-[var(--radius-md)] mb-8 md:mb-0">
              <img src={images.combos} alt="Спеціальні пропозиції" loading="lazy" className="w-full h-full object-cover transition-transform duration-[10000ms] ease-linear hover:scale-[1.04]" />
            </div>
            <div className="md:col-span-6 relative px-6 md:px-0 flex flex-col gap-12 md:gap-24">
              <div className="absolute top-0 right-0 -translate-y-full md:translate-y-0 text-[clamp(4rem,8vw,8rem)] font-display text-border/30 leading-none select-none pointer-events-none md:static md:text-right hidden md:block">
                02
              </div>
              
              <div>
                <h3 className="text-balance-display text-[clamp(2rem,3vw,3rem)] mb-4">Для двох та компаній</h3>
              </div>

              {[
                { title: "Сімейний обід", desc: "Дві великі піци, дві порції та глечик лимонаду для чотирьох. 1150 гривень." },
                { title: "Романтична вечеря", desc: "Пляшка Prosecco, плато антипасті та два десерти на двох. 1450 гривень." }
              ].map((combo, idx) => (
                <div key={idx} className="max-w-md">
                  <h4 className="font-display text-2xl mb-3">{combo.title}</h4>
                  <p className="font-body text-foreground/80 leading-relaxed">{combo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACT III - Process (Guarantee) - INVERTED */}
      <section id="garantiya" className="bg-foreground text-background py-[var(--spacing-act)] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 md:col-start-2 z-10">
              <div className="font-display text-[clamp(5rem,10vw,8rem)] leading-none text-accent mb-2">20</div>
              <h2 className="text-balance-display text-[clamp(3rem,6vw,5rem)] mb-8">Гаряче за 20 хвилин</h2>
              <p className="font-body text-background/80 text-xl max-w-md mb-12">
                Знаємо ціну вашої обідньої перерви. Офіціант приносить замовлення з-під ножа точно за таймером.
              </p>
              
              <div className="space-y-8 max-w-md">
                <div>
                  <h4 className="font-display text-xl mb-2 text-surface">Швидкий вибір</h4>
                  <p className="font-body text-background/60 leading-relaxed">Визначаєтесь зі смаком за хвилину завдяки лаконічному меню.</p>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2 text-surface">Точна подача</h4>
                  <p className="font-body text-background/60 leading-relaxed">Якщо тарілка готується довше двадцяти хвилин — ми безкоштовно наливаємо напій.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:translate-y-[15%]">
              <div className="aspect-[3/4] w-full rounded-[var(--radius-md)] overflow-hidden relative">
                <div className="absolute inset-0 bg-background/5 z-10 pointer-events-none"></div>
                <img src={images.speed} alt="Живий вогонь печі" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT III - The Soul (Values) */}
      <section className="py-[calc(var(--spacing-act)*1.2)] bg-surface">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-balance-display text-[clamp(2.2rem,4.5vw,4rem)] mb-8">Спокій для батьків</h2>
          <p className="font-body text-foreground/80 text-xl leading-[1.8] max-w-2xl mx-auto">
            Замовляйте гарячу вечерю та спілкуйтеся. У вихідні з дітьми займається аніматор в окремій обладнаній кімнаті.
          </p>
        </div>
      </section>

      {/* ACT III - Logistics (Delivery) */}
      <section className="py-[var(--spacing-act)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="hidden md:flex md:col-span-3 h-full items-end justify-center pb-12">
              <div className="font-display uppercase tracking-widest text-sm text-muted-foreground" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Логістика
              </div>
            </div>
            <div className="md:col-span-9 relative">
              <div className="aspect-[16/9] w-full rounded-[var(--radius-md)] overflow-hidden">
                <img src={images.delivery} alt="Доставка в термосумках" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="relative mt-8 md:absolute md:bottom-8 md:left-8 md:mt-0 bg-foreground text-surface p-8 md:p-10 rounded-[var(--radius-md)] max-w-sm shadow-2xl z-10">
                <h3 className="font-display text-3xl mb-4">Паста їде до вас</h3>
                <p className="font-body text-surface/80 mb-8 leading-relaxed">
                  Пакуємо в термосумки з підігрівом. Скоринка не пересихає, а сир залишається гарячим.
                </p>
                <a href="#kontakty" className="inline-flex font-display uppercase tracking-widest text-xs text-accent hover:text-surface transition-colors">
                  Замовити доставку →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT III - Visual Proof (Gallery) */}
      <section className="py-[var(--spacing-act)] overflow-hidden bg-surface border-y border-border/30">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <div className="font-display uppercase tracking-widest text-sm text-foreground/70">
            Наш простір та ремесло
          </div>
        </div>
        <HorizontalPan>
          <div className="flex gap-4 md:gap-8 px-4 md:px-6 w-max">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-[var(--radius-sm)] flex-shrink-0 bg-muted
                ${i % 4 === 0 ? 'w-64 md:w-80 aspect-square' : i % 3 === 0 ? 'w-72 md:w-96 aspect-[16/9]' : 'w-56 md:w-72 aspect-[3/4]'}`}>
                <img src={img} alt={`Галерея ${i+1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </HorizontalPan>
      </section>

      {/* ACT IV - Social Proof */}
      <section id="vidhuky" className="py-[var(--spacing-act)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="text-[#d97706] text-2xl leading-none">&#9733;</span>
                <h2 className="font-display text-4xl">
                  <CountUp to={4} suffix=".9" locale="uk-UA" /> із <CountUp to={127} locale="uk-UA" /> відгуків
                </h2>
              </div>
              <p className="font-display uppercase tracking-widest text-xs text-muted-foreground mb-12">
                Гості залишають свої оцінки на Google Maps.
              </p>
              
              <blockquote className="text-balance-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-foreground mb-12">
                «Тісто просто тане в роті. Спостерігати за роботою кухаря — окреме задоволення.»
              </blockquote>
            </div>
            
            <div className="hidden md:block md:col-span-2 px-4">
              <div className="aspect-[2/3] w-full rounded-t-[999px] overflow-hidden bg-muted">
                <img src={images.social} alt="Атмосфера закладу" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col justify-end h-full">
              <div className="pt-8 border-t border-foreground/10 mt-8 md:mt-0">
                <blockquote className="font-body text-foreground/80 leading-[1.8] italic">
                  «Перший заклад, де я зміг спокійно поїсти, поки дитина була зайнята справами.»
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT III - FAQ */}
      <section className="py-[var(--spacing-act)] bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 relative">
              <h2 className="text-balance-display text-[clamp(3.5rem,8vw,7rem)] md:sticky md:top-32 text-foreground/10">
                Питання
              </h2>
            </div>
            <div className="md:col-span-7">
              {[
                { q: "Що, якщо паста здасться твердою?", a: "Ми готуємо класичне al dente. Якщо віддаєте перевагу більш м'якій текстурі, попередьте офіціанта." },
                { q: "Як оформити резерв на вечір?", a: "Натисніть кнопку на сайті. Підтвердження надійде у Telegram або Viber за кілька секунд." },
                { q: "Чи можна купити напівфабрикати?", a: "Так, ми продаємо запаковані вироби. Ви зможете зварити їх вдома за три хвилини." }
              ].map((faq, idx) => (
                <details key={idx} className="group border-t border-foreground/10 first:border-t-0">
                  <summary className="font-display text-2xl md:text-3xl py-8 cursor-pointer list-none flex justify-between items-center transition-colors group-hover:text-accent">
                    <span className="pr-8">{faq.q}</span>
                    <span className="text-muted-foreground transition-transform duration-500 ease-[var(--ease-out-cubic)] group-open:rotate-180 shrink-0 text-xl font-body">↓</span>
                  </summary>
                  <div className="pb-12 text-foreground/70 font-body text-lg leading-relaxed max-w-2xl origin-top transition-all duration-500 ease-[var(--ease-out-cubic)]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACT V - The Close */}
      <section id="kontakty" className="min-h-[100dvh] bg-accent text-accent-foreground py-[var(--spacing-act)] flex flex-col justify-between relative z-20">
        <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col items-center justify-center text-center mt-12 md:mt-20">
          <h2 className="text-balance-display text-[clamp(3.5rem,8vw,8.5rem)] mb-8 max-w-5xl">
            Чекаємо в гості
          </h2>
          <p className="font-body text-xl md:text-2xl mb-16 opacity-90">
            Заходьте на каву Lavazza або повноцінну вечерю.
          </p>
          <Magnetic>
            <a href="tel:+380443332211" className="inline-flex items-center justify-center px-12 py-6 bg-surface text-foreground font-display text-2xl rounded-full hover:bg-background transition-colors shadow-xl hover:shadow-2xl focus-visible:outline-surface">
              Забронювати стіл
            </a>
          </Magnetic>
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-3 font-display uppercase tracking-widest text-sm space-y-2">
              <div className="text-accent-foreground/60 mb-4 text-xs">Графік роботи</div>
              <div className="font-medium">Пн–Нд 11:00–22:00</div>
            </div>
            
            <div className="md:col-span-4 font-display uppercase tracking-widest text-sm space-y-2">
              <div className="text-accent-foreground/60 mb-4 text-xs">Адреса та телефон</div>
              <div className="font-medium">вул. Антоновича, 44, Київ</div>
              <div className="pt-2">
                <a href="tel:+380443332211" className="font-medium hover:opacity-70 transition-opacity">+380 (44) 333-22-11</a>
              </div>
            </div>
            
            <div className="md:col-span-5 h-64 md:h-72 rounded-[var(--radius-md)] overflow-hidden bg-foreground/10 border border-accent-foreground/20 mt-8 md:mt-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.696781684347!2d30.509756076556114!3d50.42813587158739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef6a01b22e1%3A0xc3163774ccb70860!2svul.%20Antonovycha%2C%2044%2C%20Kyiv%2C%20Ukraine%2C%2003150!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта проїзду до Pasta Famiglia"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}