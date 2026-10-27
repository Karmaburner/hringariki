import type { Metadata } from "next";
import Image from "next/image";
import { bilder, klinikk } from "@/lib/klinikk";
import { Apningstider } from "@/components/Apningstider";
import { ApentNa } from "@/components/ApentNa";
import { Knapper, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Kontakt og åpningstider",
  description: `${klinikk.gate}, ${klinikk.sted}. Telefon ${klinikk.telefon}. Åpningstider, parkering og adkomst.`,
};

export default function Kontakt() {
  return (
    <>
      <Sti deler={[{ tekst: "Kontakt" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Kontakt og åpningstider</h1>
        <div className="mt-4">
          <ApentNa />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="rounded-[2rem] bg-hvit p-7 sm:p-10">
            <h2 className="text-[1.75rem] font-semibold">Her finner du oss</h2>
            <address className="mt-3 text-[1.125rem] not-italic">
              {klinikk.navn}
              <br />
              {klinikk.gate}
              <br />
              {klinikk.postnr} {klinikk.sted}
            </address>
            <h3 className="mt-6 text-[1.25rem] font-semibold">Parkering</h3>
            <p className="mt-1 max-w-prose">{klinikk.parkering}</p>
            <h3 className="mt-6 text-[1.25rem] font-semibold">Adkomst</h3>
            <p className="mt-1 max-w-prose">{klinikk.adkomst}</p>
            <Image
              src={bilder.gang.src}
              alt={bilder.gang.alt}
              width={bilder.gang.w}
              height={bilder.gang.h}
              sizes="367px"
              className="mt-4 w-full max-w-[367px] rounded-2xl"
            />
            <h3 className="mt-6 text-[1.25rem] font-semibold">Telefon og e-post</h3>
            <p className="mt-1">
              <a href={`tel:${klinikk.telefonLenke}`} className="font-bold underline underline-offset-4">
                {klinikk.telefon}
              </a>
              <br />
              <a href={`mailto:${klinikk.epost}`} className="underline underline-offset-4">
                {klinikk.epost}
              </a>
            </p>
          </section>

          <section className="rounded-[2rem] bg-furu-lys p-7 sm:p-10">
            <h2 className="text-[1.75rem] font-semibold text-furu-mork">Åpningstider</h2>
            <Apningstider />
            <p className="mt-6 max-w-prose">
              Akutt tannpine? Ring før klokka ti, så prøver vi å finne en time samme dag.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Knapper />
        </div>
      </div>
    </>
  );
}
