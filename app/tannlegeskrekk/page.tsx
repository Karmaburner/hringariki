import type { Metadata } from "next";
import Image from "next/image";
import { bilder, klinikk } from "@/lib/klinikk";
import { Avslutning, Sti } from "@/components/Felles";

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
        <h1 className="max-w-3xl text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">
          Gruer du deg? Da er du i godt selskap
        </h1>
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-prose space-y-4 text-[1.125rem]">
            <p>
              Mange voksne utsetter tannlegen i årevis fordi de gruer seg. Noen har hatt en vond opplevelse, andre skammer seg
              over tennene. Begge deler er vanlig, og ingen av delene er noe vi dømmer.
            </p>
            <p>
              Det første vi gjør, er å snakke. Ingen behandling, bare en prat om hva du gruer deg til og hva som gjør det
              lettere.
            </p>
          </div>
          <Image
            src={bilder.venterom.src}
            alt={bilder.venterom.alt}
            width={bilder.venterom.w}
            height={bilder.venterom.h}
            priority
            sizes="(min-width: 1024px) 427px, 100vw"
            className="w-full max-w-[427px] rounded-[2rem]"
          />
        </div>

        <h2 className="mt-16 text-[2rem] font-semibold text-furu-mork">Dette gjør vi for å gjøre det enklere</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grep.map((g) => (
            <li key={g.tittel} className="rounded-3xl bg-hvit p-7">
              <h3 className="text-[1.375rem] font-semibold">{g.tittel}</h3>
              <p className="mt-2">{g.tekst}</p>
            </li>
          ))}
        </ul>

        <section className="mt-16 max-w-3xl rounded-3xl bg-furu-lys p-7 sm:p-10">
          <h2 className="text-[1.75rem] font-semibold text-furu-mork">Si det når du bestiller</h2>
          <p className="mt-3 max-w-prose text-[1.125rem]">
            Kryss av for «Jeg gruer meg» når du bestiller på nett, eller si det på telefon. Da vet vi det før du kommer, og du
            slipper å ta det opp selv i resepsjonen.
          </p>
        </section>
      </div>
      <Avslutning />
    </>
  );
}
