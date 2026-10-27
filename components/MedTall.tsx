// Setter tall i løpende tekst i Fraunces, så nullen ikke får Atkinson-streken
// («500 kr» leste nesten som overstrøket). Resten av teksten står som før.
export function MedTall({ tekst }: { tekst: string }) {
  const deler = tekst.split(/(\d[\d ]*\d|\d)/);
  return (
    <>
      {deler.map((d, i) =>
        i % 2 === 1 ? (
          <span key={i} className="tall-tekst">
            {d}
          </span>
        ) : (
          d
        )
      )}
    </>
  );
}
