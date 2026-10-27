import Link from "next/link";
import { klinikk } from "@/lib/klinikk";

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

// Liten etikett over overskrifter: store bokstaver med luft mellom. 15 px og fet, så den er lett å lese.
export function Etikett({
  children,
  som: Tag = "p",
  id,
  lys = false,
}: {
  children: React.ReactNode;
  som?: "p" | "h2";
  id?: string;
  lys?: boolean;
}) {
  return (
    <Tag
      id={id}
      className={`font-sans text-[0.9375rem] font-bold uppercase leading-snug tracking-[0.14em] ${lys ? "text-furu-lys" : "text-furu"}`}
    >
      {children}
    </Tag>
  );
}

// Toppen på undersidene: etikett, stor overskrift og ingress, samme stil som forsiden.
export function SideTopp({
  etikett,
  tittel,
  children,
}: {
  etikett: string;
  tittel: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <Etikett>{etikett}</Etikett>
      <h1 className="mt-3 max-w-4xl text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.02em] text-furu-mork sm:text-[3.5rem]">
        {tittel}
      </h1>
      {children && <div className="mt-6 max-w-prose space-y-4 text-[1.1875rem] leading-relaxed">{children}</div>}
    </div>
  );
}

// Seksjonsoverskrift med etikett over, brukt på undersidene.
export function Seksjon({ etikett, tittel, id }: { etikett: string; tittel: string; id?: string }) {
  return (
    <div>
      <Etikett>{etikett}</Etikett>
      <h2 id={id} className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
        {tittel}
      </h2>
    </div>
  );
}

export function Avslutning() {
  return (
    // Åpen avslutning med en linje over, ikke en farget boks rett over den mørke bunnen.
    <section className="mx-auto mt-28 max-w-6xl px-4">
      <div className="grid gap-8 border-t-2 border-furu-mork pt-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Etikett>Neste steg</Etikett>
          <h2 className="mt-3 max-w-2xl text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">
            Første steg er bare en prat
          </h2>
        </div>
        <div>
          <p className="max-w-prose text-[1.125rem]">
            Bestill en undersøkelse, eller ring og spør om det du lurer på. Du forplikter deg ikke til noe.
          </p>
          <div className="mt-6">
            <Knapper />
          </div>
        </div>
      </div>
    </section>
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
