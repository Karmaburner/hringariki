import Link from "next/link";

export function DemoStripe() {
  return (
    <div className="bg-furu-mork text-krem">
      <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-base leading-snug">
        Dette er en demo laget av Lilit Labs. Klinikken finnes ikke.{" "}
        <Link
          href="/om-demoen"
          className="font-bold underline underline-offset-4 hover:no-underline"
        >
          Se hva siden viser
        </Link>
      </p>
    </div>
  );
}
