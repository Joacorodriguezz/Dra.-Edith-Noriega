export const FORMACION: { periodo: string; titulo: string; institucion: string }[] = [
  { periodo: "1988–1993", titulo: "Odontología", institucion: "Facultad de Odontología, Universidad Nacional de La Plata" },
  { periodo: "1995–2000", titulo: "Especialista en Ortodoncia", institucion: "Facultad de Odontología, Universidad Nacional de La Plata" },
  { periodo: "2008", titulo: "Especialista en Ortodoncia Lingual", institucion: "Sociedad Argentina de Ortodoncia Lingual" },
  { periodo: "2011–2021", titulo: "Ortodoncia pre y posquirúrgica", institucion: "Hospital Piñero, Sociedad Argentina de Ortodoncia" },
  { periodo: "2021–2022", titulo: "Diplomatura en Odontología Láser y Ciencias de la Salud", institucion: "Universidad Abierta Interamericana" },
  { periodo: "2023–2024", titulo: "Diplomatura Universitaria en Alineadores Clínico y Diseño", institucion: "Universidad Católica de La Plata y Sociedad Argentina de Ortodoncia" }
];

export const TRAYECTORIA: { y: string; t: string; m: string; now?: boolean }[] = [
  { y: "1988–1993", t: "Odontología", m: "Facultad de Odontología, UNLP" },
  { y: "1995–2000", t: "Especialista en Ortodoncia", m: "Facultad de Odontología, UNLP" },
  { y: "2011–2021", t: "Ortodoncia pre y posquirúrgica", m: "Hospital Piñero, Sociedad Argentina de Ortodoncia" },
  { y: "2021–2022", t: "Diplomatura en Odontología Láser", m: "Universidad Abierta Interamericana" },
  { y: "2024", t: "Disertante en congresos de SAO y ACALO", m: "Terapia láser en ortodoncia", now: true }
];

export const EJES: { size: string; t: string; icon: string; items: [string, string][] }[] = [
  { size: "s3", t: "Ortodoncia", icon: "ortodoncia", items: [["1995–2000", "Especialista en Ortodoncia, UNLP"], ["2008", "Especialista en Ortodoncia Lingual"], ["2023–2024", "Diplomatura en Alineadores, UCALP y SAO"]] },
  { size: "s3", t: "Cirugía y malformaciones", icon: "ortodoncia-quirurgica", items: [["2011–2021", "Ortodoncia pre y posquirúrgica, Hospital Piñero"], ["Hoy", "Clínica de Malformaciones y Quirúrgicos, SAO"]] },
  { size: "s4", t: "Tecnología láser", icon: "laser", items: [["2021–2022", "Diplomatura en Odontología Láser, UAI"], ["2024", "Ponente SAO y disertante ACALO"], ["Desde 2025", "Especialidad en Láser en Ortodoncia y ATM (en curso)"]] },
  { size: "s2", t: "Docencia", icon: "odontologia-general", items: [["2019–2020", "Diplomatura en Docencia, Universidad Favaloro"]] }
];

export const CIENCIA: { badge: string; t: string; d: string }[] = [
  { badge: "Publicación", t: "Terapia (LLT) post cirugía de distracción ósea", d: "Publicada en ResearchGate." },
  { badge: "Ponencia · agosto 2024", t: "Congreso de Invierno 2024, SAO", d: "Terapia (LLT) post cirugía de distracción ósea. Buenos Aires. Aprobada por el Comité Científico." },
  { badge: "Disertación · agosto 2024", t: "4.° Congreso de Odontología Láser, ACALO", d: "Terapia láser en ortodoncia con alineadores. Salta, Argentina." }
];
