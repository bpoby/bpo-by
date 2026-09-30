import sourcePages from "@/data/pages.json";

export type LegacyPage = {
  id: number;
  path: string;
  parentId: number;
  title: string;
  longTitle: string;
  description: string;
  introtext: string;
  content: string;
  templateId: number;
  tvs: Record<string, string>;
  kind: "home" | "service-index" | "services" | "clients" | "city" | "content";
};

function kindFor(path: string): LegacyPage["kind"] {
  if (path === "/") return "home";
  if (path === "/uslugi") return "service-index";
  if (path === "/klienty") return "clients";
  if (path === "/kontakty" || path.startsWith("/kontakty/")) return "city";
  if (path.startsWith("/uslugi/") && path.split("/").filter(Boolean).length === 2) return "services";
  return "content";
}

const typedPages = sourcePages as unknown as Array<Omit<LegacyPage, "kind">>;

const databasePages: LegacyPage[] = typedPages.map((page) => ({
  ...page,
  kind: kindFor(page.path),
}));

const currentSitemapPages: LegacyPage[] = [
  { id: 1001, path: "/uslugi/autsorsing-personala", parentId: 3, title: "Аутсорсинг персонала", longTitle: "Аутсорсинг персонала в Минске - Стоимость услуги аутсорсинга персонала", description: "Услуги по предоставлению необходимого внештатного персонала.", introtext: "Выполняем следующие виды услуг по аутсорсингу: персонал на производство, складской и логистический персонал, вспомогательный персонал.", content: "", templateId: 0, tvs: { desc: "Услуги по предоставлению необходимого внештатного персонала.", icon: "/images/services/outsourse.jpg" }, kind: "services" },
  { id: 1002, path: "/uslugi/provedenie-inventarizacii", parentId: 3, title: "Проведение инвентаризации", longTitle: "Проведение инвентаризации", description: "Профессиональное проведение инвентаризации имущества и товарных запасов.", introtext: "", content: "", templateId: 0, tvs: {}, kind: "services" },
  { id: 1003, path: "/uslugi/inventarizaciya-tovarno-materialnyh-cennostej", parentId: 3, title: "Инвентаризация товарно-материальных ценностей", longTitle: "Инвентаризация товарно-материальных ценностей", description: "Инвентаризация товарно-материальных ценностей.", introtext: "", content: "", templateId: 0, tvs: {}, kind: "services" },
];

export const pages: LegacyPage[] = [...databasePages, ...currentSitemapPages];

export const servicePages = pages.filter((page) => page.kind === "services" && page.path !== "/uslugi/inventarizaciya-osnovnyh-fondov-imushhestva");
export const clientPages = pages.filter((page) => page.path.startsWith("/klienty/") && page.kind === "content");
const databaseContactPage = pages.find((page) => page.path === "/kontakty");
export const contactPage: LegacyPage | undefined = databaseContactPage ? {
  ...databaseContactPage,
  tvs: { ...databaseContactPage.tvs, tel: "+375 29 707 39 79", tel2: "+375 33 633 38 38" },
} : undefined;

export function multiTv(page: LegacyPage | undefined, name: string): Record<string, string>[] {
  const value = page?.tvs[name];
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as { fieldValue?: Record<string, string>[] };
    return parsed.fieldValue ?? [];
  } catch {
    return [];
  }
}
