import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* The Journal. `date` is a published fact: it comes from the article, never from
   a template or a rebuild. Never regenerate, shift or backdate it. */
const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    kind: z.enum(["Essay", "Field note"]),
    category: z.enum([
      "Venture building",
      "Market evidence",
      "Operating systems",
      "Brand architecture",
      "Decision making"
    ]),
    date: z.coerce.date(),
    /* Omit and it is computed from the body at 200 words per minute. */
    readingTime: z.string().optional(),
    /* true keeps a piece out of listings, the archive, RSS and the sitemap. */
    draft: z.boolean().default(false)
  })
});

export const collections = { journal };
