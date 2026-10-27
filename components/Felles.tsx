import Image from "next/image";
import Link from "next/link";
import { klinikk, type Tannlege } from "@/lib/klinikk";

export function Knapper({ lys = false }: { lys?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/bestill-time"
        className="rounded-full bg-aprikos px-6 py-3.5 text-[1.0625rem] font-bold text-hvit hover:bg-aprikos-mork"
      >
        Bestill time
      </Link>
      <a
        href={`tel:${klinikk.telefonLenke}`}
        className={`rounded-full border-2 px-6 py-3 text-[1.0625rem] font-bold ${
          lys ? "border-krem text-krem hover:bg-furu" : "border-furu text-furu-mork hover:bg-furu-lys"
        }`}
      >
        Ring {klinikk.telefon}
      </a>
    </div>
  );
}

export function Avslutning() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-4">
      <div className="rounded-[2rem] bg-furu px-6 py-12 text-krem sm:px-12">
        <h2 className="max-w-2xl text-[2rem] font-semibold sm:text-[2.5rem]">
          Første steg er bare en prat
        </h2>
        <p className="mt-4 max-w-prose text-[1.125rem]">
          Bestill en undersøkelse, eller ring og spør om det du lurer på. Du forplikter deg ikke til noe.
        </p>
        <div className="mt-8">
          <Knapper lys />
        </div>
      </div>
    </section>
  );
}

export function Portrett({ t, stor = false }: { t: Tannlege; stor?: boolean }) {
  // Navnet står rett ved siden av, så bildet får tom alt-tekst.
  const px = stor ? 160 : 128;
  return (
    <Image
      src={t.portrett}
      alt=""
      width={px}
      height={px}
      className={`rounded-[40%_60%_55%_45%/50%_45%_55%_50%] object-cover ${stor ? "h-40 w-40" : "h-32 w-32"}`}
      style={{ background: t.farge }}
    />
  );
}

export function Sti({ deler }: { deler: { href?: string; tekst: string }[] }) {
  return (
    <nav aria-label="Brødsmuler" className="mx-auto max-w-6xl px-4 pt-6">
      <ol className="flex flex-wrap gap-2 text-base text-dempet">
        <li>
          <Link href="/" className="underline underline-offset-4">
            Forside
          </Link>
        </li>
        {deler.map((d) => (
          <li key={d.tekst} className="flex gap-2">
            <span aria-hidden="true">/</span>
            {d.href ? (
              <Link href={d.href} className="underline underline-offset-4">
                {d.tekst}
              </Link>
            ) : (
              <span aria-current="page">{d.tekst}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
