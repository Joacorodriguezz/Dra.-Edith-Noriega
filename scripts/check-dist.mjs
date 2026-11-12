// Chequeo del sitio construido: recorre dist/**/index.html y verifica SEO, JSON-LD, WhatsApp y textos.
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const errores = [];
const fallo = (pagina, msg) => errores.push(`[${pagina}] ${msg}`);

async function* walk(dir) {
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    if ((await stat(p)).isDirectory()) yield* walk(p);
    else yield p;
  }
}

const prohibidos = ["A validar", "A confirmar", "prototipo", "Foto pendiente", "Mostrar marcas de revisión"];

// Textos que tienen que aparecer en una página concreta
const requeridos = {
  "/": ["Más de 20 años en ortodoncia", "¿El láser reemplaza otros tratamientos?"],
  "/tratamientos/ortodoncia/": ["¿Molesta usar brackets o alineadores?"],
  "/tratamientos/atm/": [
    "Pueden aparecer molestias al abrir o cerrar la boca",
    "Dolor relacionado con un nervio, como el trigémino"
  ]
};

const rutasEsperadas = [
  "/", "/tratamientos/", "/tratamientos/odontologia-general/", "/tratamientos/ortodoncia/", "/tratamientos/laser/",
  "/tratamientos/atm/", "/tratamientos/ortodoncia-quirurgica/", "/la-doctora/", "/casos/", "/primera-consulta/", "/contacto/"
];
const vistas = new Set();

// Fase 2: páginas con FAQPage y páginas con "Cómo llegar" a las dos sedes
const conFaq = new Set(["/", "/tratamientos/ortodoncia/", "/primera-consulta/"]);
const conComoLlegar = new Set(["/", "/contacto/"]);
const MAPS = "https://www.google.com/maps/search/?api=1&query=";
const sedesMapa = [
  { id: "la-plata", texto: "Calle 49 n.º 390, entre 2 y 3, La Plata" },
  { id: "quilmes", texto: "Hipólito Yrigoyen 439, Quilmes" }
];

function nodos(json) {
  const v = JSON.parse(json);
  return Array.isArray(v["@graph"]) ? v["@graph"] : [v];
}

const decodificar = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");

for await (const file of walk(dist)) {
  if (!file.endsWith("index.html")) continue;
  const ruta = "/" + relative(dist, file).split(sep).join("/").replace(/index\.html$/, "");
  vistas.add(ruta);
  const html = await readFile(file, "utf8");

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fallo(ruta, `tiene ${h1} <h1> (debe haber uno)`);
  if (!/<title>[^<]+<\/title>/.test(html)) fallo(ruta, "falta <title>");
  const desc = html.match(/<meta name="description" content="([^"]*)"/);
  if (!desc) fallo(ruta, "falta meta description");
  else {
    const n = [...decodificar(desc[1])].length;
    if (n < 140 || n > 160) fallo(ruta, `meta description de ${n} caracteres (debe estar entre 140 y 160)`);
  }
  if (!/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html)) fallo(ruta, "falta canonical");
  if (!/<meta property="og:image" content="https?:\/\/[^"]+"/.test(html)) fallo(ruta, "falta og:image");

  const bloques = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (bloques.length === 0) fallo(ruta, "no hay JSON-LD");
  const tipos = [];
  for (const [, json] of bloques) {
    try {
      for (const n of nodos(json)) tipos.push(n);
    } catch (e) {
      fallo(ruta, `JSON-LD inválido: ${e.message}`);
    }
  }

  // FAQPage: exactamente una y bien formada en inicio, ortodoncia y primera consulta; ninguna en el resto
  const faqs = tipos.filter((n) => n["@type"] === "FAQPage");
  if (conFaq.has(ruta)) {
    if (faqs.length !== 1) fallo(ruta, `tiene ${faqs.length} FAQPage (debe haber una)`);
    else {
      const q = faqs[0].mainEntity ?? [];
      if (!q.length || !q.every((x) => x["@type"] === "Question" && x.name && x.acceptedAnswer?.text && !/</.test(x.acceptedAnswer.text)))
        fallo(ruta, "FAQPage mal formada (preguntas sin respuesta en texto plano)");
    }
  } else if (faqs.length) fallo(ruta, "tiene FAQPage y no debería");

  // Cómo llegar
  const mapas = [...html.matchAll(/<a[^>]*data-como-llegar[^>]*>/g)].map((m) => m[0]);
  if (conComoLlegar.has(ruta)) {
    for (const sede of sedesMapa) {
      const a = mapas.find((x) => x.includes(`data-sede="${sede.id}"`));
      const href = a && decodificar(a.match(/href="([^"]*)"/)?.[1] ?? "");
      const esperado = MAPS + encodeURIComponent(sede.texto + ", Buenos Aires");
      if (!a) fallo(ruta, `falta "Cómo llegar" de ${sede.id}`);
      else if (href !== esperado) fallo(ruta, `"Cómo llegar" de ${sede.id} apunta a ${href}`);
    }
  }
  // Odontograma: selector de pieza para el celular
  if (ruta === "/tratamientos/odontologia-general/" && !/<select[^>]*data-odo-select/.test(html)) fallo(ruta, "falta el selector de pieza del odontograma");
  // Testimonios: <details> con el testimonio completo
  if ((ruta === "/" || ruta === "/casos/") && (html.match(/Leer el testimonio completo/g) ?? []).length !== 6) fallo(ruta, "faltan los <details> de los testimonios");

  for (const [, href] of html.matchAll(/href="(https:\/\/wa\.me\/[^"]*)"/g)) {
    const url = decodificar(href);
    if (!/\?text=[^&]+/.test(url)) fallo(ruta, `link a WhatsApp sin ?text=: ${url}`);
  }

  for (const t of prohibidos) if (html.includes(t)) fallo(ruta, `aparece el texto prohibido "${t}"`);
  for (const t of requeridos[ruta] ?? []) if (!html.includes(t)) fallo(ruta, `falta el texto "${t}"`);
}

for (const r of rutasEsperadas) if (!vistas.has(r)) fallo(r, "no existe en dist/");
try {
  await stat(join(dist, "404.html"));
} catch {
  fallo("/404", "falta dist/404.html");
}

if (errores.length) {
  console.error(`check-dist: ${errores.length} problema(s)`);
  for (const e of errores) console.error(" - " + e);
  process.exit(1);
}
console.log(`check-dist: OK (${vistas.size} páginas revisadas)`);
