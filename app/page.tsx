import Image from "next/image";
import Link from "next/link";
import { behandlinger, behandlingsbilder, bilder, klinikk, sporsmal, team } from "@/lib/klinikk";

const vanlige = behandlinger.filter((b) => b.slug !== "akutt");
const akuttBilde = behandlingsbilder.akutt;
import { ApentNa } from "@/components/ApentNa";
import { Apningstider } from "@/components/Apningstider";
import { Avslutning, Knapper, Portrett } from "@/components/Felles";

const tryggeSvar = [
  {
    s: "Gjør det vondt?",
    svar: "Vi bedøver før alt som kan kjennes, og stopper når du løfter hånda.",
    href: "/tannlegeskrekk",
    lenke: "Slik tar vi vare på deg",
  },
  {
    s: "Hva koster det?",
    svar: "Prisene står åpent. Du får en skriftlig plan med pris før vi begynner.",
    href: "/priser",
    lenke: "Se alle priser",
  },
  {
    s: "Hva skjer første gang?",
    svar: "En prat, en undersøkelse og en plan. Ingen behandling uten at du sier ja.",
    href: "#forste-besok",
    lenke: "Se første besøk",
  },
];

const forsteBesok = [
  { tittel: "Du bestiller", tekst: "På nett eller telefon. Skriv gjerne at du gruer deg, så setter vi av mer tid." },
  { tittel: "Vi tar en prat", tekst: "Før du setter deg i stolen. Du forteller, vi lytter." },
  { tittel: "Undersøkelse", tekst: "Vi ser, forklarer hva vi gjør underveis og tar bilder ved behov." },
  { tittel: "Du får en plan", tekst: "Skriftlig, med pris. Du tar den med hjem og bestemmer selv." },
];

export default function Home() {
  return (
    <>
      {/* Topp */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] xl:grid-cols-[1fr_1.15fr]">
          <div>
            <ApentNa />
            {/* Mindre fra lg, der kolonnen blir smal: da brytes den i to linjer i stedet for tre. */}
            <h1 className="mt-5 max-w-3xl text-[2.5rem] font-semibold text-furu-mork sm:text-[3.5rem] lg:text-[3rem] xl:text-[3.25rem]">
              Tannlege for deg som gruer deg også
            </h1>
            <p className="mt-6 max-w-xl text-[1.1875rem] leading-relaxed">
              Vi forklarer før vi gjør noe, prisene står åpent, og du bestemmer tempoet. I {klinikk.gate} i {klinikk.sted}, med
              parkering rett ved døra.
            </p>
            <div className="mt-8">
              <Knapper />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div
              aria-hidden="true"
              className="svev absolute -right-6 -top-8 h-48 w-48 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-furu-lys"
            />
            <div
              aria-hidden="true"
              className="svev absolute -bottom-8 -left-6 h-36 w-36 rounded-[60%_40%_45%_55%/45%_55%_45%_55%] bg-aprikos-lys"
              style={{ animationDelay: "-4s" }}
            />
            <Image
              src={bilder.resepsjon.src}
              alt={bilder.resepsjon.alt}
              width={bilder.resepsjon.w}
              height={bilder.resepsjon.h}
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              className="relative w-full rounded-[2rem] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tre spørsmål folk egentlig har */}
      <section aria-labelledby="sporsmal-tittel" className="mx-auto max-w-6xl px-4">
        <h2 id="sporsmal-tittel" className="text-[1.125rem] font-bold text-dempet font-sans">
          Det de fleste lurer på
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {tryggeSvar.map((t) => (
            <li key={t.s} className="flex flex-col rounded-3xl border border-linje bg-hvit p-7">
              <h3 className="text-[1.5rem] font-semibold text-furu-mork">{t.s}</h3>
              <p className="mt-3 flex-1">{t.svar}</p>
              <Link href={t.href} className="mt-5 font-bold text-aprikos underline underline-offset-4 hover:no-underline">
                {t.lenke}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Behandlinger */}
      <section aria-labelledby="beh-tittel" className="mx-auto mt-24 max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="beh-tittel" className="text-[2rem] font-semibold text-furu-mork sm:text-[2.5rem]">
              Behandlinger
            </h2>
            <p className="mt-2 max-w-prose text-dempet">
              Hver behandling har sin egen side med pris, tid og svar på om det gjør vondt.
            </p>
          </div>
          <Link href="/behandlinger" className="font-bold text-furu-mork underline underline-offset-4">
            Alle behandlinger
          </Link>
        </div>
        {/* Akutt får egen flate: den som har vondt nå, skal finne det først. */}
        <div className="mt-8 grid overflow-hidden rounded-[2rem] bg-aprikos-lys md:grid-cols-[1fr_1.1fr]">
          <Image
            src={akuttBilde.src}
            alt={akuttBilde.alt}
            width={akuttBilde.w}
            height={akuttBilde.h}
            sizes="(min-width: 768px) 540px, 100vw"
            className="h-full w-full object-cover max-md:aspect-[3/2]"
          />
          <div className="p-7 sm:p-10">
            <h3 className="text-[1.75rem] font-semibold text-furu-mork sm:text-[2rem]">Har du vondt nå?</h3>
            <p className="mt-3 max-w-prose text-[1.125rem]">
              Ring oss før klokka ti, så prøver vi å finne en time samme dag. Målet er at du går herfra med mindre vondt enn du
              kom.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`tel:${klinikk.telefonLenke}`}
                className="rounded-full bg-aprikos px-6 py-3.5 font-bold text-hvit hover:bg-aprikos-mork"
              >
                Ring {klinikk.telefon}
              </a>
              <Link href="/behandlinger/akutt" className="font-bold text-furu-mork underline underline-offset-4">
                Om akutt tannpine
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vanlige.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/behandlinger/${b.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-furu-lys p-7 hover:bg-[#cfe3dc]"
              >
                <span className="font-serif text-[1.5rem] font-semibold text-furu-mork">{b.navn}</span>
                <span className="mt-2 flex-1">{b.ingress}</span>
                <span className="mt-5 flex items-center justify-between font-bold">
                  <span>{b.pris}</span>
                  <span aria-hidden="true" className="text-[1.5rem] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/priser"
              className="group flex h-full flex-col justify-between rounded-3xl bg-furu p-7 text-krem hover:bg-furu-mork"
            >
              <span className="font-serif text-[1.5rem] font-semibold">Alle priser</span>
              <span className="mt-2">Røntgen, tannrens, barn og avbestilling. Alt står åpent.</span>
              <span aria-hidden="true" className="mt-5 text-[1.5rem] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Første besøk */}
      <section id="forste-besok" aria-labelledby="fb-tittel" className="mx-auto mt-24 max-w-6xl scroll-mt-8 px-4">
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="fb-tittel" className="text-[2rem] font-semibold text-furu-mork sm:text-[2.5rem]">
              Slik går første besøk
            </h2>
            <p className="mt-3 max-w-prose text-[1.125rem]">
              Du venter i et rolig rom med lenestoler, ikke på en rad med plaststoler. Så tar vi det i fire steg.
            </p>
          </div>
          <Image
            src={bilder.venterom.src}
            alt={bilder.venterom.alt}
            width={bilder.venterom.w}
            height={bilder.venterom.h}
            sizes="(min-width: 768px) 420px, 100vw"
            className="w-full max-w-md rounded-[2rem] md:justify-self-end"
          />
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {forsteBesok.map((s, i) => (
            <li key={s.tittel} className="relative border-t-4 border-aprikos pt-5">
              <span className="font-serif text-[2.5rem] font-semibold leading-none text-aprikos">{i + 1}</span>
              <h3 className="mt-3 text-[1.375rem] font-semibold">{s.tittel}</h3>
              <p className="mt-2">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Folkene */}
      <section aria-labelledby="team-tittel" className="mx-auto mt-24 max-w-6xl px-4">
        <div className="grid gap-10 rounded-[2rem] bg-hvit p-7 sm:p-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 id="team-tittel" className="text-[2rem] font-semibold text-furu-mork sm:text-[2.5rem]">
              Du møter de samme folka hver gang
            </h2>
            <p className="mt-4 max-w-prose">
              Tre personer, ingen vikarer. Det betyr at vi husker hva du sa sist, og at du slipper å forklare alt på nytt.
            </p>
            <Link
              href="/tannlegene"
              className="mt-6 inline-block font-bold text-aprikos underline underline-offset-4 hover:no-underline"
            >
              Bli kjent med oss
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {team.map((t) => (
              <li key={t.navn}>
                <Portrett t={t} />
                <p className="mt-4 font-serif text-[1.25rem] font-semibold">{t.navn}</p>
                <p className="text-dempet">{t.rolle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vanlige spørsmål og åpningstider */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-[2rem] font-semibold text-furu-mork sm:text-[2.5rem]">Vanlige spørsmål</h2>
          <div className="mt-6 divide-y divide-linje border-y border-linje">
            {sporsmal.map((q) => (
              <details key={q.s} className="group py-2">
                <summary className="flex items-start justify-between gap-4 rounded-lg py-3 text-[1.125rem] font-bold">
                  {q.s}
                  <span aria-hidden="true" className="pil mt-0.5 text-[1.5rem] leading-none text-aprikos transition-transform">
                    +
                  </span>
                </summary>
                <p className="max-w-prose pb-4">{q.svar}</p>
              </details>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold text-furu-mork sm:text-[2.5rem]">Åpningstider</h2>
          <Apningstider />
          <p className="mt-4 max-w-xs text-dempet">
            Akutt tannpine? Ring før klokka ti, så prøver vi å finne en time samme dag.
          </p>
        </div>
      </section>

      <Avslutning />
    </>
  );
}
