import { MobileMenu, PreloaderCurtain, CustomCursor, Magnetic, HeaderShell, ActBoundary } from "@/components/mechanics";
import { SectionHero } from "./sections/hero";
import { SectionThePromise } from "./sections/the_promise";
import { SectionSignatureGallery } from "./sections/signature_gallery";
import { SectionMarqueeSeparator } from "./sections/marquee_separator";
import { SectionMenuEditorial } from "./sections/menu_editorial";
import { SectionAtmosphere } from "./sections/atmosphere";
import { SectionProofSpotlight } from "./sections/proof_spotlight";
import { SectionLocationMap } from "./sections/location_map";
import { SectionBookingFinal } from "./sections/booking_final";

const NAV = [];

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
            <Magnetic><a href={"tel:+380443332211"} className="rp-header-cta hidden lg:inline-flex items-center bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity duration-300 hover:opacity-90" style={{ borderRadius: "var(--radius-control)" }}>Звʼязатися</a></Magnetic>
            <MobileMenu links={NAV} cta={{ href: "tel:+380443332211", label: "Звʼязатися" }} phone={"+380 (44) 333-22-11"} />
          </div>
        </div>
      </HeaderShell>
      <main id="top" className="bg-background text-foreground">
        <ActBoundary><SectionHero /></ActBoundary>
        <ActBoundary><SectionThePromise /></ActBoundary>
        <ActBoundary><SectionSignatureGallery /></ActBoundary>
        <ActBoundary><SectionMarqueeSeparator /></ActBoundary>
        <ActBoundary><SectionMenuEditorial /></ActBoundary>
        <ActBoundary><SectionAtmosphere /></ActBoundary>
        <ActBoundary><SectionProofSpotlight /></ActBoundary>
        <ActBoundary><SectionLocationMap /></ActBoundary>
        <ActBoundary><SectionBookingFinal /></ActBoundary>
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
