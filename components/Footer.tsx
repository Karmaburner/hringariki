import Link from "next/link";
import { klinikk, kortApningstider } from "@/lib/klinikk";
import { meny } from "./Header";

export function Footer() {
  return (
    <footer className="mt-28 bg-furu-mork text-krem">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-[1.5rem] font-semibold">{klinikk.navn}</h2>
          <address className="mt-3 not-italic leading-relaxed">
            {klinikk.gate}
            <br />
            {klinikk.postnr} {klinikk.sted}
          </address>
          <p className="mt-3">
            <a href={`tel:${klinikk.telefonLenke}`} className="font-bold underline underline-offset-4">
              {klinikk.telefon}
            </a>
            <br />
            <a href={`mailto:${klinikk.epost}`} className="underline underline-offset-4">
              {klinikk.epost}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-semibold">Åpningstider</h2>
          {/* Kortversjon. Hele tabellen står på forsiden og kontaktsiden. */}
          <dl className="mt-3 space-y-1">
            {kortApningstider().map((g) => (
              <div key={g.dager} className="flex justify-between gap-6 max-w-xs">
                <dt>{g.dager}</dt>
                <dd className={g.tid === "Stengt" ? "font-bold" : "tall"}>{g.tid}</dd>
              </div>
            ))}
          </dl>
          <Link href="/kontakt" className="mt-3 inline-block py-1 underline underline-offset-4 hover:no-underline">
            Adresse og parkering
          </Link>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-semibold">Sider</h2>
          <ul className="mt-3 space-y-1">
            {[...meny, { href: "/bestill-time", tekst: "Bestill time" }, { href: "/storre-tekst", tekst: "Større tekst" }].map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="inline-block py-1 underline underline-offset-4 hover:no-underline">
                  {m.tekst}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-furu">
        <p className="mx-auto max-w-6xl px-4 py-5 text-base">
          Demo. Navn, personer, priser og adresse er oppdiktet. Nettside av:{" "}
          <a href="https://lilitlabs.com" className="font-bold underline underline-offset-4">
            Lilit Labs
          </a>
        </p>
      </div>
    </footer>
  );
}
