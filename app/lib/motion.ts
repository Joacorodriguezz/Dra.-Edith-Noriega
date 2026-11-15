import { $, $$ } from "./dom";

/**
 * Entradas al hacer scroll. Los estilos están en app/styles/motion.css.
 *
 * Cada grupo es un contenedor que se observa; cuando entra en pantalla se marca con .is-in
 * junto con sus ítems, que llegan escalonados. Lo que ya está a la vista al cargar no se toca,
 * así nada parpadea. Sin IntersectionObserver no hace nada (y nada queda oculto).
 */
type Kind = "rise" | "fade" | "slide" | "line";

interface Group {
  /** Contenedor que se observa */
  sel: string;
  /** Entrada del contenedor entero */
  kind?: Kind;
  /** Hijos que entran escalonados (selector relativo al contenedor) */
  items?: string;
  itemKind?: Kind;
  /** Milisegundos entre un ítem y el siguiente */
  step?: number;
  /** Tope del escalonado, para que las listas largas no tarden */
  max?: number;
}

const GROUPS: Group[] = [
  // Encabezados de sección: antetítulo, título y texto, en ese orden
  { sel: ".en-section-head, .tx-head, .case-stories__head > div", items: ":scope > *" },
  { sel: ".head-row", items: ":scope > :not(.en-section-head)", itemKind: "fade", step: 200 },
  // Grillas de tarjetas
  { sel: ".bento, .en-cards, .case-grid, .en-contact, .nextnav, .needs", items: ":scope > *", step: 80 },
  { sel: ".case-stories__track", items: ":scope > *", step: 80, max: 3 },
  // Listas
  { sel: ".creds ul", items: ":scope > li", itemKind: "fade", step: 90 },
  { sel: ".steps, .tx-steps__list", items: ":scope > li", step: 90 },
  { sel: ".timeline", kind: "line", items: ":scope > li", itemKind: "slide", step: 90 },
  { sel: ".training-list", items: ":scope > li", itemKind: "fade", step: 50, max: 8 },
  // Bloques sueltos
  { sel: ".en-quote, .en-cta, .faq, .voice-carousel", kind: "rise" },
  // Tratamientos
  { sel: ".tx-band__art", kind: "fade" },
  { sel: ".tx-band__copy", items: ":scope > *", step: 60, max: 5 },
  // Inicio móvil
  { sel: ".mv__portrait", kind: "fade" },
  { sel: ".mv__band, .mv__block", items: ":scope > *", step: 60, max: 4 }
];

/** Lo que no entra en ningún grupo: cada bloque de una sección sube entero. */
const FALLBACK = "main .section > .wrap > *";

export function initMotion() {
  initNavShadow();
  // Con "reducir movimiento" también corre: motion.css cambia las entradas por fundidos sin desplazamiento
  if (!("IntersectionObserver" in window)) return;

  const claimed: Element[] = [];
  const members = new Map<Element, HTMLElement[]>();

  const mark = (el: HTMLElement, kind: Kind, i = 0, step?: number) => {
    el.dataset.reveal = kind;
    if (i) el.style.setProperty("--i", String(i));
    if (step) el.style.setProperty("--step", `${step}ms`);
    // Al terminar se quita la marca para que la animación no pise hover ni transiciones propias
    el.addEventListener("animationend", function done(e) {
      if (e.target !== el) return;
      el.removeEventListener("animationend", done);
      delete el.dataset.reveal;
      el.style.removeProperty("--i");
      el.style.removeProperty("--step");
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        entry.target.classList.add("is-in");
        for (const m of members.get(entry.target) ?? []) m.classList.add("is-in");
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );

  const add = (box: HTMLElement, g: Omit<Group, "sel">) => {
    if (claimed.some((c) => c === box || c.contains(box))) return;
    claimed.push(box);
    // Ya visible (o ya pasado) al cargar: queda como está
    if (box.getBoundingClientRect().top < window.innerHeight) return;
    const items = g.items ? $$(g.items, box) : [];
    items.forEach((it, i) => mark(it, g.itemKind ?? "rise", Math.min(i, g.max ?? 6), g.step));
    if (g.kind) mark(box, g.kind);
    members.set(box, items);
    io.observe(box);
  };

  for (const g of GROUPS) for (const box of $$(g.sel)) add(box, g);
  for (const box of $$(FALLBACK)) {
    if (claimed.some((c) => box.contains(c))) continue;
    add(box, { kind: "rise" });
  }
}

/** La barra gana una sombra suave cuando la página ya se desplazó. */
function initNavShadow() {
  const nav = $(".navbar");
  const top = $(".topbar");
  if (!nav || !top || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(([e]) => nav.toggleAttribute("data-scrolled", !e.isIntersecting)).observe(top);
}
