import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasta Famiglia — Київ",
  description: "Автентичний італійський ресторан у центрі Києва, що пропонує свіжу пасту власного виробництва та піцу з дров’яної печі для молодих сімей та працівників біз",
  openGraph: { title: "Pasta Famiglia", description: "Автентичний італійський ресторан у центрі Києва, що пропонує свіжу пасту власного виробництва та піцу з дров’яної печі для молодих сімей та працівників біз", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700;800&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Pasta Famiglia\",\"address\":\"вул. Антоновича, 44, Київ\",\"areaServed\":\"Київ\",\"telephone\":\"+380 (44) 333-22-11\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":4.9,\"reviewCount\":127}}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
