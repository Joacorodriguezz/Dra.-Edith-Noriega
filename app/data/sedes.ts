export type Horario = {
  /** 0 = domingo ... 6 = sábado */
  dow: number;
  dia: string;
  corto: string;
  schemaDia: string;
  abre: string;
  cierra: string;
  texto: string;
};

export type Sede = {
  id: "la-plata" | "quilmes";
  nombre: string;
  eyebrow: string;
  direccion: string;
  calle: string;
  referencia?: string;
  localidad: string;
  horarios: Horario[];
  mapsUrl: string;
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const SEDES: Sede[] = [
  {
    id: "la-plata",
    nombre: "La Plata",
    eyebrow: "Consultorio La Plata",
    direccion: "Calle 49 n.º 390, entre 2 y 3",
    calle: "Calle 49 n.º 390",
    localidad: "La Plata",
    mapsUrl: maps("Calle 49 n.º 390, entre 2 y 3, La Plata, Buenos Aires"),
    // TODO: confirmar que estos días y horarios correspondan a La Plata (ver docs/pendientes.md)
    horarios: [
      { dow: 3, dia: "miércoles", corto: "MIÉ", schemaDia: "Wednesday", abre: "10:00", cierra: "18:00", texto: "10 a 18 h" },
      { dow: 4, dia: "jueves", corto: "JUE", schemaDia: "Thursday", abre: "12:00", cierra: "19:30", texto: "12 a 19:30 h" },
      { dow: 5, dia: "viernes", corto: "VIE", schemaDia: "Friday", abre: "11:00", cierra: "19:00", texto: "11 a 19 h" }
    ]
  },
  {
    id: "quilmes",
    nombre: "Quilmes",
    eyebrow: "Consultorio Quilmes",
    direccion: "Hipólito Yrigoyen 439",
    calle: "Hipólito Yrigoyen 439",
    referencia: "Clínica CEMEPRO Bristol",
    localidad: "Quilmes",
    mapsUrl: maps("Hipólito Yrigoyen 439, Quilmes, Buenos Aires"),
    horarios: [{ dow: 2, dia: "martes", corto: "MAR", schemaDia: "Tuesday", abre: "09:00", cierra: "16:00", texto: "9 a 16 h" }]
  }
];

export const sedePorId = (id: string) => SEDES.find((s) => s.id === id);
