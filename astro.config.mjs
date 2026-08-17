import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/* The per-article route is injected rather than living at
   src/pages/journal/[...slug].astro. Reason: the design tool that authored this
   export cannot write square brackets in filenames. This is documented,
   supported Astro and behaves identically. If you prefer the conventional file,
   move src/routes/JournalArticle.astro to src/pages/journal/[...slug].astro,
   fix its three relative imports, and delete this integration. */
const journalRoutes = {
  name: "guildyard-journal-routes",
  hooks: {
    "astro:config:setup": ({ injectRoute }) => {
      injectRoute({
        pattern: "/journal/[...slug]",
        entrypoint: "./src/routes/JournalArticle.astro"
      });
    }
  }
};

export default defineConfig({
  site: "https://guildyard.com",
  trailingSlash: "always",
  integrations: [sitemap(), journalRoutes],
  build: { format: "directory" }
});
