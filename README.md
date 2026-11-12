# Sitio de la Dra. Edith Noriega

Sitio estático hecho con Astro 5 (sin frameworks de UI) para una odontóloga y ortodoncista con consultorios en La Plata y Quilmes. Todo el contenido está en español rioplatense.

## Cómo correrlo

Requiere Node 20 o superior.

```bash
npm ci            # instala las dependencias
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # genera la imagen Open Graph, corre astro check y construye en dist/
npm run preview   # sirve dist/
npm run check     # chequea dist/ (SEO, JSON-LD, WhatsApp, textos); correr después del build
npm test          # prueba la lógica de horarios
```

`npm run build` ejecuta primero `scripts/og.mjs`, que genera `public/og/og-default.jpg` (1200×630) con el logo horizontal sobre el color `paper`.

## Variables de entorno

| Variable | Para qué sirve | Por defecto |
| --- | --- | --- |
| `SITE_URL` | Dominio del sitio. Se usa en `canonical`, Open Graph, JSON-LD y sitemap. | `https://draedithnoriega.com.ar` (hay que confirmarlo) |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Si está definida, se incluye el script de Plausible para ese dominio. Si no, no se carga ninguna herramienta de medición. | sin definir |

Ejemplo:

```bash
SITE_URL=https://midominio.com.ar PUBLIC_PLAUSIBLE_DOMAIN=midominio.com.ar npm run build
```

Si cambia el dominio, actualizá también la línea `Sitemap:` de `public/robots.txt`.

## Medición

`app/lib/track.ts` expone `track(evento, props)`. Llama a `window.plausible` o a `window.gtag` si existen y, si no, no hace nada. No hay cookies ni banner. Eventos: `whatsapp_click` (origen, área, sede y página, tomados de `data-origen`, `data-area` y `data-sede` del enlace), `whatsapp_form` y `copiar_numero`.

## Estructura de carpetas

```
app/
  layouts/Base.astro        html, head (SEO), barra, menú móvil, pie, medición
  components/
    seo/                    Seo.astro: title, description, canonical, Open Graph y JSON-LD
    nav/                    barra, menú móvil (<dialog>), barra móvil, pie, migas
    ui/                     Button, Badge, SectionHeader, IconChip, PullQuote, Faq, Steps, PageHead, Cta, NextNav, Shapes
    home/                   Hero, Creds, NeedsGuide, ServicesBento, CaseStories, TrainingTimeline
    tratamientos/           AreaExplorer (pestañas por área y por necesidad)
    areas/                  contenido propio de cada área (General, Orto, Laser, Atm, Qx)
    explorers/              odontograma, ortodoncia, láser, ATM, etapas de cirugía, primera consulta, lista
    casos/                  CaseCard (etapas y ampliación en <dialog>) y VoiceCarousel
    contacto/               SedeCard y WhatsAppForm
  data/                     contenido separado del código (sitio, sedes, áreas, casos, testimonios, etc.)
  lib/                      whatsapp.ts, track.ts, schema.ts, dom.ts, horarios.ts
  pages/                    una ruta por archivo; tratamientos/[slug].astro genera las 5 áreas
  styles/site.css           estilos propios del sitio, sobre tokens y design system
  assets/                   casos/, testimonios/ y retrato/ (optimizadas con astro:assets)
public/
  styles/                   tokens.css y design-system.css (sistema de diseño)
  brand/                    logos, isotipo, formas e íconos
  og/                       imagen Open Graph generada en el build
design-system/              guía de marca y componentes de referencia
docs/                       plan-sitio.md, pendientes.md y referencia/ (prototipo, solo lectura)
scripts/                    og.mjs, check-dist.mjs y test-horarios.mjs
```

Los exploradores interactivos llegan renderizados desde el servidor con su estado por defecto. Su `<script>` solo cambia clases, atributos y texto. El menú móvil y la ampliación de casos usan `<dialog>`.

## Contenido y pendientes

Los datos están en `app/data/`. Lo que falta confirmar con la Dra. está en `docs/pendientes.md`. La maqueta `Dra. Edith Noriega.html` queda en el repositorio solo como referencia: ningún archivo del sitio la lee.
