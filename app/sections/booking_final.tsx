import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionBookingFinal() {
  return (
<section id="booking_final" className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground">
  <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
    <span className="rp-actno mb-6">Контакти</span>
    <Reveal><h2 className="font-display font-extrabold leading-[0.88] text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">Pasta Famiglia</h2></Reveal>
    <div className="mt-12 flex flex-wrap items-center gap-8">
      <Magnetic><a href="tel:+380443332211" className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background" style={{ borderRadius: "var(--radius-control)" }}>Контакти<span aria-hidden>→</span></a></Magnetic>
      <a href="tel:+380443332211" className="text-lg font-semibold underline-offset-4 hover:underline">+380 (44) 333-22-11</a>
    </div>
    <div className="mt-14 grid gap-2 text-sm text-accent-foreground/80 lg:grid-cols-3">
      <p>вул. Антоновича, 44, Київ</p>
<p>Пн–Нд 11:00–22:00</p>
<p>e2e-pasta-client@example.com</p>
    </div>
  </div>
</section>
  );
}
