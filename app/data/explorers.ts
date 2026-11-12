// Datos de los exploradores interactivos (odontograma, ortodoncia, láser, ATM, cirugía, primera consulta).

/** Tipos de pieza dental: [nombre, ancho relativo, función] */
export const TT: Record<number, [string, number, string]> = {
  1: ["Incisivo central", 0.78, "Corta los alimentos."],
  2: ["Incisivo lateral", 0.64, "Corta los alimentos."],
  3: ["Canino", 0.72, "Desgarra los alimentos y guía los movimientos laterales de la mandíbula."],
  4: ["Primer premolar", 0.7, "Tritura y ayuda a desgarrar."],
  5: ["Segundo premolar", 0.7, "Tritura y ayuda a desgarrar."],
  6: ["Primer molar", 1, "Tritura y muele los alimentos."],
  7: ["Segundo molar", 0.92, "Tritura y muele los alimentos."],
  8: ["Tercer molar", 0.84, "Es la muela del juicio. Puede no estar presente o no haber salido."]
};
export const QN: Record<number, string> = { 1: "superior derecho", 2: "superior izquierdo", 3: "inferior izquierdo", 4: "inferior derecho" };

export type OxKey = "metal" | "ceram" | "align" | "hibrido" | "orto";
export const OX: Record<OxKey, [string, string]> = {
  metal: ["Brackets metálicos", "Piezas adheridas a cada diente y unidas por un arco. Permiten controlar el movimiento de cada pieza con precisión."],
  ceram: ["Brackets estéticos", "Funcionan como los metálicos, con piezas transparentes o del color del diente (ice, zafiro)."],
  align: ["Alineadores transparentes", "Placas removibles hechas a medida con diseño digital, que se cambian por etapas. Hay que usarlas las horas indicadas."],
  hibrido: ["Tratamiento híbrido", "Combina alineadores en una arcada y brackets en la otra, según lo que necesite cada una."],
  orto: ["Ortopedia dentomaxilar", "Aparatología para chicos con dentición temporaria o mixta, que ayuda a guiar el crecimiento de los maxilares. El dibujo es genérico: el aparato depende de cada caso."]
};
export const OX_COLS: OxKey[] = ["metal", "ceram", "align", "hibrido", "orto"];
export const OX_ROWS: [string, string[]][] = [
  ["Tipo", ["Fijo", "Fijo", "Removible", "Combinado", "Según el aparato"]],
  ["Visibilidad", ["Visibles", "Menos visibles", "Placas transparentes", "Arriba transparente, abajo visible", "Según el aparato"]],
  ["Se retira para comer", ["No", "No", "Sí", "Solo los alineadores", "Según el aparato"]],
  ["Requiere", ["Controles periódicos", "Controles periódicos", "Uso diario indicado y recambios", "Ambas cosas", "Controles y uso indicado"]],
  ["Para quién", ["Según la evaluación", "Según la evaluación", "Según la evaluación", "Según la evaluación", "Chicos con dentición temporaria o mixta"]]
];

export const LAPPS: { id: string; n: string; z: string; d: string; at: [number, number] }[] = [
  { id: "tejidos", n: "Tejidos blandos", z: "encia", d: "Cirugías mínimamente invasivas en la encía y los frenillos: frenectomía, gingivoplastia y coagulación.", at: [150, 206] },
  { id: "mucosa", n: "Mucosa bucal", z: "mucosa", d: "Tratamiento de aftas y herpes.", at: [52, 330] },
  { id: "endo", n: "Endodoncia", z: "pulpa", d: "Descontaminación del conducto, como complemento del tratamiento de conducto.", at: [214, 262] },
  { id: "perio", n: "Periodoncia", z: "bolsa", d: "Descontaminación de la zona entre la encía y la raíz, como complemento del tratamiento.", at: [184, 214] },
  { id: "orto", n: "Apoyo en ortodoncia", z: "hueso", d: "Fotobiomodulación durante algunos tratamientos de ortodoncia. Su indicación y sus efectos se evalúan caso por caso.", at: [136, 330] },
  { id: "blanq", n: "Blanqueamiento", z: "esmalte", d: "Blanqueamiento dental asistido con láser.", at: [214, 46] }
];

export const PARTS: { id: string; n: string; d: string }[] = [
  { id: "condilo", n: "Cóndilo mandibular", d: "Es el extremo superior de la mandíbula. Encaja en la fosa del hueso temporal y, cuando abrís grande la boca, gira y se desliza hacia adelante." },
  { id: "disco", n: "Disco articular", d: "Una lámina de tejido fibroso entre el cóndilo y el hueso temporal. Acompaña el movimiento. Algunos ruidos de la articulación se relacionan con cambios en su posición." },
  { id: "fosa", n: "Fosa y eminencia articular", d: "La superficie del hueso temporal donde se aloja el cóndilo. Al abrir grande, el cóndilo se traslada hacia la eminencia, que está adelante." },
  { id: "masetero", n: "Músculo masetero", d: "Uno de los músculos que cierran la boca y permiten masticar. En algunos trastornos de la ATM puede sentirse tenso o dolorido." },
  { id: "nervio", n: "Nervio trigémino", d: "Lleva la sensibilidad de la cara. Sus ramas maxilar (V2) y mandibular (V3) recorren el maxilar superior y la mandíbula. La neuralgia del trigémino es un dolor relacionado con este nervio, distinto de un trastorno de la ATM." },
  { id: "oclusion", n: "Oclusión", d: "La forma en que encajan los dientes de arriba y de abajo. Se evalúa junto con la articulación." }
];
export const ATM_MOVE = {
  closed: "Con la boca cerrada, el cóndilo descansa en la fosa del hueso temporal, con el disco por encima.",
  open: "Al abrir grande, el cóndilo gira y se desliza hacia adelante, hasta la eminencia articular. El disco lo acompaña."
};

export const QX: { n: string; who: string[]; d: string }[] = [
  { n: "Evaluación y estudios", who: ["Dra. Noriega"], d: "Evaluación ortodóncica completa, con estudios complementarios para entender la relación entre los maxilares y los dientes." },
  { n: "Planificación conjunta", who: ["Dra. Noriega", "Cirugía maxilofacial"], d: "La ortodoncia y la cirugía se planifican juntas: qué se corrige con cada una y en qué orden." },
  { n: "Ortodoncia prequirúrgica", who: ["Dra. Noriega", "Técnicos dentales"], d: "Se preparan las arcadas para que, después de la cirugía, los dientes puedan encajar correctamente." },
  { n: "Cirugía", who: ["Cirugía maxilofacial"], d: "La realiza el equipo de cirugía maxilofacial. La Dra. no realiza procedimientos quirúrgicos." },
  { n: "Ortodoncia posquirúrgica", who: ["Dra. Noriega", "Fonoaudiología, si hace falta"], d: "Se terminan de ajustar la posición de los dientes y la mordida." },
  { n: "Contención y seguimiento", who: ["Dra. Noriega"], d: "Controles para acompañar la estabilidad de los resultados." }
];
export const LANES: { n: string; sub: string; v: number[]; cls: string }[] = [
  { n: "Ortodoncia", sub: "Dra. Edith Noriega", v: [1, 1, 1, 0, 1, 1], cls: "" },
  { n: "Cirugía maxilofacial", sub: "Equipo quirúrgico", v: [0, 1, 0, 1, 0, 0], cls: "aq" },
  { n: "Otros profesionales", sub: "Fonoaudiología y técnicos, según el caso", v: [0, 0, 1, 0, 1, 0], cls: "ext" }
];

export type JBlock = { p?: string; muted?: string; small?: string; ul?: string[] };
export const JOURNEY: { n: string; b: JBlock[] }[] = [
  { n: "Pedís el turno", b: [
    { p: "Escribinos por WhatsApp al +54 9 221 318-5753. Contanos tu nombre, el motivo de consulta y en qué consultorio preferís atenderte." },
    { ul: ["La Plata: miércoles, jueves y viernes", "Quilmes: martes de 9 a 16 h"] }
  ] },
  { n: "Primera evaluación", b: [
    { p: "Es una conversación sobre lo que te trae, tus antecedentes y lo que esperás del tratamiento. Después, la Dra. revisa los dientes, la mordida y la función." },
    { muted: "Si la consulta es por un chico o una chica, también se evalúa cómo vienen creciendo los maxilares." }
  ] },
  { n: "Estudios, si hacen falta", b: [
    { p: "Dependen del motivo y de lo que se observe. En ortodoncia suelen pedirse, por ejemplo, una radiografía panorámica, una cefalometría o una telerradiografía de perfil." },
    { muted: "No todos los casos los necesitan: se piden cuando aportan información para decidir." }
  ] },
  { n: "Plan de atención", b: [
    { p: "Con la evaluación y los estudios, la Dra. te explica las alternativas, qué implica cada una, las etapas y una estimación de tiempos." },
    { muted: "Si el caso lo requiere, el plan se coordina con otros profesionales." }
  ] },
  { n: "Seguimiento", b: [
    { p: "Durante el tratamiento hay controles para ver la evolución y hacer ajustes. La frecuencia depende de cada tratamiento." },
    { muted: "Al terminar se indican controles y, en ortodoncia, contención para mantener los resultados." }
  ] }
];

export const CHECK = [
  "Estudios previos: radiografías, tomografías o informes",
  "La lista de medicamentos que tomás",
  "Datos de tratamientos anteriores de ortodoncia u odontología"
];
