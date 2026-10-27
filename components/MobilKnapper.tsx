"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { klinikk } from "@/lib/klinikk";

// Fast knapperad nederst på mobil. Kommer først etter toppen, så den ikke dobler knappene der.
const GRENSE = 520;

function lytt(endret: () => void) {
  window.addEventListener("scroll", endret, { passive: true });
  return () => window.removeEventListener("scroll", endret);
}

export function MobilKnapper() {
  const synlig = useSyncExternalStore(lytt, () => window.scrollY > GRENSE, () => false);
  const sti = usePathname();
  // På bestillingssiden er skjemaet selve handlingen.
  if (sti?.startsWith("/bestill-time")) return null;

  return (
    <div
      inert={!synlig}
      aria-hidden={!synlig}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-linje bg-krem/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 lg:hidden ${
        synlig ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={`tel:${klinikk.telefonLenke}`}
          className="flex-1 rounded-full border-2 border-furu py-3 text-center font-bold text-furu-mork"
        >
          Ring
        </a>
        <Link
          href="/bestill-time"
          className="flex-1 rounded-full bg-aprikos py-3.5 text-center font-bold text-hvit hover:bg-aprikos-mork"
        >
          Bestill time
        </Link>
      </div>
    </div>
  );
}
