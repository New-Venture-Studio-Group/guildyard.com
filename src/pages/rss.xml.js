import rss from "@astrojs/rss";
import { getArticles, readingTime } from "../lib/journal";

export async function GET(context) {
  const articles = await getArticles();
  return rss({
    title: "The Guildyard Journal",
    description:
      "Original articles and field notes about building, testing, and operating practical business ventures.",
    site: context.site,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.lede,
      pubDate: entry.data.date,
      link: `/journal/${entry.id}/`,
      categories: [entry.data.category, entry.data.kind]
    })),
    customData: "<language>en</language>"
  });
}
