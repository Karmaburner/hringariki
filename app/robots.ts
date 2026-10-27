import type { MetadataRoute } from "next";
import { klinikk } from "@/lib/klinikk";

export const dynamic = "force-static";

// Demoen er oppdiktet og skal ikke vises i søk. På en ekte klinikkside: allow: "/".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${klinikk.url}/sitemap.xml`,
  };
}
