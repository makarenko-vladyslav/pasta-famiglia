import { MobileMenu, PreloaderCurtain, CustomCursor, Magnetic, HeaderShell, ActBoundary } from "@/components/mechanics";
import { SectionHero } from "./sections/hero";
import { SectionConcept } from "./sections/concept";
import { SectionCraft } from "./sections/craft";
import { SectionMenu } from "./sections/menu";
import { SectionKids } from "./sections/kids";
import { SectionDelivery } from "./sections/delivery";
import { SectionBooking } from "./sections/booking";
import { SectionReviews } from "./sections/reviews";
import { SectionRetail } from "./sections/retail";
import { SectionFaq } from "./sections/faq";
import { SectionLocation } from "./sections/location";

const NAV = [{ href: "#craft", label: "Про нас" }, { href: "#menu", label: "Меню" }, { href: "#booking", label: "Контакти" }, { href: "#reviews", label: "Відгуки" }, { href: "#faq", label: "Питання" }];

export default function Page() {
  return (
    <>
      <PreloaderCurtain brand={"Pasta Famiglia"} />
      <CustomCursor />
      {true && (
        <div className="hidden md:flex items-center justify-between gap-4 bg-foreground text-background/90 px-6 py-1.5 text-xs">
          <span>вул. Антоновича, 44, Київ · Пн–Нд 11:00–22:00</span>
          <a href="tel:+380443332211" className="font-semibold text-background">+380 (44) 333-22-11</a>
        </div>
      )}
      <HeaderShell>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:px-6">
          <a href="#top" className="whitespace-nowrap font-display text-lg lg:text-xl font-bold tracking-tight">Pasta Famiglia</a>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {NAV.map((l) => (<a key={l.href} href={l.href} className="hover:text-accent transition-colors">{l.label}</a>))}
          </nav>
          <div className="flex items-center gap-2">
            <Magnetic><a href={"tel:+380443332211"} className="rp-header-cta hidden lg:inline-flex items-center bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity duration-300 hover:opacity-90" style={{ borderRadius: "var(--radius-control)" }}>Забронювати стіл</a></Magnetic>
            <MobileMenu links={NAV} cta={{ href: "tel:+380443332211", label: "Забронювати стіл" }} phone={"+380 (44) 333-22-11"} />
          </div>
        </div>
      </HeaderShell>
      <main id="top" className="bg-background text-foreground">
        <ActBoundary><SectionHero /></ActBoundary>
        <ActBoundary><SectionConcept /></ActBoundary>
        <ActBoundary><SectionCraft /></ActBoundary>
        <ActBoundary><SectionMenu /></ActBoundary>
        <ActBoundary><SectionKids /></ActBoundary>
        <ActBoundary><SectionDelivery /></ActBoundary>
        <ActBoundary><SectionBooking /></ActBoundary>
        <ActBoundary><SectionReviews /></ActBoundary>
        <ActBoundary><SectionRetail /></ActBoundary>
        <ActBoundary><SectionFaq /></ActBoundary>
        <ActBoundary><SectionLocation /></ActBoundary>
      </main>
      <footer className="relative overflow-hidden bg-foreground text-background">
        {/* Footer is navigation + brand only — the address/hours/map live in
            the location section, never duplicated here (owner: «футер має бути
            футером»). The phone stays as a clickable convenience. */}
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-8 pt-16 lg:flex-row lg:items-start lg:justify-between lg:px-6">
          <div>
            <span className="font-display text-2xl font-semibold">Pasta Famiglia</span>
            <a href="tel:+380443332211" className="mt-3 block text-lg text-background/80 hover:text-accent transition-colors">+380 (44) 333-22-11</a>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-background/70 lg:items-end">
            {NAV.map((l) => (<a key={l.href} href={l.href} className="hover:text-background transition-colors">{l.label}</a>))}
          </nav>
        </div>
        <div aria-hidden className="select-none whitespace-nowrap px-2 font-display font-bold leading-[0.78] tracking-[-0.04em] text-background/15" style={{ fontSize: "clamp(4rem, 14.5vw, 15rem)" }}>Pasta Famiglia</div>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pb-6 pt-2 text-xs text-background/50 lg:px-6">
          <span>© {new Date().getFullYear()} Pasta Famiglia</span>
          <span>Київ</span>
        </div>
      </footer>
    </>
  );
}
