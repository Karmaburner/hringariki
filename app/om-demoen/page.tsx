import { MedTall } from "@/components/MedTall";
import type { Metadata } from "next";
import Link from "next/link";
import { Etikett, Seksjon, SideTopp, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Om demoen",
  description: "Hva Lilit Labs kan lage for en tannklinikk, og hvorfor siden er bygd slik den er.",
};

// Skrevet ut fra hva klinikken får, ikke hvordan det er bygd. Ingen løfter om plassering i Google.
const punkter = [
  {
    tittel: "Flere tør å ta kontakt",
    tekst:
      "Toppen av forsiden svarer på det engstelige pasienter lurer på før de bestiller: gjør det vondt, hva koster det og hva skjer første gang.",
    href: "/",
  },
  {
    tittel: "Svar før de ringer",
    tekst:
      "Hver behandling har sin egen side med pris, tid og hvordan den foregår. Pasienten får svarene selv, og den som søker etter en bestemt behandling, lander på riktig side.",
    href: "/behandlinger/rotfylling",
  },
  {
    tittel: "Et sted for dem som gruer seg",
    tekst:
      "Mange klinikker er gode med engstelige pasienter, men sier det bare i en bisetning. Her har det en egen side med konkrete grep.",
    href: "/tannlegeskrekk",
  },
  {
    tittel: "Riktige åpningstider overalt",
    tekst:
      "Tidene skrives inn ett sted og vises likt på alle sider og i opplysningene søkemotorene leser. Pasienten får ikke tre ulike svar.",
    href: "/kontakt",
  },
  {
    tittel: "Åpent nå",
    tekst:
      "Siden viser om klinikken er åpen akkurat nå, ut fra de samme tidene. I demoen står den alltid som åpen, så du ser hvordan det ser ut.",
    href: "/kontakt",
  },
  {
    tittel: "Klinikken vet det på forhånd",
    tekst:
      "Med ett kryss for «Jeg gruer meg» slipper pasienten å si det høyt i resepsjonen. Bestillingen kan kobles til journalsystemet, for eksempel Opus Dental, så pasienten velger ledig tid selv.",
    href: "/bestill-time",
  },
  {
    tittel: "Lett å lese, også for eldre",
    tekst:
      "Tydelig skrift, god kontrast og tastaturstøtte. Siden er sjekket med stor tekst og 200 % zoom, og en egen side forklarer hvordan man gjør teksten større.",
    href: "/storre-tekst",
  },
  {
    tittel: "Laget for telefonen",
    tekst:
      "De fleste leter etter tannlege på mobilen. Siden er bygd for mobil først, og knappene for å ringe og bestille ligger alltid nederst på skjermen.",
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
