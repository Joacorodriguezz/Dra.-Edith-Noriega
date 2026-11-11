import type { ImageMetadata } from "astro";
import apinamiento01 from "../assets/casos/apinyamiento-01.jpg";
import apinamiento02 from "../assets/casos/apinyamiento-02.jpg";
import claseIII01 from "../assets/casos/clase-iii-01.jpg";
import claseIII02 from "../assets/casos/clase-iii-02.jpg";
import hibrido01 from "../assets/casos/hibrido-laser-01.jpg";
import hibrido02 from "../assets/casos/hibrido-laser-02.jpg";
import hibrido03 from "../assets/casos/hibrido-laser-03.jpg";

export type CaseStage = { label: string; img: ImageMetadata; alt: string };
export type ClinicalCase = {
  id: string;
  label: string;
  title: string;
  summary: string;
  stages: CaseStage[];
  facts: [string, string][];
  quote?: string;
};

export const CASES: ClinicalCase[] = [
  {
    id: "caso-01",
    label: "Caso 01 · Ortodoncia fija",
    title: "Apiñamiento severo y una sonrisa que preocupaba",
    summary: "La paciente llegó con dientes superpuestos, una mordida alterada y ganas de sentirse más cómoda al sonreír.",
    stages: [
      { label: "Inicio y 1.ª etapa", img: apinamiento02, alt: "Inicio (diciembre 2022) y primera etapa del tratamiento con brackets" },
      { label: "2.ª y 3.ª etapa", img: apinamiento01, alt: "Segunda y tercera etapa del caso de apiñamiento" }
    ],
    facts: [
      ["Lo que buscamos", "Ordenar la mordida y acompañar el movimiento de los dientes de forma progresiva."],
      ["Cómo se abordó", "Ortodoncia fija, controles periódicos y seguimiento de cada etapa."],
      ["La evolución", "La segunda y tercera etapa muestran el cambio gradual del tratamiento."]
    ]
  },
  {
    id: "caso-02",
    label: "Caso 02 · Ortodoncia fija",
    title: "Clase III y canino retenido, paso a paso",
    summary: "Había una relación diferente entre las arcadas y un canino que todavía no había erupcionado. No alcanzaba con alinear.",
    stages: [
      { label: "Inicio y 1.ª etapa", img: claseIII01, alt: "Inicio y primera etapa de un caso de Clase III con canino retenido" },
      { label: "2.ª y 3.ª etapa", img: claseIII02, alt: "Segunda y tercera etapa del caso de Clase III con canino retenido" }
    ],
    facts: [
      ["Lo que buscamos", "Alinear el canino, ordenar la mordida y recuperar una función más cómoda."],
      ["Cómo se abordó", "Ortodoncia fija y controles radiográficos durante el proceso."],
      ["La evolución", "El registro permite ver que los cambios se construyen control a control."]
    ]
  },
  {
    id: "caso-03",
    label: "Caso 03 · Híbrido y láser",
    title: "“Me habían dicho que mi caso no tenía solución”",
    summary: "Paciente de 54 años con una Clase II compleja y apiñamiento. A partir de los estudios se planificó una alternativa sin extracciones.",
    stages: [
      { label: "Inicio y final", img: hibrido01, alt: "Comparación de inicio (junio 2023) y evolución (octubre 2024), con la identidad de la paciente protegida" },
      { label: "Estudios", img: hibrido02, alt: "Estudios iniciales: radiografía panorámica, telerradiografía de perfil, fotos y escaneo" },
      { label: "Etapas", img: hibrido03, alt: "Etapas documentadas del tratamiento híbrido con láser" }
    ],
    facts: [
      ["Cómo se abordó", "Alineadores en la arcada superior, brackets en la inferior y fotobiomodulación láser como apoyo indicado para este caso."],
      ["La evolución", "El registro fotográfico permite seguir el recorrido sin prometer un resultado igual para otros pacientes."]
    ]
  }
];

export type CaseStory = { id: string; eyebrow: string; title: string; text?: string; quote?: string; img: ImageMetadata; alt: string };

export const STORIES: CaseStory[] = [
  { id: "caso-01", eyebrow: "Apiñamiento severo", title: "Volver a sentirse cómoda al sonreír", text: "La consulta empezó por una mordida alterada y dientes superpuestos. El recorrido se documentó etapa por etapa con ortodoncia fija.", img: apinamiento02, alt: "Inicio de un caso de apiñamiento severo" },
  { id: "caso-02", eyebrow: "Clase III y canino retenido", title: "Un tratamiento que necesitaba tiempo y seguimiento", text: "El objetivo no era solo alinear: también había que acompañar la erupción del canino y la relación entre ambas arcadas.", img: claseIII01, alt: "Inicio de un caso de Clase III y canino retenido" },
  { id: "caso-03", eyebrow: "Ortodoncia híbrida y láser", title: "Encontrar una alternativa", quote: "“Me habían dicho que no tenía solución ni un tratamiento alternativo.”", img: hibrido01, alt: "Comparación de inicio y evolución de una paciente adulta con identidad protegida" }
];
