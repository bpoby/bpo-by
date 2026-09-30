import type { MetadataRoute } from "next";
import { pages } from "@/data/pages";
import { canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ url: canonical(page.path), changeFrequency: page.path === "/" ? "daily" : "monthly", priority: page.path === "/" ? 1 : 0.8 }));
}
