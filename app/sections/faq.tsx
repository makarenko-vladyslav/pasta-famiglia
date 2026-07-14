"use client";
import { Reveal } from "@/components/mechanics";

export function SectionFaq() {
  return (
    <section id="faq" className="relative bg-background py-[var(--space-act)]">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rp-actno mb-5 block text-sm uppercase tracking-[0.3em]">Запитання</span>
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(2.4rem,5vw,4.5rem)]">
              Відповіді на ваші запитання
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              Ми цінуємо ваш час, тому зібрали відповіді на найчастіші запитання про наш сервіс, кухню та зручності для гостей Pasta Famiglia.
            </p>
          </Reveal>
        </div>
        <div className="divide-y divide-foreground/10 border-t border-foreground/10 lg:border-t-0">
          {/* FAQ ITEM: Booking */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Скільки часу займає бронювання столу?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Процес бронювання максимально спрощено — він займає лише 30 секунд вашого часу. Ви можете забронювати стіл телефоном або через нашу онлайн-форму.
            </p>
          </details>

          {/* FAQ ITEM: Service Charge */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи додаєте ви плату за обслуговування?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ні, ми не додаємо автоматичних чайових або прихованих зборів за сервіс до вашого рахунку. Винагорода офіціанту залишається виключно на ваш розсуд.
            </p>
          </details>

          {/* FAQ ITEM: Parking */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є можливість припаркувати автомобіль?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Так, для зручності наших гостей безпосередньо біля ресторану доступна власна зона паркування, яка перебуває під наглядом.
            </p>
          </details>

          {/* FAQ ITEM: Kids Room */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Чи є у ресторані умови для відпочинку з дітьми?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Звичайно. У нас працює спеціальна дитяча кімната Amiator, де професійні аніматори забезпечать цікаве та безпечне дозвілля для ваших малюків.
            </p>
          </details>

          {/* FAQ ITEM: Delivery */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Як швидко ви доставляєте замовлення?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми гарантуємо доставку гарячої піци в межах нашого району за 20 хвилин. Ми робимо все, щоб ви насолоджувались автентичним смаком як у ресторані.
            </p>
          </details>

          {/* FAQ ITEM: Ingredients */}
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-[clamp(1.2rem,2vw,1.7rem)] font-semibold leading-snug transition-colors duration-200 group-open:text-accent">
                Яку продукцію ви використовуєте для приготування?
              </h3>
              <span aria-hidden className="font-display text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Ми використовуємо лише перевірені італійські інгредієнти преміальної якості: борошно Caputo для ідеального тіста та томати Mutti для соусів.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}