export const SITE_URL: string = String(import.meta.env.SITE ?? "https://draedithnoriega.com.ar").replace(/\/$/, "");

export const SITE = {
  nombre: "Dra. Edith Noriega",
  titulo: "Dra. Edith Noriega · Ortodoncista en La Plata y Quilmes",
  sufijoTitulo: "Dra. Edith Noriega, ortodoncista en La Plata y Quilmes",
  whatsapp: "5492213185753",
  whatsappTexto: "+54 9 221 318-5753",
  telefonoE164: "+5492213185753",
  email: "consultoriodranoriega@gmail.com",
  instagram: "https://www.instagram.com/dra.edithnoriega/",
  facebook: "https://www.facebook.com/draedithnoriegaortodoncia",
  descripcionCorta: "Odontóloga especialista jerarquizada en ortodoncia y diplomada en tecnología láser.",
  ogImage: "/og/og-default.jpg"
} as const;

export const NAV: { href: string; label: string }[] = [
  { href: "/tratamientos/", label: "Tratamientos" },
  { href: "/la-doctora/", label: "La doctora" },
  { href: "/casos/", label: "Casos" },
  { href: "/primera-consulta/", label: "Primera consulta" },
  { href: "/contacto/", label: "Contacto" }
];

export const pageTitle = (pagina: string) => `${pagina} · ${SITE.sufijoTitulo}`;
