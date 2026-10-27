import { apningstider } from "@/lib/klinikk";

export function Apningstider({ mork = false }: { mork?: boolean }) {
  return (
    <table className="mt-3 w-full max-w-xs border-collapse">
      <caption className="sr-only">Åpningstider</caption>
      <tbody>
        {apningstider.map((d) => (
          <tr key={d.dag} className={`border-b ${mork ? "border-furu" : "border-linje"}`}>
            <th scope="row" className="py-1.5 pr-4 text-left font-normal">
              {d.dag}
            </th>
            <td className="py-1.5 text-right font-bold tabular-nums">
              {d.apner ? `${d.apner} til ${d.stenger}` : "Stengt"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
