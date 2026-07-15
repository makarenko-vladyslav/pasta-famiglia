import type { Metadata } from "next";
import "./globals.css";
import { MobileMenu } from "@/components/mechanics";

export const metadata: Metadata = {
  title: "Pasta Famiglia | Італійський ресторан у Києві",
  description: "Італійський ресторан для сімей з дітьми та офісних працівників. Щоденне виготовлення свіжої пасти з італійського борошна Caputo та піца з дров'яної печі.",
  openGraph: {
    title: "Pasta Famiglia | Італійський ресторан у Києві",
    description: "Італійський ресторан для сімей з дітьми та офісних працівників. Щоденне виготовлення свіжої пасти з італійського борошна Caputo та піца з дров'яної печі.",
    type: "website",
    locale: "uk_UA",
    siteName: "Pasta Famiglia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pasta Famiglia",
  "image": "https://images.pexels.com/photos/35550884/pexels-photo-35550884.jpeg",
  "description": "Італійський ресторан для сімей з дітьми та офісних працівників, де щоранку власноруч замішують тісто для пасти з борошна Semola.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. Антоновича, 44",
    "addressLocality": "Київ",
    "addressCountry": "UA"
  },
  "telephone": "+380 (44) 333-22-11",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "22:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "servesCuisine": "Italian"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    { label: "Про нас", href: "#pro-nas" },
    { label: "Меню", href: "#menu" },
    { label: "Гарантія", href: "#garantiya" },
    { label: "Відгуки", href: "#vidhuky" },
  ];

  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Playfair+Display:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased selection:bg-accent selection:text-accent-foreground min-h-screen flex flex-col">
        <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border/30 transition-all duration-300">
          <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
            <a href="#" className="font-display font-bold text-2xl tracking-tight z-10 relative">
              Pasta Famiglia
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-foreground/80 hover:text-accent font-medium text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="tel:+380443332211" 
                className="font-display uppercase tracking-widest text-xs text-foreground/70 hover:text-foreground transition-colors"
              >
                +380 (44) 333-22-11
              </a>
              <a 
                href="#kontakty" 
                className="inline-flex items-center justify-center px-6 py-2.5 bg-foreground text-surface rounded-full text-sm font-medium hover:bg-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Забронювати стіл
              </a>
            </div>

            {/* Mobile Menu injected */}
            <div className="lg:hidden z-10">
              <MobileMenu 
                links={navLinks} 
                cta={{ label: "Забронювати стіл", href: "#kontakty" }} 
                phone="+380 (44) 333-22-11" 
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden">
          {children}
        </main>

        <footer className="bg-foreground text-surface py-12 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-display font-bold text-2xl mb-4">Pasta Famiglia</div>
              <p className="text-surface/70 max-w-sm mb-6 text-sm leading-relaxed">
                Італійський ресторан для сімей з дітьми та офісних працівників. Щоденне виготовлення свіжої пасти з італійського борошна на відкритій кухні.
              </p>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-widest text-xs text-surface/50 mb-4">Навігація</h3>
              <ul className="space-y-3 text-sm text-surface/80">
                <li><a href="#pro-nas" className="hover:text-accent transition-colors">Про нас</a></li>
                <li><a href="#menu" className="hover:text-accent transition-colors">Меню</a></li>
                <li><a href="#garantiya" className="hover:text-accent transition-colors">Гарантія швидкості</a></li>
                <li><a href="#vidhuky" className="hover:text-accent transition-colors">Відгуки гостей</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display uppercase tracking-widest text-xs text-surface/50 mb-4">Контакти</h3>
              <ul className="space-y-3 text-sm text-surface/80">
                <li>вул. Антоновича, 44, Київ</li>
                <li>Пн–Нд 11:00–22:00</li>
                <li><a href="tel:+380443332211" className="hover:text-accent transition-colors">+380 (44) 333-22-11</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between text-xs text-surface/40">
            <p>&copy; {new Date().getFullYear()} Pasta Famiglia. Всі права захищені.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}