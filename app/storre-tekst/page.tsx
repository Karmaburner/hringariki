import { MedTall } from "@/components/MedTall";
import type { Metadata } from "next";
import { Etikett, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Større tekst",
  description: "Slik gjør du teksten større på PC, Mac, iPhone og Android.",
};

const hjelp = [
  {
    tittel: "PC",
    steg: ["Hold inne Ctrl og trykk på + for større tekst.", "Ctrl og − gjør den mindre.", "Ctrl og 0 setter den tilbake."],
  },
  {
    tittel: "Mac",
    steg: ["Hold inne Cmd (⌘) og trykk på + for større tekst.", "Cmd og − gjør den mindre.", "Cmd og 0 setter den tilbake."],
  },
  {
    tittel: "iPhone og iPad",
    steg: [
      "I Safari: trykk på aA i adressefeltet og velg den store A-en.",
      "For alle apper: Innstillinger, så Skjerm og lysstyrke, så Tekststørrelse.",
    ],
  },
  {
    tittel: "Android",
    steg: [
      "I Chrome: meny (tre prikker), så Innstillinger, så Tilgjengelighet, så Tekstskalering.",
      "For hele telefonen: Innstillinger, så Skjerm, så Skriftstørrelse.",
    ],
  },
];

export default function StorreTekst() {
  return (
    <>
      <Sti deler={[{ tekst: "Større tekst" }]} />
      <div className="mx-auto max-w-4xl px-4 pt-10">
        <Etikett>Hjelp</Etikett>
        <h1 className="mt-3 text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Slik gjør du teksten større</h1>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Siden er laget for å tåle stor tekst. Velg det som passer for deg, så blir teksten større her og på andre nettsider.
        </p>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {hjelp.map((h) => (
            <li key={h.tittel} className="border-t-2 border-furu-mork pt-5">
              <h2 className="text-[1.75rem] font-semibold text-furu-mork">{h.tittel}</h2>
              <ul className="mt-3 space-y-2 text-[1.125rem]">
                {h.steg.map((s) => (
                  <li key={s}><MedTall tekst={s} /></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
