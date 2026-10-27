"use client";

import { useSyncExternalStore } from "react";
import { apningstider, klinikk } from "@/lib/klinikk";

// Dag og klokkeslett i norsk tid, uansett hvor besøkeren er. Mandag er 0.
function osloNa() {
  const deler = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Oslo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hent = (t: string) => deler.find((d) => d.type === t)?.value ?? "";
  const dag = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(hent("weekday"));
  return { dag, min: Number(hent("hour")) * 60 + Number(hent("minute")) };
}

// I demoen: dagens stengetid, eller den vanligste stengetiden på dager klinikken har stengt.
function demoStatus() {
  const idag = apningstider[osloNa().dag];
  return `apen|${idag.stenger ?? "18:00"}`;
}

// Viser om klinikken er åpen akkurat nå, ut fra samme åpningstider som resten av siden.
function status() {
  if (klinikk.demoAlltidApen) return demoStatus();
  const { dag, min } = osloNa();
  const idag = apningstider[dag];
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
  // I demoen vises statusen allerede i HTML-en, så ingenting hopper når siden lastes.
  const verdi = useSyncExternalStore(lytt, status, () => (klinikk.demoAlltidApen ? "apen|18:00" : ""));
  if (!verdi) return <span className="inline-block h-[1.6em]" aria-hidden="true" />;
  const [tilstand, stenger] = verdi.split("|");
  // Vises bare når klinikken er åpen. «Stengt nå» som første beskjed virket avvisende.
  if (tilstand !== "apen") return <span className="inline-block h-[1.6em]" aria-hidden="true" />;
  return (
    <span className="inline-flex items-center gap-2 font-bold">
      <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full bg-furu" />
      <span>
        Åpent nå, til <span className="tall">{stenger}</span>
      </span>
    </span>
  );
}
