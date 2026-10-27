import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bilder, klinikk } from "@/lib/klinikk";
import { Avslutning, Seksjon, SideTopp, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Tannlegeskrekk",
  description: `Gruer du deg til tannlegen? Slik gjør vi det enklere hos ${klinikk.navn}: lengre timer, avtalt stopptegn og ingen overraskelser.`,
};

const grep = [
  {
    tittel: "Lengre time første gang",
    tekst: "Vi setter av dobbelt så lang tid. Ingen stress. Vi tar oss tid til å bli kjent før vi ser i munnen.",
  },
  {
    tittel: "Du får et stopptegn",
    tekst: "Løft hånda, så stopper vi. Med en gang, uten å spørre hvorfor.",
  },
  {
    tittel: "Vi forteller før vi gjør",
    tekst: "Du vet alltid hva som skjer nå og hva som kommer etterpå. Vil du heller slippe å vite, sier du det.",
  },
  {
    tittel: "Bedøvende gel før stikket",
    tekst: "Tannkjøttet bedøves med gel før vi setter bedøvelse, så stikket kjennes mindre.",
  },
  {
    tittel: "Hodetelefoner og pledd",
    tekst: "Ta med egen musikk, eller lån våre. Det er pledd i stolen hvis du fryser.",
  },
  {
    tittel: "Beroligende ved behov",
    tekst: "For noen hjelper en tablett før timen. Det avtaler vi på forhånd, og da trenger du følge hjem.",
  },
];

export default function Tannlegeskrekk() {
  return (
    <>
      <Sti deler={[{ tekst: "Tannlegeskrekk" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SideTopp etikett="Tannlegeskrekk" tittel="Gruer du deg? Da er du i godt selskap">
            <p>
              Mange voksne utsetter tannlegen i årevis fordi de gruer seg. Noen har hatt en vond opplevelse, andre skammer seg
              over tennene. Begge deler er vanlig, og ingen av delene er noe vi dømmer.
            </p>
            <p>
              Det første vi gjør, er å snakke. Ingen behandling, bare en prat om hva du gruer deg til og hva som gjør det
              lettere.
            </p>
          </SideTopp>
          <Image
            src={bilder.venterom.src}
            alt={bilder.venterom.alt}
            width={bilder.venterom.w}
            height={bilder.venterom.h}
            priority
            sizes="(min-width: 1024px) 427px, 100vw"
            className="w-full max-w-[427px] rounded-2xl lg:justify-self-end"
          />
        </div>

        <section aria-labelledby="grep-tittel" className="mt-24">
          <Seksjon etikett="Seks ting vi gjør" tittel="Dette gjør det enklere" id="grep-tittel" />
          <ol className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {grep.map((g, i) => (
              <li key={g.tittel} className="glid border-t-2 border-furu-mork pt-5">
                <span aria-hidden="true" className="font-serif text-[1.25rem] text-dempet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.625rem] font-semibold text-furu-mork">{g.tittel}</h3>
                <p className="mt-2 text-[1.0625rem]">{g.tekst}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Lys aprikos brukes bare der det handler om å grue seg. */}
        <section aria-labelledby="si-det-tittel" className="mt-24 rounded-2xl bg-aprikos-lys px-6 py-12 sm:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 id="si-det-tittel" className="text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
              Si det når du bestiller
            </h2>
            <div>
              <p className="max-w-prose text-[1.125rem]">
                Kryss av for «Jeg gruer meg» når du bestiller på nett, eller si det på telefon. Da vet vi det før du kommer, og du
                slipper å ta det opp selv i resepsjonen.
              </p>
              <p className="mt-4">
                <Link href="/bestill-time" className="lenke">
                  Bestill time
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Avslutning />
    </>
  );
}
