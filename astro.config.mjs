import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  srcDir: "./app",
  // TODO: confirmar dominio. Se puede definir con la variable SITE_URL al construir.
  site: process.env.SITE_URL ?? "https://draedithnoriega.com.ar",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  server: { host: true }
});
