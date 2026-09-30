export const siteUrl = process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001");
export const companyName = "BPO.BY";

export function canonical(path: string) {
  return new URL(path, siteUrl).toString();
}
