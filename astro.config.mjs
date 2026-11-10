import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  srcDir: "./app",
  server: { host: true }
});
