import type { Metadata } from "next";
import Image from "next/image";
import { bilder, klinikk } from "@/lib/klinikk";
import { Apningstider } from "@/components/Apningstider";
import { ApentNa } from "@/components/ApentNa";
import { Etikett, Knapper, SideTopp, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Kontakt og åpningstider",
  description: `${klinikk.gate}, ${klinikk.sted}. Telefon ${klinikk.telefon}. Åpningstider, parkering og adkomst.`,
};

export default function Kontakt() {
  return (
    <>
      <Sti deler={[{ tekst: "Kontakt" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <SideTopp etikett="Kontakt" tittel="Kontakt og åpningstider" />
        <div className="mt-5">
          <ApentNa />
        </div>
        <div className="mt-8">
          <Knapper />
        </div>

        {/* To åpne kolonner med linje over, ikke bokser. */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <section aria-labelledby="finn-tittel" className="border-t-2 border-furu-mork pt-8">
            <Etikett>Adresse</Etikett>
            <h2 id="finn-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
              Her finner du oss
            </h2>
            <address className="mt-5 font-serif text-[1.5rem] leading-snug not-italic">
              {klinikk.gate}
              <br />
              {klinikk.postnr} {klinikk.sted}
            </address>
            <dl className="mt-8 space-y-6 text-[1.0625rem]">
              <div>
                <dt className="font-bold">Parkering</dt>
                <dd className="mt-1 max-w-prose">{klinikk.parkering}</dd>
              </div>
              <div>
                <dt className="font-bold">Adkomst</dt>
                <dd className="mt-1 max-w-prose">{klinikk.adkomst}</dd>
              </div>
              <div>
                <dt className="font-bold">Telefon og e-post</dt>
                <dd className="mt-1">
                  <a href={`tel:${klinikk.telefonLenke}`} className="lenke">
                    {klinikk.telefon}
                  </a>
                  <br />
                  <a href={`mailto:${klinikk.epost}`} className="lenke font-normal">
                    {klinikk.epost}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="tider-tittel" className="border-t-2 border-furu-mork pt-8">
            <Etikett>Åpent</Etikett>
            <h2 id="tider-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
              Åpningstider
            </h2>
            <div className="mt-2">
              <Apningstider />
            </div>
            <p className="mt-6 max-w-prose text-[1.0625rem]">
              Akutt tannpine? Ring før klokka ti, så prøver vi å finne en time samme dag.
            </p>
          </section>
        </div>

        <Image
          src={bilder.gang.src}
          alt={bilder.gang.alt}
          width={bilder.gang.w}
          height={bilder.gang.h}
          sizes="(min-width: 640px) 367px, 100vw"
          className="mt-16 w-full max-w-[367px] rounded-2xl"
        />
      </div>
    </>
  );
}
