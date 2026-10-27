import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fraunces } from "next/font/google";
import "./globals.css";
import { DemoStripe } from "@/components/DemoStripe";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { klinikk, apningstider } from "@/lib/klinikk";

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  // Bare domenet: Next legger selv på /hringariki for filer som delingsbildet.
  metadataBase: new URL(new URL(klinikk.url).origin),
  title: {
    default: `${klinikk.navn} · Tannlege i ${klinikk.sted}`,
    template: `%s · ${klinikk.navn}`,
  },
  description:
    "Tannlege for deg som gruer deg også. Åpne priser, timebestilling på nett og en plan før vi gjør noe. Demo laget av Lilit Labs.",
  // Klinikken er oppdiktet. Siden skal ikke dukke opp når folk søker etter en ekte tannlege.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: klinikk.navn,
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: klinikk.navn,
  url: klinikk.url,
  telephone: klinikk.telefonLenke,
  email: klinikk.epost,
  priceRange: "kr",
  address: {
    "@type": "PostalAddress",
    streetAddress: klinikk.gate,
    postalCode: klinikk.postnr,
    addressLocality: klinikk.sted,
    addressCountry: "NO",
  },
  openingHoursSpecification: apningstider
    .filter((d) => d.apner)
    .map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: d.schema,
      opens: d.apner,
      closes: d.stenger,
    })),
};

// Setter valgt tekststørrelse før siden tegnes, så den ikke hopper.
const tekstScript = `try{var t=localStorage.getItem("tekst");if(t)document.documentElement.dataset.tekst=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${atkinson.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: tekstScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-hvit focus:px-4 focus:py-3 focus:font-bold"
        >
          Hopp til innholdet
        </a>
        <DemoStripe />
        <Header />
        <main id="innhold" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
