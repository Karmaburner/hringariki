import { MedTall } from "@/components/MedTall";
import type { Metadata } from "next";
import Link from "next/link";
import { Etikett, Seksjon, SideTopp, Sti } from "@/components/Felles";

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
      "Tidene ligger ett sted i koden og brukes på forsiden, i bunnen, på kontaktsiden og i dataene Google leser. De kan ikke sprike mellom sidene.",
    href: "/kontakt",
  },
  {
    tittel: "Åpent nå",
    tekst:
      "Siden viser om klinikken er åpen akkurat nå, ut fra de samme tidene. I demoen står den alltid som åpen, så du ser hvordan det ser ut.",
    href: "/kontakt",
  },
  {
    tittel: "Bestilling med «Jeg gruer meg»",
    tekst:
      "Ett kryss, så vet klinikken det før pasienten kommer. Pasienten slipper å si det høyt i resepsjonen. På en ekte side kan bestillingen kobles til journalsystemet, for eksempel Opus Dental, så pasienten velger ledig tid selv.",
    href: "/bestill-time",
  },
  {
    tittel: "Lett å lese for alle",
    tekst:
      "Tydelig skrift, høy kontrast og full tastaturstøtte. Siden tåler 200 % zoom og stor tekst uten at noe går i stykker, og en egen side viser hvordan man gjør teksten større. Det er lovkrav for nettsider i Norge, og det hjelper eldre pasienter.",
    href: "/storre-tekst",
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
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <SideTopp etikett="Om demoen" tittel="En tannklinikk som ikke finnes">
          <p>
            Hringariki Tannklinikk er laget av Lilit Labs for å vise hva en tannklinikk kan få: en side som roer ned engstelige
            pasienter og som Google forstår.
          </p>
          <p>
            Navn, personer, priser og adresse er oppdiktet, og bildene er laget med KI. På en ekte side kommer all tekst, alle
            priser og bilder fra klinikken selv.
          </p>
        </SideTopp>

        <section aria-labelledby="viser-tittel" className="mt-24">
          <Seksjon etikett="Åtte grep" tittel="Dette viser siden" id="viser-tittel" />
          <ol className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {punkter.map((p, i) => (
              <li key={p.tittel} className="glid flex flex-col border-t-2 border-furu-mork pt-5">
                <span aria-hidden="true" className="font-serif text-[1.25rem] text-dempet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.625rem] font-semibold text-furu-mork">{p.tittel}</h3>
                <p className="mt-2 flex-1 text-[1.0625rem]"><MedTall tekst={p.tekst} /></p>
                <Link href={p.href} className="mt-4 self-start lenke">
                  Se det på siden
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Salgsdelen for Lilit Labs: den mørke flaten, som akutt på forsiden. */}
        <section aria-labelledby="lilit-tittel" className="mt-24 rounded-2xl bg-furu-mork px-6 py-14 text-krem sm:px-12">
          <Etikett lys>Lilit Labs</Etikett>
          <h2 id="lilit-tittel" className="mt-3 max-w-3xl text-[2.25rem] font-semibold sm:text-[2.75rem]">
            Vil du ha noe lignende for din klinikk?
          </h2>
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
