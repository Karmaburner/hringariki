import type { Metadata } from "next";
import { klinikk } from "@/lib/klinikk";
import { SideTopp, Sti } from "@/components/Felles";
import { Skjema } from "./Skjema";

export const metadata: Metadata = {
  title: "Bestill time",
  description: "Bestill time på nett. Si fra om du gruer deg, så setter vi av lengre tid.",
};

export default function BestillTime() {
  return (
    <>
      <Sti deler={[{ tekst: "Bestill time" }]} />
      <div className="mx-auto max-w-3xl px-4 pt-10">
        <SideTopp etikett="Bestill time" tittel="Vi ringer deg tilbake">
          <p>
            Fyll inn, så ringer vi deg innen neste arbeidsdag. Har du vondt nå, er det raskere å ringe{" "}
            <a href={`tel:${klinikk.telefonLenke}`} className="lenke">
              {klinikk.telefon}
            </a>
            .
          </p>
        </SideTopp>
        <p role="note" className="mt-10 max-w-prose border-l-2 border-furu pl-5 text-[1.0625rem]">
          <strong>Dette er et demoskjema.</strong> Ingenting sendes eller lagres. Ikke skriv inn ekte navn, telefonnummer eller
          helseopplysninger.
        </p>
        <div className="mt-8">
          <Skjema />
        </div>
      </div>
    </>
  );
}
