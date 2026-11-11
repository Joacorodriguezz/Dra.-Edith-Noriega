// Lógica pura de "Hoy atiende en…". Sin dependencias del navegador para poder probarla en Node.
import type { Sede } from "../data/sedes";

export const ZONA = "America/Argentina/Buenos_Aires";
const CONFIRMA = " Confirmá tu turno por WhatsApp.";
const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const DOW: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export type EstadoHoy = {
  tipo: "antes" | "durante" | "despues" | "cerrado";
  texto: string;
};

/** Día de la semana (0 = domingo) y minutos desde las 0 h en Buenos Aires. */
export function ahoraEnBuenosAires(fecha: Date): { dow: number; min: number } {
  const partes = new Intl.DateTimeFormat("en-US", { timeZone: ZONA, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(fecha);
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? "0";
  return { dow: DOW[get("weekday")], min: Number(get("hour")) * 60 + Number(get("minute")) };
}

const aMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
/** "10:00" -> "10"; "19:30" -> "19:30" */
const hora = (hhmm: string) => (hhmm.endsWith(":00") ? String(Number(hhmm.slice(0, 2))) : `${Number(hhmm.slice(0, 2))}:${hhmm.slice(3)}`);

type Turno = { dow: number; sede: string; abre: string; cierra: string };
const turnos = (sedes: Sede[]): Turno[] => sedes.flatMap((s) => s.horarios.map((h) => ({ dow: h.dow, sede: s.nombre, abre: h.abre, cierra: h.cierra })));

export function estadoHoy(fecha: Date, sedes: Sede[]): EstadoHoy {
  const { dow, min } = ahoraEnBuenosAires(fecha);
  const todos = turnos(sedes);
  const hoy = todos.find((t) => t.dow === dow);

  // Próximo día con atención, empezando desde mañana
  const proximo = () => {
    for (let k = 1; k <= 7; k++) {
      const d = (dow + k) % 7;
      const t = todos.find((x) => x.dow === d);
      if (t) return `${DIAS[d]} en ${t.sede}`;
    }
    return "";
  };

  if (!hoy) return { tipo: "cerrado", texto: `Hoy no hay atención. Próximo día: ${proximo()}.${CONFIRMA}` };
  if (min < aMin(hoy.abre)) return { tipo: "antes", texto: `Hoy atiende en ${hoy.sede}, de ${hora(hoy.abre)} a ${hora(hoy.cierra)} h.${CONFIRMA}` };
  if (min < aMin(hoy.cierra)) return { tipo: "durante", texto: `Hoy atiende en ${hoy.sede} hasta las ${hora(hoy.cierra)} h.${CONFIRMA}` };
  return { tipo: "despues", texto: `Hoy ya terminó la atención. Próximo día: ${proximo()}.${CONFIRMA}` };
}

/** Texto que sale en el HTML del servidor: "Miércoles a viernes en La Plata · martes en Quilmes." */
export function resumenHabitual(sedes: Sede[]): string {
  const partes = sedes.map((s) => {
    const dias = s.horarios.map((h) => h.dow).sort((a, b) => a - b);
    const consecutivos = dias.length > 2 && dias.every((d, i) => i === 0 || d === dias[i - 1] + 1);
    const txt = consecutivos ? `${DIAS[dias[0]]} a ${DIAS[dias[dias.length - 1]]}` : dias.map((d) => DIAS[d]).join(" y ");
    return `${txt} en ${s.nombre}`;
  });
  const t = partes.join(" · ");
  return t.charAt(0).toUpperCase() + t.slice(1) + ".";
}

export const CONFIRMA_TURNO = CONFIRMA.trim();
