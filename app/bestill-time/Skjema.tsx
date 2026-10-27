"use client";

import { useState } from "react";
import { behandlinger } from "@/lib/klinikk";

type Feil = Partial<Record<"navn" | "telefon", string>>;

export function Skjema() {
  const [feil, setFeil] = useState<Feil>({});
  const [sendt, setSendt] = useState(false);

  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nye: Feil = {};
    if (!String(data.get("navn") ?? "").trim()) nye.navn = "Skriv navnet ditt.";
    const tlf = String(data.get("telefon") ?? "").replace(/\s/g, "");
    if (!/^(\+47)?\d{8}$/.test(tlf)) nye.telefon = "Skriv et telefonnummer med åtte siffer.";
    setFeil(nye);
    if (Object.keys(nye).length === 0) setSendt(true);
  }

  if (sendt) {
    return (
      <div role="status" className="rounded-2xl bg-furu-lys p-7 sm:p-10">
        <h2 className="text-[1.75rem] font-semibold text-furu-mork">Takk, vi ringer deg</h2>
        <p className="mt-3 max-w-prose text-[1.125rem]">
          På en ekte side ville klinikken fått beskjed nå, og du ville fått en SMS med tidspunkt. Dette er en demo, så ingenting
          ble sendt.
        </p>
      </div>
    );
  }

  const felt =
    "mt-2 block w-full rounded-xl border-2 border-dempet bg-hvit px-4 py-3 text-[1.0625rem] focus:border-furu";

  return (
    <form onSubmit={send} noValidate className="rounded-2xl bg-hvit p-7 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="navn" className="font-bold">
            Navn
          </label>
          <input
            id="navn"
            name="navn"
            autoComplete="name"
            className={felt}
            aria-invalid={!!feil.navn}
            aria-describedby={feil.navn ? "navn-feil" : undefined}
          />
          {feil.navn && (
            <p id="navn-feil" className="mt-2 font-bold text-aprikos-mork">
              {feil.navn}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="telefon" className="font-bold">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={felt}
            aria-invalid={!!feil.telefon}
            aria-describedby={feil.telefon ? "telefon-feil" : "telefon-hjelp"}
          />
          {feil.telefon ? (
            <p id="telefon-feil" className="mt-2 font-bold text-aprikos-mork">
              {feil.telefon}
            </p>
          ) : (
            <p id="telefon-hjelp" className="mt-2 text-dempet">
              Vi ringer eller sender SMS med forslag til tid.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="behandling" className="font-bold">
          Hva gjelder det?
        </label>
        <select id="behandling" name="behandling" className={felt} defaultValue="undersokelse">
          {behandlinger.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.navn}
            </option>
          ))}
          <option value="vet-ikke">Vet ikke, vil bare snakke med noen</option>
        </select>
      </div>

      <fieldset className="mt-6">
        <legend className="font-bold">Når passer det best?</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["Formiddag", "Ettermiddag", "Samme det"].map((t, i) => (
            <label
              key={t}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-2 border-linje px-4 has-[:checked]:border-furu has-[:checked]:bg-furu-lys"
            >
              <input type="radio" name="tid" value={t} defaultChecked={i === 2} className="h-5 w-5 accent-[#1E5A53]" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-aprikos-lys p-4">
        <input type="checkbox" name="gruer" className="mt-1 h-5 w-5 shrink-0 accent-[#A8461F]" />
        <span>
          <span className="font-bold">Jeg gruer meg</span>
          <span className="block">Da setter vi av lengre tid, og tannlegen vet det før du kommer.</span>
        </span>
      </label>

      <div className="mt-6">
        <label htmlFor="melding" className="font-bold">
          Noe vi bør vite? <span className="font-normal text-dempet">(valgfritt)</span>
        </label>
        <textarea id="melding" name="melding" rows={4} className={felt} />
      </div>

      <button
        type="submit"
        className="mt-8 rounded-full bg-aprikos px-8 py-4 text-[1.125rem] font-bold text-hvit hover:bg-aprikos-mork"
      >
        Send forespørsel
      </button>
    </form>
  );
}
