export const siteUrl = (process.env.SITE_URL || "https://bpo.by").replace(/\/$/, "");
export const companyName = "BPO.BY";

export function canonical(path: string) {
  return new URL(path, siteUrl).toString();
}
