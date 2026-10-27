import type { Metadata } from "next";
import Link from "next/link";
import { Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Om demoen",
  description: "Hva Lilit Labs kan lage for en tannklinikk, og hvorfor siden er bygd slik den er.",
};

const punkter = [
  {
    tittel: "Svar på det folk gruer seg til",
    tekst:
      "Toppen av forsiden svarer på tre spørsmål: gjør det vondt, hva koster det og hva skjer første gang. Det er det engstelige pasienter lurer på før de tør å bestille.",
    href: "/",
  },
  {
    tittel: "Én side per behandling",
    tekst:
      "Folk søker på «rotfylling pris» eller «tannbleking» og stedsnavnet. En egen side per behandling gir Google noe å vise for hvert av de søkene.",
    href: "/behandlinger/rotfylling",
  },
  {
    tittel: "Tannlegeskrekk som eget tema",
    tekst: "Mange klinikker er gode med engstelige pasienter, men sier det bare i en bisetning. Her har det en egen side.",
    href: "/tannlegeskrekk",
  },
  {
    tittel: "Åpningstider ett sted",
    tekst:
      "Tidene ligger ett sted i koden og brukes i bunnen, på kontaktsiden og i dataene Google leser. De kan ikke sprike mellom sidene.",
    href: "/kontakt",
  },
  {
    tittel: "Åpent nå",
    tekst: "Siden viser om klinikken er åpen akkurat nå, ut fra de samme tidene.",
    href: "/kontakt",
  },
  {
    tittel: "Bestilling med «Jeg gruer meg»",
    tekst: "Ett kryss, så vet klinikken det før pasienten kommer. Pasienten slipper å si det høyt i resepsjonen.",
    href: "/bestill-time",
  },
  {
    tittel: "Lett å lese for alle",
    tekst:
      "Tydelig skrift, høy kontrast, knapper for større tekst og full tastaturstøtte. Det er lovkrav for nettsider i Norge, og det hjelper eldre pasienter.",
    href: "/",
  },
  {
    tittel: "Rask på mobil",
    tekst: "De fleste leter etter tannlege på telefonen. Siden er bygd for mobil først og laster uten tunge bilder.",
    href: "/",
  },
];

export default function OmDemoen() {
  return (
    <>
      <Sti deler={[{ tekst: "Om demoen" }]} />
      <div className="mx-auto max-w-5xl px-4 pt-10">
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Om demoen</h1>
        <div className="mt-6 max-w-prose space-y-4 text-[1.125rem]">
          <p>
            Hringariki Tannklinikk finnes ikke. Siden er laget av Lilit Labs for å vise hva en tannklinikk kan få: en side som
            roer ned engstelige pasienter og som Google forstår.
          </p>
          <p>
            Navn, personer, priser og adresse er oppdiktet. På en ekte side kommer all tekst, alle priser og bilder fra klinikken
            selv.
          </p>
        </div>

        <h2 className="mt-14 text-[2rem] font-semibold text-furu-mork">Dette viser siden</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {punkter.map((p) => (
            <li key={p.tittel} className="flex flex-col rounded-3xl bg-hvit p-7">
              <h3 className="text-[1.375rem] font-semibold">{p.tittel}</h3>
              <p className="mt-2 flex-1">{p.tekst}</p>
              <Link href={p.href} className="mt-4 font-bold text-aprikos underline underline-offset-4 hover:no-underline">
                Se det på siden
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-16 rounded-[2rem] bg-furu px-6 py-12 text-krem sm:px-12">
          <h2 className="text-[2rem] font-semibold">Vil du ha noe lignende for din klinikk?</h2>
          <p className="mt-4 max-w-prose text-[1.125rem]">
            Lilit Labs er en liten nettsidebedrift i Hønefoss. Vi starter alltid med en prat om hvor pasientene deres kommer fra i
            dag.
          </p>
          <a
            href="https://lilitlabs.com"
            className="mt-8 inline-block rounded-full bg-krem px-6 py-3.5 font-bold text-furu-mork hover:bg-hvit"
          >
            Ta kontakt med Lilit Labs
          </a>
        </section>
      </div>
    </>
  );
}
