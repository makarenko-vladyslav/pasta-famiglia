import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasta Famiglia — Київ",
  description: "Італійський заклад у центрі Києва із власним щоденним виробництвом свіжої пасти з борошна Semola, створений для сімей з дітьми із сусідніх ЖК та працівникі",
  openGraph: { title: "Pasta Famiglia", description: "Італійський заклад у центрі Києва із власним щоденним виробництвом свіжої пасти з борошна Semola, створений для сімей з дітьми із сусідніх ЖК та працівникі", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        {/* Kill scroll restoration BEFORE hydration: iOS Chrome re-applies the
            saved offset after load, so the preloader opened onto the middle
            of the page. Must run inline, not in a React effect. */}
        <script dangerouslySetInnerHTML={{ __html: "try{history.scrollRestoration='manual'}catch(e){};if(!location.hash){window.scrollTo(0,0);addEventListener('load',function(){setTimeout(function(){window.scrollTo(0,0)},1)})}" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700;800&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Pasta Famiglia\",\"address\":\"вул. Антоновича, 44, Київ\",\"areaServed\":\"Київ\",\"telephone\":\"+380 (44) 333-22-11\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":4.9,\"reviewCount\":127}}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
