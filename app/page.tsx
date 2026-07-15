import { CountUp } from "@/components/mechanics";

export default function Home() {
  return (
    <>
      {/* ACT I: Hero Arrival */}
      <section className="relative min-h-screen grid grid-cols-12 items-end pb-12 px-4 md:px-8 z-10 bg-foreground text-surface overflow-hidden pt-32">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0 bg-foreground">
          <img 
            src="https://images.pexels.com/photos/6996211/pexels-photo-6996211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800" 
            alt="Ручне замішування тіста"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
          />
          <img 
            src="https://images.pexels.com/photos/6287454/pexels-photo-6287454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800" 
            alt="Італійська паста al dente"
            className="hero-img-top absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
          />
          {/* Wash Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 col-span-12 md:col-span-10 lg:col-span-8 flex flex-col gap-6 md:gap-8 pb-8 md:pb-12">
          <div className="font-mono text-xs md:text-sm uppercase tracking-widest flex flex-wrap items-center gap-3 opacity-90">
            <span className="text-accent font-bold">4.9 ★</span>
            <span className="w-1 h-1 rounded-full bg-surface/50"></span>
            <span>
              <CountUp to={127} suffix=" ВІДГУКІВ GOOGLE" locale="uk-UA" />
            </span>
            <span className="w-1 h-1 rounded-full bg-surface/50 hidden sm:block"></span>
            <span className="hidden sm:block">ВУЛ. АНТОНОВИЧА, 44</span>
          </div>
          
          <h1 className="font-display font-semibold text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.05em] text-balance">
            <span className="word-rise" style={{ animationDelay: '0.15s' }}>Тісто</span>{' '}
            <span className="word-rise" style={{ animationDelay: '0.24s' }}>розкочуємо</span><br/>
            <span className="word-rise" style={{ animationDelay: '0.33s' }}>щоранку</span>{' '}
            <span className="word-rise" style={{ animationDelay: '0.42s' }}>вручну</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-surface/80 max-w-xl text-balance word-rise" style={{ animationDelay: '0.6s' }}>
            Відкрита кухня в Києві, де борошно Caputo стає пастою al dente просто на ваших очах.
          </p>

          <div className="mt-4 word-rise" style={{ animationDelay: '0.7s' }}>
            <a 
              href="#location" 
              className="inline-flex bg-accent text-surface px-8 py-4 rounded-radius font-body font-medium text-lg uppercase tracking-wider hover:bg-surface hover:text-foreground transition-all duration-300 shadow-lg"
            >
              Забронювати стіл
            </a>
          </div>
        </div>
      </section>

      {/* ACT II: The Offer (Menu) */}
      <section id="menu" className="py-space-act px-4 md:px-8 bg-background grid grid-cols-12 gap-y-12 md:gap-8 relative">
        <div className="col-span-12 md:col-span-4 lg:col-span-5 md:sticky top-32 self-start">
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-foreground text-balance">
            Що ми<br/>готуємо
          </h2>
          <p className="font-body text-muted text-lg mt-6 max-w-sm">
            Від швидкого обіду посеред робочого дня до довгої вечері з вином.
          </p>
          <a href="#location" className="inline-block mt-8 font-body font-medium text-foreground uppercase tracking-widest border-b border-accent pb-1 hover:text-accent transition-colors">
            Дивитися повне меню
          </a>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-7 flex flex-col gap-8 md:gap-12">
          {/* Row 1 */}
          <div className="group flex items-start gap-4 md:gap-6 border-b border-border/50 pb-8 transition-colors hover:border-accent/30">
            <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-radius overflow-hidden border border-border/50">
              <img src="https://images.pexels.com/photos/13366358/pexels-photo-13366358.png?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" alt="Бізнес-ланч" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">Бізнес-ланч</h3>
                <span className="font-mono text-lg text-foreground/70 shrink-0">320 грн</span>
              </div>
              <p className="font-body text-muted text-base md:text-lg">
                Суп дня, обрана паста (Карбонара, Араб'ята або Песто) та фірмовий ягідний напій. Подаємо за 20 хвилин.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="group flex items-start gap-4 md:gap-6 border-b border-border/50 pb-8 transition-colors hover:border-accent/30">
            <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-radius overflow-hidden border border-border/50">
              <img src="https://images.pexels.com/photos/36859903/pexels-photo-36859903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" alt="Сімейний стіл" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">Сімейний стіл</h3>
                <span className="font-mono text-lg text-foreground/70 shrink-0">1150 грн</span>
              </div>
              <p className="font-body text-muted text-base md:text-lg">
                Дві великі піци з дров'яної печі, дві порції домашньої пасти та великий глечик лимонаду для всієї родини.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="group flex items-start gap-4 md:gap-6 border-b border-border/50 pb-8 transition-colors hover:border-accent/30">
            <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-radius overflow-hidden border border-border/50">
              <img src="https://images.pexels.com/photos/37322866/pexels-photo-37322866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300" alt="Вечеря на двох" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">Вечеря на двох</h3>
                <span className="font-mono text-lg text-foreground/70 shrink-0">1400 грн</span>
              </div>
              <p className="font-body text-muted text-base md:text-lg">
                Пляшка італійського Prosecco, плато м'ясних антипасті, дві авторські пасти з морепродуктами та легкі десерти.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT II: The Offer (Speed Focus) */}
      <section className="py-space-act bg-surface grid grid-cols-12 items-center gap-y-12 md:gap-8">
        <div className="col-span-12 md:col-span-5 md:col-start-2 px-4 md:px-0 z-10 order-2 md:order-1 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">Офісний ланч</span>
          <h2 className="font-display font-bold text-[clamp(2.2rem,4.5vw,4rem)] leading-tight text-foreground mb-6 text-balance">
            Обід за 20 хвилин
          </h2>
          <p className="font-body text-muted text-lg leading-relaxed text-balance">
            Знаємо ціну часу в розпал робочого дня. Наша відкрита кухня оптимізована так, щоб ви не чекали.
            <br/><br/>
            Свіже тісто вариться лічені хвилини. Якщо ми не принесемо гарячу страву за двадцять хвилин після прийняття замовлення — напій за наш рахунок.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 overflow-hidden order-1 md:order-2 h-[50vh] md:h-auto">
          <div className="w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-none md:rounded-l-radius">
            <img 
              src="https://images.pexels.com/photos/31478782/pexels-photo-31478782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Швидка подача пасти" 
              className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-1000 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ACT II: The Offer (Extension - Takeaway) */}
      <section className="pt-8 pb-space-act bg-background overflow-hidden">
        {/* Marquee Band */}
        <div className="w-full overflow-hidden bg-foreground py-4 border-y border-foreground/10 flex whitespace-nowrap select-none">
          <div className="animate-marquee flex items-center shrink-0 min-w-full justify-around font-display text-2xl md:text-4xl uppercase tracking-widest text-surface/90">
            <span className="mx-8">• СВІЖА ПАСТА</span>
            <span className="mx-8">• AL DENTE</span>
            <span className="mx-8">• З СОБОЮ</span>
            <span className="mx-8">• СВІЖА ПАСТА</span>
            <span className="mx-8">• AL DENTE</span>
            <span className="mx-8">• З СОБОЮ</span>
          </div>
          <div className="animate-marquee flex items-center shrink-0 min-w-full justify-around font-display text-2xl md:text-4xl uppercase tracking-widest text-surface/90" aria-hidden="true">
            <span className="mx-8">• СВІЖА ПАСТА</span>
            <span className="mx-8">• AL DENTE</span>
            <span className="mx-8">• З СОБОЮ</span>
            <span className="mx-8">• СВІЖА ПАСТА</span>
            <span className="mx-8">• AL DENTE</span>
            <span className="mx-8">• З СОБОЮ</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 px-4 md:px-8 mt-space-act items-center">
          <div className="col-span-12 md:col-span-5 md:col-start-2 order-1 overflow-hidden rounded-radius aspect-square md:aspect-[3/4]">
            <img 
              src="https://images.pexels.com/photos/32535023/pexels-photo-32535023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Напівфабрикат пасти з собою" 
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 order-2 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">Напівфабрикати</span>
            <h2 className="font-display font-bold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-foreground mb-6 text-balance">
              Готуйте нашу пасту вдома
            </h2>
            <p className="font-body text-muted text-lg leading-relaxed text-balance">
              Продаємо свіже тісто як напівфабрикат. Заберіть із собою, киньте в окріп на три хвилини — і ідеальна вечеря готова. Без консервантів, лише борошно Semola та вода.
            </p>
          </div>
        </div>
      </section>

      {/* ACT III: The Soul (Process) */}
      <section id="process" className="relative py-space-act bg-surface px-4 md:px-8 grid grid-cols-12 gap-y-16 items-center overflow-hidden">
        {/* Giant Watermark */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full hidden lg:flex overflow-hidden pointer-events-none select-none z-0 opacity-[0.03] mix-blend-multiply" aria-hidden="true">
          <div className="animate-marquee-slow flex min-w-full">
            <span className="text-[clamp(10rem,25vw,25rem)] text-foreground font-display tracking-tighter leading-none mx-16">SEMOLA</span>
            <span className="text-[clamp(10rem,25vw,25rem)] text-foreground font-display tracking-tighter leading-none mx-16">SEMOLA</span>
          </div>
          <div className="animate-marquee-slow flex min-w-full">
            <span className="text-[clamp(10rem,25vw,25rem)] text-foreground font-display tracking-tighter leading-none mx-16">SEMOLA</span>
            <span className="text-[clamp(10rem,25vw,25rem)] text-foreground font-display tracking-tighter leading-none mx-16">SEMOLA</span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10 md:col-start-2 z-10 mb-12 text-center md:text-left">
          <h2 className="font-display font-bold text-[clamp(3rem,6vw,5.5rem)] leading-none text-foreground mb-6">
            Увесь процес<br/>перед вами
          </h2>
          <p className="font-body text-xl text-muted max-w-2xl">
            Ми не ховаємо кухарів за дверима. Стіл, усипаний борошном, вода та руки — ви бачите, як народжується обід.
          </p>
        </div>

        {/* Zig-Zag Steps */}
        <div className="col-span-12 z-10 grid grid-cols-12 gap-y-16 relative">
          
          <div className="col-span-12 md:col-span-4 md:col-start-2 border-l border-accent/30 pl-6 md:pl-8 py-2">
            <span className="font-mono text-accent text-sm mb-4 block">01</span>
            <h3 className="font-display font-bold text-3xl mb-3 text-foreground">Замішуємо тісто зранку</h3>
            <p className="font-body text-muted text-lg">Щодня свіжа партія. Лише італійське борошно Caputo та чиста вода.</p>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-4 rounded-radius overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
            <img src="https://images.pexels.com/photos/12437582/pexels-photo-12437582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Стіл усипаний борошном" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-6 border-l border-accent/30 pl-6 md:pl-8 py-2">
            <span className="font-mono text-accent text-sm mb-4 block">02</span>
            <h3 className="font-display font-bold text-3xl mb-3 text-foreground">Формуємо пасту на відкритому столі</h3>
            <p className="font-body text-muted text-lg">Розкатуємо та нарізаємо на очах у гостей. Ніяких машинних штамповок.</p>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-8 border-l border-accent/30 pl-6 md:pl-8 py-2">
            <span className="font-mono text-accent text-sm mb-4 block">03</span>
            <h3 className="font-display font-bold text-3xl mb-3 text-foreground">Відварюємо за хвилини до подачі</h3>
            <p className="font-body text-muted text-lg">Ідеальний стан al dente можливий лише коли паста потрапляє з окропу прямо у ваш соус.</p>
          </div>
        </div>
      </section>

      {/* ACT III: The Soul (Pizza Feature) */}
      <section className="py-space-act bg-background grid grid-cols-12 gap-y-12 md:gap-8 px-4 md:px-8 items-center overflow-hidden">
        <div className="col-span-12 md:col-span-4 md:col-start-2 z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">З печі на дровах</span>
          <h2 className="font-display font-bold text-[clamp(2.5rem,4vw,4rem)] leading-tight text-foreground mb-6">
            Піч на дровах
          </h2>
          <p className="font-body text-muted text-lg leading-relaxed">
            Температура понад 400°C робить скоринку пухкою, залишаючи начинку соковитою. Томати Mutti, тягучий сир та легкий аромат диму в кожному шматочку.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 perspective-[1000px]">
          <div className="tilt-card-css rounded-radius overflow-hidden aspect-[4/5] md:aspect-[3/4] shadow-xl w-full max-w-md mx-auto md:max-w-none">
            <img 
              src="https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Піца з дров'яної печі" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ACT III: The Soul (Kids Feature) */}
      <section className="py-space-act bg-surface grid grid-cols-12 gap-y-12 md:gap-8 px-4 md:px-8 items-center">
        <div className="col-span-12 md:col-span-5 md:col-start-2 overflow-hidden rounded-radius aspect-square md:aspect-[4/5] order-2 md:order-1">
          <img 
            src="https://images.pexels.com/photos/8629114/pexels-photo-8629114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800" 
            alt="Діти у ресторані" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center order-1 md:order-2">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-6 block">Сімейний час</span>
          <h2 className="font-display font-bold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-foreground mb-6">
            Спокій для батьків
          </h2>
          <p className="font-body text-muted text-lg leading-relaxed">
            Поки ви насолоджуєтеся пастою в тиші за келихом вина, діти граються в безпечній, спеціально обладнаній кімнаті. У вихідні дні з ними працює професійний аніматор, щоб ваш обід був дійсно спокійним.
          </p>
        </div>
      </section>

      {/* ACT III: The Soul (Gallery / Vibe) */}
      <section className="h-screen bg-foreground relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.pexels.com/photos/6287454/pexels-photo-6287454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" className="w-full h-full object-cover blur-sm" alt="Background" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/80 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 px-8 w-[80vw] md:w-[40vw] shrink-0 text-surface">
          <h2 className="font-display font-bold text-[clamp(3rem,6vw,5rem)] leading-none mb-6">
            Тиша та<br/>тепле дерево
          </h2>
          <p className="font-body text-lg text-surface/80">
            Ми створили простір без галасу, де можна спокійно поговорити. Теракотові відтінки, фактура сирої семоли та комфортна відстань між столами.
          </p>
        </div>

        {/* Native Horizontal Scroll Strip */}
        <div className="relative z-10 flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar h-[60vh] md:h-[70vh] w-full px-8 pb-8 items-center">
          <div className="snap-center shrink-0 w-[70vw] md:w-[35vw] h-full rounded-radius overflow-hidden">
            <img src="https://images.pexels.com/photos/6287454/pexels-photo-6287454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" className="w-full h-full object-cover" alt="Gallery 1" loading="lazy" />
          </div>
          <div className="snap-center shrink-0 w-[80vw] md:w-[45vw] h-[80%] rounded-radius overflow-hidden">
            <img src="https://images.pexels.com/photos/6996211/pexels-photo-6996211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000" className="w-full h-full object-cover" alt="Gallery 2" loading="lazy" />
          </div>
          <div className="snap-center shrink-0 w-[60vw] md:w-[30vw] h-[90%] rounded-radius overflow-hidden">
            <img src="https://images.pexels.com/photos/12437582/pexels-photo-12437582.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" className="w-full h-full object-cover" alt="Gallery 3" loading="lazy" />
          </div>
          <div className="snap-center shrink-0 w-[75vw] md:w-[40vw] h-[70%] rounded-radius overflow-hidden pr-8">
            <img src="https://images.pexels.com/photos/3661200/pexels-photo-3661200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800" className="w-full h-full object-cover" alt="Gallery 4" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ACT IV: The Proof (Reviews) */}
      <section id="reviews" className="py-space-act bg-surface px-4 md:px-8 grid grid-cols-12 gap-y-16">
        <div className="col-span-12 text-center flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent mb-4 block">Відгуки гостей</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
            4.9 із <CountUp to={127} suffix="" locale="uk-UA" /> відгуків
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-3 text-center border-b border-border/50 pb-16">
          <p className="font-display font-medium text-[clamp(2rem,4vw,3.5rem)] leading-tight italic text-foreground text-balance">
            «Тісто просто тане. Видно, як кухарі працюють на кухні — дуже заспокоює.»
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src="https://images.pexels.com/photos/19260797/pexels-photo-19260797.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=150&w=150" alt="Аватар клієнта" className="w-12 h-12 rounded-full object-cover border border-border" loading="lazy" />
            <div className="text-left">
              <span className="font-mono text-sm uppercase font-medium block text-foreground">Олена М.</span>
              <span className="text-accent text-xs">★★★★★ Google</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-3 px-4">
          <div className="flex text-accent text-sm mb-3">★★★★★</div>
          <p className="font-body text-lg text-muted mb-4">
            «Єдине місце поруч, де можна нормально поїсти, поки дитина в ігровій. Дуже смачна піца з дров'яної печі.»
          </p>
          <span className="font-mono text-xs uppercase text-foreground/60">Ігор В.</span>
        </div>

        <div className="col-span-12 md:col-span-4 px-4">
          <div className="flex text-accent text-sm mb-3">★★★★★</div>
          <p className="font-body text-lg text-muted mb-4">
            «Замовляли ланч, принесли за 15 хвилин. Паста дійсно al dente. Ідеально для швидкого обіду.»
          </p>
          <span className="font-mono text-xs uppercase text-foreground/60">Марина С.</span>
        </div>
      </section>

      {/* ACT IV: FAQ */}
      <section id="faq" className="py-space-act bg-background px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-[clamp(2.5rem,4vw,4rem)] text-foreground mb-12 text-center md:text-left">
            Часті запитання
          </h2>
          
          <div className="flex flex-col">
            <details className="group border-b border-border py-6 open:pb-8 transition-all duration-300">
              <summary className="font-body font-medium text-xl md:text-2xl text-foreground flex justify-between items-center cursor-pointer select-none">
                Чи приїде піца теплою?
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
              </summary>
              <div className="pt-4 font-body text-muted text-lg leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Використовуємо спеціальні термосумки, тому скоринка не пересихає, а сир тягнеться навіть після доставки.
              </div>
            </details>

            <details className="group border-b border-border py-6 open:pb-8 transition-all duration-300">
              <summary className="font-body font-medium text-xl md:text-2xl text-foreground flex justify-between items-center cursor-pointer select-none">
                Чи є місця для авто?
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
              </summary>
              <div className="pt-4 font-body text-muted text-lg leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Для гостей закладу виділені безкоштовні паркувальні місця поруч із входом.
              </div>
            </details>

            <details className="group border-b border-border py-6 open:pb-8 transition-all duration-300">
              <summary className="font-body font-medium text-xl md:text-2xl text-foreground flex justify-between items-center cursor-pointer select-none">
                Що, як страва не сподобається?
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
              </summary>
              <div className="pt-4 font-body text-muted text-lg leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Замінимо порцію або викреслимо її з рахунку без зайвих питань. Наш пріоритет — ваш комфорт.
              </div>
            </details>

            <details className="group border-b border-border py-6 open:pb-8 transition-all duration-300">
              <summary className="font-body font-medium text-xl md:text-2xl text-foreground flex justify-between items-center cursor-pointer select-none">
                Як підтверджується бронь?
                <span className="text-accent text-2xl group-open:rotate-45 transition-transform duration-300 ml-4">+</span>
              </summary>
              <div className="pt-4 font-body text-muted text-lg leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                Після натискання кнопки бронювання ви отримаєте миттєве повідомлення у Telegram або Viber з деталями вашого столика.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ACT V: The Close (Location) */}
      <section id="location" className="min-h-[90vh] grid grid-cols-12 items-center bg-foreground text-surface px-4 md:px-8 relative overflow-hidden py-16">
        <div className="ambient-bg absolute inset-0 z-0 opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 col-span-12 md:col-span-5 md:col-start-2 flex flex-col gap-8 order-2 md:order-1 mt-12 md:mt-0">
          <div>
            <h2 className="font-display font-bold text-[clamp(3.5rem,8vw,6rem)] leading-[0.95] tracking-tight mb-4 text-balance">
              Чекаємо в гості
            </h2>
            <p className="font-body text-lg text-surface/70 max-w-md">
              Працюємо щодня, щоб ви могли прийти на каву Lavazza зранку або на келих вина ввечері.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-body text-xl md:text-2xl text-accentForeground mt-4">
            <div className="flex items-start gap-4">
              <span className="font-mono text-accent text-sm mt-2 shrink-0">АДРЕСА</span>
              <span>вул. Антоновича, 44,<br/>Київ</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-accent text-sm mt-2 shrink-0">ЧАС</span>
              <span>Пн–Нд 11:00–22:00</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-mono text-accent text-sm mt-2 shrink-0">ТЕЛЕФОН</span>
              <a href="tel:+380443332211" className="hover:text-accent transition-colors">+380 (44) 333-22-11</a>
            </div>
          </div>

          <div className="mt-8">
            <a 
              href="https://maps.google.com/?q=вул.+Антоновича,+44,+Київ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-accent text-surface px-8 py-4 rounded-radius font-body font-medium text-lg uppercase tracking-wider hover:bg-surface hover:text-foreground transition-all duration-300 shadow-lg"
            >
              Прокласти маршрут
            </a>
          </div>
        </div>

        <div className="relative z-10 col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
          <div className="w-full aspect-[4/5] md:aspect-[3/4] rounded-t-full overflow-hidden border-4 border-surface/10 relative shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/7702827/pexels-photo-7702827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
              alt="Вхід до ресторану" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Embedded Map overlay at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-background/5 p-2 backdrop-blur-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.2291999908643!2d30.5109433!3d50.4326511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef30fbb8c43%3A0x6b4fb6c189e4c5b3!2sAntonoyvch%20St%2C%2044%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.25rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта проїзду"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}