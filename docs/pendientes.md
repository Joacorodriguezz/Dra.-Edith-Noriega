# Pendientes para la Dra. Edith Noriega

Este documento junta todo lo que hay que validar o completar antes de dar el sitio por cerrado. Las afirmaciones de la sección 1 ya están publicadas sin la marca de revisión del prototipo: hay que confirmarlas o corregirlas.

## 1. Afirmaciones publicadas que la Dra. tiene que validar

### Inicio (`/`)

- "Más de 20 años en ortodoncia" (el prototipo decía "confirmar 20 o 25"; se publicó 20 por ser la cota segura).
- "Plan y seguimiento: las alternativas, las etapas y los controles" (recorrido de la primera consulta).
- "¿El láser reemplaza otros tratamientos? No. Es un recurso que se suma a algunos tratamientos cuando la evaluación lo indica."
- Autorización de los tres casos clínicos para que se publiquen en el sitio nuevo.
- Días de atención en La Plata (miércoles, jueves y viernes) y sus horarios: 10 a 18 h, 12 a 19:30 h y 11 a 19 h. Hay que confirmar que correspondan a La Plata.

### Odontología general (`/tratamientos/odontologia-general/`)

- "Seguimiento: prevención y próximo control. La frecuencia depende de cada persona."

### Ortodoncia (`/tratamientos/ortodoncia/`)

- Tabla comparativa de alternativas (tipo, visibilidad, si se retira para comer, qué requiere, para quién).
- "Adolescencia: con los dientes permanentes se corrigen la posición y la mordida."
- "Cómo es el proceso": las cinco etapas habituales y sus descripciones.
- "¿Molesta usar brackets o alineadores? Puede haber molestias los primeros días después de cada ajuste o cambio de alineador."
- "¿Cuánto cuesta? El presupuesto se informa después de la evaluación, según el plan."

### Láser (`/tratamientos/laser/`)

- "Las sensaciones durante la aplicación varían según el caso y la zona" (tarjeta de cada aplicación).

### Neuralgias y ATM (`/tratamientos/atm/`)

- Trastornos de la ATM: "Pueden aparecer molestias al abrir o cerrar la boca, ruidos en la articulación, dolor al masticar o sensación de mandíbula cansada."
- Neuralgias: "Dolor relacionado con un nervio, como el trigémino, con características propias. Muchas veces requiere trabajar con otros especialistas."
- Estructuras: disco articular ("algunos ruidos de la articulación se relacionan con cambios en su posición") y músculo masetero ("puede sentirse tenso o dolorido").
- "Cómo se aborda": evaluación, estudios complementarios y plan interdisciplinario.

### Ortodoncia quirúrgica (`/tratamientos/ortodoncia-quirurgica/`)

- "Cómo se planifica un caso complejo": las seis etapas, quién participa en cada una y la frase "La Dra. no realiza procedimientos quirúrgicos".

### La doctora (`/la-doctora/`)

- Tercer párrafo de la filosofía de atención: "Me actualizo de forma constante en ortodoncia lingual, alineadores y tecnología láser, para que cada paciente tenga una experiencia más cómoda."
- Docencia: "2019–2020, Diplomatura en Docencia, Universidad Favaloro" (confirmar el año).
- Curso workshop de microimplantes y prótesis (2019–2020): no se publica porque falta la institución y confirmar el año.
- Publicación "Terapia (LLT) post cirugía de distracción ósea, publicada en ResearchGate": confirmar el enlace y el año.
- Equipo multidisciplinario: confirmar los nombres del equipo.
- Cómo comunicar la formación en posturología (hoy no se muestra en ninguna página).
- Texto "Otros cursos y formación: la información adicional se incorpora cuando esté confirmada".

### Casos clínicos (`/casos/`)

- Autorización escrita de cada paciente para el sitio nuevo y para cada foto.
- Caso 3 (híbrido y láser): el caso original indicaba 13 y 17 meses y comparaba con un tratamiento sin láser. No se publican duraciones; revisar antes de agregarlas.
- Las fotos son collages con varias etapas en una sola imagen. Para un comparador antes/después hacen falta fotos separadas (ver sección 3).

### Primera consulta (`/primera-consulta/`)

- Los cinco pasos del recorrido describen un proceso general: la Dra. tiene que confirmar los pasos internos.
- "Seguimiento: la frecuencia depende de cada tratamiento."

### Contacto (`/contacto/`)

- Cómo llegar a cada consultorio y las indicaciones dentro de la clínica de Quilmes (el prototipo tenía un espacio para mapas con la marca "a confirmar").

## 2. Información que falta y no se publicó

- **Dominio.** Se desconoce. `astro.config.mjs` usa `https://draedithnoriega.com.ar` por defecto (con un `TODO`) y se cambia con la variable `SITE_URL`. También hay que actualizar la línea `Sitemap:` de `public/robots.txt`.
- **Días de La Plata** (ver Inicio).
- **Obras sociales y prepagas.** Falta saber cuáles se atienden. Se quitaron la pregunta frecuente del inicio y el ítem "credencial de obra social" de la lista de la primera consulta.
- **Costo de la primera consulta.**
- **Duración de la primera consulta.**
- **Turnos en línea** además de WhatsApp.
- **Matrícula profesional.** Se quitó del encabezado de "La doctora" y del pie.
- **Conocimiento.** Se eliminó la página y su entrada del menú. Quedaban dos tarjetas (ponencia en SAO y disertación en ACALO), que ya figuran en "La doctora".
- **Logos en SVG o PNG con fondo transparente.** Hoy la barra usa un recorte del isotipo y el nombre en texto.
- **Autorización de los casos** para el sitio nuevo (ver Casos).
- **Posturología.** No se muestra en ninguna página hasta que la Dra. confirme cómo comunicarla.

## 3. Pendientes de la Fase 2

- **Testimonios.** Las citas de pacientes no se editan. Estas afirmaciones prometen resultados o tiempos y la Dra. tiene que decidir si se publican tal cual:
  - María Carolina: "con tratamiento de láser para evitar el dolor, cero dolor"; "en un año y medio se han logrado excelentes resultados"; el tratamiento rotulado "híbrido acelerado".
  - Gabriel: "gracias a eso me recuperé mucho antes".
  - Dora: "ahora puedo dormir toda la noche. Ya no me duele nada"; "el dolor ya se me fue".
  - Catalina: "gracias al láser […] hace que no tenga dolor y además que se acelere un montón el tratamiento"; "para no sufrir dolor".
  - Guillermo: "el tratamiento se llevó adelante de manera muy rápida. En solo seis meses pude finalizar"; el tratamiento rotulado "ortodoncia acelerada".
  - Vanesa: "salió del quirófano con muy poco dolor"; "realmente no tuvo más dolor"; "apenas tuvo hinchazón y apenas tuvo dolor".
- **Comparador antes/después: bloqueado.** Las fotos de casos son collages con varias etapas en una sola imagen, así que un deslizador no se puede hacer bien. Hacen falta fotos de antes y después separadas, con la misma toma y el mismo encuadre.
- **Horarios de La Plata.** El cálculo de "Hoy atiende en…" usa los días de `app/data/sedes.ts`; si cambian, se actualizan ahí y se refleja también en los datos estructurados.
