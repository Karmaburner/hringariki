import { MedTall } from "@/components/MedTall";
import Image from "next/image";
import Link from "next/link";
import { behandlinger, behandlingsbilder, bilder, klinikk, sporsmal, team } from "@/lib/klinikk";
import { ApentNa } from "@/components/ApentNa";
import { BehandlingRader } from "@/components/BehandlingRader";
import { Apningstider } from "@/components/Apningstider";
import { Avslutning, Etikett, Knapper } from "@/components/Felles";

const vanlige = behandlinger.filter((b) => b.slug !== "akutt");
const akuttBilde = behandlingsbilder.akutt;

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
      {/* Topp: overskriften er hovedsaken, bildet får hele bredden under. */}
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <Etikett>{klinikk.slagord}</Etikett>
            <ApentNa />
          </div>
          <h1 className="mt-6 max-w-5xl text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] text-furu-mork sm:text-[4rem] lg:text-[4.5rem]">
            Tannlege for deg som gruer deg også
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-[1.1875rem] leading-relaxed">
              Vi forklarer før vi gjør noe, prisene står åpent, og du bestemmer tempoet. Gratis parkering rett ved døra.
            </p>
            <Knapper />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[88rem] sm:px-4">
          <Image
            src={bilder.resepsjonStor.src}
            alt={bilder.resepsjonStor.alt}
            width={bilder.resepsjonStor.w}
            height={bilder.resepsjonStor.h}
            priority
            sizes="(min-width: 1408px) 1376px, 100vw"
            className="aspect-[4/3] w-full object-cover object-[30%_40%] sm:aspect-[21/9] sm:rounded-2xl sm:object-[50%_30%]"
          />
        </div>
      </section>

      {/* Tre spørsmål folk egentlig har. Åpne kolonner med en tynn linje over, ikke kort. */}
      <section aria-labelledby="sporsmal-tittel" className="mx-auto mt-20 max-w-6xl px-4 sm:mt-24">
        <Etikett som="h2" id="sporsmal-tittel">
          Det de fleste lurer på
        </Etikett>
        <ul className="mt-8 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {tryggeSvar.map((t) => (
            <li key={t.s} className="glid flex flex-col border-t-2 border-furu-mork pt-6">
              <h3 className="text-[1.75rem] font-semibold text-furu-mork sm:text-[2rem]">{t.s}</h3>
              <p className="mt-3 flex-1 text-[1.125rem]">{t.svar}</p>
              <Link href={t.href} className="mt-5 lenke">
                {t.lenke}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Akutt: den eneste mørke flaten over hele bredden, så den som har vondt finner den med en gang. */}
      <section aria-labelledby="akutt-tittel" className="mt-28 bg-furu-mork text-krem">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 md:grid-cols-[1fr_1.1fr]">
          <Image
            src={akuttBilde.src}
            alt={akuttBilde.alt}
            width={akuttBilde.w}
            height={akuttBilde.h}
            sizes="(min-width: 768px) 540px, 100vw"
            className="w-full rounded-2xl"
          />
          <div>
            <Etikett lys>Akutt tannpine</Etikett>
            <h2 id="akutt-tittel" className="mt-3 text-[2.25rem] font-semibold sm:text-[3rem]">
              Har du vondt nå?
            </h2>
            <p className="mt-4 max-w-prose text-[1.125rem]">
              Ring oss før klokka ti, så prøver vi å finne en time samme dag. Målet er at du går herfra med mindre vondt enn du
              kom.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`tel:${klinikk.telefonLenke}`}
                className="rounded-full bg-krem px-6 py-3.5 font-bold text-furu-mork hover:bg-hvit"
              >
                Ring {klinikk.telefon}
              </a>
              <Link
                href="/behandlinger/akutt"
                className="font-bold text-krem underline decoration-aprikos decoration-2 underline-offset-[5px] hover:decoration-krem"
              >
                Om akutt tannpine
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlinger */}
      <section aria-labelledby="beh-tittel" className="mx-auto mt-28 max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Etikett>Behandlinger</Etikett>
            <h2 id="beh-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">
              Hva kan vi hjelpe deg med?
            </h2>
          </div>
          <Link href="/behandlinger" className="lenke">
            Alle behandlinger
          </Link>
        </div>

        {/* Nummererte rader med tynne linjer. Beskrivelsen blir stående, den beroliger. */}
        <div className="mt-12">
          <BehandlingRader liste={vanlige} />
        </div>
        <p className="mt-6">
          <Link href="/priser" className="lenke">
            Se alle priser, også røntgen, tannrens og barn
          </Link>
        </p>
      </section>

      {/* Første besøk */}
      <section id="forste-besok" aria-labelledby="fb-tittel" className="mx-auto mt-28 max-w-6xl scroll-mt-8 px-4">
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Etikett>Første besøk</Etikett>
            <h2 id="fb-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">
              Slik går første besøk
            </h2>
            <p className="mt-4 max-w-prose text-[1.125rem]">
              Du venter i et rolig rom med lenestoler, ikke på en rad med plaststoler. Så tar vi det i fire steg.
            </p>
          </div>
          <Image
            src={bilder.venterom.src}
            alt={bilder.venterom.alt}
            width={bilder.venterom.w}
            height={bilder.venterom.h}
            sizes="(min-width: 768px) 420px, 100vw"
            className="w-full max-w-md rounded-2xl md:justify-self-end"
          />
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {forsteBesok.map((s, i) => (
            <li key={s.tittel} className="glid relative border-t-2 border-furu-mork pt-5">
              <span className="font-serif text-[2.5rem] font-semibold leading-none text-furu">{i + 1}</span>
              <h3 className="mt-3 text-[1.375rem] font-semibold">{s.tittel}</h3>
              <p className="mt-2">{s.tekst}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Folkene: det som skaper mest trygghet, får mest plass. */}
      <section aria-labelledby="team-tittel" className="mx-auto mt-28 max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Etikett>Folkene</Etikett>
            <h2 id="team-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">
              Du møter de samme folka hver gang
            </h2>
          </div>
          <p className="max-w-prose text-[1.125rem]">
            Tre personer, ingen vikarer. Vi husker hva du sa sist, så du slipper å forklare alt på nytt.{" "}
            <Link href="/tannlegene" className="lenke">
              Bli kjent med oss
            </Link>
          </p>
        </div>
        <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {team.map((t) => (
            <li key={t.navn} className="glid">
              <Image
                src={t.hoy}
                alt=""
                width={800}
                height={1000}
                sizes="(min-width: 640px) 360px, 100vw"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                style={{ background: t.farge }}
              />
              <h3 className="mt-5 text-[1.75rem] font-semibold text-furu-mork">{t.navn}</h3>
              <p className="text-dempet">{t.rolle}</p>
              <p className="mt-3 border-l-2 border-aprikos pl-4 font-serif text-[1.25rem] leading-snug">«{t.sitat}»</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Vanlige spørsmål og åpningstider */}
      <section className="mx-auto mt-28 grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Etikett>Spørsmål</Etikett>
          <h2 className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">Vanlige spørsmål</h2>
          <div className="mt-6 divide-y divide-linje border-y border-linje">
            {sporsmal.map((q) => (
              <details key={q.s} className="group py-2">
                <summary className="flex items-start justify-between gap-4 rounded-lg py-3 text-[1.125rem] font-bold">
                  {q.s}
                  <span aria-hidden="true" className="pil mt-0.5 text-[1.5rem] leading-none text-furu transition-transform">
                    +
                  </span>
                </summary>
                <p className="max-w-prose pb-4"><MedTall tekst={q.svar} /></p>
              </details>
            ))}
          </div>
        </div>
        <div>
          <Etikett>Åpent</Etikett>
          <h2 className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[3rem]">Åpningstider</h2>
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
