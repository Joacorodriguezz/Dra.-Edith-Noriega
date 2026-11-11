export type Step = { t: string; d: string };
export type Area = {
  id: string;
  slug: string;
  name: string;
  /** Texto para el mensaje de WhatsApp: "consultar por ..." */
  consulta: string;
  /** Nombre del tratamiento para JSON-LD */
  schemaName: string;
  line: string;
  inc: string[];
  metaDescription: string;
  lead: string;
  facts: [string, string][];
  steps?: Step[];
  faqs?: { q: string; a: string }[];
};

export const AREAS: Area[] = [
  {
    id: "odontologia-general",
    slug: "odontologia-general",
    name: "Odontología general",
    consulta: "odontología general",
    schemaName: "Odontología general",
    line: "Evaluación, diagnóstico, prevención y seguimiento. También rehabilitación en adultos y adultos mayores.",
    inc: ["Controles, prevención y diagnóstico integral", "Tratamientos de conducto", "Prótesis removibles y fijas", "Implantes, pernos y coronas", "Atención adaptada a adultos mayores"],
    metaDescription: "Odontología general en La Plata y Quilmes: controles, prevención, diagnóstico integral y rehabilitación para todas las edades con la Dra. Edith Noriega.",
    lead: "La puerta de entrada a la atención. Cada tratamiento empieza por entender cómo funciona toda la boca, y sigue con controles para cuidar lo logrado.",
    facts: [["Para quién", "Todas las edades"], ["Empieza con", "Evaluación y diagnóstico"], ["Continúa con", "Controles periódicos"]],
    steps: [
      { t: "Control", d: "Se revisa toda la boca, no solo lo que molesta." },
      { t: "Diagnóstico", d: "Radiografías u otros estudios según el caso." },
      { t: "Tratamiento", d: "Un plan explicado, con alternativas y prioridades." },
      { t: "Seguimiento", d: "Prevención y próximo control. La frecuencia depende de cada persona." }
    ]
  },
  {
    id: "ortodoncia",
    slug: "ortodoncia",
    name: "Ortodoncia",
    consulta: "ortodoncia",
    schemaName: "Ortodoncia",
    line: "Evaluación funcional, planificación y alternativas según la edad: desde la ortopedia en chicos hasta tratamientos en adultos.",
    inc: ["Brackets metálicos", "Brackets estéticos (ice, zafiro)", "Alineadores transparentes", "Tratamientos híbridos", "Ortopedia dentomaxilar para chicos"],
    metaDescription: "Ortodoncia en La Plata y Quilmes para chicos, adolescentes y adultos: brackets, alineadores, tratamientos híbridos y ortopedia, con la Dra. Edith Noriega.",
    lead: "Corrige la posición de los dientes y la relación entre los maxilares. No es solo estética: también tiene que ver con cómo mordés, masticás y hablás.",
    facts: [["Para quién", "Chicos, adolescentes y adultos"], ["Alternativas", "5"], ["Duración", "Se estima en cada plan"]],
    steps: [
      { t: "Evaluación y estudios", d: "Panorámica, cefalometría o telerradiografía de perfil si hacen falta." },
      { t: "Plan", d: "Alternativas, etapas y estimación de tiempos." },
      { t: "Inicio", d: "Colocación de la aparatología o primeros alineadores." },
      { t: "Controles", d: "Ajustes según la evolución." },
      { t: "Contención", d: "Para mantener la posición lograda." }
    ],
    faqs: [
      { q: "¿Hay una edad límite?", a: "No. La ortodoncia es para todas las edades." },
      { q: "¿Cuánto dura un tratamiento?", a: "Depende del caso. Después de la evaluación se estima la duración de cada etapa y se ajusta según la evolución." },
      { q: "¿Molesta usar brackets o alineadores?", a: "Puede haber molestias los primeros días después de cada ajuste o cambio de alineador. En la consulta te explican cómo manejarlas." },
      { q: "¿Cuánto cuesta?", a: "El presupuesto se informa después de la evaluación, según el plan." }
    ]
  },
  {
    id: "laser",
    slug: "laser",
    name: "Láser odontológico",
    consulta: "tecnología láser",
    schemaName: "Terapia con láser de diodo en odontología",
    line: "Láser de diodo de 980 nm, con aplicaciones distintas entre sí. Cada uso tiene su propia indicación.",
    inc: ["Tejidos blandos: frenectomía, gingivoplastia y coagulación", "Aftas y herpes", "Descontaminación en endodoncia y periodoncia", "Apoyo en ortodoncia (fotobiomodulación)", "Blanqueamiento asistido con láser"],
    metaDescription: "Láser de diodo de 980 nm en odontología, en La Plata y Quilmes: tejidos blandos, aftas, endodoncia, periodoncia y apoyo en ortodoncia con la Dra. Noriega.",
    lead: "El consultorio trabaja con un láser de diodo. Es un recurso con aplicaciones distintas entre sí, y cada una tiene su propia indicación.",
    facts: [["Equipo", "Láser de diodo"], ["Longitud de onda", "980 nm"], ["Aplicaciones", "6"]]
  },
  {
    id: "atm",
    slug: "atm",
    name: "Neuralgias y ATM",
    consulta: "neuralgias y ATM",
    schemaName: "Evaluación y tratamiento de trastornos de la ATM y neuralgias",
    line: "Evaluación de molestias mandibulares y dolor orofacial, con diagnóstico diferencial y trabajo interdisciplinario.",
    inc: ["Evaluación de la ATM (articulación temporomandibular)", "Evaluación del dolor orofacial", "Diagnóstico diferencial", "Tecnología láser cuando está indicada", "Trabajo con otros especialistas"],
    metaDescription: "Evaluación de molestias en la mandíbula, trastornos de la ATM y neuralgias en La Plata y Quilmes, con diagnóstico individual y láser si está indicado.",
    lead: "Evaluación de molestias mandibulares y dolor orofacial. Los trastornos de la ATM (articulación temporomandibular) y las neuralgias son condiciones distintas, aunque a veces requieran abordajes complementarios.",
    facts: [["Empieza con", "Evaluación individual"], ["Formación", "Especialidad en curso"]],
    steps: [
      { t: "Evaluación", d: "Historia de las molestias y examen de la articulación, los músculos y la mordida." },
      { t: "Estudios complementarios", d: "Solo si hacen falta para decidir." },
      { t: "Plan interdisciplinario", d: "Tecnología láser cuando está indicada, y trabajo con otros especialistas según el caso." }
    ]
  },
  {
    id: "ortodoncia-quirurgica",
    slug: "ortodoncia-quirurgica",
    name: "Ortodoncia quirúrgica y malformaciones",
    consulta: "ortodoncia quirúrgica y malformaciones",
    schemaName: "Ortodoncia pre y posquirúrgica",
    line: "Planificación y seguimiento ortodóncico de casos que se resuelven junto a cirugía maxilofacial y otras especialidades.",
    inc: ["Ortodoncia pre y posquirúrgica en cirugía ortognática", "Pacientes con fisuras, unilaterales o bilaterales", "Pacientes con síndrome de Down u otras condiciones", "Coordinación con cirugía, fonoaudiología y técnicos dentales"],
    metaDescription: "Ortodoncia pre y posquirúrgica en cirugía ortognática y malformaciones, en La Plata y Quilmes. Planificación conjunta con cirugía maxilofacial y otros equipos.",
    lead: "Evaluación, planificación y seguimiento ortodóncico de pacientes con alteraciones dentofaciales y malformaciones. La cirugía la realiza el equipo de cirugía maxilofacial.",
    facts: [["Formación", "Hospital Piñero · SAO · 2011–2021"], ["Integra", "Clínica de Malformaciones y Quirúrgicos, SAO"]]
  }
];

export const areaPorId = (id: string) => AREAS.find((a) => a.id === id);
export const areaHref = (id: string) => `/tratamientos/${id}/`;
export const consultaHref = (id = "") => `/contacto/${id ? `?area=${id}` : ""}#form-sec`;

export const RELS: [string, string, string][] = [
  ["odontologia-general", "ortodoncia", "La evaluación general es la puerta de entrada a la ortodoncia."],
  ["odontologia-general", "laser", "El láser se usa para descontaminar en endodoncia y periodoncia."],
  ["ortodoncia", "laser", "La fotobiomodulación puede sumarse como apoyo en algunos tratamientos."],
  ["ortodoncia", "ortodoncia-quirurgica", "La ortodoncia prepara y completa los casos que requieren cirugía."],
  ["laser", "atm", "La tecnología láser se considera en algunos casos, según la evaluación."]
];

export function relsFor(id: string): [string, string][] {
  const out: [string, string][] = [];
  for (const [a, b, t] of RELS) {
    if (a === id) out.push([b, t]);
    else if (b === id) out.push([a, t]);
  }
  return out;
}
