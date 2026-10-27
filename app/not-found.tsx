import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-[2.5rem] font-semibold text-furu-mork">Fant ikke siden</h1>
      <p className="mt-4 text-[1.125rem]">Adressen kan være skrevet feil, eller siden er flyttet.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-aprikos px-6 py-3.5 font-bold text-hvit">
        Til forsiden
      </Link>
    </div>
  );
}
