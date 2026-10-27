import type { Metadata } from "next";
import Image from "next/image";
import { bilder, team } from "@/lib/klinikk";
import { Avslutning, Portrett, Sti } from "@/components/Felles";

export const metadata: Metadata = {
  title: "Tannlegene",
  description: "Møt de tre som jobber hos oss. Du møter de samme folka hver gang.",
};

export default function Tannlegene() {
  return (
    <>
      <Sti deler={[{ tekst: "Tannlegene" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">Folka på Hringariki</h1>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Vi er tre, og det er oss du møter hver gang. Her kan du se hvem vi er før du kommer.
        </p>
        <Image
          src={bilder.teamet.src}
          alt={bilder.teamet.alt}
          width={bilder.teamet.w}
          height={bilder.teamet.h}
          priority
          sizes="(min-width: 640px) 600px, 100vw"
          className="mt-10 w-full max-w-[601px] rounded-[2rem]"
        />
        <ul className="mt-12 space-y-6">
          {team.map((t) => (
            <li key={t.navn} className="grid gap-6 rounded-[2rem] bg-hvit p-7 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
              <Portrett t={t} stor />
              <div>
                <h2 className="text-[2rem] font-semibold text-furu-mork">{t.navn}</h2>
                <p className="mt-1 font-bold">{t.rolle}</p>
                <p className="text-dempet">{t.utdannet}</p>
                <p className="mt-4 max-w-prose text-[1.125rem]">{t.om}</p>
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
