import type { Metadata } from "next";
import { klinikk } from "@/lib/klinikk";
import { Sti } from "@/components/Felles";
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
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Bestill time</h1>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Fyll inn, så ringer vi deg innen neste arbeidsdag. Har du vondt nå, er det raskere å ringe{" "}
          <a href={`tel:${klinikk.telefonLenke}`} className="font-bold underline underline-offset-4">
            {klinikk.telefon}
          </a>
          .
        </p>
        <div className="mt-10">
          <Skjema />
        </div>
        <p className="mt-6 max-w-prose text-dempet">
          En ekte klinikk kobler ofte dette til journalsystemet sitt, for eksempel Opus Dental, så du kan velge ledig tid selv.
        </p>
      </div>
    </>
  );
}
