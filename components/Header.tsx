import Link from "next/link";
import { klinikk } from "@/lib/klinikk";
import { TekstStorrelse } from "./TekstStorrelse";
import { Logo } from "./Logo";

export const meny = [
  { href: "/behandlinger", tekst: "Behandlinger" },
  { href: "/tannlegeskrekk", tekst: "Tannlegeskrekk" },
  { href: "/priser", tekst: "Priser" },
  { href: "/tannlegene", tekst: "Tannlegene" },
  { href: "/kontakt", tekst: "Kontakt" },
];

export function Header() {
  return (
    <header className="border-b border-linje bg-krem">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3 rounded-lg">
          <Logo />
          <span className="font-serif text-[1.25rem] font-semibold leading-tight text-furu-mork">
            {klinikk.kortnavn}
            <span className="block font-sans text-base font-normal text-dempet">
              {klinikk.slagord}
            </span>
          </span>
        </Link>

        <nav aria-label="Hovedmeny" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {meny.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className="rounded-lg px-3 py-2.5 font-bold text-blekk hover:bg-furu-lys"
                >
                  {m.tekst}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <TekstStorrelse />
          <Link
            href="/bestill-time"
            className="whitespace-nowrap rounded-full bg-aprikos px-5 py-3 font-bold text-hvit hover:bg-aprikos-mork"
          >
            Bestill time
          </Link>
        </div>

        {/* Mobilmeny med <details>: virker med tastatur og uten JavaScript. */}
        <details className="relative xl:hidden">
          <summary className="flex h-12 items-center gap-2 rounded-full border border-furu px-4 font-bold text-furu-mork">
            Meny
            <span aria-hidden="true" className="pil inline-block text-[1.25rem] leading-none transition-transform">
              +
            </span>
          </summary>
          <div className="absolute right-0 z-40 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-linje bg-hvit p-4 shadow-lg">
            <nav aria-label="Mobilmeny">
              <ul className="flex flex-col">
                {meny.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      className="block rounded-lg px-3 py-3 font-bold hover:bg-furu-lys"
                    >
                      {m.tekst}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/bestill-time"
              className="mt-3 block rounded-full bg-aprikos px-5 py-3 text-center font-bold text-hvit"
            >
              Bestill time
            </Link>
            <a
              href={`tel:${klinikk.telefonLenke}`}
              className="mt-2 block rounded-full border border-furu px-5 py-3 text-center font-bold text-furu-mork"
            >
              Ring {klinikk.telefon}
            </a>
            <div className="mt-4 border-t border-linje pt-4">
              <p className="mb-2 font-bold">Tekststørrelse</p>
              <TekstStorrelse />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
