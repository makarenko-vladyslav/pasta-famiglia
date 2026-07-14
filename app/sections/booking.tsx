import { Reveal, Magnetic } from "@/components/mechanics";

export function SectionBooking() {
  return (
<section id="booking" className="relative overflow-hidden bg-accent py-[var(--space-act)] text-accent-foreground">
  <div className="relative z-10 mx-auto max-w-[88rem] px-4 lg:px-10">
    <span className="rp-actno mb-6">Контакти</span>
    <Reveal><h2 className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] max-w-[14ch]">Pasta Famiglia</h2></Reveal>
    <div className="mt-12 flex flex-wrap items-center gap-8">
      <Magnetic><a href="tel:+380443332211" className="inline-flex items-center gap-3 bg-foreground px-10 py-5 text-lg font-semibold text-background" style={{ borderRadius: "var(--radius-control)" }}>Контакти<span aria-hidden>→</span></a></Magnetic>
      <span />
    </div>
    <div className="mt-14 grid gap-2 text-sm text-accent-foreground/80 lg:grid-cols-3">
      <span />
    </div>
  </div>
</section>
  );
}
