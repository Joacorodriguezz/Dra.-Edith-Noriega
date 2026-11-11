import { SITE } from "../data/site";
import { SEDES } from "../data/sedes";
import type { Area } from "../data/areas";

type Json = Record<string, unknown>;

export const personId = (base: string) => `${base}/#doctora`;
export const sedeId = (base: string, id: string) => `${base}/#sede-${id}`;

export function personNode(base: string): Json {
  return {
    "@type": "Person",
    "@id": personId(base),
    name: SITE.nombre,
    jobTitle: "Odontóloga especialista en ortodoncia",
    url: base + "/",
    sameAs: [SITE.instagram, SITE.facebook]
  };
}

export function dentistNodes(base: string): Json[] {
  return SEDES.map((s) => ({
    "@type": "Dentist",
    "@id": sedeId(base, s.id),
    name: `${SITE.nombre}, ortodoncista · ${s.nombre}`,
    url: base + "/",
    image: base + SITE.ogImage,
    telephone: SITE.telefonoE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: s.referencia ? `${s.calle} (${s.referencia})` : s.calle,
      addressLocality: s.localidad,
      addressRegion: "Buenos Aires",
      addressCountry: "AR"
    },
    openingHoursSpecification: s.horarios.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schemaDia,
      opens: h.abre,
      closes: h.cierra
    })),
    employee: { "@id": personId(base) },
    founder: { "@id": personId(base) }
  }));
}

export function baseGraph(base: string): Json[] {
  return [personNode(base), ...dentistNodes(base)];
}

export function medicalWebPage(base: string, area: Area, url: string, description: string): Json {
  return {
    "@type": "MedicalWebPage",
    "@id": `${url}#pagina`,
    url,
    name: area.name,
    description,
    inLanguage: "es-AR",
    about: { "@type": "MedicalTherapy", name: area.schemaName },
    author: { "@id": personId(base) }
  };
}

export function breadcrumbList(base: string, items: { label: string; href?: string }[], currentUrl: string): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.href ? base + it.href : currentUrl
    }))
  };
}
