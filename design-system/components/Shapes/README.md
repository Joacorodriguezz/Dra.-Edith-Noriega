Las tres formas de la marca, dibujadas con CSS: disco con aro (`en-disc`), cuarto de círculo (`en-quarter`, o `en-quarter--framed` con marco doble y un `<i></i>` adentro) y estrella de cuatro puntas (`en-star` con cuatro `<i></i>`).

- Tamaño con `--size`, relleno con `--shape` y aro con `--ring`. Valores permitidos: `var(--brand)`, `var(--aqua)`, `var(--aqua-soft)` y `var(--white)`.
- El aro lleva el color contrario al relleno: disco `brand` con aro `aqua`, disco `aqua-soft` con aro `brand`.
- Máximo tres formas por pantalla, una familia por sección. Dejá que se salgan del borde.
- Nunca las pongas detrás de texto. Son decorativas: no llevan `alt` y se ocultan con `aria-hidden="true"`.
- `en-gradient` es el degradado de marca para bandas decorativas.
