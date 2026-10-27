import type { Metadata } from "next";
import Link from "next/link";
import { behandlinger } from "@/lib/klinikk";
import { Avslutning, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Behandlinger",
  description: "Undersøkelse, fylling, akutt tannpine, rotfylling, tannbleking og implantat. Pris, tid og svar på om det gjør vondt.",
};

export default function Behandlinger() {
  return (
    <>
      <Sti deler={[{ tekst: "Behandlinger" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Behandlinger</h1>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Velg en behandling for å se hvordan den foregår, hva den koster og om den gjør vondt.
        </p>
        <ul className="mt-10 divide-y divide-linje border-y border-linje">
          {behandlinger.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/behandlinger/${b.slug}`}
                className="group grid gap-2 rounded-lg py-6 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-serif text-[1.625rem] font-semibold text-furu-mork group-hover:underline">
                  {b.navn}
                </span>
                <span>{b.ingress}</span>
                <span className="tall text-[1.125rem] whitespace-nowrap">{b.pris}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Avslutning />
    </>
  );
}
