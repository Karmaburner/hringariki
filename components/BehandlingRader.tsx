import Link from "next/link";
import type { Behandling } from "@/lib/klinikk";

// Nummererte rader med tynne linjer. Brukes på forsiden og på siden med alle behandlinger.
export function BehandlingRader({ liste }: { liste: Behandling[] }) {
  return (
    <ol className="border-b border-linje">
      {liste.map((b, i) => (
        <li key={b.slug} className="glid border-t border-linje">
          <Link
            href={`/behandlinger/${b.slug}`}
            className="group grid gap-x-8 gap-y-2 rounded-lg py-7 md:grid-cols-[3.5rem_minmax(0,14rem)_minmax(0,1fr)_auto] md:items-baseline"
          >
            <span aria-hidden="true" className="font-serif text-[1.25rem] text-dempet">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-[1.75rem] font-semibold leading-tight text-furu-mork group-hover:underline group-hover:underline-offset-[6px] sm:text-[2rem]">
              {b.navn}
            </span>
            <span className="max-w-prose text-[1.0625rem]">{b.ingress}</span>
            <span className="tall flex items-center gap-4 text-[1.125rem] whitespace-nowrap">
              {b.pris}
              <span aria-hidden="true" className="font-sans text-[1.5rem] text-aprikos transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
