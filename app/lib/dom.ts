export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

/** Responde a clic y a Enter/Espacio sobre los elementos que coinciden con el selector (piezas y estructuras SVG). */
export function onActivate(root: Element, selector: string, handler: (el: HTMLElement | SVGElement, ev: Event) => void) {
  root.addEventListener("click", (ev) => {
    const el = (ev.target as Element).closest<HTMLElement | SVGElement>(selector);
    if (el && root.contains(el)) handler(el, ev);
  });
  root.addEventListener("keydown", (ev) => {
    const k = (ev as KeyboardEvent).key;
    if (k !== "Enter" && k !== " ") return;
    const el = (ev.target as Element).closest<HTMLElement | SVGElement>(selector);
    if (el && root.contains(el) && !(el instanceof HTMLButtonElement) && !(el instanceof HTMLAnchorElement)) {
      ev.preventDefault();
      handler(el, ev);
    }
  });
}

export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
