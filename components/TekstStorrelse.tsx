"use client";

import { useSyncExternalStore } from "react";

const valg = [
  { verdi: "", navn: "Vanlig tekst", visning: "A", storrelse: "text-[0.9375rem]" },
  { verdi: "stor", navn: "Stor tekst", visning: "A", storrelse: "text-[1.125rem]" },
  { verdi: "storst", navn: "Største tekst", visning: "A", storrelse: "text-[1.375rem]" },
];

function les() {
  return document.documentElement.dataset.tekst ?? "";
}

function lytt(endret: () => void) {
  const obs = new MutationObserver(endret);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-tekst"] });
  return () => obs.disconnect();
}

function velg(verdi: string) {
  const rot = document.documentElement;
  if (verdi) rot.setAttribute("data-tekst", verdi);
  else rot.removeAttribute("data-tekst");
  try {
    if (verdi) localStorage.setItem("tekst", verdi);
    else localStorage.removeItem("tekst");
  } catch {}
}

export function TekstStorrelse() {
  const aktiv = useSyncExternalStore(lytt, les, () => "");

  return (
    <div role="group" aria-label="Tekststørrelse" className="flex items-end gap-1">
      {valg.map((v) => (
        <button
          key={v.navn}
          type="button"
          onClick={() => velg(v.verdi)}
          aria-pressed={aktiv === v.verdi}
          aria-label={v.navn}
          title={v.navn}
          className={`grid h-11 w-11 place-items-center rounded-lg border font-bold leading-none ${v.storrelse} ${
            aktiv === v.verdi
              ? "border-furu bg-furu text-hvit"
              : "border-linje bg-hvit text-blekk hover:border-furu"
          }`}
        >
          {v.visning}
        </button>
      ))}
    </div>
  );
}
