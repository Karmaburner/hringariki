import type { Metadata } from "next";
import Link from "next/link";
import { behandlinger } from "@/lib/klinikk";
import { Avslutning, SideTopp, Sti } from "@/components/Felles";
import { BehandlingRader } from "@/components/BehandlingRader";

export const metadata: Metadata = {
  title: "Behandlinger",
  description: "Undersøkelse, fylling, akutt tannpine, rotfylling, tannbleking og implantat. Pris, tid og svar på om det gjør vondt.",
};

export default function Behandlinger() {
  return (
    <>
      <Sti deler={[{ tekst: "Behandlinger" }]} />
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <SideTopp etikett="Behandlinger" tittel="Hva kan vi hjelpe deg med?">
          <p>Velg en behandling for å se hvordan den foregår, hva den koster og om den gjør vondt.</p>
        </SideTopp>
        <div className="mt-14">
          <BehandlingRader liste={behandlinger} />
        </div>
        <p className="mt-6">
          <Link href="/priser" className="lenke">
            Se alle priser, også røntgen, tannrens og barn
          </Link>
        </p>
      </div>
      <Avslutning />
    </>
  );
}
