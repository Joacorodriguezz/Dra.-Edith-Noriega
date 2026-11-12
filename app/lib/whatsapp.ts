import { AREAS } from "../data/areas";
import { SEDES } from "../data/sedes";

const NUMERO = "5492213185753";

export type WaOpts = {
  /** Dónde está el botón: barra, hero, menu, area, sede, form... (para medición) */
  origen: string;
  /** id del área (ortodoncia, laser...) */
  area?: string;
  /** id de la sede (la-plata, quilmes) */
  sede?: string;
  /** Si hay nombre se arma el mensaje del formulario */
  nombre?: string;
  motivo?: string;
};

export const areaConsulta = (id?: string) => AREAS.find((a) => a.id === id)?.consulta;
export const sedeNombre = (id?: string) => SEDES.find((s) => s.id === id)?.nombre;

export function waTexto({ area, sede, nombre, motivo }: WaOpts): string {
  const consulta = areaConsulta(area);
  const lugar = sedeNombre(sede);
  if (nombre) {
    let t = `Hola, soy ${nombre}. Quiero consultar por ${consulta ?? "una consulta general"}.`;
    if (lugar) t += ` Consultorio preferido: ${lugar}.`;
    if (motivo) t += ` Motivo: ${motivo}`;
    return t;
  }
  if (lugar) return `Hola, quiero pedir un turno en el consultorio de ${lugar}.`;
  return `Hola, quiero pedir un turno para consultar por ${consulta ?? "una consulta general"}.`;
}

export function waLink(o: WaOpts): string {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(waTexto(o))}`;
}

/** Atributos para el <a>: href + datos para la medición de clics. */
export function waAttrs(o: WaOpts) {
  const attrs: Record<string, string> = {
    href: waLink(o),
    target: "_blank",
    rel: "noopener",
    "data-origen": o.origen
  };
  if (o.area) attrs["data-area"] = o.area;
  if (o.sede) attrs["data-sede"] = o.sede;
  return attrs;
}
