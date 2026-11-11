/* Copia legible del script de "Dra. Edith Noriega.html" (sin la foto en base64, reemplazada por DATAURI). Solo referencia: no se importa. */

(function(){
"use strict";
var PHOTO = "DATAURI";
var WA = "https://wa.me/5492213185753", WA_TXT = "+54 9 221 318-5753";
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var S = { prefArea:"", need:0, txArea:"ortodoncia", txMode:"area", ox:"metal", laser:"tejidos", atmPart:"condilo", atmOpen:false, qx:0, tooth:11, tlCats:{titulo:1,continua:1,ciencia:1,curso:1}, tlSel:"esp", tlView:"", caseArea:"todos", caseTec:"todas", cmp:[], jStep:0, knArea:"todas", checks:{} };
function $(s,r){ return (r||document).querySelector(s); }
function $$(s,r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }
function esc(t){ return String(t).replace(/[&<>"]/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function F(t){ return '<span class="flag">' + (t||"A validar") + '</span>'; }
var CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';

/* ---------- Íconos (trazo continuo, dentro de en-icon-chip) ---------- */
var IC = {
  "odontologia-general":'<path d="M7 3C4.8 3 3 4.8 3 7.2c0 2.1.8 3.6 1.4 5.3.6 1.8.7 4 1.2 6.2.3 1.4 1 2.3 1.9 2.3 1.1 0 1.5-1.2 1.8-2.6.3-1.4.6-3 1.7-3s1.4 1.6 1.7 3c.3 1.4.7 2.6 1.8 2.6.9 0 1.6-.9 1.9-2.3.5-2.2.6-4.4 1.2-6.2.6-1.7 1.4-3.2 1.4-5.3C21 4.8 19.2 3 17 3c-1.9 0-3 1-5 1S8.9 3 7 3z"/>',
  "ortodoncia":'<path d="M3 8c2 6 5.5 9 9 9s7-3 9-9"/><rect x="5.2" y="11" width="2.8" height="2.8" rx=".6"/><rect x="10.6" y="15.6" width="2.8" height="2.8" rx=".6"/><rect x="16" y="11" width="2.8" height="2.8" rx=".6"/>',
  "laser":'<path d="M3 21l8.5-8.5"/><circle cx="14.5" cy="9.5" r="3"/><path d="M14.5 2.5v2M21.5 9.5h-2M19.5 4.5l-1.4 1.4M19.5 14.5l-1.4-1.4M9.5 4.5l1.4 1.4"/>',
  "atm":'<path d="M4 7.5C5.5 4.5 8.5 3 12 3"/><circle cx="8" cy="8.5" r="2.5"/><path d="M8 11c0 4.5 2.5 8.5 8 10h4"/><path d="M20 21v-4"/>',
  "ortodoncia-quirurgica":'<path d="M13 3c-3.3 0-5.5 2.4-5.5 5.6 0 1-1.4 2.6-2.3 4 .8.4 1.8.5 1.8 1.4 0 .8-.6 1.5-.1 2.3.5.9 1.8.4 1.8 1.5 0 1.9.8 3.2 3.3 3.2h1.5"/><path d="M17 3v18" stroke-dasharray="2 3"/><path d="M17 9h3M17 15h3"/>',
  "posturologia":'<path d="M12 3v14" stroke-dasharray="2 3"/><circle cx="12" cy="19.5" r="2"/>'
};
function chip(id){ return '<span class="en-icon-chip"><svg viewBox="0 0 24 24" aria-hidden="true">' + IC[id] + '</svg></span>'; }

/* ---------- Datos ---------- */
var AREAS = [
  { id:"odontologia-general", name:"Odontología general", line:"Evaluación, diagnóstico, prevención y seguimiento. También rehabilitación en adultos y adultos mayores.", inc:["Controles, prevención y diagnóstico integral","Tratamientos de conducto","Prótesis removibles y fijas","Implantes, pernos y coronas","Atención adaptada a adultos mayores"] },
  { id:"ortodoncia", name:"Ortodoncia", line:"Evaluación funcional, planificación y alternativas según la edad: desde la ortopedia en chicos hasta tratamientos en adultos.", inc:["Brackets metálicos","Brackets estéticos (ice, zafiro)","Alineadores transparentes","Tratamientos híbridos","Ortopedia dentomaxilar para chicos"] },
  { id:"laser", name:"Láser odontológico", line:"Láser de diodo de 980 nm, con aplicaciones distintas entre sí. Cada uso tiene su propia indicación.", inc:["Tejidos blandos: frenectomía, gingivoplastia y coagulación","Aftas y herpes","Descontaminación en endodoncia y periodoncia","Apoyo en ortodoncia (fotobiomodulación)","Blanqueamiento asistido con láser"] },
  { id:"atm", name:"Neuralgias y ATM", line:"Evaluación de molestias mandibulares y dolor orofacial, con diagnóstico diferencial y trabajo interdisciplinario.", inc:["Evaluación de la ATM (articulación temporomandibular)","Evaluación del dolor orofacial","Diagnóstico diferencial","Tecnología láser cuando está indicada","Trabajo con otros especialistas"] },
  { id:"ortodoncia-quirurgica", name:"Ortodoncia quirúrgica y malformaciones", line:"Planificación y seguimiento ortodóncico de casos que se resuelven junto a cirugía maxilofacial y otras especialidades.", inc:["Ortodoncia pre y posquirúrgica en cirugía ortognática","Pacientes con fisuras, unilaterales o bilaterales","Pacientes con síndrome de Down u otras condiciones","Coordinación con cirugía, fonoaudiología y técnicos dentales"] },
  { id:"posturologia", name:"Posturología", soon:true, line:"Formación en desarrollo. Todavía no es un tratamiento disponible en el consultorio." }
];
function area(id){ for (var i=0;i<AREAS.length;i++) if (AREAS[i].id===id) return AREAS[i]; return null; }
var RELS = [
  ["odontologia-general","ortodoncia","La evaluación general es la puerta de entrada a la ortodoncia."],
  ["odontologia-general","laser","El láser se usa para descontaminar en endodoncia y periodoncia."],
  ["ortodoncia","laser","La fotobiomodulación puede sumarse como apoyo en algunos tratamientos."],
  ["ortodoncia","ortodoncia-quirurgica","La ortodoncia prepara y completa los casos que requieren cirugía."],
  ["laser","atm","La tecnología láser se considera en algunos casos, según la evaluación."]
];
function relsFor(id){ var o=[]; RELS.forEach(function(r){ if(r[0]===id) o.push([r[1],r[2]]); else if(r[1]===id) o.push([r[0],r[2]]); }); return o; }
var NEEDS = [
  { t:"Quiero mejorar la alineación de mis dientes", areas:["ortodoncia"], text:"La alineación se evalúa junto con la mordida y la función. Hay alternativas fijas, removibles o combinadas, y cuál conviene se define después de la evaluación.", read:"Explorá las alternativas de ortodoncia", to:"ortodoncia", bring:"Estudios previos y tratamientos de ortodoncia anteriores, si los tuviste." },
  { t:"Quiero hacer una consulta odontológica general", areas:["odontologia-general"], text:"Es la puerta de entrada: revisión de toda la boca, diagnóstico, prevención y un plan de seguimiento.", read:"Cómo es la primera consulta", to:"primera-consulta", bring:"Radiografías recientes, si tenés, y la lista de medicamentos que tomás." },
  { t:"Tengo molestias en la mandíbula", areas:["atm"], text:"Ruidos al abrir la boca, dificultad para masticar o dolor cerca del oído pueden tener causas distintas. La evaluación orienta el diagnóstico y, si hace falta, la consulta con otros profesionales.", read:"Cómo funciona la articulación", to:"atm", bring:"Una descripción de cuándo aparecen las molestias y desde cuándo." },
  { t:"Quiero consultar por dolor orofacial", areas:["atm","laser"], text:"Una neuralgia y un trastorno de la ATM no son lo mismo, aunque a veces se relacionen. El primer paso es una evaluación detallada, sin suponer la causa.", read:"Neuralgia y ATM, lado a lado", to:"atm", bring:"Estudios o informes médicos previos relacionados con el dolor." },
  { t:"Necesito una evaluación ortodóncica para mi hijo o hija", areas:["ortodoncia"], text:"Con dientes de leche o en recambio, la evaluación permite seguir el crecimiento de los maxilares y decidir si conviene intervenir o esperar.", read:"Ortodoncia según la edad", to:"ortodoncia", bring:"Que venga acompañado por un adulto responsable." },
  { t:"Necesito información sobre un caso complejo", areas:["ortodoncia-quirurgica"], text:"Cuando hay alteraciones de los maxilares o malformaciones, la ortodoncia se planifica junto a cirugía maxilofacial y otras especialidades.", read:"Cómo se planifica un caso complejo", to:"ortodoncia-quirurgica", bring:"Estudios e informes de otros profesionales que te hayan atendido." },
  { t:"Quiero conocer las aplicaciones del láser", areas:["laser"], text:"El láser tiene usos diferentes entre sí: tejidos blandos, apoyo en ortodoncia, endodoncia y periodoncia. Ninguno reemplaza la evaluación.", read:"Las aplicaciones del láser", to:"laser", bring:"Nada en especial. Contá qué te interesa consultar." }
];
var CASES = [
  { id:"apinamiento", areas:["ortodoncia"], tec:["brackets"], title:"Apiñamiento severo con brackets metálicos", tags:[["Ortodoncia","brand"],["Brackets metálicos","aqua"]],
    sit:"Apiñamiento dentario severo y mordida alterada. La paciente buscaba mejorar la estética y lograr una masticación equilibrada.",
    obj:"Corregir el apiñamiento y las rotaciones, lograr una oclusión funcional y estable y mejorar la estética de la sonrisa.",
    abo:"Brackets metálicos con técnica de arco recto: alineación, nivelación, cierre de espacios y finalización, con controles periódicos.",
    con:"La evolución dependió de la planificación, los controles y el compromiso de la paciente.",
    ms:[["2022-12","Consulta inicial"],["2023-04","Etapa 1: alineación y nivelación"],["2023-12","Etapa 2: corrección del apiñamiento"],["2025-03","Etapa 3: consolidación"]], segs:[], consent:"Publicado con consentimiento escrito de la paciente, protegiendo su identidad." },
  { id:"clase3", areas:["ortodoncia"], tec:["brackets"], title:"Clase III con canino retenido", tags:[["Clase III","brand"],["Canino retenido","aqua"]],
    sit:"Maloclusión de Clase III (los dientes inferiores quedan adelantados respecto de los superiores), apiñamiento y un canino superior retenido.",
    obj:"Lograr la erupción y alineación del canino, corregir la relación entre arcadas y alinear ambas.",
    abo:"Brackets metálicos con técnica de arco recto para traccionar el canino, con control radiográfico periódico.",
    con:"Los dientes retenidos requieren diagnóstico preciso y seguimiento radiográfico durante todo el tratamiento.",
    ms:[["2023-11","Inicio: aparatología fija"],["2023-12","Etapa 1: alineación"],["2024-05","Etapa 2: consolidación"],["2024-12","Etapa 3: control radiográfico"]], segs:[], consent:"Publicado con consentimiento escrito del paciente, protegiendo su identidad." },
  { id:"clase2", areas:["ortodoncia","laser"], tec:["brackets","alineadores","hibrido","laser"], title:"Clase II con apiñamiento anterior: ortodoncia híbrida con láser", tags:[["Clase II","brand"],["Híbrido","aqua"],["Láser","aqua"]],
    sit:"Paciente adulta con Clase II del lado derecho, incisivos superiores adelantados, inferiores retraídos y apiñamiento. Había consultado antes sin encontrar una alternativa.",
    obj:"Expandir ambas arcadas, corregir apiñamientos y protrusiones y mejorar la relación entre arcadas.",
    abo:"Brackets metálicos abajo y alineadores arriba, con fotobiomodulación con láser de diodo de 980 nm en cada recambio.",
    con:"La fotobiomodulación se indicó como apoyo en este caso puntual. No anticipa los tiempos de otros pacientes.",
    ms:[["2023-07","Brackets inferiores"]], segs:[["2023-10","2024-02","Etapa 1 de alineadores"],["2024-03","2024-07","Etapa 2 de alineadores"],["2024-09","2024-12","Etapa 3 de alineadores"]],
    flag:"El caso original indica 13 y 17 meses y compara con un tratamiento sin láser: revisar antes de publicar duraciones.", consent:"Publicado con consentimiento escrito de la paciente, protegiendo su identidad." }
];
var TL = [
  { id:"odo", cat:"titulo", lane:0, a:1988, b:1993, t:"Odontología", i:"Facultad de Odontología, Universidad Nacional de La Plata" },
  { id:"esp", cat:"titulo", lane:0, a:1995, b:2000, t:"Especialista en Ortodoncia", i:"Facultad de Odontología, Universidad Nacional de La Plata" },
  { id:"lin", cat:"titulo", lane:0, a:2008, b:2008.6, t:"Especialista en Ortodoncia Lingual", i:"Sociedad Argentina de Ortodoncia Lingual" },
  { id:"pq", cat:"titulo", lane:0, a:2011, b:2021, t:"Ortodoncia pre y posquirúrgica en cirugía ortognática", i:"Hospital Piñero, Sociedad Argentina de Ortodoncia" },
  { id:"doc", cat:"continua", lane:0, a:2019, b:2020, t:"Diplomatura en Docencia para Ciencias de la Salud", i:"Universidad Favaloro", flag:"Confirmar año" },
  { id:"mic", cat:"continua", lane:1, a:2019, b:2020, t:"Curso workshop de microimplantes y prótesis", i:"Institución a confirmar", flag:"Confirmar año" },
  { id:"las", cat:"continua", lane:0, a:2021, b:2022, t:"Diplomatura en Odontología Láser y Ciencias de la Salud", i:"Universidad Abierta Interamericana" },
  { id:"ali", cat:"continua", lane:0, a:2023, b:2024, t:"Diplomatura Universitaria en Alineadores Clínico y Diseño", i:"Universidad Católica de La Plata y Sociedad Argentina de Ortodoncia" },
  { id:"sao", cat:"ciencia", lane:0, a:2024.5, b:2024.75, t:"Ponente · Congreso de Invierno 2024, SAO", i:"Terapia (LLT) post cirugía de distracción ósea. Buenos Aires, agosto de 2024. Aprobada por el Comité Científico." },
  { id:"aca", cat:"ciencia", lane:1, a:2024.55, b:2024.8, t:"Disertante · 4.° Congreso de Odontología Láser, ACALO", i:"Terapia láser en ortodoncia con alineadores. Salta, agosto de 2024." },
  { id:"atmc", cat:"curso", lane:0, a:2025.2, b:2026.9, open:true, t:"Especialidad en Láser en Ortodoncia y ATM", i:"Universidad Europea Miguel de Cervantes. En curso desde marzo de 2025." },
  { id:"pos", cat:"curso", lane:1, a:2025.9, b:2026.9, open:true, t:"Posturología", i:"Formación en desarrollo. Todavía no forma parte de los tratamientos del consultorio.", flag:"Confirmar cómo comunicarla" }
];
var TLCATS = { titulo:["Títulos y especializaciones",""], continua:["Formación continua","aq"], ciencia:["Actividad científica","out"], curso:["En curso","now"] };

/* ---------- Bloques comunes ---------- */
function crumbs(items){ return '<nav aria-label="Ruta de navegación"><ol class="crumbs">' + items.map(function(it){ return '<li>' + (it[1] ? '<a href="#' + it[1] + '">' + it[0] + '</a>' : '<span aria-current="page">' + it[0] + '</span>') + '</li>'; }).join("") + '</ol></nav>'; }
var SHAPES = {
  "odontologia-general":'<span class="en-disc" style="--size:220px;right:-40px;top:10px"></span><span class="en-star" style="--size:70px;--shape:var(--aqua);right:190px;top:170px"></span>',
  "ortodoncia":'<span class="en-quarter en-quarter--framed" style="--size:230px;right:-30px;top:0"><i></i></span>',
  "laser":'<span class="en-star" style="--size:200px;--shape:var(--brand);right:-20px;top:20px"><i></i><i></i><i></i><i></i></span><span class="en-disc" style="--size:80px;--shape:var(--aqua-soft);--ring:var(--brand);right:200px;top:150px"></span>',
  "atm":'<span class="en-disc" style="--size:220px;--shape:var(--aqua-soft);--ring:var(--brand);right:-40px;top:10px"></span>',
  "ortodoncia-quirurgica":'<span class="en-quarter" style="--size:220px;--shape:var(--aqua-soft);right:-20px;top:10px"></span><span class="en-quarter" style="--size:90px;right:190px;top:140px"></span>',
  "default":'<span class="en-quarter" style="--size:200px;--shape:var(--surface-tint);right:-20px;top:20px"></span><span class="en-star" style="--size:64px;--shape:var(--aqua);right:180px;top:40px"><i></i><i></i><i></i><i></i></span>'
};
function pageHead(o){
  return '<section class="pagehead"><div class="wrap"><div class="copy-col">' + crumbs(o.crumbs) + '<p class="eyebrow">' + o.eyebrow + '</p><h1 class="h1" tabindex="-1">' + o.title + '</h1><p class="lead">' + o.lead + '</p>' + (o.extra||"") +
    (o.facts ? '<div class="facts-line">' + o.facts.map(function(f){ return '<span><b>' + f[0] + '</b><em>' + f[1] + '</em></span>'; }).join("") + '</div>' : '') + '</div><div class="shapes" aria-hidden="true">' + (SHAPES[o.shape] || SHAPES["default"]).replace(/<span class="en-star"([^>]*)><\/span>/g,'<span class="en-star"$1><i></i><i></i><i></i><i></i></span>') + '</div></div></section>';
}
function areaHead(id, lead, facts){ var a = area(id); return pageHead({crumbs:[["Inicio","inicio"],["Tratamientos","tratamientos"],[a.name]], eyebrow:"Tratamientos", title:a.name, lead:lead, facts:facts, shape:id}); }
function cta(title, text, areaId){
  return '<section class="section" style="padding-top:0"><div class="wrap"><div class="en-cta"><span class="en-quarter" aria-hidden="true"></span><h2 class="h2">' + title + '</h2><p>' + text + '</p><div class="en-cta__actions"><a class="en-btn en-btn--aqua" href="' + WA + '" target="_blank" rel="noopener">Pedí tu turno por WhatsApp</a><button type="button" class="en-btn en-btn--ghost-white" data-consult="' + (areaId||"") + '">Dejar una consulta</button></div></div></div></section>';
}
function nextNav(id){
  var list = AREAS.filter(function(a){ return !a.soon; }), i = 0; list.forEach(function(a,k){ if(a.id===id) i=k; });
  var p = list[(i-1+list.length)%list.length], n = list[(i+1)%list.length];
  return '<section class="section" style="padding-top:0"><div class="wrap"><nav class="nextnav" aria-label="Otras áreas"><a href="#' + p.id + '"><span class="eyebrow">Área anterior</span><span class="h3">' + p.name + '</span></a><a href="#' + n.id + '"><span class="eyebrow">Área siguiente</span><span class="h3">' + n.name + '</span></a></nav></div></section>';
}
function faq(list){ return '<div class="faq">' + list.map(function(q,i){ return '<details' + (i===0?' open':'') + '><summary>' + q[0] + '</summary><div class="a">' + q[1] + '</div></details>'; }).join("") + '</div>'; }
function li(t){ return '<li>' + t + '</li>'; }
function head(eyebrow, title, text){ return '<div class="en-section-head"><p class="eyebrow">' + eyebrow + '</p><h2 class="h2">' + title + '</h2>' + (text ? '<p>' + text + '</p>' : '') + '</div>'; }

/* ---------- Inicio ---------- */
function pInicio(){
  var h = '<section><div class="wrap"><div class="en-hero"><div class="en-hero__copy"><p class="eyebrow">Odontóloga · Ortodoncista</p><h1 class="display" tabindex="-1">Experiencia, tecnología y calidez para cuidar tu sonrisa.</h1>' +
    '<p class="lead">El tratamiento que necesitás para cada etapa de tu vida. Odontología, ortodoncia y tecnología láser con una evaluación integral.</p>' +
    '<div class="en-hero__actions"><a class="en-btn en-btn--primary" href="#contacto">Pedí tu turno</a><button type="button" class="en-btn en-btn--outline" data-scroll="necesidades">¿Qué te trae a la consulta?</button></div>' +
    '<p class="wa-line">WhatsApp ' + WA_TXT + ' <button type="button" class="copy" data-copy="' + WA_TXT + '">Copiar número</button></p></div>' +
    '<div class="en-hero__stage"><span class="en-quarter" aria-hidden="true"></span><div class="en-portrait"><div class="en-portrait__slot"><img src="' + PHOTO + '" alt="Retrato de la Dra. Edith Noriega con ambo blanco"></div></div><span class="en-star" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div></div></div></section>';
  h += '<section class="creds" aria-label="Formación destacada"><div class="wrap"><ul><li><b>Especialista en Ortodoncia</b><span>Universidad Nacional de La Plata · 2000</span></li><li><b>Ortodoncia pre y posquirúrgica</b><span>Hospital Piñero · SAO · 2011–2021</span></li><li><b>Diplomada en Odontología Láser</b><span>Universidad Abierta Interamericana · 2022</span></li><li><b>Más de 20 años en ortodoncia</b><span>Consultorios en La Plata y Quilmes ' + F("Confirmar 20 o 25") + '</span></li></ul></div></section>';

  h += '<section class="section section--tint" id="necesidades"><div class="wrap"><div class="head-row">' + head("Empezá por lo que te pasa","¿Qué te trae a la consulta?","Elegí la opción más cercana a tu situación y te mostramos qué leer y qué llevar. No es un diagnóstico.") + '<a class="en-link" href="#tratamientos">Ya sé qué busco: ver tratamientos</a></div>' +
    '<div class="needs"><ul aria-label="Motivos de consulta">' + NEEDS.map(function(n,i){ return '<li><button type="button" class="need" data-need="' + i + '" aria-pressed="' + (i===S.need) + '"><span>' + n.t + '</span>' + CHEV + '</button></li>'; }).join("") + '</ul><div class="guide" id="guide" aria-live="polite"></div></div></div></section>';

  h += '<section class="section"><div class="wrap"><div class="head-row">' + head("Especialidades","Tratamientos para todas las etapas, desde una temprana edad","") + '<a class="en-btn en-btn--outline" href="#tratamientos">Ver todos los tratamientos</a></div><div class="bento">' +
    card("odontologia-general","s2") + card("ortodoncia","s4", '<ul class="tags">' + ["Brackets metálicos","Brackets estéticos","Alineadores","Híbridos","Ortopedia infantil"].map(function(t){ return '<li class="en-badge en-badge--brand">' + t + '</li>'; }).join("") + '</ul>') +
    card("laser","s4 en-card--brand", '<ul class="tags">' + ["Tejidos blandos","Apoyo en ortodoncia","Endodoncia y periodoncia"].map(function(t){ return '<li class="en-badge en-badge--brand">' + t + '</li>'; }).join("") + '</ul>') + card("atm","s2") + card("ortodoncia-quirurgica","s3") +
    '<article class="en-card en-card--soon s3"><div class="card-top">' + chip("posturologia") + '<span class="en-badge en-badge--soon">Próximamente</span></div><h3 class="h3">Posturología</h3><p>La Dra. está incorporando formación en esta área. Todavía no es un tratamiento disponible.</p></article></div></div></section>';

  h += '<section class="section section--aqua"><div class="wrap"><div class="head-row">' + head("Investigación y actualización constante","Casos reales, explicados paso a paso","Casos documentados y publicaciones que reflejan el trabajo de la Dra. Cada caso es individual y no anticipa el resultado de otro tratamiento.") + '<a class="en-btn en-btn--outline" href="#casos" style="background:var(--surface)">Explorar y comparar casos</a></div>' +
    '<div class="en-cards" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">' + CASES.map(function(c){ return '<article class="en-card hover"><div class="en-case__pair"><div class="en-case__photo"><b>Antes</b>Foto pendiente</div><div class="en-case__photo"><b>Después</b>Foto pendiente</div></div><div class="tags">' + c.tags.map(function(t){ return '<span class="en-badge en-badge--' + t[1] + '">' + t[0] + '</span>'; }).join("") + '</div><h3 class="h3">' + c.title + '</h3><p class="en-case__note">' + c.consent + '</p><a class="en-link" href="#casos" data-case="' + c.id + '">Ver el caso</a></article>'; }).join("") + '</div>' +
    '<p class="small" style="margin-top:var(--space-5)">' + F("A confirmar") + ' Que la autorización de los tres casos alcance al nuevo sitio.</p></div></section>';

  h += '<section class="section"><div class="wrap stack" style="gap:var(--space-8)"><div class="en-quote"><span class="en-quarter" aria-hidden="true"></span><blockquote>Un buen diagnóstico integral es la clave para el éxito de todos los tratamientos.</blockquote><cite>Dra. Edith Noriega</cite></div>' +
    '<div class="split"><div class="en-section-head"><p class="eyebrow">Trayectoria</p><h2 class="h2">Una trayectoria dedicada al avance de la ortodoncia</h2><p>Formación universitaria, especialización hospitalaria y actualización constante en tecnología láser y alineadores.</p><a class="en-link" href="#la-doctora" style="align-self:flex-start">Conocé a la doctora</a></div>' +
    '<ol class="timeline"><li><span class="y">1988–1993</span><b>Odontología</b><span class="m">Facultad de Odontología, UNLP</span></li><li><span class="y">1995–2000</span><b>Especialista en Ortodoncia</b><span class="m">Facultad de Odontología, UNLP</span></li><li><span class="y">2011–2021</span><b>Ortodoncia pre y posquirúrgica</b><span class="m">Hospital Piñero, Sociedad Argentina de Ortodoncia</span></li><li><span class="y">2021–2022</span><b>Diplomatura en Odontología Láser</b><span class="m">Universidad Abierta Interamericana</span></li><li class="now"><span class="y">2024</span><b>Disertante en congresos de SAO y ACALO</b><span class="m">Terapia láser en ortodoncia</span></li></ol></div></div></section>';

  h += '<section class="section section--surface"><div class="wrap"><div class="head-row">' + head("Tu primera consulta","Qué pasa cuando pedís un turno","No hace falta saber de antemano qué tratamiento necesitás.") + '<a class="en-link" href="#primera-consulta">Ver cómo es una primera consulta</a></div>' +
    '<ol class="steps"><li class="step"><span class="step__n">1</span><h3 class="h4">Pedís el turno</h3><p class="muted">Por WhatsApp, eligiendo el consultorio de La Plata o el de Quilmes.</p></li><li class="step"><span class="step__n">2</span><h3 class="h4">Evaluación</h3><p class="muted">Conversación sobre el motivo de consulta y revisión clínica.</p></li><li class="step"><span class="step__n">3</span><h3 class="h4">Estudios, si hacen falta</h3><p class="muted">Según el caso, una radiografía panorámica o una cefalometría.</p></li><li class="step"><span class="step__n">4</span><h3 class="h4">Plan y seguimiento</h3><p class="muted">Las alternativas, las etapas y los controles. ' + F() + '</p></li></ol></div></section>';

  h += '<section class="section section--tint"><div class="wrap split"><div class="en-section-head"><p class="eyebrow">Preguntas frecuentes</p><h2 class="h2">Dudas antes de consultar</h2><p>Si tu pregunta no está acá, escribinos por WhatsApp.</p></div>' + faq([
    ["¿Cómo pido un turno?","Por WhatsApp al " + WA_TXT + ". Contanos tu nombre, el motivo de consulta y en qué consultorio preferís atenderte."],
    ["¿Dónde atiende la Dra. Noriega?","En La Plata (calle 49 n.º 390, entre 2 y 3) los miércoles, jueves y viernes, y en Quilmes (Hipólito Yrigoyen 439, Clínica CEMEPRO Bristol) los martes."],
    ["¿Hay una edad para empezar ortodoncia?","No hay una edad límite. En chicos se evalúa el crecimiento de los maxilares y en adultos también hay alternativas."],
    ["¿El láser reemplaza otros tratamientos?","No. Es un recurso que se suma a algunos tratamientos cuando la evaluación lo indica. " + F()],
    ["¿Atienden obras sociales o prepagas?", F("A confirmar") + " Información pendiente de la Dra."]]) + '</div></section>';
  h += sedes();
  return h;
}
function card(id, cls, extra){ var a = area(id); var brand = cls.indexOf("brand")>-1;
  return '<article class="en-card hover ' + cls + '"><div class="card-top">' + chip(id) + (id==="laser" ? '<span class="en-badge en-badge--brand">980 nm</span>' : '') + '</div><h3 class="h3">' + a.name + '</h3><p>' + a.line + '</p>' + (extra||"") + '<a class="en-link" href="#' + id + '">Conocé ' + (id==="ortodoncia" ? "el tratamiento" : "esta área") + '</a></article>'; }
function guideHTML(){ var n = NEEDS[S.need];
  return '<p class="eyebrow">Motivo ' + (S.need+1) + ' de ' + NEEDS.length + '</p><h3 class="h3">' + n.t + '</h3><p class="muted">' + n.text + '</p><dl><dt>Áreas</dt><dd class="rels">' + n.areas.map(function(id){ return '<a class="rel" href="#' + id + '">' + area(id).name + '</a>'; }).join("") + '</dd><dt>Para leer</dt><dd><a class="en-link" href="#' + n.to + '">' + n.read + '</a></dd><dt>Para llevar</dt><dd>' + n.bring + '</dd></dl>' +
    '<div class="guide-foot"><button type="button" class="en-btn en-btn--primary en-btn--sm" data-consult="' + n.areas[0] + '">Consultar por este tema</button><p class="small">Esto no es un diagnóstico: es una guía para orientarte antes de la consulta.</p></div>'; }
function today(){ var d = new Date().getDay(), N = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"], M = {2:"Quilmes, de 9 a 16 h",3:"La Plata, de 10 a 18 h",4:"La Plata, de 12 a 19:30 h",5:"La Plata, de 11 a 19 h"};
  if (M[d]) return '<p class="today"><i></i>Hoy ' + N[d] + ' atiende en ' + M[d] + '</p>';
  var nx = d; for (var k=1;k<8;k++){ nx=(d+k)%7; if (M[nx]) break; } return '<p class="today"><i></i>Hoy no hay atención. Próximo día: ' + N[nx] + ' en ' + M[nx].split(",")[0] + '</p>'; }
function sedeCards(){
  return '<div class="en-sede"><p class="eyebrow">Consultorio La Plata</p><h3 class="h3">Calle 49 n.º 390, entre 2 y 3</h3><dl class="hours"><dt>MIÉ</dt><dd>10 a 18 h</dd><dt>JUE</dt><dd>12 a 19:30 h</dd><dt>VIE</dt><dd>11 a 19 h</dd></dl><p class="small">' + F("A confirmar") + ' Que estos días correspondan a La Plata.</p><a class="en-btn en-btn--aqua" href="' + WA + '" target="_blank" rel="noopener">Pedí tu turno por WhatsApp</a><p class="small">' + WA_TXT + '</p></div>' +
    '<div class="en-sede"><p class="eyebrow">Consultorio Quilmes</p><h3 class="h3">Hipólito Yrigoyen 439</h3><p>Clínica CEMEPRO Bristol</p><dl class="hours"><dt>MAR</dt><dd>9 a 16 h</dd></dl><a class="en-btn en-btn--aqua" href="' + WA + '" target="_blank" rel="noopener">Pedí tu turno por WhatsApp</a><p class="small">' + WA_TXT + '</p></div>';
}
function sedes(){ return '<section class="section"><div class="wrap"><div class="head-row">' + head("Contacto","Pedí tu turno","Los turnos se coordinan por WhatsApp. Elegí el consultorio que te quede más cómodo.") + today() + '</div><div class="en-contact">' + sedeCards() + '<div class="en-sede" style="background:var(--surface-tint);box-shadow:none"><p class="eyebrow">Otra forma de consultar</p><h3 class="h3">Dejanos tu consulta por área</h3><p>Indicá qué área te interesa y te contactamos.</p><a class="en-btn en-btn--outline" href="#contacto">Ir al formulario</a></div></div></div></section>'; }

/* ---------- Tratamientos ---------- */
function pTratamientos(){
  var h = pageHead({crumbs:[["Inicio","inicio"],["Tratamientos"]], eyebrow:"Tratamientos", title:"El tratamiento que necesitás para cada etapa de tu vida", lead:"Explorá por área si ya sabés qué buscás, o empezá por lo que te pasa. Los dos caminos llevan a las mismas páginas.",
    extra:'<div class="seg" role="tablist" aria-label="Forma de explorar"><button type="button" role="tab" id="mode-area" aria-controls="tx-root" aria-selected="' + (S.txMode==="area") + '" data-mode="area">Por área</button><button type="button" role="tab" id="mode-need" aria-controls="tx-root" aria-selected="' + (S.txMode==="need") + '" data-mode="need">Por necesidad</button></div>'});
  h += '<section class="section" style="padding-top:var(--space-7)"><div class="wrap" id="tx-root" role="tabpanel" aria-labelledby="mode-' + S.txMode + '">' + (S.txMode==="area" ? txArea() : txNeed()) + '</div></section>';
  h += '<section class="section section--surface"><div class="wrap split" style="align-items:center"><div class="stack" style="gap:var(--space-4)">' + head("Conexiones entre especialidades","Cómo se relacionan las áreas","Algunas áreas trabajan juntas en determinados casos. Tocá un área para ver con cuáles se conecta y por qué.") + '<ul class="dotlist" id="netRels"></ul></div>' + netSVG() + '</div></section>';
  h += cta("¿No sabés por dónde empezar?","Una primera consulta sirve para evaluar tu situación y explicarte las alternativas.","");
  return h;
}
function txArea(){
  return '<div class="tx"><div class="tx-tabs" role="tablist" aria-label="Áreas de atención" aria-orientation="vertical">' + AREAS.map(function(a){ return '<button type="button" class="tx-tab' + (a.soon?' soon':'') + '" role="tab" id="tab-' + a.id + '" aria-controls="tx-panel" aria-selected="' + (S.txArea===a.id) + '" tabindex="' + (S.txArea===a.id?0:-1) + '" data-tx="' + a.id + '">' + chip(a.id) + '<span>' + a.name + (a.soon ? '<br><span class="small">En formación</span>' : '') + '</span></button>'; }).join("") +
    '</div><div id="tx-panel" role="tabpanel" aria-labelledby="tab-' + S.txArea + '">' + txPanel(S.txArea) + '</div></div>';
}
function txPanel(id){ var a = area(id);
  if (a.soon) return '<article class="en-card en-card--soon"><div class="card-top">' + chip(id) + '<span class="en-badge en-badge--soon">Próximamente</span></div><h2 class="h2">Posturología</h2><p>La Dra. está incorporando formación en posturología. Cuando la complete y lo confirme, esta área se sumará al sitio con su propia página. Hasta entonces no se ofrece como tratamiento.</p><p>' + F("Confirmar cómo comunicarla") + '</p><a class="en-link" href="#la-doctora">Ver su formación en curso</a></article>';
  var rel = relsFor(id);
  return '<article class="en-card"><div class="tx-panel"><div class="stack" style="gap:var(--space-4)">' + chip(id) + '<h2 class="h2">' + a.name + '</h2><p class="lead" style="font-size:18px;line-height:28px">' + a.line + '</p><ul class="dotlist">' + a.inc.map(li).join("") + '</ul><div class="en-hero__actions"><a class="en-btn en-btn--primary" href="#' + id + '">Ver el área completa</a><button type="button" class="en-btn en-btn--outline" data-consult="' + id + '">Consultar por esta área</button></div></div>' +
    '<div class="stack" style="gap:var(--space-3)"><p class="eyebrow">Se relaciona con</p><ul class="rel-list">' + rel.map(function(r){ var b = area(r[0]); return '<li><a href="#' + b.id + '">' + b.name + '</a><span class="small">' + r[1] + '</span></li>'; }).join("") + '</ul></div></div></article>';
}
function txNeed(){ return '<div class="en-cards" style="grid-template-columns:repeat(auto-fit,minmax(320px,1fr))">' + NEEDS.map(function(n){ return '<article class="en-card"><h2 class="h4">' + n.t + '</h2><p>' + n.text + '</p><div class="rels">' + n.areas.map(function(id){ return '<a class="rel" href="#' + id + '">' + area(id).name + '</a>'; }).join("") + '</div></article>'; }).join("") + '</div>'; }
function netSVG(){
  var P = {"odontologia-general":[150,70],"ortodoncia":[330,70],"laser":[390,230],"atm":[250,330],"ortodoncia-quirurgica":[100,230],"posturologia":[460,360]};
  var s = '<svg class="net" viewBox="0 0 540 420" role="img" aria-label="Mapa de relaciones entre áreas">';
  RELS.forEach(function(r){ var a=P[r[0]], b=P[r[1]]; s += '<line class="edge" data-a="' + r[0] + '" data-b="' + r[1] + '" x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '"/>'; });
  AREAS.forEach(function(a){ var p = P[a.id], lb = a.id==="ortodoncia-quirurgica" ? "Ortodoncia quirúrgica" : a.name;
    s += '<g class="node' + (a.soon?' soon':'') + '" data-net="' + a.id + '" tabindex="0" role="button" aria-label="' + a.name + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="20"/><text x="' + p[0] + '" y="' + (p[1]+42) + '" text-anchor="middle">' + lb + '</text></g>'; });
  return s + '</svg>';
}
function setNet(id){
  $$(".net .node").forEach(function(n){ n.classList.toggle("on", n.getAttribute("data-net")===id); });
  $$(".net .edge").forEach(function(e){ e.classList.toggle("on", e.getAttribute("data-a")===id || e.getAttribute("data-b")===id); });
  var ul = $("#netRels"); if (!ul) return; var a = area(id), rel = relsFor(id);
  ul.innerHTML = '<li><span><b class="h4">' + a.name + '</b><br><span class="small">' + (a.soon ? "Formación en desarrollo: todavía sin relaciones clínicas." : rel.length + (rel.length===1?" relación":" relaciones")) + '</span></span></li>' + rel.map(function(r){ var b = area(r[0]); return '<li><span><a class="en-link" href="#' + b.id + '">' + b.name + '</a><br><span class="small">' + r[1] + '</span></span></li>'; }).join("");
}

/* ---------- Odontología general ---------- */
var TT = {1:["Incisivo central",.78,"Corta los alimentos."],2:["Incisivo lateral",.64,"Corta los alimentos."],3:["Canino",.72,"Desgarra los alimentos y guía los movimientos laterales de la mandíbula."],4:["Primer premolar",.7,"Tritura y ayuda a desgarrar."],5:["Segundo premolar",.7,"Tritura y ayuda a desgarrar."],6:["Primer molar",1,"Tritura y muele los alimentos."],7:["Segundo molar",.92,"Tritura y muele los alimentos."],8:["Tercer molar",.84,"Es la muela del juicio. Puede no estar presente o no haber salido."]};
var QN = {1:"superior derecho",2:"superior izquierdo",3:"inferior izquierdo",4:"inferior derecho"};
function odontogram(){
  var W = 720, unit = 38, gap = 4, s = '<svg class="illus odo" viewBox="0 0 720 360" role="group" aria-label="Odontograma de dientes permanentes">';
  function row(nums, up){ var ws = nums.map(function(n){ return TT[n%10][1]*unit; }), tot = ws.reduce(function(a,b){return a+b;},0) + gap*(nums.length-1), x = (W-tot)/2, o = "";
    nums.forEach(function(n,k){ var w = ws[k], cx = x+w/2, t = (cx-W/2)/(W/2), hh = 54, y = up ? 50 + 64*t*t : 258 - 64*t*t;
      o += '<g class="tooth" tabindex="0" role="button" data-tooth="' + n + '" aria-label="Pieza ' + n + ', ' + TT[n%10][0].toLowerCase() + ' ' + QN[Math.floor(n/10)] + '"><rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + hh + '" rx="' + (w/3).toFixed(1) + '"/><text x="' + cx.toFixed(1) + '" y="' + (up ? y-8 : y+hh+16).toFixed(1) + '">' + n + '</text></g>'; x += w + gap; });
    return o; }
  s += '<line class="mid" x1="360" y1="20" x2="360" y2="350"/><text x="20" y="30">Derecha del paciente</text><text x="700" y="30" text-anchor="end">Izquierda</text><text x="20" y="186">Arcada superior</text><text x="20" y="206">Arcada inferior</text>';
  return s + row([18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28], true) + row([48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38], false) + '</svg>';
}
function toothCard(){ var n = S.tooth, t = TT[n%10], q = Math.floor(n/10);
  return '<span class="fdi">' + n + '</span><h3 class="h3">' + t[0] + ' ' + QN[q] + '</h3><p class="muted">' + t[2] + '</p><p class="small">En el sistema FDI, el primer dígito indica el cuadrante (' + q + ': ' + QN[q] + ') y el segundo, la pieza contando desde el centro. Las piezas en aqua son del mismo tipo.</p>'; }
function pGeneral(){
  var h = areaHead("odontologia-general","La puerta de entrada a la atención. Cada tratamiento empieza por entender cómo funciona toda la boca, y sigue con controles para cuidar lo logrado.",[["Para quién","Todas las edades"],["Empieza con","Evaluación y diagnóstico"],["Continúa con","Controles periódicos"]]);
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Explorá","Conocé tu boca, pieza por pieza","Cada diente tiene un número. Tocá una pieza para saber cuál es y qué función cumple.") + '</div><div class="split-illus"><div>' + odontogram() + '<p class="small" style="margin-top:var(--space-2)">Vista de frente al paciente: su lado derecho aparece a tu izquierda. Dentición permanente.</p></div><div class="en-card" id="toothCard" aria-live="polite">' + toothCard() + '</div></div></div></section>';
  h += '<section class="section"><div class="wrap"><div class="head-row">' + head("Continuidad de la atención","Una atención que continúa","Los controles permiten detectar cambios a tiempo y cuidar lo logrado.") + '</div><ol class="steps"><li class="step"><span class="step__n">1</span><h3 class="h4">Control</h3><p class="muted">Se revisa toda la boca, no solo lo que molesta.</p></li><li class="step"><span class="step__n">2</span><h3 class="h4">Diagnóstico</h3><p class="muted">Radiografías u otros estudios según el caso.</p></li><li class="step"><span class="step__n">3</span><h3 class="h4">Tratamiento</h3><p class="muted">Un plan explicado, con alternativas y prioridades.</p></li><li class="step"><span class="step__n">4</span><h3 class="h4">Seguimiento</h3><p class="muted">Prevención y próximo control. La frecuencia depende de cada persona. ' + F() + '</p></li></ol></div></section>';
  h += '<section class="section section--surface"><div class="wrap"><div class="head-row">' + head("Qué incluye","Prevención, diagnóstico y rehabilitación","") + '</div><div class="en-cards"><article class="en-card"><h3 class="h3">Prevención y diagnóstico</h3><ul class="dotlist">' + ["Controles periódicos","Prevención","Diagnóstico integral"].map(li).join("") + '</ul></article><article class="en-card"><h3 class="h3">Rehabilitación</h3><ul class="dotlist">' + ["Tratamientos de conducto","Prótesis removibles y fijas","Implantes, pernos y coronas"].map(li).join("") + '</ul></article><article class="en-card en-card--tint"><h3 class="h3">Adultos mayores</h3><p>Abordaje integral adaptado a las necesidades funcionales y estéticas de cada paciente.</p></article></div></div></section>';
  return h + cta("Pedí una consulta general","Es el mejor punto de partida si no sabés qué tratamiento necesitás.","odontologia-general") + nextNav("odontologia-general");
}

/* ---------- Ortodoncia ---------- */
var OX = { metal:["Brackets metálicos","Piezas adheridas a cada diente y unidas por un arco. Permiten controlar el movimiento de cada pieza con precisión."], ceram:["Brackets estéticos","Funcionan como los metálicos, con piezas transparentes o del color del diente (ice, zafiro)."], align:["Alineadores transparentes","Placas removibles hechas a medida con diseño digital, que se cambian por etapas. Hay que usarlas las horas indicadas."], hibrido:["Tratamiento híbrido","Combina alineadores en una arcada y brackets en la otra, según lo que necesite cada una."], orto:["Ortopedia dentomaxilar","Aparatología para chicos con dentición temporaria o mixta, que ayuda a guiar el crecimiento de los maxilares. El dibujo es genérico: el aparato depende de cada caso."] };
function oxSVG(){
  var up = [[34,60],[34,62],[38,72],[36,66],[44,74],[44,74],[36,66],[38,72],[34,62],[34,60]], lo = [[32,52],[32,54],[34,60],[28,52],[28,52],[28,52],[28,52],[34,60],[32,54],[32,52]];
  var s = '<svg class="illus ox" id="oxSvg" data-v="' + S.ox + '" viewBox="0 0 520 300" role="img" aria-label="Dibujo de frente de los dientes con la alternativa elegida"><rect class="gum" x="40" y="34" width="440" height="66" rx="33"/><rect class="gum" x="58" y="196" width="404" height="62" rx="31"/>';
  function rowT(list, upper){ var tot = list.reduce(function(a,b){return a+b[0]+3;},-3), x = 260 - tot/2, o = "", pts = [];
    list.forEach(function(t){ var w = t[0], hh = t[1], cx = x+w/2, k = (cx-260)/220, top, bot; if (upper){ bot = 152 - 16*k*k; top = bot-hh; } else { top = 156 - 10*k*k; bot = top+hh; }
      o += '<rect class="t" x="' + x.toFixed(1) + '" y="' + top.toFixed(1) + '" width="' + w + '" height="' + hh + '" rx="' + (w/3).toFixed(1) + '"/>'; pts.push([cx,(top+bot)/2 + (upper?4:-4)]); x += w+3; });
    return {svg:o, pts:pts}; }
  var U = rowT(up,true), L = rowT(lo,false);
  function brk(P){ return P.map(function(p){ return '<rect x="' + (p[0]-7).toFixed(1) + '" y="' + (p[1]-6).toFixed(1) + '" width="14" height="12" rx="2.5"/>'; }).join(""); }
  function wire(P){ return '<path class="wire" d="M' + P.map(function(p){ return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(" L") + '"/>'; }
  s += U.svg + L.svg + '<g class="lay l-up-brk brk">' + wire(U.pts) + brk(U.pts) + '</g><g class="lay l-lo-brk brk">' + wire(L.pts) + brk(L.pts) + '</g>';
  s += '<g class="lay l-up-al"><path class="al" d="M56 74 Q260 66 464 74 L462 144 Q260 164 58 144 Z"/></g><g class="lay l-lo-al"><path class="al" d="M84 150 Q260 162 436 150 L434 214 Q260 230 86 214 Z"/></g>';
  s += '<g class="lay l-bow"><path class="bow" d="M84 128 C120 128 128 108 140 116 C150 124 140 140 160 140 C220 146 300 146 360 140 C380 140 370 124 380 116 C392 108 400 128 436 128"/><text x="260" y="286" text-anchor="middle">Arco de un aparato removible · ilustración genérica</text></g>';
  return s + '<text x="40" y="24">Arcada superior</text><text x="58" y="278">Arcada inferior</text></svg>';
}
function oxInfo(){ var o = OX[S.ox]; return '<p class="eyebrow">Alternativa</p><h3 class="h3">' + o[0] + '</h3><p class="muted">' + o[1] + '</p>' + (S.ox==="hibrido" ? '<p class="small">Es el abordaje del caso de Clase II publicado en <a href="#casos">Casos clínicos</a>.</p>' : '') + '<p class="small">La alternativa se elige después de la evaluación, según el caso, la edad y tus preferencias.</p>'; }
function oxTable(){ var cols = ["metal","ceram","align","hibrido","orto"], rows = [["Tipo",["Fijo","Fijo","Removible","Combinado","Según el aparato"]],["Visibilidad",["Visibles","Menos visibles","Placas transparentes","Arriba transparente, abajo visible","Según el aparato"]],["Se retira para comer",["No","No","Sí","Solo los alineadores","Según el aparato"]],["Requiere",["Controles periódicos","Controles periódicos","Uso diario indicado y recambios","Ambas cosas","Controles y uso indicado"]],["Para quién",["Según la evaluación","Según la evaluación","Según la evaluación","Según la evaluación","Chicos con dentición temporaria o mixta"]]];
  return '<div class="cmp-wrap"><table class="cmp"><caption class="sr">Comparación de alternativas de ortodoncia</caption><thead><tr><th scope="col"><span class="sr">Característica</span></th>' + cols.map(function(c){ return '<th scope="col" class="' + (c===S.ox?'sel':'') + '">' + OX[c][0] + '</th>'; }).join("") + '</tr></thead><tbody>' + rows.map(function(r){ return '<tr><th scope="row">' + r[0] + '</th>' + r[1].map(function(v,i){ return '<td class="' + (cols[i]===S.ox?'sel':'') + '">' + v + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div><p class="small" style="margin-top:var(--space-3)">' + F() + ' Las características generales deben revisarse con la Dra.</p>'; }
function pOrto(){
  var h = areaHead("ortodoncia","Corrige la posición de los dientes y la relación entre los maxilares. No es solo estética: también tiene que ver con cómo mordés, masticás y hablás.",[["Para quién","Chicos, adolescentes y adultos"],["Alternativas","5"],["Duración","Se estima en cada plan"]]);
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Explorador de ortodoncia","Compará las alternativas","Elegí una opción y mirá cómo se ve en los dientes. La tabla compara lo que cambia entre una y otra.") + '</div><div class="seg" role="group" aria-label="Alternativas de ortodoncia" style="margin-bottom:var(--space-5)">' + Object.keys(OX).map(function(k){ return '<button type="button" data-ox="' + k + '" aria-pressed="' + (k===S.ox) + '">' + OX[k][0] + '</button>'; }).join("") + '</div>' +
    '<div class="split-illus"><div>' + oxSVG() + '</div><div class="en-card" id="oxInfo" aria-live="polite">' + oxInfo() + '</div></div><div id="oxTable">' + oxTable() + '</div></div></section>';
  h += '<section class="section"><div class="wrap"><div class="head-row">' + head("Según la edad","No hay edad para mejorar tu sonrisa","La evaluación cambia con el crecimiento. En todas las etapas empieza por entender la función.") + '</div><div class="ages">' +
    '<article class="en-card"><p class="eyebrow">Infancia</p><h3 class="h3">Guiar el crecimiento</h3><p>Con dientes de leche o en recambio, la ortopedia dentomaxilar ayuda a guiar el desarrollo de los maxilares.</p></article>' +
    '<article class="en-card"><p class="eyebrow">Adolescencia</p><h3 class="h3">Ordenar y alinear</h3><p>Con los dientes permanentes se corrigen la posición y la mordida. ' + F() + '</p></article>' +
    '<article class="en-card"><p class="eyebrow">Adultez</p><h3 class="h3">Alternativas para adultos</h3><p>En adultos también hay alternativas, a veces combinadas con otros tratamientos.</p></article></div></div></section>';
  h += '<section class="section section--surface"><div class="wrap"><div class="head-row">' + head("Recorrido de atención","Cómo es el proceso","Cada plan es distinto. Estas son las etapas habituales. " + F()) + '</div><ol class="steps"><li class="step"><span class="step__n">1</span><h3 class="h4">Evaluación y estudios</h3><p class="muted">Panorámica, cefalometría o telerradiografía de perfil si hacen falta.</p></li><li class="step"><span class="step__n">2</span><h3 class="h4">Plan</h3><p class="muted">Alternativas, etapas y estimación de tiempos.</p></li><li class="step"><span class="step__n">3</span><h3 class="h4">Inicio</h3><p class="muted">Colocación de la aparatología o primeros alineadores.</p></li><li class="step"><span class="step__n">4</span><h3 class="h4">Controles</h3><p class="muted">Ajustes según la evolución.</p></li><li class="step"><span class="step__n">5</span><h3 class="h4">Contención</h3><p class="muted">Para mantener la posición lograda.</p></li></ol></div></section>';
  h += '<section class="section section--tint"><div class="wrap split"><div class="en-section-head"><p class="eyebrow">Preguntas frecuentes</p><h2 class="h2">Lo que más se consulta</h2><a class="en-link" href="#casos" style="align-self:flex-start">Ver casos de ortodoncia</a></div>' + faq([
    ["¿Hay una edad límite?","No. La ortodoncia es para todas las edades."],
    ["¿Cuánto dura un tratamiento?","Depende del caso. Después de la evaluación se estima la duración de cada etapa y se ajusta según la evolución."],
    ["¿Molesta usar brackets o alineadores?","Puede haber molestias los primeros días después de cada ajuste o cambio de alineador. En la consulta te explican cómo manejarlas. " + F()],
    ["¿Cuánto cuesta?","El presupuesto se informa después de la evaluación, según el plan. " + F("A confirmar")]]) + '</div></section>';
  return h + cta("Pedí una evaluación ortodóncica","Contanos que consultás por ortodoncia o dejá tu consulta con el área ya elegida.","ortodoncia") + nextNav("ortodoncia");
}

/* ---------- Láser ---------- */
var LAPPS = [
  {id:"tejidos", n:"Tejidos blandos", z:"encia", d:"Cirugías mínimamente invasivas en la encía y los frenillos: frenectomía, gingivoplastia y coagulación.", at:[150,206]},
  {id:"mucosa", n:"Mucosa bucal", z:"mucosa", d:"Tratamiento de aftas y herpes.", at:[52,330]},
  {id:"endo", n:"Endodoncia", z:"pulpa", d:"Descontaminación del conducto, como complemento del tratamiento de conducto.", at:[214,262]},
  {id:"perio", n:"Periodoncia", z:"bolsa", d:"Descontaminación de la zona entre la encía y la raíz, como complemento del tratamiento.", at:[184,214]},
  {id:"orto", n:"Apoyo en ortodoncia", z:"hueso", d:"Fotobiomodulación durante algunos tratamientos de ortodoncia. Su indicación y sus efectos se evalúan caso por caso.", at:[136,330]},
  {id:"blanq", n:"Blanqueamiento", z:"esmalte", d:"Blanqueamiento dental asistido con láser.", at:[214,46]}
];
function scaleSVG(){ var x = function(nm){ return 20 + (nm-300)*0.75; }, s = '<svg class="illus scale" viewBox="0 0 640 130" role="img" aria-label="Escala de 300 a 1100 nanómetros. La luz visible va de 380 a 750 nm. El láser trabaja en 980 nm, en el infrarrojo cercano.">';
  s += '<rect x="' + x(380) + '" y="44" width="' + (x(750)-x(380)) + '" height="24" rx="12" fill="var(--surface-tint)"/><text x="' + ((x(380)+x(750))/2) + '" y="61" text-anchor="middle" style="fill:var(--brand)">Luz visible · 380 a 750 nm</text>';
  s += '<rect x="' + x(750) + '" y="44" width="' + (x(1100)-x(750)) + '" height="24" rx="12" fill="var(--surface-aqua)"/><text x="' + x(800) + '" y="61" style="fill:var(--aqua-ink)">Infrarrojo cercano</text>';
  for (var nm=300; nm<=1100; nm+=100) s += '<line x1="' + x(nm) + '" y1="74" x2="' + x(nm) + '" y2="80" stroke="var(--line-strong)"/><text x="' + x(nm) + '" y="96" text-anchor="middle">' + nm + '</text>';
  s += '<line x1="' + x(980) + '" y1="30" x2="' + x(980) + '" y2="72" stroke="var(--brand)" stroke-width="3"/><circle cx="' + x(980) + '" cy="30" r="7" fill="var(--brand)"/><text x="' + (x(980)-12) + '" y="34" text-anchor="end" style="fill:var(--brand)">980 nm</text><text x="20" y="120">Nanómetros (nm)</text>';
  return s + '</svg>'; }
function xsecSVG(){
  return '<svg class="illus xsec" id="xsec" viewBox="0 0 420 420" role="img" aria-label="Corte esquemático de un diente con encía, hueso y mucosa">' +
    '<path class="zone z-mucosa" fill="var(--surface-aqua)" d="M20 420 V300 C30 280 46 270 60 262 L90 244 V420 Z"/>' +
    '<path class="zone z-hueso" fill="var(--line)" d="M90 420 V244 C130 224 170 226 190 236 C206 230 222 230 238 236 C258 226 298 224 338 244 V420 Z"/>' +
    '<path class="zone z-encia" fill="var(--aqua-soft)" d="M60 262 C76 214 132 180 178 176 C184 200 186 220 190 236 C170 226 130 224 90 244 Z M368 262 C352 214 296 180 250 176 C244 200 242 220 238 236 C258 226 298 224 338 244 Z"/>' +
    '<path fill="var(--surface-tint)" stroke="var(--line-strong)" d="M180 182 C178 260 190 340 206 400 C210 412 218 412 222 400 C238 340 250 260 248 182 Z"/>' +
    '<path class="zone z-esmalte" fill="var(--white)" d="M156 70 C156 40 186 28 214 32 C242 28 272 40 272 70 C274 120 262 160 250 182 L178 182 C166 160 154 120 156 70 Z" style="stroke:var(--line-strong)"/>' +
    '<path fill="var(--surface-tint)" d="M172 78 C172 56 194 46 214 48 C234 46 256 56 256 78 C258 118 248 150 240 172 L188 172 C180 150 170 118 172 78 Z"/>' +
    '<path class="zone z-pulpa" fill="var(--aqua)" d="M200 96 C200 86 228 86 228 96 L226 170 C224 250 220 330 215 395 C214 398 212 398 212 395 C208 330 204 250 202 170 Z"/>' +
    '<path class="zone z-bolsa bolsa" fill="none" stroke-linecap="round" d="M178 182 L186 222 M250 182 L242 222"/>' +
    '<rect x="14" y="14" width="40" height="16" rx="4" fill="var(--ink-muted)" transform="rotate(35 34 22)"/>' +
    '<path class="beam-glow" id="beamGlow" d="M50 34 L150 206"/><path class="beam" id="beam" d="M50 34 L150 206"/>' +
    '<path class="ld" d="M222 128 L292 150"/><text x="290" y="60">Esmalte</text><text x="290" y="110">Dentina</text><text x="296" y="154">Pulpa y conducto</text><text x="372" y="226">Encía</text><text x="344" y="330">Hueso</text><text x="22" y="292">Mucosa</text><text x="64" y="58">Fibra del láser</text></svg>';
}
function appCard(){ var a = LAPPS.filter(function(x){ return x.id===S.laser; })[0]; return '<p class="eyebrow">Aplicación</p><h3 class="h3">' + a.n + '</h3><p class="muted">' + a.d + '</p><p class="small">La indicación surge de la evaluación. Las sensaciones durante la aplicación varían según el caso y la zona. ' + F() + '</p>'; }
function pLaser(){
  var h = areaHead("laser","El consultorio trabaja con un láser de diodo. Es un recurso con aplicaciones distintas entre sí, y cada una tiene su propia indicación.",[["Equipo","Láser de diodo"],["Longitud de onda","980 nm"],["Aplicaciones","6"]]);
  h += '<section class="section section--aqua"><div class="wrap split" style="align-items:center">' + head("Tecnología","Dónde está el láser en el espectro","980 nm queda fuera de la luz visible, en el infrarrojo cercano. Por eso el haz de trabajo no se ve a simple vista.") + scaleSVG() + '</div></section>';
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Aplicaciones","Qué zona trabaja cada aplicación","Elegí una aplicación para verla en el esquema. Es una explicación educativa: la indicación siempre se define en la consulta.") + '</div>' +
    '<div class="split-illus" style="grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)"><div class="side"><div class="list-btns" role="group" aria-label="Aplicaciones del láser">' + LAPPS.map(function(x,i){ return '<button type="button" data-laser="' + x.id + '" aria-pressed="' + (x.id===S.laser) + '"><span class="k">' + String.fromCharCode(65+i) + '</span>' + x.n + '</button>'; }).join("") + '</div><div class="en-card" id="appCard" aria-live="polite">' + appCard() + '</div></div><div>' + xsecSVG() + '</div></div></div></section>';
  h += '<section class="section"><div class="wrap split">' + head("Consideraciones","Lo que conviene saber","El láser se suma a un tratamiento cuando aporta algo concreto.") + '<ul class="dotlist">' + ["No reemplaza la evaluación ni otros tratamientos.","Cada aplicación tiene su propia indicación, que no es intercambiable con las demás.","Los tiempos y los resultados dependen de cada caso.","La Dra. tiene una diplomatura en Odontología Láser (UAI, 2021–2022) y cursa la especialidad en Láser en Ortodoncia y ATM desde 2025."].map(li).join("") + '</ul></div></section>';
  return h + cta("Consultá por el láser","Contanos qué aplicación te interesa y la Dra. te explica si corresponde a tu caso.","laser") + nextNav("laser");
}
function fireBeam(){ var a = LAPPS.filter(function(x){ return x.id===S.laser; })[0], d = "M50 34 L" + a.at[0] + " " + a.at[1];
  ["beam","beamGlow"].forEach(function(id){ var el = document.getElementById(id); if (!el) return; el.setAttribute("d", d); el.classList.remove("fire"); void el.getBoundingClientRect(); el.classList.add("fire"); });
  var sv = $("#xsec"); if (!sv) return; sv.classList.add("sel"); $$(".zone", sv).forEach(function(z){ z.classList.toggle("on", z.classList.contains("z-" + a.z)); }); }

/* ---------- ATM ---------- */
var PARTS = [
  {id:"condilo", n:"Cóndilo mandibular", d:"Es el extremo superior de la mandíbula. Encaja en la fosa del hueso temporal y, cuando abrís grande la boca, gira y se desliza hacia adelante."},
  {id:"disco", n:"Disco articular", d:"Una lámina de tejido fibroso entre el cóndilo y el hueso temporal. Acompaña el movimiento. Algunos ruidos de la articulación se relacionan con cambios en su posición.", flag:true},
  {id:"fosa", n:"Fosa y eminencia articular", d:"La superficie del hueso temporal donde se aloja el cóndilo. Al abrir grande, el cóndilo se traslada hacia la eminencia, que está adelante."},
  {id:"masetero", n:"Músculo masetero", d:"Uno de los músculos que cierran la boca y permiten masticar. En algunos trastornos de la ATM puede sentirse tenso o dolorido.", flag:true},
  {id:"nervio", n:"Nervio trigémino", d:"Lleva la sensibilidad de la cara. Sus ramas maxilar (V2) y mandibular (V3) recorren el maxilar superior y la mandíbula. La neuralgia del trigémino es un dolor relacionado con este nervio, distinto de un trastorno de la ATM."},
  {id:"oclusion", n:"Oclusión", d:"La forma en que encajan los dientes de arriba y de abajo. Se evalúa junto con la articulación."}
];
function atmSVG(){ var ut = "", lt = ""; for (var i=0;i<10;i++){ ut += '<rect class="atooth" x="' + (96+i*21) + '" y="214" width="18" height="30" rx="5"/>'; lt += '<rect class="atooth" x="' + (100+i*21) + '" y="246" width="18" height="30" rx="5"/>'; }
  return '<svg class="illus atm' + (S.atmOpen?' open':'') + '" id="atmSvg" viewBox="0 0 520 430" role="img" aria-label="Esquema lateral de la articulación temporomandibular y la mandíbula">' +
    '<path class="bone" d="M40 40 H480 V104 C452 104 432 102 418 92 C410 86 404 74 394 70 C380 64 366 66 356 76 C346 86 338 104 326 110 C318 114 306 112 296 106 C270 96 200 96 150 100 L40 104 Z"/>' +
    '<path class="bone" d="M150 108 C190 104 250 104 300 112 L298 126 C250 120 190 120 152 124 Z"/><path class="bone" d="M70 120 C66 160 70 196 84 214 L312 214 C306 180 296 150 290 130 L150 126 C120 122 92 118 70 120 Z"/>' + ut +
    '<path class="mus hl hit" data-part="masetero" d="M168 124 C210 120 262 122 296 128 L368 300 C340 318 300 320 270 312 Z"/>' +
    '<path class="hl hit" data-part="fosa" fill="none" stroke="transparent" stroke-width="22" d="M310 106 C330 104 344 74 372 66 C392 64 404 80 414 94"/>' +
    '<path class="nerve hl" data-part="nervio" d="M300 60 C260 80 200 110 120 136"/><circle cx="300" cy="60" r="5" fill="var(--brand)"/>' +
    '<g class="mand"><path class="bone" d="M384 94 C396 160 404 230 400 292 C398 314 382 326 358 326 L160 326 C128 326 104 316 98 300 C94 290 94 282 100 272 L318 272 C318 230 312 170 306 132 C314 124 322 128 326 138 C334 154 344 152 352 132 C356 118 356 104 358 94 Z"/>' +
      '<g class="hl hit" data-part="oclusion">' + lt + '</g><ellipse class="bone hl hit" data-part="condilo" cx="370" cy="86" rx="17" ry="13"/>' +
      '<path class="disc hl hit" data-part="disco" d="M350 80 C356 60 386 58 392 76 L388 79 C382 70 362 68 354 83 Z"/>' +
      '<path class="nerve nerve-in hl" data-part="nervio" d="M300 60 C318 90 344 112 372 112 C372 180 356 250 326 292 C290 306 220 304 140 298"/></g>' +
    '<path class="hit" data-part="nervio" fill="none" stroke="transparent" stroke-width="16" d="M300 60 C260 80 200 110 120 136"/>' +
    '<text x="40" y="30">Hueso temporal</text><text x="56" y="142">Maxilar</text><text x="410" y="140">Rama</text></svg>'; }
function partCard(){ var p = PARTS.filter(function(x){ return x.id===S.atmPart; })[0]; return '<p class="eyebrow">Estructura</p><h3 class="h3">' + p.n + '</h3><p class="muted">' + p.d + '</p>' + (p.flag ? '<p>' + F() + '</p>' : ''); }
function atmMoveText(){ return S.atmOpen ? "Al abrir grande, el cóndilo gira y se desliza hacia adelante, hasta la eminencia articular. El disco lo acompaña." : "Con la boca cerrada, el cóndilo descansa en la fosa del hueso temporal, con el disco por encima."; }
function pATM(){
  var h = areaHead("atm","Evaluación de molestias mandibulares y dolor orofacial. Los trastornos de la ATM (articulación temporomandibular) y las neuralgias son condiciones distintas, aunque a veces requieran abordajes complementarios.",[["Empieza con","Evaluación individual"],["Formación","Especialidad en curso"]]);
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Explorador anatómico","Cómo funciona la articulación","Un esquema educativo para entender de qué se habla en la consulta. Tocá cada estructura y probá abrir la boca.") + '<div class="seg" role="group" aria-label="Posición de la boca"><button type="button" data-atm-open="0" aria-pressed="' + (!S.atmOpen) + '">Boca cerrada</button><button type="button" data-atm-open="1" aria-pressed="' + S.atmOpen + '">Boca abierta</button></div></div>' +
    '<div class="split-illus"><div>' + atmSVG() + '<p class="small" id="atmMove" style="margin-top:var(--space-3)">' + atmMoveText() + '</p></div><div class="side"><div class="list-btns" role="group" aria-label="Estructuras">' + PARTS.map(function(p,i){ return '<button type="button" data-part-btn="' + p.id + '" aria-pressed="' + (p.id===S.atmPart) + '"><span class="k">' + (i+1) + '</span>' + p.n + '</button>'; }).join("") + '</div><div class="en-card" id="partCard" aria-live="polite">' + partCard() + '</div></div></div></div></section>';
  h += '<section class="section"><div class="wrap"><div class="head-row">' + head("Diagnóstico diferencial","Dos condiciones distintas","Por eso el primer paso es una evaluación detallada, sin suponer la causa.") + '</div><div class="vs">' +
    '<article class="en-card"><span class="en-badge en-badge--brand" style="align-self:flex-start">Trastornos de la ATM</span><h3 class="h3">La articulación y sus músculos</h3><p>Pueden aparecer molestias al abrir o cerrar la boca, ruidos en la articulación, dolor al masticar o sensación de mandíbula cansada. ' + F() + '</p></article>' +
    '<article class="en-card"><span class="en-badge en-badge--aqua" style="align-self:flex-start">Neuralgias</span><h3 class="h3">Un nervio de la cara</h3><p>Dolor relacionado con un nervio, como el trigémino, con características propias. Muchas veces requiere trabajar con otros especialistas. ' + F() + '</p></article></div></div></section>';
  h += '<section class="section section--surface"><div class="wrap"><div class="head-row">' + head("Recorrido de atención","Cómo se aborda","Cada caso se evalúa de forma individual. Esta información no sirve para autodiagnosticarse. " + F()) + '</div><ol class="steps"><li class="step"><span class="step__n">1</span><h3 class="h4">Evaluación</h3><p class="muted">Historia de las molestias y examen de la articulación, los músculos y la mordida.</p></li><li class="step"><span class="step__n">2</span><h3 class="h4">Estudios complementarios</h3><p class="muted">Solo si hacen falta para decidir.</p></li><li class="step"><span class="step__n">3</span><h3 class="h4">Plan interdisciplinario</h3><p class="muted">Tecnología láser cuando está indicada, y trabajo con otros especialistas según el caso.</p></li></ol>' +
    '<div class="notice" style="margin-top:var(--space-7)"><b>Formación en curso</b><span>Especialidad en Láser en Ortodoncia y ATM · Universidad Europea Miguel de Cervantes · desde marzo de 2025.</span></div></div></section>';
  return h + cta("Consultá por molestias mandibulares o dolor facial","Contanos desde cuándo aparecen y en qué momentos. La evaluación orienta el diagnóstico.","atm") + nextNav("atm");
}

/* ---------- Ortodoncia quirúrgica ---------- */
var QX = [
  {n:"Evaluación y estudios", who:["Dra. Noriega"], d:"Evaluación ortodóncica completa, con estudios complementarios para entender la relación entre los maxilares y los dientes."},
  {n:"Planificación conjunta", who:["Dra. Noriega","Cirugía maxilofacial"], d:"La ortodoncia y la cirugía se planifican juntas: qué se corrige con cada una y en qué orden."},
  {n:"Ortodoncia prequirúrgica", who:["Dra. Noriega","Técnicos dentales"], d:"Se preparan las arcadas para que, después de la cirugía, los dientes puedan encajar correctamente."},
  {n:"Cirugía", who:["Cirugía maxilofacial"], d:"La realiza el equipo de cirugía maxilofacial. La Dra. no realiza procedimientos quirúrgicos."},
  {n:"Ortodoncia posquirúrgica", who:["Dra. Noriega","Fonoaudiología, si hace falta"], d:"Se terminan de ajustar la posición de los dientes y la mordida."},
  {n:"Contención y seguimiento", who:["Dra. Noriega"], d:"Controles para acompañar la estabilidad de los resultados."}
];
function lanes(){ var L = [["Ortodoncia","Dra. Edith Noriega",[1,1,1,0,1,1],""],["Cirugía maxilofacial","Equipo quirúrgico",[0,1,0,1,0,0],"aq"],["Otros profesionales","Fonoaudiología y técnicos, según el caso",[0,0,1,0,1,0],"ext"]];
  var h = '<div class="lanes-wrap"><div class="lanes" aria-label="Quién participa en cada etapa"><div class="small" style="font-family:var(--font-display);font-weight:600">Etapas</div>';
  QX.forEach(function(q,i){ h += '<button type="button" class="ph-h' + (i===S.qx?' on':'') + '" data-qx="' + i + '" aria-pressed="' + (i===S.qx) + '">' + (i+1) + '. ' + q.n + '</button>'; });
  L.forEach(function(l){ h += '<div class="lane-h">' + l[0] + '<small>' + l[1] + '</small></div>'; l[2].forEach(function(v,i){ h += '<div class="cell' + (i===S.qx?' on':'') + '">' + (v ? '<span class="bar ' + l[3] + '"><span class="sr">participa</span></span>' : '') + '</div>'; }); });
  return h + '</div></div>'; }
function qxStep(){ var q = QX[S.qx]; return '<p class="eyebrow">Etapa ' + (S.qx+1) + ' de ' + QX.length + '</p><h3 class="h2">' + q.n + '</h3><p class="muted measure">' + q.d + '</p><div class="tags">' + q.who.map(function(w){ return '<span class="en-badge en-badge--brand">' + w + '</span>'; }).join("") + '</div>'; }
function pQX(){
  var h = areaHead("ortodoncia-quirurgica","Evaluación, planificación y seguimiento ortodóncico de pacientes con alteraciones dentofaciales y malformaciones. La cirugía la realiza el equipo de cirugía maxilofacial.",[["Formación","Hospital Piñero · SAO · 2011–2021"],["Integra","Clínica de Malformaciones y Quirúrgicos, SAO"]]);
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Planificación de casos complejos","Cómo se planifica un caso complejo","Recorré las etapas para ver qué pasa en cada una y quién participa. " + F()) + '</div>' + lanes() +
    '<div class="stepper"><div class="stack" style="gap:var(--space-3)" id="qxBody" aria-live="polite">' + qxStep() + '</div><div class="step-ctrl"><button type="button" class="en-btn en-btn--outline en-btn--sm" data-qx-nav="-1">Anterior</button><span class="count" id="qxCount">' + (S.qx+1) + ' / ' + QX.length + '</span><button type="button" class="en-btn en-btn--primary en-btn--sm" data-qx-nav="1">Siguiente</button></div></div></div></section>';
  h += '<section class="section"><div class="wrap split">' + head("Para quién","Pacientes que pueden requerir este abordaje","Cada caso se evalúa de forma individual, sin anticipar un tratamiento.") + '<ul class="dotlist">' + ["Alteraciones dentofaciales que requieren cirugía ortognática","Pacientes con fisuras, unilaterales o bilaterales","Pacientes con síndrome de Down u otras condiciones específicas","Casos con intervenciones quirúrgicas previas o planificadas"].map(li).join("") + '</ul></div></section>';
  return h + cta("Consultá por un caso complejo","Llevá los estudios e informes de otros profesionales que te hayan atendido.","ortodoncia-quirurgica") + nextNav("ortodoncia-quirurgica");
}

/* ---------- La doctora ---------- */
function tlView(){ return S.tlView || (window.matchMedia("(max-width:760px)").matches ? "list" : "tl"); }
function yr(x){ if (x.open) return x.id==="pos" ? "En curso" : "Desde 2025"; var a = Math.floor(x.a), b = Math.floor(x.b); return a===b ? String(a) : a + "–" + b; }
function tlHTML(){
  var items = TL.filter(function(x){ return S.tlCats[x.cat]; }), sel = TL.filter(function(x){ return x.id===S.tlSel; })[0];
  if (tlView()==="list") return '<ul class="tl-list">' + items.map(function(x){ return '<li><span class="num">' + yr(x) + '</span><span><b class="h4" style="display:block">' + x.t + '</b><span class="small">' + x.i + '</span> ' + (x.flag?F(x.flag):'') + '</span></li>'; }).join("") + '</ul>';
  var X = function(y){ return ((y-1988)/39*100).toFixed(2) + "%"; }, h = '<div class="tl-wrap"><div class="tl">';
  Object.keys(TLCATS).forEach(function(k){ var n = TL.filter(function(x){return x.cat===k;}).reduce(function(m,x){return Math.max(m,x.lane);},0)+1;
    h += '<div class="tl-row' + (S.tlCats[k]?'':' hidden') + '"><b>' + TLCATS[k][0] + '</b><div class="tl-track" style="--h:' + (n*30+16) + 'px">';
    TL.filter(function(x){return x.cat===k;}).forEach(function(x){ h += '<button type="button" class="tl-bar ' + TLCATS[k][1] + '" data-tl="' + x.id + '" aria-pressed="' + (x.id===S.tlSel) + '" aria-label="' + esc(x.t + ", " + yr(x)) + '" style="left:' + X(x.a) + ';width:' + ((x.b-x.a)/39*100).toFixed(2) + '%;top:' + (8+x.lane*30) + 'px"></button>'; });
    h += '</div></div>'; });
  h += '<div class="tl-axis">'; for (var y=1990; y<=2025; y+=5) h += '<span style="left:' + X(y) + '">' + y + '</span>'; h += '<span style="left:' + X(2026.2) + '">hoy</span></div></div></div>';
  if (sel) h += '<article class="en-card" style="margin-top:var(--space-5)" aria-live="polite"><p class="eyebrow">' + TLCATS[sel.cat][0] + ' · ' + yr(sel) + '</p><h3 class="h3">' + sel.t + '</h3><p>' + sel.i + '</p>' + (sel.flag ? '<p>' + F(sel.flag) + '</p>' : '') + '</article>';
  return h; }
function pDoctora(){
  var h = '<section><div class="wrap"><div class="en-hero"><div class="en-hero__copy">' + crumbs([["Inicio","inicio"],["La doctora"]]) + '<p class="eyebrow">Sobre mí</p><h1 class="h1" tabindex="-1">Una trayectoria dedicada al avance de la ortodoncia</h1><p class="lead">Soy Edith Noriega, odontóloga especialista jerarquizada en ortodoncia y diplomada en tecnología láser. Atiendo en La Plata y Quilmes con una mirada integral y multidisciplinaria.</p><p class="small">Matrícula profesional ' + F("A confirmar") + '</p></div>' +
    '<div class="en-hero__stage"><span class="en-quarter" aria-hidden="true"></span><div class="en-portrait"><div class="en-portrait__slot"><img src="' + PHOTO + '" alt="Retrato de la Dra. Edith Noriega"></div></div><span class="en-star" aria-hidden="true"><i></i><i></i><i></i><i></i></span></div></div></div></section>';
  h += '<section class="section section--surface"><div class="wrap split"><div class="en-quote"><span class="en-quarter" aria-hidden="true"></span><blockquote>La ortodoncia es para todos y para todas las edades.</blockquote><cite>Dra. Edith Noriega</cite></div><div class="stack measure" style="gap:var(--space-4)"><p class="eyebrow">Filosofía de atención</p><p>Me formé en la Universidad Nacional de La Plata y en el Hospital San Martín, en el sector de Odontología. Hice mi posgrado en Ortodoncia en la UNLP y completé mi especialización en el Hospital Piñero de Buenos Aires.</p><p>Me gusta abordar cada tratamiento con una mirada integral: la salud bucal forma parte de la salud general. Trabajo con un enfoque preventivo, tratamientos mínimamente invasivos y planificación digital.</p><p>Me actualizo de forma constante en ortodoncia lingual, alineadores y tecnología láser, para que cada paciente tenga una experiencia más cómoda. ' + F() + '</p></div></div></section>';
  h += '<section class="section section--tint"><div class="wrap"><div class="head-row">' + head("Ejes de mi práctica","Cada área se apoya en una formación concreta","") + '</div><div class="bento">' +
    axis("s3","Ortodoncia","ortodoncia",[["1995–2000","Especialista en Ortodoncia, UNLP"],["2008","Especialista en Ortodoncia Lingual"],["2023–2024","Diplomatura en Alineadores, UCALP y SAO"]]) +
    axis("s3","Cirugía y malformaciones","ortodoncia-quirurgica",[["2011–2021","Ortodoncia pre y posquirúrgica, Hospital Piñero"],["Hoy","Clínica de Malformaciones y Quirúrgicos, SAO"]]) +
    axis("s4","Tecnología láser","laser",[["2021–2022","Diplomatura en Odontología Láser, UAI"],["2024","Ponente SAO y disertante ACALO"],["Desde 2025","Especialidad en Láser en Ortodoncia y ATM (en curso)"]]) +
    axis("s2","Docencia","odontologia-general",[["2019–2020","Diplomatura en Docencia, Universidad Favaloro " + F("Confirmar año")]]) + '</div></div></section>';
  h += '<section class="section"><div class="wrap"><div class="head-row">' + head("Formación","Formación académica, a escala","Cada barra ocupa los años reales. Tocá una para ver el detalle o filtrá por tipo.") + '<div class="seg" role="group" aria-label="Vista"><button type="button" data-tlview="tl" aria-pressed="' + (tlView()==="tl") + '">Línea de tiempo</button><button type="button" data-tlview="list" aria-pressed="' + (tlView()==="list") + '">Lista</button></div></div>' +
    '<div class="chips" role="group" aria-label="Filtrar formación" style="margin-bottom:var(--space-5)">' + Object.keys(TLCATS).map(function(k){ return '<button type="button" class="chip" data-tlcat="' + k + '" aria-pressed="' + !!S.tlCats[k] + '">' + TLCATS[k][0] + '</button>'; }).join("") + '</div><div id="tlRoot">' + tlHTML() + '</div></div></section>';
  h += '<section class="section section--aqua"><div class="wrap"><div class="head-row">' + head("Investigación y actualización constante","Actividad científica","Publicaciones y ponencias sobre tecnología láser aplicada a la ortodoncia y la cirugía.") + '</div><div class="en-cards">' +
    '<article class="en-card"><span class="en-badge en-badge--brand" style="align-self:flex-start">Publicación</span><h3 class="h3">Terapia (LLT) post cirugía de distracción ósea</h3><p>Publicada en ResearchGate.</p><p>' + F("Confirmar enlace y año") + '</p></article>' +
    '<article class="en-card"><span class="en-badge en-badge--brand" style="align-self:flex-start">Ponencia · agosto 2024</span><h3 class="h3">Congreso de Invierno 2024, SAO</h3><p>Terapia (LLT) post cirugía de distracción ósea. Buenos Aires. Aprobada por el Comité Científico.</p></article>' +
    '<article class="en-card"><span class="en-badge en-badge--brand" style="align-self:flex-start">Disertación · agosto 2024</span><h3 class="h3">4.° Congreso de Odontología Láser, ACALO</h3><p>Terapia láser en ortodoncia con alineadores. Salta, Argentina.</p></article></div></div></section>';
  h += '<section class="section"><div class="wrap split">' + head("Equipo","Un equipo de trabajo multidisciplinario","Trabajo junto a profesionales comprometidos con tratamientos integrales e interdisciplinarios. " + F("Confirmar nombres del equipo")) + '<ul class="dotlist">' + ["Cirujanos maxilofaciales: cirugía de los maxilares","Fonoaudiólogos: habla y deglución","Técnicos dentales: aparatología, prótesis y mecánicas de alineadores"].map(li).join("") + '</ul></div></section>';
  h += '<section class="section" style="padding-top:0"><div class="wrap"><article class="en-card en-card--soon" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:var(--space-5)">' + chip("posturologia") + '<div class="stack" style="gap:var(--space-2);flex:1 1 320px"><span class="en-badge en-badge--soon" style="align-self:flex-start">Formación en desarrollo</span><h2 class="h3">Posturología</h2><p>Todavía no forma parte de los tratamientos del consultorio. ' + F("Confirmar cómo comunicarla") + '</p></div></article></div></section>';
  return h;
}
function axis(sz, t, ic, items){ return '<article class="en-card ' + sz + '"><div class="card-top">' + chip(ic) + '</div><h3 class="h3">' + t + '</h3><ul class="dotlist">' + items.map(function(i){ return '<li><span><b class="num">' + i[0] + '</b><br>' + i[1] + '</span></li>'; }).join("") + '</ul></article>'; }

/* ---------- Casos ---------- */
function mm(s){ var p = s.split("-"); return (+p[0])*12 + (+p[1]-1); }
function caseRange(c){ var v = [].concat(c.ms.map(function(m){return mm(m[0]);}), c.segs.map(function(s){return mm(s[0]);}), c.segs.map(function(s){return mm(s[1]);})); return [Math.min.apply(0,v), Math.max.apply(0,v)]; }
function caseTL(c, from, to){ var span = to-from, X = function(s){ return ((mm(s)-from)/span*100).toFixed(2) + "%"; }, h = '<div class="ctl" aria-hidden="true"><span class="base"></span>';
  c.segs.forEach(function(s){ h += '<span class="sg" style="left:' + X(s[0]) + ';width:' + ((mm(s[1])-mm(s[0]))/span*100).toFixed(2) + '%"></span>'; });
  c.ms.forEach(function(m){ h += '<span class="ms" style="left:' + X(m[0]) + '"></span>'; });
  for (var y=Math.ceil(from/12); y*12<=to; y++) h += '<span class="yl" style="left:' + ((y*12-from)/span*100).toFixed(2) + '%">' + y + '</span>';
  return h + '</div>'; }
function stages(c){ var all = c.ms.map(function(m){ return [m[0], m[1]]; }).concat(c.segs.map(function(s){ return [s[0], s[2] + " (hasta " + s[1] + ")"]; })); all.sort(function(a,b){ return mm(a[0])-mm(b[0]); });
  return '<ul class="stages">' + all.map(function(a){ return '<li><b>' + a[0] + '</b> · ' + a[1] + '</li>'; }).join("") + '</ul>'; }
var CAREAS = [["todos","Todas las áreas"],["odontologia-general","Odontología general"],["ortodoncia","Ortodoncia"],["laser","Láser"],["atm","Neuralgias y ATM"],["ortodoncia-quirurgica","Ortodoncia quirúrgica"]];
var CTECS = [["todas","Todas las técnicas"],["brackets","Brackets"],["alineadores","Alineadores"],["hibrido","Híbrido"],["laser","Láser"]];
function pCasos(){
  var h = pageHead({crumbs:[["Inicio","inicio"],["Casos clínicos"]], eyebrow:"Investigación y actualización constante", title:"Casos reales para entender cada abordaje", lead:"Situaciones documentadas, descritas sin datos que identifiquen a los pacientes. Podés filtrarlas y comparar dos casos. Cada caso es individual y no anticipa el resultado de otro tratamiento."});
  h += '<section class="section" style="padding-top:var(--space-7)"><div class="wrap"><div class="stack" style="gap:var(--space-3);margin-bottom:var(--space-6)"><div class="chips" role="group" aria-label="Filtrar por área" id="caseAreas"></div><div class="chips" role="group" aria-label="Filtrar por técnica" id="caseTecs"></div><p class="small" id="caseCount" aria-live="polite"></p></div><div id="caseList"></div><div id="compare"></div><p class="small" style="margin-top:var(--space-6)">' + F("A confirmar") + ' Que la autorización de los tres casos alcance al nuevo sitio. Faltan las fotos de antes y después.</p></div></section>';
  return h; }
function renderCases(){
  var list = CASES.filter(function(c){ return (S.caseArea==="todos" || c.areas.indexOf(S.caseArea)>-1) && (S.caseTec==="todas" || c.tec.indexOf(S.caseTec)>-1); });
  $("#caseAreas").innerHTML = CAREAS.map(function(a){ var n = CASES.filter(function(c){ return a[0]==="todos" || c.areas.indexOf(a[0])>-1; }).length; return '<button type="button" class="chip" data-carea="' + a[0] + '" aria-pressed="' + (S.caseArea===a[0]) + '">' + a[1] + ' <span class="n">' + n + '</span></button>'; }).join("");
  $("#caseTecs").innerHTML = CTECS.map(function(a){ var n = CASES.filter(function(c){ return a[0]==="todas" || c.tec.indexOf(a[0])>-1; }).length; return '<button type="button" class="chip" data-ctec="' + a[0] + '" aria-pressed="' + (S.caseTec===a[0]) + '">' + a[1] + ' <span class="n">' + n + '</span></button>'; }).join("");
  $("#caseCount").textContent = list.length===1 ? "1 caso" : list.length + " casos";
  if (!list.length){ var an = CAREAS.filter(function(a){ return a[0]===S.caseArea; })[0][1];
    $("#caseList").innerHTML = '<div class="empty"><span class="en-badge en-badge--soon">Sin casos publicados</span><h2 class="h3">Todavía no hay casos en ' + an + (S.caseTec!=="todas" ? ' con esa técnica' : '') + '</h2><p class="muted measure">Se suman cuando haya material documentado y autorizado por escrito por el paciente.</p><button type="button" class="en-btn en-btn--outline en-btn--sm" data-case-reset>Ver todos los casos</button></div>'; }
  else $("#caseList").innerHTML = list.map(function(c){ var r = caseRange(c);
    return '<article class="en-card case" id="case-' + c.id + '"><div class="stack" style="gap:var(--space-3)"><div class="en-case__pair"><div class="en-case__photo"><b>Antes</b>Foto intraoral inicial · pendiente</div><div class="en-case__photo"><b>Después</b>Misma toma y encuadre · pendiente</div></div><p class="en-case__note">' + c.consent + '</p><label class="cmp-check"><input type="checkbox" data-cmp="' + c.id + '"' + (S.cmp.indexOf(c.id)>-1?' checked':'') + (S.cmp.length>=2 && S.cmp.indexOf(c.id)<0?' disabled':'') + '> Comparar este caso</label></div>' +
      '<div class="stack" style="gap:var(--space-4);min-width:0"><div class="tags">' + c.tags.map(function(t){ return '<span class="en-badge en-badge--' + t[1] + '">' + t[0] + '</span>'; }).join("") + '</div><h2 class="h3">' + c.title + '</h2><dl class="facts2"><div><dt>Situación inicial</dt><dd>' + c.sit + '</dd></div><div><dt>Objetivos</dt><dd>' + c.obj + '</dd></div><div><dt>Abordaje</dt><dd>' + c.abo + '</dd></div><div><dt>Consideraciones</dt><dd>' + c.con + '</dd></div></dl>' +
      '<div><p class="eyebrow" style="margin-bottom:var(--space-2)">Evolución documentada</p>' + caseTL(c, r[0]-1, r[1]+1) + stages(c) + '</div>' + (c.flag ? '<p class="small">' + F() + ' ' + c.flag + '</p>' : '') + '</div></article>'; }).join("");
  renderCompare(); }
function renderCompare(){ var box = $("#compare"); if (!box) return;
  if (!S.cmp.length){ box.innerHTML = ""; return; }
  if (S.cmp.length===1){ box.innerHTML = '<div class="compare notice"><b>Elegí otro caso para comparar</b><span>Seleccionaste «' + CASES.filter(function(c){ return c.id===S.cmp[0]; })[0].title + '».</span></div>'; return; }
  var cs = S.cmp.map(function(id){ return CASES.filter(function(c){ return c.id===id; })[0]; }), r0 = caseRange(cs[0]), r1 = caseRange(cs[1]), from = Math.min(r0[0],r1[0])-1, to = Math.max(r0[1],r1[1])+1;
  box.innerHTML = '<section class="compare section--tint en-quote" style="padding:var(--space-6)" aria-label="Comparación de casos"><div class="head-row" style="margin-bottom:var(--space-5)">' + head("Comparación","Dos casos, lado a lado","Las evoluciones usan la misma escala de tiempo.") + '<button type="button" class="en-btn en-btn--outline en-btn--sm" data-cmp-clear>Quitar comparación</button></div><div class="compare-grid">' + cs.map(function(c){ return '<article class="en-card"><h3 class="h3">' + c.title + '</h3>' + caseTL(c, from, to) + '<dl class="facts2" style="grid-template-columns:minmax(0,1fr)"><div><dt>Situación inicial</dt><dd>' + c.sit + '</dd></div><div><dt>Abordaje</dt><dd>' + c.abo + '</dd></div><div><dt>Objetivos</dt><dd>' + c.obj + '</dd></div></dl></article>'; }).join("") + '</div></section>'; }

/* ---------- Primera consulta ---------- */
var JS = [
  {n:"Pedís el turno", b:'<p>Escribinos por WhatsApp al <b>' + WA_TXT + '</b>. Contanos tu nombre, el motivo de consulta y en qué consultorio preferís atenderte.</p><ul class="dotlist"><li>La Plata: miércoles, jueves y viernes</li><li>Quilmes: martes de 9 a 16 h</li></ul><p class="small">' + F("A confirmar") + ' Si habrá turnos en línea además de WhatsApp.</p>'},
  {n:"Primera evaluación", b:'<p>Es una conversación sobre lo que te trae, tus antecedentes y lo que esperás del tratamiento. Después, la Dra. revisa los dientes, la mordida y la función.</p><p class="muted">Si la consulta es por un chico o una chica, también se evalúa cómo vienen creciendo los maxilares.</p>'},
  {n:"Estudios, si hacen falta", b:'<p>Dependen del motivo y de lo que se observe. En ortodoncia suelen pedirse, por ejemplo, una radiografía panorámica, una cefalometría o una telerradiografía de perfil.</p><p class="muted">No todos los casos los necesitan: se piden cuando aportan información para decidir.</p>'},
  {n:"Plan de atención", b:'<p>Con la evaluación y los estudios, la Dra. te explica las alternativas, qué implica cada una, las etapas y una estimación de tiempos.</p><p class="muted">Si el caso lo requiere, el plan se coordina con otros profesionales.</p>'},
  {n:"Seguimiento", b:'<p>Durante el tratamiento hay controles para ver la evolución y hacer ajustes. La frecuencia depende de cada tratamiento. ' + F() + '</p><p class="muted">Al terminar se indican controles y, en ortodoncia, contención para mantener los resultados.</p>'}
];
var CHECK = ["Estudios previos: radiografías, tomografías o informes","La lista de medicamentos que tomás","Datos de tratamientos anteriores de ortodoncia u odontología","Credencial de obra social o prepaga (a confirmar si se atienden)"];
function jPanel(){ var j = JS[S.jStep]; return '<div class="progress" aria-hidden="true"><i style="width:' + ((S.jStep+1)/JS.length*100) + '%"></i></div><p class="eyebrow">Etapa ' + (S.jStep+1) + ' de ' + JS.length + '</p><h2 class="h2">' + j.n + '</h2><div class="stack measure" style="gap:var(--space-3)">' + j.b + '</div>' +
  '<div class="step-ctrl" style="margin-top:var(--space-3)"><button type="button" class="en-btn en-btn--outline en-btn--sm" data-j-nav="-1"' + (S.jStep===0?' disabled':'') + '>Anterior</button>' + (S.jStep<JS.length-1 ? '<button type="button" class="en-btn en-btn--primary en-btn--sm" data-j-nav="1">Siguiente</button>' : '<a class="en-btn en-btn--primary en-btn--sm" href="#contacto">Pedí tu turno</a>') + '</div>'; }
function pPrimera(){
  var h = pageHead({crumbs:[["Inicio","inicio"],["Tu primera consulta"]], eyebrow:"Tu primera consulta", title:"Qué pasa desde que pedís el turno hasta que tenés un plan", lead:"Para que llegues sabiendo qué esperar. No hace falta saber de antemano qué tratamiento necesitás.", extra:'<p class="small">' + F() + ' El recorrido describe un proceso general. La Dra. tiene que confirmar los pasos internos.</p>'});
  h += '<section class="section section--tint"><div class="wrap journey"><div class="j-steps" aria-label="Etapas">' + JS.map(function(j,i){ return '<button type="button" class="j-step' + (i<S.jStep?' done':'') + '" data-j="' + i + '"' + (i===S.jStep?' aria-current="step"':'') + '><span class="k">' + (i+1) + '</span>' + j.n + '</button>'; }).join("") + '</div><div class="en-card" id="jPanel" aria-live="polite" style="gap:var(--space-4)">' + jPanel() + '</div></div></section>';
  h += '<section class="section"><div class="wrap split">' + head("Para llevar","Qué información puede ser útil","Marcá lo que ya tenés listo. La lista queda guardada solo en este dispositivo.") + '<ul class="checklist">' + CHECK.map(function(c,i){ return '<li><label><input type="checkbox" data-check="' + i + '"' + (S.checks[i]?' checked':'') + '><span>' + c + '</span></label></li>'; }).join("") + '</ul></div></section>';
  h += '<section class="section section--surface"><div class="wrap split">' + head("Preguntas frecuentes","Antes de tu primera consulta","") + faq([["¿Cuánto dura la primera consulta?", F("A confirmar") + " Duración aproximada pendiente de la Dra."],["¿Tiene costo la primera consulta?", F("A confirmar") + " Información pendiente de la Dra."],["¿Puedo consultar sin saber qué tratamiento necesito?","Sí. La primera consulta sirve para evaluar y orientarte. Antes podés usar la guía «¿Qué te trae a la consulta?» del inicio."]]) + '</div></section>';
  return h + cta("Pedí tu primera consulta","Elegí el consultorio de La Plata o el de Quilmes y escribinos por WhatsApp.",""); }

/* ---------- Conocimiento ---------- */
var KN = [
  {k:"nov", area:"laser", d:"Agosto 2024", t:"Terapia láser después de una cirugía de distracción ósea", s:"Ponencia en el Congreso de Invierno 2024 de la SAO, aprobada por el Comité Científico.", to:"la-doctora"},
  {k:"nov", area:"ortodoncia", d:"Agosto 2024", t:"Terapia láser en ortodoncia con alineadores", s:"Disertación en el 4.° Congreso de Odontología Láser de ACALO, en Salta.", to:"la-doctora"},
  {k:"tema", area:"atm", t:"Neuralgia y trastorno de la ATM: por qué no son lo mismo", to:"atm"},
  {k:"tema", area:"ortodoncia", t:"Brackets, alineadores o híbrido: cómo se elige", to:"ortodoncia"},
  {k:"tema", area:"laser", t:"Qué es la fotobiomodulación y cuándo se indica", to:"laser"},
  {k:"tema", area:"ortodoncia", t:"La primera evaluación ortodóncica en chicos", to:"ortodoncia"},
  {k:"tema", area:"odontologia-general", t:"Qué se revisa en un control odontológico", to:"odontologia-general"}
];
function pConocimiento(){ return pageHead({crumbs:[["Inicio","inicio"],["Conocimiento y actualidad"]], eyebrow:"Conocimiento y actualidad", title:"Explicaciones claras, revisadas por la Dra.", lead:"Novedades profesionales y guías para pacientes. Cada contenido indica quién lo revisó y cuándo se actualizó."}) +
  '<section class="section" style="padding-top:var(--space-7)"><div class="wrap"><div class="chips" role="group" aria-label="Filtrar por área" id="knChips" style="margin-bottom:var(--space-6)"></div><div class="en-cards" id="knList" aria-live="polite" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))"></div><p class="small" style="margin-top:var(--space-5)">Las guías «En preparación» son temas propuestos. Se publican solo después de la revisión clínica.</p></div></section>'; }
function renderKn(){
  var opts = [["todas","Todas"]].concat(AREAS.filter(function(a){ return !a.soon; }).map(function(a){ return [a.id, a.name]; }));
  $("#knChips").innerHTML = opts.map(function(o){ var n = KN.filter(function(k){ return o[0]==="todas" || k.area===o[0]; }).length; return '<button type="button" class="chip" data-kn="' + o[0] + '" aria-pressed="' + (S.knArea===o[0]) + '">' + o[1] + ' <span class="n">' + n + '</span></button>'; }).join("");
  var list = KN.filter(function(k){ return S.knArea==="todas" || k.area===S.knArea; });
  $("#knList").innerHTML = list.length ? list.map(function(k){ var nov = k.k==="nov"; return '<article class="en-card ' + (nov?'':'en-card--soon') + '"><div class="card-top">' + chip(k.area) + '<span class="en-badge ' + (nov?'en-badge--brand':'en-badge--soon') + '">' + (nov ? "Novedad · " + k.d : "En preparación") + '</span></div><h3 class="h3">' + k.t + '</h3><p>' + (nov ? k.s : "Revisado por: Dra. Edith Noriega · fecha pendiente") + '</p><a class="en-link" href="#' + k.to + '">' + (nov ? "Ver actividad científica" : "Ir a " + area(k.area).name) + '</a></article>'; }).join("") : '<p class="muted">Todavía no hay contenidos en esta área.</p>'; }

/* ---------- Contacto ---------- */
function pContacto(){
  var opts = [["","No sé, quiero orientación"]].concat(AREAS.filter(function(a){ return !a.soon; }).map(function(a){ return [a.id, a.name]; }));
  var h = pageHead({crumbs:[["Inicio","inicio"],["Contacto y turnos"]], eyebrow:"Contacto", title:"Pedí tu turno", lead:"Los turnos se coordinan por WhatsApp. También podés dejar tu consulta indicando el área que te interesa.", extra:today()});
  h += '<section class="section" style="padding-top:var(--space-7)"><div class="wrap stack" style="gap:var(--space-6)"><div class="en-cta" style="flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-between"><span class="en-quarter" aria-hidden="true"></span><div class="stack" style="gap:var(--space-2);position:relative;z-index:1"><p class="eyebrow" style="color:var(--white)">Canal oficial de turnos</p><h2 class="h2">WhatsApp ' + WA_TXT + '</h2><p>Contanos tu nombre, el motivo de consulta y el consultorio que preferís.</p></div><div class="en-cta__actions" style="margin-top:0"><a class="en-btn en-btn--aqua" href="' + WA + '" target="_blank" rel="noopener">Escribir por WhatsApp</a><button type="button" class="en-btn en-btn--ghost-white" data-copy="' + WA_TXT + '">Copiar número</button></div></div>' +
    '<div class="en-contact">' + sedeCards() + '</div><div class="en-contact"><div class="ph" style="aspect-ratio:16/7"><span><b>Mapa de La Plata</b>Se integra al publicar. Cómo llegar ' + F("A confirmar") + '</span></div><div class="ph" style="aspect-ratio:16/7"><span><b>Mapa de Quilmes</b>Se integra al publicar. Indicaciones dentro de la clínica ' + F("A confirmar") + '</span></div></div></div></section>';
  h += '<section class="section section--tint" id="form-sec"><div class="wrap split"><div class="stack" style="gap:var(--space-5)">' + head("Consulta por área","Dejanos tu consulta","Si preferís no escribir por WhatsApp, completá el formulario. El área es opcional y ayuda a orientar la respuesta.") + '<div class="notice"><b>Tus datos están protegidos</b><span class="small" style="color:var(--ink)">Se usan solo para responder tu consulta, según la Ley 25.326 de Protección de los Datos Personales. No incluyas información médica detallada.</span></div><p class="small">' + F("Pendiente") + ' El envío del formulario se integra en la etapa de desarrollo.</p></div>' +
    '<form class="en-form" id="cform" novalidate><div class="en-field" id="f-nombre-w"><label for="f-nombre">Nombre y apellido</label><input id="f-nombre" name="nombre" autocomplete="name" aria-describedby="f-nombre-h"><span class="en-field__help" id="f-nombre-h">Como figura en tu documento.</span></div>' +
    '<div class="en-field" id="f-wa-w"><label for="f-wa">WhatsApp</label><input id="f-wa" name="wa" type="tel" inputmode="tel" autocomplete="tel" aria-describedby="f-wa-h"><span class="en-field__help" id="f-wa-h">Con característica, por ejemplo 221 1234567.</span></div>' +
    '<div class="en-field"><label for="f-area">Área de consulta <span class="opt">(opcional)</span></label><select id="f-area" name="area">' + opts.map(function(o){ return '<option value="' + o[0] + '"' + (o[0]===S.prefArea?' selected':'') + '>' + o[1] + '</option>'; }).join("") + '</select></div>' +
    '<fieldset class="fs"><legend>Consultorio preferido</legend><div class="radios"><label><input type="radio" name="sede" value="laplata">La Plata</label><label><input type="radio" name="sede" value="quilmes">Quilmes</label><label><input type="radio" name="sede" value="igual" checked>Me da igual</label></div></fieldset>' +
    '<div class="en-field"><label for="f-motivo">Motivo de consulta <span class="opt">(opcional)</span></label><textarea id="f-motivo" name="motivo" rows="4" aria-describedby="f-motivo-h"></textarea><span class="en-field__help" id="f-motivo-h">En pocas palabras. No hace falta saber qué tratamiento necesitás.</span></div>' +
    '<div class="hp" aria-hidden="true"><label for="f-web">No completar</label><input id="f-web" name="web" tabindex="-1" autocomplete="off"></div>' +
    '<div class="en-field" id="f-ok-w"><label class="consent"><input type="checkbox" id="f-ok" aria-describedby="f-ok-h"><span>Acepto que usen estos datos solo para responder mi consulta.</span></label><span class="en-field__help" id="f-ok-h"></span></div>' +
    '<button class="en-btn en-btn--primary" type="submit" style="align-self:flex-start">Enviar consulta</button><div id="formMsg" aria-live="polite"></div></form></div></section>';
  return h; }
function submitForm(e){ e.preventDefault(); var ok = true;
  function set(id, bad, msg, def){ var w = $("#" + id + "-w"); w.classList.toggle("en-field--error", bad); $("#" + id + "-h").textContent = bad ? msg : def; var inp = $("#" + id); if (bad){ inp.setAttribute("aria-invalid","true"); ok = false; } else inp.removeAttribute("aria-invalid"); }
  set("f-nombre", $("#f-nombre").value.trim().length < 3, "Escribí tu nombre y apellido.", "Como figura en tu documento.");
  set("f-wa", $("#f-wa").value.replace(/\D/g,"").length < 10, "Escribí un número de WhatsApp completo, con característica.", "Con característica, por ejemplo 221 1234567.");
  set("f-ok", !$("#f-ok").checked, "Para enviar la consulta, aceptá el uso de tus datos.", "");
  var msg = $("#formMsg");
  if (!ok){ msg.innerHTML = '<div class="notice notice--error" role="alert"><b>Revisá los campos marcados</b><span class="small" style="color:var(--ink)">Debajo de cada uno te indicamos qué corregir.</span></div>'; var f = $(".en-field--error input"); if (f) f.focus(); return; }
  var a = $("#f-area"), an = a.value ? a.options[a.selectedIndex].text : "orientación general";
  msg.innerHTML = '<div class="notice" role="status"><b>Consulta lista para enviar: ' + esc(an) + '</b><span class="small" style="color:var(--ink)">En este prototipo el envío todavía no está conectado. En el sitio publicado la consulta llegará al consultorio. Mientras tanto, escribinos por WhatsApp al ' + WA_TXT + '.</span></div>'; }

/* ---------- Router ---------- */
var ROUTES = { "inicio":["Inicio",pInicio,"inicio"], "tratamientos":["Tratamientos",pTratamientos,"tratamientos"], "odontologia-general":["Odontología general",pGeneral,"tratamientos"], "ortodoncia":["Ortodoncia",pOrto,"tratamientos"], "laser":["Láser odontológico",pLaser,"tratamientos"], "atm":["Neuralgias y ATM",pATM,"tratamientos"], "ortodoncia-quirurgica":["Ortodoncia quirúrgica y malformaciones",pQX,"tratamientos"], "la-doctora":["La doctora",pDoctora,"la-doctora"], "casos":["Casos clínicos",pCasos,"casos"], "primera-consulta":["Tu primera consulta",pPrimera,"primera-consulta"], "conocimiento":["Conocimiento y actualidad",pConocimiento,"conocimiento"], "contacto":["Contacto y turnos",pContacto,"contacto"] };
var NAV = [["tratamientos","Tratamientos"],["la-doctora","La doctora"],["casos","Casos"],["primera-consulta","Primera consulta"],["conocimiento","Conocimiento"],["contacto","Contacto"]];
var current = null, pendingCase = null;
function route(){ var r = (location.hash || "#inicio").slice(1); return ROUTES[r] ? r : "inicio"; }
function render(r){ var R = ROUTES[r]; current = r; $("#main").innerHTML = R[1]();
  document.title = r==="inicio" ? "Dra. Edith Noriega · Ortodoncista" : R[0] + " · Dra. Edith Noriega";
  $$("#nav a, #sheetNav a").forEach(function(a){ if (a.getAttribute("href")==="#" + R[2]) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  after(r); }
function after(r){
  if (r==="inicio") $("#guide").innerHTML = guideHTML();
  if (r==="tratamientos") setNet(S.txArea);
  if (r==="odontologia-general") markTooth();
  if (r==="laser") fireBeam();
  if (r==="atm") markPart();
  if (r==="casos"){ renderCases(); if (pendingCase){ var el = document.getElementById("case-" + pendingCase); pendingCase = null; if (el) setTimeout(function(){ el.scrollIntoView({behavior:reduce?"auto":"smooth", block:"start"}); }, 60); } }
  if (r==="conocimiento") renderKn();
  if (r==="contacto"){ $("#cform").addEventListener("submit", submitForm); if (S.scrollForm){ S.scrollForm = false; setTimeout(function(){ $("#form-sec").scrollIntoView({behavior:reduce?"auto":"smooth"}); $("#f-area").focus({preventScroll:true}); }, 60); } }
}
function go(){ var r = route(); if (r===current) return; closeSheet();
  var swap = function(){ render(r); try { window.scrollTo({top:0, behavior:"instant"}); } catch(err){ window.scrollTo(0,0); } var h1 = $("#main h1"); if (h1) h1.focus({preventScroll:true}); };
  if (document.startViewTransition && !reduce && current) document.startViewTransition(swap); else swap(); }
window.addEventListener("hashchange", go);

/* ---------- Interacciones ---------- */
function markTooth(){ $$(".odo .tooth").forEach(function(t){ var n = +t.getAttribute("data-tooth"); t.classList.toggle("on", n===S.tooth); t.classList.toggle("same", n!==S.tooth && n%10===S.tooth%10); t.setAttribute("aria-pressed", n===S.tooth); }); }
function markPart(){ var sv = $("#atmSvg"); if (!sv) return; sv.classList.add("sel"); $$(".hl", sv).forEach(function(e){ e.classList.toggle("on", e.getAttribute("data-part")===S.atmPart); }); }
function toast(t){ var el = $("#toast"); el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function(){ el.hidden = true; }, 2200); }
function store(){ try { localStorage.setItem("en-proto", JSON.stringify({flags:!document.body.classList.contains("no-flags"), checks:S.checks})); } catch(e){} }
function selectTx(id){ S.txArea = id; var st = $("#tx-panel"); if (!st) return;
  $$(".tx-tab").forEach(function(b){ var on = b.getAttribute("data-tx")===id; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; });
  st.setAttribute("aria-labelledby","tab-" + id); st.innerHTML = txPanel(id); setNet(id); }
function updateQX(){ $$(".lanes .ph-h").forEach(function(b,i){ b.classList.toggle("on", i===S.qx); b.setAttribute("aria-pressed", i===S.qx); }); $$(".lanes .cell").forEach(function(c,i){ c.classList.toggle("on", i%QX.length===S.qx); }); $("#qxBody").innerHTML = qxStep(); $("#qxCount").textContent = (S.qx+1) + " / " + QX.length; }
function updateJ(){ $$(".j-step").forEach(function(b,i){ if (i===S.jStep) b.setAttribute("aria-current","step"); else b.removeAttribute("aria-current"); b.classList.toggle("done", i<S.jStep); }); $("#jPanel").innerHTML = jPanel(); }

document.addEventListener("click", function(e){
  var t = e.target.closest("button, a, .tooth, .node, .hit"); if (!t) return;
  var d = function(k){ return t.getAttribute(k); };
  if (d("data-scroll")){ var s = document.getElementById(d("data-scroll")); if (s) s.scrollIntoView({behavior:reduce?"auto":"smooth"}); return; }
  if (d("data-copy")){ var v = d("data-copy"); try { navigator.clipboard.writeText(v).then(function(){ toast("Número copiado"); }, function(){ toast("Copialo a mano: " + v); }); } catch(err){ toast("Copialo a mano: " + v); } return; }
  if (d("data-need")!==null){ S.need = +d("data-need"); $$(".need").forEach(function(b){ b.setAttribute("aria-pressed", b===t); }); $("#guide").innerHTML = guideHTML(); if (window.matchMedia("(max-width:860px)").matches) $("#guide").scrollIntoView({behavior:reduce?"auto":"smooth", block:"nearest"}); return; }
  if (d("data-consult")!==null){ S.prefArea = d("data-consult"); S.scrollForm = true; if (location.hash==="#contacto"){ current = null; go(); } else location.hash = "contacto"; return; }
  if (d("data-case")){ pendingCase = d("data-case"); return; }
  if (d("data-mode")){ S.txMode = d("data-mode"); $$("[data-mode]").forEach(function(b){ b.setAttribute("aria-selected", b===t); }); var root = $("#tx-root"); root.setAttribute("aria-labelledby","mode-" + S.txMode); root.innerHTML = S.txMode==="area" ? txArea() : txNeed(); return; }
  if (d("data-tx")){ selectTx(d("data-tx")); return; }
  if (t.classList.contains("node")){ var id = d("data-net"); setNet(id); if ($("#tx-panel")) selectTx(id); else S.txArea = id; return; }
  if (t.classList.contains("tooth")){ S.tooth = +d("data-tooth"); $("#toothCard").innerHTML = toothCard(); markTooth(); return; }
  if (d("data-ox")){ S.ox = d("data-ox"); $$("[data-ox]").forEach(function(b){ b.setAttribute("aria-pressed", b===t); }); $("#oxSvg").setAttribute("data-v", S.ox); $("#oxInfo").innerHTML = oxInfo(); $("#oxTable").innerHTML = oxTable(); return; }
  if (d("data-laser")){ S.laser = d("data-laser"); $$("[data-laser]").forEach(function(b){ b.setAttribute("aria-pressed", b===t); }); $("#appCard").innerHTML = appCard(); fireBeam(); return; }
  if (d("data-atm-open")!==null){ S.atmOpen = d("data-atm-open")==="1"; $$("[data-atm-open]").forEach(function(b){ b.setAttribute("aria-pressed", b===t); }); $("#atmSvg").classList.toggle("open", S.atmOpen); $("#atmMove").textContent = atmMoveText(); return; }
  if (d("data-part-btn") || (t.classList.contains("hit") && d("data-part"))){ S.atmPart = d("data-part-btn") || d("data-part"); $$("[data-part-btn]").forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-part-btn")===S.atmPart); }); $("#partCard").innerHTML = partCard(); markPart(); return; }
  if (d("data-qx")!==null || d("data-qx-nav")!==null){ S.qx = d("data-qx")!==null ? +d("data-qx") : (S.qx + (+d("data-qx-nav")) + QX.length) % QX.length; updateQX(); return; }
  if (d("data-tl")){ S.tlSel = d("data-tl"); $("#tlRoot").innerHTML = tlHTML(); var b = $('[data-tl="' + S.tlSel + '"]'); if (b) b.focus(); return; }
  if (d("data-tlcat")){ var k = d("data-tlcat"); S.tlCats[k] = !S.tlCats[k]; if (!Object.keys(S.tlCats).some(function(x){ return S.tlCats[x]; })) S.tlCats[k] = true; t.setAttribute("aria-pressed", !!S.tlCats[k]); $("#tlRoot").innerHTML = tlHTML(); return; }
  if (d("data-tlview")){ S.tlView = d("data-tlview"); $$("[data-tlview]").forEach(function(b){ b.setAttribute("aria-pressed", b===t); }); $("#tlRoot").innerHTML = tlHTML(); return; }
  if (d("data-carea")){ S.caseArea = d("data-carea"); renderCases(); return; }
  if (d("data-ctec")){ S.caseTec = d("data-ctec"); renderCases(); return; }
  if (t.hasAttribute("data-case-reset")){ S.caseArea = "todos"; S.caseTec = "todas"; renderCases(); return; }
  if (t.hasAttribute("data-cmp-clear")){ S.cmp = []; renderCases(); return; }
  if (d("data-j")!==null || d("data-j-nav")!==null){ S.jStep = d("data-j")!==null ? +d("data-j") : Math.max(0, Math.min(JS.length-1, S.jStep + (+d("data-j-nav")))); updateJ(); return; }
  if (d("data-kn")){ S.knArea = d("data-kn"); renderKn(); return; }
});
document.addEventListener("change", function(e){ var t = e.target;
  if (t.hasAttribute("data-cmp")){ var id = t.getAttribute("data-cmp"); if (t.checked){ if (S.cmp.length<2) S.cmp.push(id); } else S.cmp = S.cmp.filter(function(x){ return x!==id; }); renderCases(); if (S.cmp.length===2) $("#compare").scrollIntoView({behavior:reduce?"auto":"smooth", block:"start"}); return; }
  if (t.hasAttribute("data-check")){ S.checks[t.getAttribute("data-check")] = t.checked; store(); return; }
  if (t.id==="flagsToggle"){ document.body.classList.toggle("no-flags", !t.checked); store(); } });
document.addEventListener("keydown", function(e){ var t = e.target;
  if ((e.key==="Enter" || e.key===" ") && t.matches && t.matches(".tooth, .node")){ e.preventDefault(); t.dispatchEvent(new MouseEvent("click", {bubbles:true})); return; }
  if (t.matches && t.matches(".tx-tab") && ["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].indexOf(e.key)>-1){ e.preventDefault(); var tabs = $$(".tx-tab"), i = tabs.indexOf(t);
    i = e.key==="Home" ? 0 : e.key==="End" ? tabs.length-1 : (i + ((e.key==="ArrowDown"||e.key==="ArrowRight") ? 1 : -1) + tabs.length) % tabs.length; selectTx(tabs[i].getAttribute("data-tx")); tabs[i].focus(); return; }
  if (e.key==="Escape" && !$("#sheet").hidden) closeSheet(true); });

/* ---------- Menú ---------- */
var lastFocus = null;
function openSheet(){ lastFocus = document.activeElement; $("#sheet").hidden = false; document.body.style.overflow = "hidden"; $("#menuBtn").setAttribute("aria-expanded","true"); var f = $("#sheet nav a"); if (f) f.focus(); }
function closeSheet(restore){ var s = $("#sheet"); if (s.hidden) return; s.hidden = true; document.body.style.overflow = ""; $("#menuBtn").setAttribute("aria-expanded","false"); if (restore && lastFocus) lastFocus.focus(); }
$("#menuBtn").addEventListener("click", openSheet);
$("#closeSheet").addEventListener("click", function(){ closeSheet(true); });
$("#sheet").addEventListener("click", function(e){ if (e.target.closest("a")) closeSheet(false); });

/* ---------- Arranque ---------- */
$("#nav").innerHTML = NAV.map(function(n){ return '<li><a href="#' + n[0] + '">' + n[1] + '</a></li>'; }).join("");
$("#footNav").innerHTML = [["inicio","Inicio"]].concat(NAV).map(function(n){ return '<li><a href="#' + n[0] + '">' + n[1] + '</a></li>'; }).join("");
$("#sheetNav").innerHTML = [["inicio","Inicio"]].concat(NAV).map(function(n){ return '<a href="#' + n[0] + '">' + n[1] + '</a>'; }).join("");
$("#sheetAreas").innerHTML = AREAS.filter(function(a){ return !a.soon; }).map(function(a){ return '<a href="#' + a.id + '">' + chip(a.id).replace('class="en-icon-chip"','class="en-icon-chip" style="width:40px;height:40px"') + a.name + '</a>'; }).join("");
$("#footAreas").innerHTML = AREAS.filter(function(a){ return !a.soon; }).map(function(a){ return '<li><a href="#' + a.id + '">' + a.name + '</a></li>'; }).join("");
try { var sv = JSON.parse(localStorage.getItem("en-proto") || "{}"); if (sv.flags===false){ document.body.classList.add("no-flags"); $("#flagsToggle").checked = false; } if (sv.checks) S.checks = sv.checks; } catch(e){}
render(route());
})();
