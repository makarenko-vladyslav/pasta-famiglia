import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasta Famiglia — Справжня італійська паста у Києві",
  description: "Автентичний італійський ресторан у центрі Києва. Власна свіжа паста щодня, піца на дровах та затишна сімейна атмосфера. Забронюйте столик онлайн!",
  keywords: ["італійський ресторан", "паста київ", "піца на дровах", "сімейний ресторан", "доставка пасти", "Pasta Famiglia"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Pasta Famiglia — Справжня італійська паста",
    description: "Автентичний італійський ресторан у центрі Києва. Свіжа паста, піца на дровах, затишна атмосфера.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* [serif-elegant] Pairing: Bitter (Display) + Lora (Body) */}
        <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700;800&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-bg-light text-text-main">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}