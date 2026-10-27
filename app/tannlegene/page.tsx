import { MedTall } from "@/components/MedTall";
import type { Metadata } from "next";
import Image from "next/image";
import { bilder, team } from "@/lib/klinikk";
import { Avslutning, Etikett, SideTopp, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Tannlegene",
  description: "Møt de tre som jobber hos oss. Du møter de samme folka hver gang.",
};

export default function Tannlegene() {
  return (
    <>
      <Sti deler={[{ tekst: "Tannlegene" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr]">
          <SideTopp etikett="Folkene" tittel="Folka på Hringariki">
            <p>Vi er tre, og det er oss du møter hver gang. Her kan du se hvem vi er før du kommer.</p>
          </SideTopp>
          <Image
            src={bilder.teamet.src}
            alt={bilder.teamet.alt}
            width={bilder.teamet.w}
            height={bilder.teamet.h}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full max-w-[601px] rounded-2xl lg:justify-self-end"
          />
        </div>

        {/* Én rad per person med stort portrett, adskilt med tynne linjer. */}
        <ul className="mt-20 border-b border-linje">
          {team.map((t) => (
            <li key={t.navn} className="glid grid gap-8 border-t border-linje py-12 sm:grid-cols-[16rem_1fr] sm:gap-12">
              <Image
                src={t.hoy}
                alt=""
                width={800}
                height={1000}
                sizes="(min-width: 640px) 256px, 100vw"
                className="aspect-[4/5] w-full max-w-[16rem] rounded-2xl object-cover"
                style={{ background: t.farge }}
              />
              <div>
                <Etikett>{t.rolle}</Etikett>
                <h2 className="mt-2 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">{t.navn}</h2>
                <p className="mt-1 text-dempet"><MedTall tekst={t.utdannet} /></p>
                <p className="mt-5 max-w-prose text-[1.125rem]">{t.om}</p>
                <p className="mt-6 max-w-prose border-l-2 border-aprikos pl-5 font-serif text-[1.375rem] leading-snug">
                  «{t.sitat}»
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-prose text-dempet">
          Bildene i demoen er laget med KI. På en ekte side bruker vi bilder av de ansatte. Folk vil se hvem de møter.
        </p>
      </div>
      <Avslutning />
    </>
  );
}
