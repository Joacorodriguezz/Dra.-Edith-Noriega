Sistema de diseño para el sitio web de la Dra. Edith Noriega, odontóloga y ortodoncista con consultorios en La Plata y Quilmes. Cada pieza tiene que transmitir tres cosas, en este orden: experiencia clínica, tecnología y calidez.

## Voz y contenido

- Hablá de vos, con voseo rioplatense: "Conocé mis servicios", "Pedí tu turno", "El tratamiento que necesitás". No uses "usted" ni "tú".
- En "Sobre mí" escribí en primera persona, como la Dra. ("Soy ortodoncista hace más de 20 años"). En el resto del sitio, hablá al paciente con imperativos cortos y verbos concretos.
- Titulares en minúscula con mayúscula inicial. Las MAYÚSCULAS quedan para el wordmark, los eyebrows (`eyebrow`) y los badges.
- Una idea por titular, en positivo. Frases del sitio actual que se conservan: "Experiencia, tecnología y calidez para cuidar tu sonrisa." · "El tratamiento que necesitás para cada etapa de tu vida." · "Un buen diagnóstico integral es la clave para el éxito de todos los tratamientos."
- Nombre completo: "Dra. Edith Noriega". Profesión en el logo: "Ortodoncista".
- Sin emojis ni signos de exclamación, salvo en un botón de acción.
- Explicá los términos técnicos la primera vez: "ATM (articulación temporomandibular)", "maloclusión de Clase III".
- La Dra. valida toda afirmación clínica antes de publicarla: "sin dolor", "más rápido", "sin extracciones", plazos y resultados. Mientras no esté validada, escribí "con tecnología láser" o "más cómodo" y no prometas.
- Toda foto de un caso se publica con consentimiento escrito del paciente y lleva la nota "Publicado con consentimiento escrito del paciente".

### Especialidades

Usá estos nombres exactos y en este orden.

1. Odontología
2. Ortodoncia (brackets metálicos, brackets estéticos, alineadores, tratamientos híbridos, ortopedia infantil)
3. Láser, neuralgia y ATM
4. Ortodoncia quirúrgica y malformaciones
5. Posturología: está en desarrollo. Mostrala con el badge `soon` "Próximamente", sin botón de turno y sin promesas.

## Color

- `paper` es el fondo de página y `surface` el de tarjetas, barra y formularios. Alterná secciones con `surface-tint` y `surface-aqua`.
- `brand` (índigo) es el color de firma: botones primarios, enlaces, titulares de acento y formas. El texto va en `ink`; `ink-muted` para bajadas y notas.
- `aqua` y `aqua-soft` son para rellenos, subrayados y formas. Nunca pongas texto aqua sobre fondo claro: usá `aqua-ink`.
- Sobre un relleno `brand` el texto es `on-brand`; sobre `aqua` o `aqua-soft`, `on-aqua`.
- El degradado índigo a aqua (`.en-gradient`) es propio de la marca. Usalo en el logo, en el pie del logo y en bandas decorativas sin texto. Si lleva texto, que sea blanco, grande y sobre el lado índigo.
- Tema oscuro disponible para paneles internos. Los logos en JPG quedan sobre una placa blanca (`white`) en los dos temas.
- Estados: `success` y `danger` siempre acompañados de una palabra o un ícono.

## Tipografía

- Títulos, etiquetas y botones en Montserrat (`display`, `h1`, `h2`, `h3`, `eyebrow`, `button`): es la misma familia del logo.
- Texto corrido en Nunito Sans (`lead`, `body`, `small`).
- Poné `display` una sola vez por página. Los títulos no pasan de dos líneas y llevan `text-wrap: balance`.
- Los `eyebrow` van en mayúsculas con el espaciado ancho de ORTODONCISTA en el logo, en `aqua-ink`.
- Limitá el texto corrido a 65 caracteres de ancho.

## Espaciado, radios y sombra

- Escala `space-1` a `space-10`. Gutter de página `space-5`; padding de tarjetas `space-6`; entre secciones `space-9`.
- Botones, badges y chips con `radius-pill`. Campos con `radius-sm`.
- Tarjetas de firma: tres esquinas en `radius-sm` y la inferior derecha en `radius-xl`, como el cuarto de círculo del logo. Las citas invierten la idea con la esquina superior izquierda en `radius-xl`.
- Una sola sombra teñida de índigo: `shadow-soft` en reposo y `shadow-lift` al pasar el cursor.

## Formas

- Son tres, todas hechas de círculos: el disco con aro desplazado (`en-disc`), el cuarto de círculo con esquinas cuadradas y arco hacia afuera (`en-quarter`, también con marco doble) y la estrella de cuatro puntas hecha de cuatro cuartos (`en-star`).
- Colores permitidos: `brand`, `aqua`, `aqua-soft` y `white`. El aro lleva el color contrario al relleno.
- Usá una familia de formas por sección y no más de tres formas por pantalla. Dejá que se salgan del borde del contenedor y nunca las pongas detrás de texto.
- Los JPG originales están en el grupo Formas. Los componentes las dibujan con CSS para que respondan al tema.

## Imágenes

- Fotografía luminosa, luz natural, fondo claro. Retrato de la Dra. con bata blanca dentro del disco con aro (`en-portrait`).
- Casos clínicos: mismas tomas, mismo encuadre y misma luz en "Antes" y "Después", con etiqueta `Antes` / `Después` y esquinas `radius-sm`.
- No uses fotos de stock de sonrisas. Si falta la foto real, dejá el espacio con su descripción.

## Movimiento y foco

- Transiciones de 180 ms en color y sombra. Con `prefers-reduced-motion` no hay transiciones.
- Foco visible: anillo de 3px en `focus` con 3px de separación. Los controles miden 44px de alto como mínimo.

## Iconografía

- La marca tiene un solo ícono propio: el isotipo del diente, un trazo continuo, de grosor parejo y puntas redondeadas. Usalo para favicon y avatar.
- El grupo Iconos tiene cinco íconos de especialidad propuestos para este sistema, dibujados con ese mismo trazo. Son un reemplazo provisorio hasta que haya un set propio de la Dra.
- Los íconos van siempre dentro del chip `en-icon-chip` (disco `aqua-soft`), con trazo `brand` fijo.
- Instagram, Facebook, WhatsApp y correo se muestran como enlaces de texto, sin logos de terceros.

## Logo

- Horizontal en barra de navegación y pie. Vertical en portadas y redes. Isotipo en favicon, avatar y sellos.
- Versión de color sobre fondos claros; blanco sobre degradado o negro; negro para impresión de un solo color.
- Ancho mínimo del horizontal: 160px. Dejá alrededor un margen igual a la altura de la letra O.
- No lo gires, no lo recolorees ni lo pongas sobre una foto con mucho detalle.
- Los archivos disponibles son JPG con mucho margen. Para el sitio pedí los logos en SVG o PNG con fondo transparente. Las clases `en-logo--h`, `en-logo--v` y `en-logo--i` los recortan mientras tanto.

## Cómo usarlo

- Cargá Montserrat (500 a 800) y Nunito Sans (400 a 700) desde Google Fonts, además de `tokens.css` y `components/bundle.css`.
- Las clases de componentes llevan el prefijo `en-`. Cada componente tiene su guía en `components/<Nombre>/README.md` y la estructura del sitio está en `sitio.md`.
- Los valores salen siempre de los tokens (`var(--brand)`, `var(--space-5)`). No pegues hexadecimales en el código.
