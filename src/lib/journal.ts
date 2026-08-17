import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"journal">;

export const CATEGORIES = [
  "Venture building",
  "Market evidence",
  "Operating systems",
  "Brand architecture",
  "Decision making"
] as const;

/** Published articles, newest first. Drafts are excluded everywhere. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection("journal", ({ data }) => data.draft !== true);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** "16 August 2026" — the house date format. */
export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** ISO day, used in the archive and in <time datetime>. */
export function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Frontmatter wins; otherwise 200 words per minute, minimum 1. */
export function readingTime(entry: Article): string {
  if (entry.data.readingTime) return entry.data.readingTime;
  const words = entry.body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  if (!words) return "";
  return Math.max(1, Math.round(words / 200)) + " min read";
}

export function hasBody(entry: Article): boolean {
  return (entry.body?.trim().length ?? 0) > 0;
}
