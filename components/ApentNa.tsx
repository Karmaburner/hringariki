"use client";

import { useSyncExternalStore } from "react";
import { apningstider } from "@/lib/klinikk";

// Viser om klinikken er åpen akkurat nå, ut fra samme åpningstider som resten av siden.
function status() {
  const na = new Date();
  // getDay(): 0 er søndag. Lista starter på mandag.
  const idag = apningstider[(na.getDay() + 6) % 7];
  const min = na.getHours() * 60 + na.getMinutes();
  const tilMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));
  if (idag.apner && idag.stenger && min >= tilMin(idag.apner) && min < tilMin(idag.stenger)) {
    return `apen|${idag.stenger}`;
  }
  return "stengt|";
}

function lytt(endret: () => void) {
  const id = setInterval(endret, 60_000);
  return () => clearInterval(id);
}

export function ApentNa() {
  const verdi = useSyncExternalStore(lytt, status, () => "");
  if (!verdi) return <span className="inline-block h-[1.6em]" aria-hidden="true" />;
  const [tilstand, stenger] = verdi.split("|");
  const apen = tilstand === "apen";
  return (
    <span className="inline-flex items-center gap-2 font-bold">
      <span
        aria-hidden="true"
        className={`inline-block h-3 w-3 rounded-full ${apen ? "bg-furu" : "bg-dempet"}`}
      />
      {apen ? (
        <span>
          Åpent nå, til <span className="tall">{stenger}</span>
        </span>
      ) : (
        "Stengt nå. Bestill time på nett"
      )}
    </span>
  );
}
