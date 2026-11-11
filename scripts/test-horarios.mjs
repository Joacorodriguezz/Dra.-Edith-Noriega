// Prueba de estadoHoy(): Node 22.18 o superior (ejecuta TypeScript sin compilar).
import assert from "node:assert/strict";
import { estadoHoy, resumenHabitual } from "../app/lib/horarios.ts";
import { SEDES } from "../app/data/sedes.ts";

// Argentina es UTC-3 todo el año: la hora local es la UTC menos 3 horas.
// 2026-11-10 es martes; 11 miércoles; 14 sábado; 15 domingo.
const ba = (dia, hhmm) => new Date(`2026-11-${dia}T${hhmm}:00-03:00`);
const CONFIRMA = "Confirmá tu turno por WhatsApp.";

const casos = [
  ["martes antes de abrir", ba("10", "08:00"), "antes", `Hoy atiende en Quilmes, de 9 a 16 h. ${CONFIRMA}`],
  ["martes en horario", ba("10", "12:30"), "durante", `Hoy atiende en Quilmes hasta las 16 h. ${CONFIRMA}`],
  ["martes después de cerrar", ba("10", "17:00"), "despues", `Hoy ya terminó la atención. Próximo día: miércoles en La Plata. ${CONFIRMA}`],
  ["miércoles en horario", ba("11", "11:00"), "durante", `Hoy atiende en La Plata hasta las 18 h. ${CONFIRMA}`],
  ["miércoles antes de abrir", ba("11", "09:59"), "antes", `Hoy atiende en La Plata, de 10 a 18 h. ${CONFIRMA}`],
  ["sábado", ba("14", "11:00"), "cerrado", `Hoy no hay atención. Próximo día: martes en Quilmes. ${CONFIRMA}`],
  ["domingo", ba("15", "11:00"), "cerrado", `Hoy no hay atención. Próximo día: martes en Quilmes. ${CONFIRMA}`]
];

let ok = 0;
for (const [nombre, fecha, tipo, texto] of casos) {
  const r = estadoHoy(fecha, SEDES);
  assert.equal(r.tipo, tipo, `${nombre}: tipo`);
  assert.equal(r.texto, texto, `${nombre}: texto`);
  ok++;
}

// El día se calcula en Buenos Aires aunque la fecha UTC ya sea otro día: lunes 23:30 en BA es martes 02:30 UTC
assert.equal(estadoHoy(new Date("2026-11-10T02:30:00Z"), SEDES).tipo, "cerrado", "lunes por la noche en Buenos Aires");
// Jueves: horario partido de La Plata (12 a 19:30 h)
assert.equal(estadoHoy(ba("12", "13:00"), SEDES).texto, `Hoy atiende en La Plata hasta las 19:30 h. ${CONFIRMA}`);
// Viernes después de cerrar: el próximo día es el martes en Quilmes
assert.equal(estadoHoy(ba("13", "20:00"), SEDES).texto, `Hoy ya terminó la atención. Próximo día: martes en Quilmes. ${CONFIRMA}`);
ok += 3;

assert.equal(resumenHabitual(SEDES), "Miércoles a viernes en La Plata · martes en Quilmes.");
ok++;

console.log(`test-horarios: OK (${ok} comprobaciones)`);
