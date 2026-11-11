// Genera public/og/og-default.jpg (1200x630): logo horizontal centrado sobre el color "paper".
import sharp from "sharp";
import { readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const tokens = await readFile(new URL("public/styles/tokens.css", root), "utf8");
const paper = tokens.match(/--paper:\s*(#[0-9a-fA-F]{6})/)?.[1] ?? "#f7f7f7";

const logo = await sharp(fileURLToPath(new URL("public/brand/logos/horizontal-color.jpg", root)))
  .trim({ threshold: 20 })
  .resize({ width: 900, withoutEnlargement: false })
  .toBuffer();

await mkdir(new URL("public/og/", root), { recursive: true });
await sharp({ create: { width: 1200, height: 630, channels: 3, background: paper } })
  .composite([{ input: logo, gravity: "center", blend: "multiply" }])
  .jpeg({ quality: 88 })
  .toFile(fileURLToPath(new URL("public/og/og-default.jpg", root)));
console.log("og-default.jpg generada");
