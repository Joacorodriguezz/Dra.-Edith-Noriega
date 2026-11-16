import { $, $$ } from "./dom";

/** Elementos con bucles: se pausan mientras están fuera de pantalla (.mo-pausa frena la animación del elemento, sus pseudo-elementos y descendientes). */
const BUCLES = [
  ".mo-loop", ".mo-shape", ".mo-ring",
  // Inicio
  ".creds", ".steps", ".bento", ".timeline", ".today", ".en-quote", ".en-section-head", ".case-stories__head",
  ".case-stories__controls", ".voice-carousel__arrows", ".voice-carousel > .eyebrow", ".needs",
  ".mv__areas", ".mv__portrait", ".mv__eyebrow", ".mv__status",
  // Páginas internas
  ".pagehead .eyebrow", ".en-cta", ".nextnav", ".training-list", ".j-steps", ".progress", ".illus", ".lanes-wrap",
  ".tx-hero__art", ".tx-band__art", ".tx-steps__list", ".en-footer"
];

/** Entradas al hacer scroll: [selector, variante, retardo entre hermanos en ms]. Se marcan por JS: sin JS (o sin IntersectionObserver) nada queda oculto. */
const ENTRADAS: [string, string, number][] = [
  [".escritorio .needs > ul > li", "left", 60],
  [".escritorio .needs > .guide", "right", 0],
  [".escritorio .bento > article", "scale", 110],
  [".escritorio .case-stories__head", "mask", 0],
  [".escritorio .case-story", "up", 120],
  [".escritorio .voice-carousel", "scale", 0],
  [".escritorio .timeline > li", "left", 110],
  [".escritorio .step", "mask", 130],
  [".escritorio .faq details", "right", 70],
  [".escritorio .en-contact > *", "up", 120],
  [".escritorio .en-section-head", "mask", 0],
  [".mv__areas > li", "left", 80],
  [".mv__story", "scale", 110],
  [".mv__sede", "up", 120],
  [".mv__faq", "right", 70]
];

/** Páginas internas (body.mo-int): mismas variantes, recorridos más cortos (ver motion.css). Nada de lo que vive dentro de un panel [hidden] se marca. */
const ENTRADAS_INT: [string, string, number][] = [
  [".en-section-head", "mask", 0],
  [".tx-head", "mask", 0],
  [".bento > article", "scale", 110],
  [".en-cards > .en-card", "up", 100],
  [".ages > .en-card", "scale", 110],
  [".vs > .en-card:nth-child(odd)", "left", 0],
  [".vs > .en-card:nth-child(even)", "right", 0],
  [".split > .dotlist > li", "left", 70],
  [".steps > .step", "mask", 120],
  [".training-list > li", "left", 60],
  [".faq details", "right", 70],
  [".en-quote", "left", 0],
  [".case-grid > .case-card", "up", 120],
  [".voice-carousel", "scale", 0],
  [".en-contact > .en-sede", "up", 120],
  [".en-form", "right", 0],
  [".en-cta", "scale", 0],
  [".nextnav > a:first-child", "left", 0],
  [".nextnav > a:last-child", "right", 0],
  [".notice", "up", 0],
  [".j-steps", "left", 0],
  [".journey > .en-card", "right", 0],
  [".split-illus .illus", "scale", 0],
  [".cmp-wrap, .lanes-wrap", "up", 0],
  [".tx-band__art", "scale", 0],
  [".tx-band__copy", "up", 0],
  [".tx-steps__list > li", "up", 110],
  [".tx-jump", "up", 0]
];

export function iniciarMovimiento() {
  iniciarSombraBarra();
  if (!("IntersectionObserver" in window)) return;

  const pausa = new IntersectionObserver(
    (es) => es.forEach((e) => e.target.classList.toggle("mo-pausa", !e.isIntersecting)),
    { rootMargin: "40px" }
  );
  $$(BUCLES.join(",")).forEach((el) => pausa.observe(el));

  const entrada = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("mo-visto");
        entrada.unobserve(e.target);
      }),
    { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );
  const interna = document.body.classList.contains("mo-int");
  const marcar = (lista: [string, string, number][]) =>
    lista.forEach(([sel, variante, paso]) => {
      let n = 0;
      $$(sel).forEach((el) => {
        if (el.classList.contains("mo-rv")) return;
        // En las internas lo que ya se ve al cargar no se oculta de nuevo: el encabezado entra con su propia secuencia.
        if (interna && el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
        el.classList.add("mo-rv", `mo-rv--${variante}`);
        el.style.setProperty("--mo-rd", `${n++ * paso}ms`);
        entrada.observe(el);
      });
    });
  marcar(interna ? ENTRADAS_INT : ENTRADAS);
}

/** Sombra suave bajo la barra de navegación al bajar (se anima la opacidad de un pseudo-elemento, no la sombra). */
function iniciarSombraBarra() {
  const barra = $(".navbar");
  if (!barra) return;
  let marco = 0;
  const leer = () => {
    marco = 0;
    barra.classList.toggle("mo-scroll", window.scrollY > 8);
  };
  window.addEventListener("scroll", () => { if (!marco) marco = requestAnimationFrame(leer); }, { passive: true });
  leer();
}
