import type { Metadata } from "next";
import "./globals.css";
import { MobileMenu } from "@/components/mechanics";

export const metadata: Metadata = {
  title: "Pasta Famiglia — Італійський ресторан у Києві",
  description: "Тісто розкочуємо щоранку вручну. Відкрита кухня в Києві, де борошно Caputo стає пастою al dente просто на ваших очах.",
  openGraph: {
    title: "Pasta Famiglia — Свіжа паста та піца з дров'яної печі",
    description: "Італійський ресторан для сімей та офісних працівників. Бізнес-ланчі за 20 хвилин та затишні вечері.",
    type: "website",
    locale: "uk_UA",
  },
};

const navLinks = [
  { label: "Меню", href: "#menu" },
  { label: "Процес", href: "#process" },
  { label: "Відгуки", href: "#reviews" },
  { label: "Контакти", href: "#location" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:wght@500;600;700;800&family=Source+Code+Pro:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Pasta Famiglia",
              "image": "https://images.pexels.com/photos/6287454/pexels-photo-6287454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
              "servesCuisine": "Italian",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "вул. Антоновича, 44",
                "addressLocality": "Київ",
                "addressCountry": "UA"
              },
              "telephone": "+380443332211",
              "email": "e2e-pasta-client@example.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            }),
          }}
        />
      </head>
      <body className="font-body text-foreground bg-background antialiased selection:bg-accent/20 selection:text-foreground">
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col group">
          {/* Top Utility Strip - Quiet but functional */}
          <div className="bg-foreground text-accentForeground py-2 px-4 md:px-8 flex justify-center md:justify-between items-center text-xs tracking-widest font-mono uppercase">
            <span className="hidden md:inline-block opacity-80">Пн–Нд 11:00–22:00 • вул. Антоновича, 44, Київ</span>
            <a href="tel:+380443332211" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              +380 (44) 333-22-11
            </a>
          </div>
          
          {/* Main Navigation Row */}
          <div className="bg-background/90 backdrop-blur-md border-b border-border/60 py-3 md:py-4 px-4 md:px-8 flex justify-between items-center transition-all duration-300 shadow-sm">
            <a href="#" className="font-display font-bold text-xl md:text-2xl tracking-tight leading-none text-foreground hover:opacity-80 transition-opacity">
              Pasta<br/><span className="text-accent">Famiglia</span>
            </a>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="font-body font-medium text-foreground/80 hover:text-accent transition-colors text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a 
                href="#location"
                className="hidden sm:inline-flex bg-accent text-surface px-6 py-2.5 rounded-radius font-body font-medium text-sm uppercase tracking-wider hover:bg-foreground transition-colors duration-300"
              >
                Забронювати стіл
              </a>
              <div className="lg:hidden">
                <MobileMenu 
                  links={navLinks} 
                  cta={{ label: "Забронювати", href: "#location" }} 
                  phone="+380 (44) 333-22-11" 
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
          {children}
        </main>

        <footer className="bg-foreground text-surface py-12 px-4 md:px-8 border-t border-surface/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div>
              <span className="font-display font-bold text-2xl tracking-tight block mb-4">Pasta Famiglia</span>
              <p className="font-body text-surface/70 leading-relaxed max-w-sm">
                Відкрита кухня в Києві, де борошно Caputo стає пастою al dente просто на ваших очах.
              </p>
            </div>
            <div className="flex flex-col gap-2 font-body text-surface/80">
              <span className="font-mono text-xs uppercase tracking-widest text-surface/50 mb-2">Контакти</span>
              <a href="tel:+380443332211" className="hover:text-accent transition-colors">+380 (44) 333-22-11</a>
              <a href="mailto:e2e-pasta-client@example.com" className="hover:text-accent transition-colors">e2e-pasta-client@example.com</a>
              <span>вул. Антоновича, 44, Київ</span>
            </div>
            <div className="flex flex-col gap-2 font-body text-surface/80 md:items-end">
              <span className="font-mono text-xs uppercase tracking-widest text-surface/50 mb-2">Режим роботи</span>
              <span>Пн–Нд 11:00–22:00</span>
              <a href="#location" className="mt-4 text-accent hover:text-surface transition-colors underline underline-offset-4 decoration-accent/50 decoration-1">
                Прокласти маршрут
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-surface/40">
            <span>&copy; {new Date().getFullYear()} Pasta Famiglia. Всі права захищено.</span>
            <span className="font-mono text-xs uppercase">Designed with intention</span>
          </div>
        </footer>
      </body>
    </html>
  );
}