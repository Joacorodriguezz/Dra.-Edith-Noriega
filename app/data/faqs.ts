import { SITE } from "./site";

export type Faq = { q: string; a: string };

export const FAQ_HOME: Faq[] = [
  { q: "¿Cómo pido un turno?", a: `Por WhatsApp al ${SITE.whatsappTexto}. Contanos tu nombre, el motivo de consulta y en qué consultorio preferís atenderte.` },
  { q: "¿Dónde atiende la Dra. Noriega?", a: "En La Plata (calle 49 n.º 390, entre 2 y 3) los miércoles, jueves y viernes, y en Quilmes (Hipólito Yrigoyen 439, Clínica CEMEPRO Bristol) los martes." },
  { q: "¿Hay una edad para empezar ortodoncia?", a: "No hay una edad límite. En chicos se evalúa el crecimiento de los maxilares y en adultos también hay alternativas." },
  { q: "¿El láser reemplaza otros tratamientos?", a: "No. Es un recurso que se suma a algunos tratamientos cuando la evaluación lo indica." }
];

export const FAQ_PRIMERA: Faq[] = [
  { q: "¿Puedo consultar sin saber qué tratamiento necesito?", a: "Sí. La primera consulta sirve para evaluar y orientarte. Antes podés usar la guía «¿Qué te trae a la consulta?» del inicio." }
];
