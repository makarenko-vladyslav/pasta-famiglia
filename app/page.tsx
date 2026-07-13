import { MobileMenu, PreloaderCurtain, CustomCursor, Magnetic, HeaderShell, ActBoundary } from "@/components/mechanics";
import { SectionHero } from "./sections/hero";
import { SectionMenuOffering } from "./sections/menu_offering";
import { SectionSignatureItems } from "./sections/signature_items";
import { SectionBusinessLunch } from "./sections/business_lunch";
import { SectionMarqueeInterstitial } from "./sections/marquee_interstitial";
import { SectionStoryCraft } from "./sections/story_craft";
import { SectionProcessProduction } from "./sections/process_production";
import { SectionGallery } from "./sections/gallery";
import { SectionValuesFamily } from "./sections/values_family";
import { SectionProofTestimonials } from "./sections/proof_testimonials";
import { SectionFaq } from "./sections/faq";
import { SectionLocationHours } from "./sections/location_hours";
import { SectionBookingContact } from "./sections/booking_contact";

const NAV = [{ href: "#gallery", label: "Галерея" }];

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
            <Magnetic><a href={"#booking_contact"} className="rp-header-cta hidden lg:inline-flex items-center bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity duration-300 hover:opacity-90" style={{ borderRadius: "var(--radius-control)" }}>Звʼязатися</a></Magnetic>
            <MobileMenu links={NAV} cta={{ href: "#booking_contact", label: "Звʼязатися" }} phone={"+380 (44) 333-22-11"} />
          </div>
        </div>
      </HeaderShell>
      <main id="top">
        <ActBoundary><SectionHero /></ActBoundary>
        <ActBoundary><SectionMenuOffering /></ActBoundary>
        <ActBoundary><SectionSignatureItems /></ActBoundary>
        <ActBoundary><SectionBusinessLunch /></ActBoundary>
        <ActBoundary><SectionMarqueeInterstitial /></ActBoundary>
        <ActBoundary><SectionStoryCraft /></ActBoundary>
        <ActBoundary><SectionProcessProduction /></ActBoundary>
        <ActBoundary><SectionGallery /></ActBoundary>
        <ActBoundary><SectionValuesFamily /></ActBoundary>
        <ActBoundary><SectionProofTestimonials /></ActBoundary>
        <ActBoundary><SectionFaq /></ActBoundary>
        <ActBoundary><SectionLocationHours /></ActBoundary>
        <ActBoundary><SectionBookingContact /></ActBoundary>
      </main>
      <footer className="relative overflow-hidden bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-16 lg:grid-cols-3 lg:px-6">
          <a href="tel:+380443332211" className="text-2xl font-semibold tracking-tight hover:text-accent transition-colors">+380 (44) 333-22-11</a>
          <div className="text-sm leading-relaxed text-background/70"><p>вул. Антоновича, 44, Київ</p><p>Пн–Нд 11:00–22:00</p></div>
          <div className="flex flex-col gap-1 text-sm text-background/70 lg:items-end">
            {NAV.map((l) => (<a key={l.href} href={l.href} className="hover:text-background transition-colors">{l.label}</a>))}
          </div>
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
