import type { Metadata } from "next";
import Link from "next/link";
import { behandlinger } from "@/lib/klinikk";
import { Avslutning, Sti } from "@/components/Felles";

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
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Priser</h1>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Prisene under er det de fleste betaler. Etter undersøkelsen får du en skriftlig plan med nøyaktig pris, og vi gjør
          ingenting før du har sagt ja.
        </p>

        <table className="mt-10 w-full border-collapse text-left">
          <caption className="sr-only">Priser for behandlinger</caption>
          <thead>
            <tr className="border-b-2 border-furu">
              <th scope="col" className="py-3 pr-4 font-bold">Behandling</th>
              <th scope="col" className="py-3 pr-4 font-bold max-sm:hidden">Tid</th>
              <th scope="col" className="py-3 text-right font-bold">Pris</th>
            </tr>
          </thead>
          <tbody>
            {behandlinger.map((b) => (
              <tr key={b.slug} className="border-b border-linje">
                <th scope="row" className="py-4 pr-4 font-normal">
                  <Link href={`/behandlinger/${b.slug}`} className="font-bold text-furu-mork underline underline-offset-4">
                    {b.navn}
                  </Link>
                </th>
                <td className="py-4 pr-4 text-dempet max-sm:hidden">{b.varighet}</td>
                <td className="tall py-4 text-right text-[1.125rem] whitespace-nowrap">{b.pris}</td>
              </tr>
            ))}
            {ekstra.map((e) => (
              <tr key={e.navn} className="border-b border-linje">
                <th scope="row" className="py-4 pr-4 font-normal">{e.navn}</th>
                <td className="py-4 pr-4 max-sm:hidden" />
                <td className="tall py-4 text-right text-[1.125rem] whitespace-nowrap">{e.pris}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="mt-12 rounded-3xl bg-hvit p-7">
          <h2 className="text-[1.5rem] font-semibold">Støtte fra Helfo</h2>
          <p className="mt-2 max-w-prose">
            Ved enkelte sykdommer og tilstander dekker Helfo deler av regningen. Vi sjekker om du har rett til støtte og trekker
            den fra med en gang, så du slipper å søke selv.
          </p>
        </section>
      </div>
      <Avslutning />
    </>
  );
}
