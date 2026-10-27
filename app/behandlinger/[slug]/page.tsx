import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { behandlinger, behandlingsbilder, klinikk } from "@/lib/klinikk";
import { Avslutning, Etikett, Knapper, SideTopp, Sti } from "@/components/Felles";

export function generateStaticParams() {
  return behandlinger.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/behandlinger/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const b = behandlinger.find((x) => x.slug === slug);
  if (!b) return {};
  return {
    title: `${b.navn} i ${klinikk.sted}`,
    description: `${b.ingress} Pris ${b.pris}.`,
  };
}

export default async function Behandling({ params }: PageProps<"/behandlinger/[slug]">) {
  const { slug } = await params;
  const b = behandlinger.find((x) => x.slug === slug);
  if (!b) notFound();
  const bilde = behandlingsbilder[b.slug];
  const andre = behandlinger.filter((x) => x.slug !== b.slug);

  return (
    <>
      <Sti deler={[{ href: "/behandlinger", tekst: "Behandlinger" }, { tekst: b.navn }]} />
      <article className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SideTopp etikett="Behandling" tittel={b.navn}>
              <p>{b.ingress}</p>
            </SideTopp>
            {/* Pris og tid som to åpne kolonner med linje over, ikke bokser. */}
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-8">
              <div className="border-t-2 border-furu-mork pt-4">
                <dt>
                  <Etikett>Pris</Etikett>
                </dt>
                <dd className="tall mt-2 text-[1.75rem]">{b.pris}</dd>
              </div>
              <div className="border-t-2 border-furu-mork pt-4">
                <dt>
                  <Etikett>Tid</Etikett>
                </dt>
                <dd className="mt-2 font-serif text-[1.375rem] font-semibold leading-snug">{b.varighet}</dd>
              </div>
            </dl>
          </div>
          {bilde && (
            <Image
              src={bilde.src}
              alt={bilde.alt}
              width={bilde.w}
              height={bilde.h}
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="w-full max-w-[480px] rounded-2xl lg:justify-self-end"
            />
          )}
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          {/* Det viktigste spørsmålet får et stort, rolig svar. */}
          <section aria-labelledby="vondt-tittel">
            <Etikett>Det mange lurer på</Etikett>
            <h2 id="vondt-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
              Gjør det vondt?
            </h2>
            <p className="mt-6 max-w-prose border-l-2 border-aprikos pl-6 font-serif text-[1.375rem] leading-snug sm:text-[1.5rem]">
              {b.vondt}
            </p>
            <p className="mt-6">
              <Link href="/tannlegeskrekk" className="lenke">
                Gruer du deg? Slik tar vi vare på deg
              </Link>
            </p>
          </section>
          <section aria-labelledby="steg-tittel">
            <Etikett>Steg for steg</Etikett>
            <h2 id="steg-tittel" className="mt-3 text-[2.25rem] font-semibold text-furu-mork sm:text-[2.75rem]">
              Slik foregår det
            </h2>
            <ol className="mt-6 border-b border-linje">
              {b.steg.map((s, i) => (
                <li key={s} className="flex gap-5 border-t border-linje py-4">
                  <span aria-hidden="true" className="font-serif text-[1.25rem] font-semibold text-furu">
                    {i + 1}
                  </span>
                  <span className="text-[1.0625rem]">{s}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 text-[1.5rem] font-semibold text-furu-mork">Etterpå</h3>
            <p className="mt-2 max-w-prose text-[1.0625rem]">{b.etterpa}</p>
          </section>
        </div>

        <div className="mt-14">
          <Knapper />
        </div>

        <section aria-labelledby="andre-tittel" className="mt-24">
          <Etikett som="h2" id="andre-tittel">
            Andre behandlinger
          </Etikett>
          <ul className="mt-4 border-b border-linje">
            {andre.map((a) => (
              <li key={a.slug} className="border-t border-linje">
                <Link
                  href={`/behandlinger/${a.slug}`}
                  className="group flex items-baseline justify-between gap-6 rounded-lg py-4"
                >
                  <span className="font-serif text-[1.375rem] font-semibold text-furu-mork group-hover:underline group-hover:underline-offset-[6px]">
                    {a.navn}
                  </span>
                  <span className="tall flex items-center gap-4 whitespace-nowrap">
                    {a.pris}
                    <span aria-hidden="true" className="font-sans text-[1.25rem] text-aprikos transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <Avslutning />
    </>
  );
}
