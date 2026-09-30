import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyPageView } from "@/components/legacy-page";
import { pages } from "@/data/pages";
import { canonical } from "@/lib/site";

type PageProps = { params: Promise<{ slug?: string[] }> };

function pathFor(slug: string[] = []) {
  return slug.length ? `/${slug.join("/")}` : "/";
}

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path === "/" ? [] : page.path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pagePath = pathFor((await params).slug);
  const page = pages.find((item) => item.path === pagePath);
  if (!page) return {};
  const title = page.path === "/" ? "Аутсорсинг работников в Минске - Услуги по предоставлению персонала" : page.tvs.titl || page.longTitle || page.title;
  const description = page.path === "/"
    ? "Аутсорсинг персонала в Минске. ➤ ✅ Лидеры в сфере аутсорсинга в РБ. ✅ Опытные специалисты! ✅ Большой опыт работы!"
    : page.tvs.desc || page.description || page.introtext || "Надёжный партнёр во всех бизнес-процессах организации";
  const url = canonical(page.path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "BPO.BY", locale: "ru_RU", type: "website" },
    robots: page.tvs.noIndex?.includes("noindex") ? { index: false, follow: false } : undefined,
  };
}

export default async function Page({ params }: PageProps) {
  const route = pathFor((await params).slug);
  const page = pages.find((item) => item.path === route);
  if (!page) notFound();
  return <LegacyPageView page={page} />;
}
