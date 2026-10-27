import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { behandlinger, behandlingsbilder, klinikk } from "@/lib/klinikk";
import { Avslutning, Knapper, Sti } from "@/components/Felles";

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
  const andre =behandlinger.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <>
      <Sti deler={[{ href: "/behandlinger", tekst: "Behandlinger" }, { tekst: b.navn }]} />
      <article className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="text-[2.5rem] font-semibold text-furu-mork sm:text-[3.25rem]">{b.navn}</h1>
            <p className="mt-4 max-w-2xl text-[1.1875rem] leading-relaxed">{b.ingress}</p>

            <dl className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-hvit p-5">
                <dt className="text-dempet">Pris</dt>
                <dd className="mt-1 font-serif text-[1.75rem] font-semibold">{b.pris}</dd>
              </div>
              <div className="rounded-2xl bg-hvit p-5">
                <dt className="text-dempet">Tid</dt>
                <dd className="mt-1 font-serif text-[1.375rem] font-semibold">{b.varighet}</dd>
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
              sizes="(min-width: 1024px) 460px, 100vw"
              className="w-full max-w-[460px] rounded-[2rem] lg:justify-self-end"
            />
          )}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="text-[1.875rem] font-semibold text-furu-mork">Gjør det vondt?</h2>
            <p className="mt-3 max-w-prose rounded-2xl border-l-4 border-aprikos bg-aprikos-lys p-5 text-[1.125rem]">
              {b.vondt}
            </p>
          </section>
          <section>
            <h2 className="text-[1.875rem] font-semibold text-furu-mork">Slik foregår det</h2>
            <ol className="mt-4 space-y-4">
              {b.steg.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-furu font-bold text-hvit">
                    {i + 1}
                  </span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 text-[1.375rem] font-semibold">Etterpå</h3>
            <p className="mt-2 max-w-prose">{b.etterpa}</p>
          </section>
        </div>

        <div className="mt-12">
          <Knapper />
        </div>

        <section className="mt-20">
          <h2 className="text-[1.5rem] font-semibold">Andre behandlinger</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {andre.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/behandlinger/${a.slug}`}
                  className="inline-block rounded-full border border-furu px-5 py-2.5 font-bold text-furu-mork hover:bg-furu-lys"
                >
                  {a.navn}
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
