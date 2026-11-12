# Plan de mejoras

Revisión hecha sobre `development` con las 11 páginas construidas y probadas en celular. El sitio no tiene enlaces rotos, errores de consola ni scroll horizontal, y todas las páginas tienen título, descripción, canonical y JSON-LD. Lo que frena la publicación son las confirmaciones de la Dra. (`docs/pendientes.md`); lo que queda por mejorar en el código es chico.

## Etapa 0 · Destrabar la publicación (depende de la Dra.)

- **Dominio.** El sitio usa `draedithnoriega.com.ar` como supuesto. De eso dependen el sitemap, `robots.txt` y el JSON-LD.
- **Horarios de La Plata.** Alimentan el cartel «Hoy atiende en…» y los datos estructurados. Si están mal, el sitio informa mal en dos lugares.
- **Autorización escrita** de los tres casos y los seis testimonios para el sitio nuevo.
- **Testimonios con promesas de resultado** («cero dolor», «en solo seis meses», «dejé la medicación»). Decidir si van tal cual, recortados o con una aclaración al lado.
- **Textos clínicos** de cada área, publicados sin validar.
- **Láser en Quilmes.** La página de Tratamientos dice que «en Quilmes la atención es solo odontológica». Hay que confirmarlo.

## Etapa 1 · Mejoras rápidas

| Qué | Por qué |
| --- | --- |
| Achicar el ícono del logo | `public/brand/dental-icon.jpeg` pesa 41 KB, se muestra a 28 px y se descarga en todas las páginas. |
| Alojar las tipografías en el sitio | Se cargan desde Google con un `@import` en `design-system.css`, que retrasa el primer pintado, y se piden pesos que no se usan. |
| Rehacer la tabla comparativa de Ortodoncia en celular | Se corta a la derecha y hay que deslizarla. En pantallas chicas conviene una tarjeta por alternativa. |
| Agrandar los puntos del carrusel de testimonios | Miden 12 px y son difíciles de tocar. |
| Sumar enlaces internos en «La doctora» y «Contacto» | Casi no enlazan a otras páginas. |
| Resolver `AreaExplorer.astro` | Quedó sin uso con el diseño nuevo de Tratamientos. Borrarlo o reubicar el modo «por necesidad». |

## Etapa 2 · Conseguir más consultas

- **Acortar el inicio.** En celular mide unas 19 pantallas. Mover la formación completa a «La doctora» y dejar una sola sección de casos y testimonios.
- **Ampliar las páginas con poco contenido.** «Ortodoncia quirúrgica» tiene unas 225 palabras y «Primera consulta» unas 200. Sumar preguntas frecuentes propias y un caso relacionado.
- **Responder lo que más se pregunta.** Obras sociales y prepagas, costo y duración de la primera consulta. Faltan los datos.
- **Perfil de Google de cada consultorio.** Crearlo o reclamarlo y enlazarlo desde el sitio.
- **Activar la medición.** `app/lib/track.ts` ya cuenta los clics a WhatsApp, pero no hay ninguna herramienta conectada (`PUBLIC_PLAUSIBLE_DOMAIN` sin definir).

## Etapa 3 · Calidad y mantenimiento

- **Chequeos automáticos.** `npm run check` y `npm test` se corren a mano. Ponerlos en GitHub Actions para cada cambio.
- **Publicación con vista previa por rama**, para revisar cada cambio antes de que llegue a `main`.
- **Fotos de casos separadas.** El comparador antes/después sigue bloqueado porque las fotos son collages.
- **Logos en SVG o PNG transparente.** El encabezado usa un recorte de un JPEG.

## Orden recomendado

Empezar por la etapa 1, que no depende de nadie, mientras la Dra. responde la etapa 0. La mitad de la etapa 2 necesita sus respuestas.
