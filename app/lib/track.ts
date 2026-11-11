type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (evento: string, opts?: { props: Props }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Mide un evento con Plausible o gtag si están cargados; si no, no hace nada. */
export function track(evento: string, props: Props = {}): void {
  try {
    const limpio: Props = {};
    for (const [k, v] of Object.entries(props)) if (v !== undefined && v !== "") limpio[k] = v;
    if (typeof window.plausible === "function") window.plausible(evento, { props: limpio });
    if (typeof window.gtag === "function") window.gtag("event", evento, limpio);
  } catch {
    /* la medición nunca debe romper el sitio */
  }
}
