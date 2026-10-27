import type { MetadataRoute } from "next";
import { behandlinger, klinikk } from "@/lib/klinikk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const sider = ["", "/behandlinger", "/tannlegeskrekk", "/priser", "/tannlegene", "/kontakt", "/bestill-time", "/om-demoen"];
  return [
    ...sider.map((s) => ({ url: `${klinikk.url}${s}/`, lastModified: new Date() })),
    ...behandlinger.map((b) => ({ url: `${klinikk.url}/behandlinger/${b.slug}/`, lastModified: new Date() })),
  ];
}
