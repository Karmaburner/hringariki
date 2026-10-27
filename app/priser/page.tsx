import type { Metadata } from "next";
import Link from "next/link";
import { behandlinger } from "@/lib/klinikk";
import { Avslutning, Seksjon, SideTopp, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Priser",
  description: "Åpne priser på undersøkelse, fylling, rotfylling, tannbleking og implantat. Du får alltid skriftlig pris før vi starter.",
};

const ekstra = [
  { navn: "Røntgenbilde", pris: "150 kr per bilde" },
  { navn: "Tannrens hos tannpleier", pris: "990 kr" },
  { navn: "Undersøkelse for barn og unge under 19", pris: "Gratis" },
  { navn: "Avbestilling senere enn dagen før", pris: "500 kr" },
];

export default function Priser() {
  return (
    <>
      <Sti deler={[{ tekst: "Priser" }]} />
      <div className="mx-auto max-w-5xl px-4 pt-10">
        <SideTopp etikett="Priser" tittel="Åpne priser, ingen overraskelser">
          <p>
            Prisene under er det de fleste betaler. Etter undersøkelsen får du en skriftlig plan med nøyaktig pris, og vi gjør
            ingenting før du har sagt ja.
          </p>
        </SideTopp>

        <table className="mt-14 w-full border-collapse text-left">
          <caption className="sr-only">Priser for behandlinger</caption>
          <thead>
            <tr className="border-b-2 border-furu-mork">
              <th scope="col" className="py-3 pr-4 text-[0.9375rem] font-bold uppercase tracking-[0.14em] text-furu">
                Behandling
              </th>
              <th scope="col" className="py-3 pr-4 text-[0.9375rem] font-bold uppercase tracking-[0.14em] text-furu max-sm:hidden">
                Tid
              </th>
              <th scope="col" className="py-3 text-right text-[0.9375rem] font-bold uppercase tracking-[0.14em] text-furu">
                Pris
              </th>
            </tr>
          </thead>
          <tbody>
            {behandlinger.map((b) => (
              <tr key={b.slug} className="border-b border-linje">
                <th scope="row" className="py-5 pr-4 font-normal">
                  <Link
                    href={`/behandlinger/${b.slug}`}
                    className="font-serif text-[1.375rem] font-semibold text-furu-mork underline decoration-aprikos decoration-2 underline-offset-[5px] hover:decoration-furu-mork"
                  >
                    {b.navn}
                  </Link>
                </th>
                <td className="py-5 pr-4 text-dempet max-sm:hidden">{b.varighet}</td>
                <td className="tall py-5 text-right text-[1.125rem] whitespace-nowrap">{b.pris}</td>
              </tr>
            ))}
            {ekstra.map((e) => (
              <tr key={e.navn} className="border-b border-linje">
                <th scope="row" className="py-5 pr-4 font-serif text-[1.25rem] font-semibold">
                  {e.navn}
                </th>
                <td className="py-5 pr-4 max-sm:hidden" />
                <td className="tall py-5 text-right text-[1.125rem] whitespace-nowrap">{e.pris}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section aria-labelledby="helfo-tittel" className="mt-24 grid gap-6 border-t-2 border-furu-mork pt-10 lg:grid-cols-[1fr_1.2fr]">
          <Seksjon etikett="Helfo" tittel="Støtte til tannbehandling" id="helfo-tittel" />
          <p className="max-w-prose text-[1.125rem] lg:pt-10">
            Ved enkelte sykdommer og tilstander dekker Helfo deler av regningen. Vi sjekker om du har rett til støtte og trekker
            den fra med en gang, så du slipper å søke selv.
          </p>
        </section>
      </div>
      <Avslutning />
    </>
  );
}
