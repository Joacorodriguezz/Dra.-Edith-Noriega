# Plan: sitio de la Dra. Edith Noriega como código real

Estado actual: `app/pages/index.astro` inyecta la maqueta `Dra. Edith Noriega.html` (SPA con
ruteo por hash, todo renderizado con `innerHTML`) y después la "parchea" buscando textos en el
DOM. Objetivo: reemplazarlo por páginas Astro estáticas, componentes del design system y datos
separados del código, sin perder funciones y con SEO local.

La maqueta queda en el repo **solo como referencia**; al terminar la Fase 1 ya no se importa
desde ningún lado.

## Fuentes de verdad (leer antes de escribir)

| Qué | Dónde |
| --- | --- |
| Guía de marca, voz, reglas de uso | `design-system/README.md`, `design-system/components/*/README.md` |
| Tokens y estilos de componentes `en-*` | `public/styles/tokens.css`, `public/styles/design-system.css` |
| Estilos completos del prototipo (`.creds`, `.needs`, `.bento`, `.steps`, `.faq`, `.tx`, `.odo`, `.atm`, `.lanes`, `.journey`, `.checklist`, `.sheet`, `.mobilebar`, `.topbar`, etc.) | el `<style>` del `<head>` de `Dra. Edith Noriega.html` |
| Contenido y lógica del prototipo (datos `AREAS`, `NEEDS`, `TL`, `OX`, `LAPPS`, `PARTS`, `QX`, `JS`, `CHECK`, FAQs, textos de cada página) | script de la maqueta. Copia legible sin base64: `docs/referencia/prototipo.js` |
| Correcciones ya publicadas (textos nuevos, casos con fotos, testimonios, formación simplificada, formulario a WhatsApp, logo) | `app/pages/index.astro` actual: **esas decisiones ganan sobre la maqueta** |

## Decisiones tomadas (no re-decidir)

- **Stack:** Astro 5 estático, `srcDir: ./app`, sin frameworks de UI. La interactividad va en un
  `<script>` dentro de cada componente (Astro lo empaqueta y lo carga una vez); nada de render
  global con `innerHTML`. El HTML inicial de cada explorador sale renderizado del servidor
  con su estado por defecto; el script solo cambia clases, atributos y el texto de la tarjeta.
- **Estilos:** `tokens.css` + `design-system.css` cargados en el layout. Los estilos propios del
  sitio (los del prototipo que no están en el DS) van a `app/styles/site.css`, copiados tal cual
  de la maqueta y depurados de lo que ya no se usa (`.flag`, `.toggle`, `.net`, `.chips` de
  casos, mapas `.ph`). Los estilos de un solo componente pueden ir en el `<style>` del
  componente. Nunca hexadecimales nuevos: siempre `var(--token)`.
- **Tema:** solo claro (como hoy).
- **Marcas "A validar" (`F()` en el prototipo):** se conserva el contenido y se quita la
  marca. Excepción: los textos que **en sí mismos** son un pendiente (obras sociales, costo de
  la primera consulta, duración de la primera consulta, matrícula, "si habrá turnos en línea")
  no se publican. Todo lo que tenía marca se lista en `docs/pendientes.md` para que la Dra. lo
  valide (afirmación + página donde aparece).
- **"Más de 20 años en ortodoncia":** se publica así (tenía "Confirmar 20 o 25"; 20 es la cota
  segura).
- **Posturología:** no se muestra en ninguna página (igual que hoy).
- **Conocimiento:** se elimina la página y su entrada del menú (hoy quedan 2 tarjetas). Se
  anota en pendientes.
- **Mapa de relaciones entre áreas (`netSVG`):** no se porta (ya estaba quitado).
- **Dominio:** desconocido. `astro.config.mjs` usa `site: process.env.SITE_URL ?? "https://draedithnoriega.com.ar"`
  con un comentario `TODO: confirmar dominio`. Se anota en pendientes.
- **WhatsApp:** un solo número, `5492213185753` (`+54 9 221 318-5753`), para las dos sedes.
- **Imágenes:** las fotos que hoy están en `public/cases/` y `public/testimonios/`, y el retrato
  (hoy un WebP en base64 dentro de la maqueta: extraerlo a archivo), se mueven a
  `app/assets/{casos,testimonios,retrato}/` y se sirven con `<Image>`/`<Picture>` de
  `astro:assets` (WebP/AVIF, `widths`/`sizes` responsivos, `loading="lazy"` salvo el retrato del
  hero). `public/brand/` queda como está.
- **Logo de la barra:** se mantiene el recorte actual de `dental-icon.jpeg` + wordmark en texto
  (clase `.brand-mark` de `index.astro`). Los SVG del logo están pendientes.
- **Medición:** función `track(evento, props)` sin proveedor atado: llama a `window.plausible`
  o a `window.gtag` si existen y, si no, no hace nada. El snippet de Plausible se incluye solo si
  hay `PUBLIC_PLAUSIBLE_DOMAIN` en el entorno. No se agregan cookies ni banner.

## Estructura de archivos

```
app/
  layouts/Base.astro          <html lang="es">, <head> (SEO), topbar, NavBar, <slot/>, Footer, MobileBar, menú móvil
  components/
    seo/Seo.astro             title, description, canonical, Open Graph/Twitter, JSON-LD que recibe por props
    nav/NavBar.astro, nav/MobileMenu.astro, nav/MobileBar.astro, nav/Footer.astro, nav/Breadcrumbs.astro
    ui/Button.astro, ui/Badge.astro, ui/SectionHeader.astro, ui/IconChip.astro, ui/PullQuote.astro,
       ui/Faq.astro, ui/Steps.astro, ui/PageHead.astro, ui/Cta.astro, ui/NextNav.astro, ui/Shapes.astro
    home/Hero.astro, home/Creds.astro, home/NeedsGuide.astro, home/ServicesBento.astro,
       home/CaseStories.astro, home/TrainingTimeline.astro
    tratamientos/AreaExplorer.astro (pestañas por área / por necesidad de /tratamientos)
    explorers/Odontogram.astro, explorers/OrthoExplorer.astro, explorers/LaserExplorer.astro,
       explorers/AtmExplorer.astro, explorers/SurgeryLanes.astro, explorers/FirstVisitJourney.astro,
       explorers/Checklist.astro
    casos/CaseCard.astro (etapas + ampliar en <dialog>), casos/VoiceCarousel.astro
    contacto/SedeCard.astro, contacto/WhatsAppForm.astro
  data/
    site.ts        nombre, WhatsApp, email, redes, SITE_URL
    sedes.ts       las dos sedes: id, nombre, dirección, referencia, días y horarios (estructurados), link a Maps
    areas.ts       AREAS (+ slug, metaDescription, lead, facts, faqs, steps de cada página)
    needs.ts, cases.ts, testimonios.ts, formacion.ts, faqs.ts, explorers.ts (TT, OX, LAPPS, PARTS, QX, JS, CHECK)
  lib/
    whatsapp.ts    waLink({ origen, area?, sede?, nombre?, motivo? }) → https://wa.me/...?text=...
    track.ts       track(evento, props)
    schema.ts      constructores de JSON-LD
  pages/
    index.astro
    tratamientos/index.astro
    tratamientos/[slug].astro   (5 áreas, getStaticPaths desde areas.ts)
    la-doctora.astro, casos.astro, primera-consulta.astro, contacto.astro
    404.astro
  styles/site.css
```

Rutas finales: `/`, `/tratamientos/`, `/tratamientos/odontologia-general/`,
`/tratamientos/ortodoncia/`, `/tratamientos/laser/`, `/tratamientos/atm/`,
`/tratamientos/ortodoncia-quirurgica/`, `/la-doctora/`, `/casos/`, `/primera-consulta/`,
`/contacto/`. Menú: Tratamientos · La doctora · Casos · Primera consulta · Contacto.

---

## Fase 1 — Prioridad alta

### 1.1 Migración a páginas reales

Cada página reproduce el contenido de su función del prototipo **con las correcciones de
`index.astro` aplicadas**:

| Página | Prototipo | Correcciones que aplican |
| --- | --- | --- |
| `/` | `pInicio()` | `replaceCopy()` (titular "Ortodoncia y atención odontológica en La Plata y Quilmes.", bajada nueva, "Formación y experiencia en ortodoncia"), `enhanceHomeStories()` (carrusel de historias en lugar de las tarjetas con "Foto pendiente"), `addPatientVoice()` después de las historias. Sin la tarjeta de Posturología del bento. |
| `/tratamientos/` | `pTratamientos()` | sin `netSVG`. Pestañas "Por área / Por necesidad" y panel por área como islas. |
| `/tratamientos/<area>/` | `pGeneral`, `pOrto`, `pLaser`, `pATM`, `pQX` | contenido completo (ver la regla de marcas). Cada una con su explorador, pasos, FAQ, CTA y "Área anterior / siguiente". |
| `/la-doctora/` | `pDoctora()` | `simplifyTraining()` (lista de formación + "Actualmente cursa…"), sin las tarjetas "soon", sin selector línea de tiempo/lista. |
| `/casos/` | `pCasos()` | `simplifyCases()` completo: grilla de `case-card` con etapas y ampliación en `<dialog>`, nota de autorización, carrusel de testimonios a continuación. Sin filtros ni comparador. |
| `/primera-consulta/` | `pPrimera()` | sin la FAQ de duración/costo (pendientes); queda "¿Puedo consultar sin saber qué tratamiento necesito?". El checklist guarda en `localStorage` (como hoy, con try/catch). |
| `/contacto/` | `pContacto()` | `simplifyContact()` (sin mapas, formulario que arma el WhatsApp) + 1.3. |

Cierre de la migración:
- **Links viejos con hash:** en `/` un script inline mínimo que, si `location.hash` coincide con
  una ruta del prototipo (`#ortodoncia`, `#casos`, `#la-doctora`, `#contacto`, …), hace
  `location.replace()` a la ruta nueva. `#necesidades` sigue siendo un ancla real del inicio.
- **Menú móvil:** el `.sheet` del prototipo como `<dialog>` (`showModal()`, Escape y foco los
  maneja el navegador), con las mismas secciones (navegación, Tratamientos, botón de turno).
- **Navegación:** `aria-current="page"` en el ítem activo (calculado en el servidor con `Astro.url`).
  Las áreas marcan "Tratamientos".
- `app/pages/index.astro` deja de leer la maqueta. Se borra toda la capa de parches.
- `404.astro` con link al inicio y botón de WhatsApp.

### 1.2 SEO local

- `Seo.astro` en cada página: `<title>` ("<Página> · Dra. Edith Noriega, ortodoncista en La
  Plata y Quilmes"; el inicio "Dra. Edith Noriega · Ortodoncista en La Plata y Quilmes"),
  `meta description` propia de 140–160 caracteres escrita con la voz del DS, `link rel=canonical`,
  Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:locale=es_AR`, `og:image`)
  y `twitter:card=summary_large_image`.
- **Imagen OG:** `public/og/og-default.jpg` de 1200×630 generada en el build con `sharp` (ya viene
  con Astro) a partir del logo horizontal `public/brand/logos/horizontal-color.jpg` centrado sobre
  `paper`. Script `scripts/og.mjs` + `"prebuild": "node scripts/og.mjs"` en `package.json`.
- **JSON-LD** (`lib/schema.ts`):
  - En todas las páginas: un `@graph` con un `Person` (la Dra., `jobTitle` "Odontóloga
    especialista en ortodoncia", `sameAs` Instagram y Facebook) y dos `Dentist`, uno por sede, con
    `name`, `address` (`PostalAddress`, `addressLocality` La Plata / Quilmes,
    `addressRegion` Buenos Aires, `addressCountry` AR), `telephone`, `url`,
    `openingHoursSpecification` desde `sedes.ts` y `employee`/`founder` → la `Person`.
  - Áreas: `MedicalWebPage` con `about` → `MedicalTherapy` del área (`name`).
  - Todas menos el inicio: `BreadcrumbList`.
- `@astrojs/sitemap` (`npx astro add sitemap`, sin la 404) y `public/robots.txt` con la URL del
  sitemap.
- Un solo `<h1>` por página. Encabezados en orden.

### 1.3 WhatsApp con mensaje armado según el contexto

- `waLink()` arma textos cortos en voseo, por ejemplo:
  `Hola, quiero pedir un turno para consultar por ortodoncia.` /
  `Hola, quiero pedir un turno en el consultorio de Quilmes.` /
  formulario: `Hola, soy {nombre}. Quiero consultar por {área}. Consultorio preferido: {sede}. Motivo: {motivo}`.
  Sin área, "una consulta general". Sin sede, no se menciona.
- **Todos** los "Pedí tu turno" (barra, hero, barra móvil, menú, CTA de cada área, sedes, 404)
  abren WhatsApp directo (`target="_blank" rel="noopener"`) con el texto del contexto:
  en un área lleva el área; en una tarjeta de sede, la sede.
- "Dejar una consulta" / "Consultar por esta área" / "Consultar por este tema" llevan a
  `/contacto/?area=<id>#form-sec`; el formulario lee `?area=` y preselecciona.
- **Formulario de contacto:** queda nombre (obligatorio), área (opcional), sede (radio), motivo
  (opcional) y el botón "Continuar por WhatsApp". Se eliminan el campo de WhatsApp, la casilla de
  consentimiento, el aviso de la Ley 25.326 y el honeypot: no se guarda ningún dato. En su lugar,
  un texto chico: "Se abre WhatsApp con tu mensaje para que lo revises antes de enviarlo."
  Error de nombre vacío con `en-field--error`, `aria-invalid` y foco, como pide el DS.
- Se mantienen "Copiar número" (con toast) y el número siempre visible como texto.

### 1.4 Medición de clics

- `track()` en `lib/track.ts`. Delegación de eventos en el layout: cualquier `a[href^="https://wa.me/"]`
  dispara `track("whatsapp_click", { origen, area, sede, pagina })`, leyendo
  `data-origen`/`data-area`/`data-sede` del link (los pone `waLink`/`Button`). Envío del formulario:
  `track("whatsapp_form")`. Copiar número: `track("copiar_numero")`.
- Snippet de Plausible condicional (`PUBLIC_PLAUSIBLE_DOMAIN`), documentado en `README.md`.

### Criterios de aceptación de la Fase 1

1. `npm run build` (incluye `astro check`) termina sin errores ni warnings de tipos.
2. `dist/` tiene un `index.html` por ruta, con el contenido en el HTML (no vacío), un único `<h1>`,
   `<title>`, description, canonical, OG y JSON-LD válido (`JSON.parse` de cada bloque).
3. Ningún archivo en `app/` lee `Dra. Edith Noriega.html` ni usa `innerHTML` para construir
   páginas (sí está permitido para el texto de una tarjeta si escapa la entrada; mejor `textContent`).
4. Están presentes, entre otros, los textos que hoy se pierden: "Más de 20 años en ortodoncia",
   las descripciones de "Trastornos de la ATM" y "Neuralgias", "¿El láser reemplaza otros
   tratamientos?", "¿Molesta usar brackets o alineadores?". No aparece ningún texto de prototipo:
   "A validar", "A confirmar", "prototipo", "Foto pendiente", "Mostrar marcas de revisión".
5. Cada explorador funciona sin JS con su estado por defecto visible, y con JS responde a
   clic y teclado (Enter/Espacio en piezas y estructuras SVG; flechas en las pestañas).
6. Todos los links a WhatsApp tienen `?text=` con el contexto correcto.
7. `#ortodoncia` en `/` redirige a `/tratamientos/ortodoncia/`.
8. `docs/pendientes.md` existe y lista cada afirmación que tenía marca.

---

## Fase 2 — Prioridad media

### 2.1 "Cómo llegar" por sede
- En `SedeCard` (contacto e inicio) un `en-link` "Cómo llegar" a
  `https://www.google.com/maps/search/?api=1&query=<dirección, ciudad, Buenos Aires>` (desde
  `sedes.ts`), con `track("como_llegar", { sede })`. La Plata: "Calle 49 n.º 390, entre 2 y 3, La
  Plata". Quilmes: "Hipólito Yrigoyen 439, Quilmes" + "Clínica CEMEPRO Bristol". Sin mapa
  embebido.

### 2.2 "Hoy atiende en…"
- Componente `TodayStatus.astro`: el HTML del servidor muestra los horarios habituales
  ("Miércoles a viernes en La Plata · martes en Quilmes"). En el cliente se calcula el día y la
  hora con `Intl.DateTimeFormat` en zona `America/Argentina/Buenos_Aires` y se reemplaza por:
  "Hoy atiende en La Plata, de 10 a 18 h" / "Hoy atiende en La Plata hasta las 18 h" (si ya
  empezó) / "Hoy ya terminó la atención. Próximo día: jueves en La Plata" / "Hoy no hay atención.
  Próximo día: martes en Quilmes". Siempre seguido de "Confirmá tu turno por WhatsApp."
- Sale de `sedes.ts` (los mismos datos que el JSON-LD). Va en el encabezado de contacto y de la
  sección de sedes del inicio. Los días de La Plata siguen en `docs/pendientes.md` para confirmar.

### 2.3 Preguntas frecuentes con datos estructurados
- `Faq.astro` acepta `schema` (por defecto `true`) y emite un `FAQPage` en JSON-LD con las
  preguntas y respuestas en texto plano (sin HTML) en las páginas donde aparece: inicio,
  ortodoncia y primera consulta. Una sola `FAQPage` por página.

### 2.4 Odontograma usable en el celular
- Debajo de 760px, además del SVG, un `<select>` "Elegí una pieza" agrupado por cuadrante
  (`<optgroup>`), sincronizado con el SVG y con la tarjeta. Las piezas del SVG aumentan su área
  táctil con un `rect` transparente más grande alrededor.

### 2.5 Testimonios más legibles
- En `VoiceCarousel`, cada testimonio muestra la frase destacada, el nombre, el tratamiento y un
  `<details>` "Leer el testimonio completo" con la transcripción. Las citas de pacientes no se
  editan; se anotan en `docs/pendientes.md` las que afirman "sin dolor", "cero dolor" o tiempos
  ("más rápido", "seis meses") para que la Dra. decida.

### 2.6 Comparador antes/después — bloqueado
- Las fotos de casos actuales son collages con varias etapas en una sola imagen, así que un
  deslizador no se puede hacer bien sin fotos de antes y después separadas. Se deja anotado en
  pendientes; no se implementa.

### Criterios de aceptación de la Fase 2
1. `npm run build` sin errores.
2. Links "Cómo llegar" correctos en las dos sedes; JSON-LD `FAQPage` válido en las tres páginas.
3. `TodayStatus` probado con una función pura `estadoHoy(fecha)` en `app/lib/horarios.ts` y un
   script `scripts/test-horarios.mjs` (Node, sin dependencias) que cubre: martes antes, durante y
   después de horario; miércoles; sábado; domingo.
4. En 375 px de ancho el `<select>` del odontograma cambia la pieza seleccionada.

---

## Fuera de alcance (para después)
Turnos en línea, 3D (diente o arcada como isla), página Conocimiento, logos en SVG, tema oscuro.
