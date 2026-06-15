import { IMAGES } from './images';

/** Contenido específico de la página de Tratamientos. */

export const TR_REASONS: string[] = [
  'Estimado claro antes de empezar',
  'Sedación consciente disponible',
  'Cuotas sin intereses',
  'Seguimiento a los 3 días',
];

export const TR_CATEGORY_PILLS: { id: string; name: string; text: string; icon: string }[] = [
  { id: 'estetica', name: 'Estética dental', text: 'Carillas, blanqueamiento y diseño de sonrisa.', icon: 'sparkle' },
  { id: 'ortodoncia', name: 'Ortodoncia', text: 'Brackets estéticos y alineadores invisibles.', icon: 'activity' },
  { id: 'general', name: 'Odontología general', text: 'Limpieza, resinas, endodoncia y más.', icon: 'shield' },
  { id: 'pediatria', name: 'Odontopediatría', text: 'Primera cita y cuidado para los más pequeños.', icon: 'smile' },
  { id: 'encias', name: 'Salud de encías', text: 'Periodoncia y tratamiento de encías.', icon: 'heart' },
];

export interface CategorySectionData {
  id: string;
  number: string;
  title: string;
  titleEm: string;
  description: string;
  tag: string;
  image: string;
  flip: boolean;
  services: { name: string; price: string }[];
}

export const TR_CATEGORIES: CategorySectionData[] = [
  {
    id: 'estetica',
    number: 'Categoría 01',
    title: 'Diseñamos la sonrisa',
    titleEm: 'que siempre quisiste.',
    description:
      'La estética dental no es vanidad — es volver a sentirte tú. Trabajamos con simulación digital para que veas tu nueva sonrisa antes de empezar.',
    tag: 'Estética dental',
    image: IMAGES.tratEstetica,
    flip: false,
    services: [
      { name: 'Diseño de sonrisa digital', price: 'Desde S/ 1,800' },
      { name: 'Carillas de porcelana', price: 'Desde S/ 900 c/u' },
      { name: 'Blanqueamiento profesional', price: 'Desde S/ 350' },
      { name: 'Resinas estéticas', price: 'Desde S/ 120' },
    ],
  },
  {
    id: 'ortodoncia',
    number: 'Categoría 02',
    title: 'Alinear tus dientes,',
    titleEm: 'sin que se note.',
    description:
      'Desde brackets estéticos hasta alineadores transparentes que casi nadie verá. Ortodoncia pensada también para adultos que creían que ya era tarde.',
    tag: 'Ortodoncia',
    image: IMAGES.tratOrtodoncia,
    flip: true,
    services: [
      { name: 'Alineadores invisibles', price: 'Desde S/ 4,500' },
      { name: 'Brackets estéticos', price: 'Desde S/ 2,400' },
      { name: 'Brackets metálicos', price: 'Desde S/ 1,900' },
      { name: 'Retenedores', price: 'Desde S/ 280' },
    ],
  },
  {
    id: 'general',
    number: 'Categoría 03',
    title: 'La base de todo:',
    titleEm: 'una boca sana.',
    description:
      'Lo esencial, hecho con el mismo cuidado que lo complejo. Aquí empieza casi todo el mundo — con una limpieza y una conversación honesta.',
    tag: 'Odontología general',
    image: IMAGES.tratGeneral,
    flip: false,
    services: [
      { name: 'Limpieza profunda + profilaxis', price: 'Desde S/ 80' },
      { name: 'Endodoncia (tratamiento de raíz)', price: 'Desde S/ 380' },
      { name: 'Extracciones', price: 'Desde S/ 150' },
      { name: 'Prótesis fijas y removibles', price: 'Desde S/ 600' },
    ],
  },
  {
    id: 'pediatria',
    number: 'Categoría 04',
    title: 'Su primera visita,',
    titleEm: 'una buena experiencia.',
    description:
      'Atendemos niños desde los 5 años con un protocolo especial: sin sustos, con juegos y mucha paciencia. Una buena primera vez dura toda la vida.',
    tag: 'Odontopediatría',
    image: IMAGES.tratPediatria,
    flip: true,
    services: [
      { name: 'Primera cita del peque', price: 'Desde S/ 70' },
      { name: 'Sellantes preventivos', price: 'Desde S/ 90' },
      { name: 'Aplicación de flúor', price: 'Desde S/ 60' },
      { name: 'Curaciones infantiles', price: 'Desde S/ 110' },
    ],
  },
  {
    id: 'encias',
    number: 'Categoría 05',
    title: 'Encías sanas,',
    titleEm: 'sonrisa que dura.',
    description:
      'La salud de tus encías es la base de todo lo demás. Detectamos y tratamos a tiempo para que tus dientes te acompañen muchos años más.',
    tag: 'Salud de encías',
    image: IMAGES.tratEncias,
    flip: false,
    services: [
      { name: 'Evaluación periodontal', price: 'Sin costo' },
      { name: 'Tratamiento de gingivitis', price: 'Desde S/ 180' },
      { name: 'Curetaje / raspado', price: 'Desde S/ 250' },
      { name: 'Cirugía periodontal', price: 'Desde S/ 500' },
    ],
  },
];

export const TR_PROCESS: { title: string; text: string }[] = [
  { title: 'Conversación', text: 'Nos escribes por WhatsApp, te damos un estimado claro y agendamos.' },
  { title: 'Evaluación', text: 'Revisamos tu boca con calma y te explicamos todo en palabras simples.' },
  { title: 'Tu plan', text: 'Te proponemos opciones con precios. Tú decides el ritmo y el alcance.' },
  { title: 'Tratamiento', text: 'Trabajamos sin prisa, con sedación si la necesitas, y seguimiento a los 3 días.' },
];

export interface CaseData {
  category: string;
  title: string;
  text: string;
  meta: string[];
  before: string;
  after: string;
}

export const TR_CASES: CaseData[] = [
  {
    category: 'Diseño de sonrisa',
    title: '8 carillas de porcelana',
    text: 'María llegó pidiendo "algo natural, que no se note". Rediseñamos su sonrisa respetando su forma de cara.',
    meta: ['3 sesiones', 'Sin dolor', 'abr 2026'],
    before: IMAGES.caso1Antes,
    after: IMAGES.caso1Despues,
  },
  {
    category: 'Ortodoncia + blanqueamiento',
    title: 'Alineadores invisibles',
    text: 'Diego creía que a los 38 ya era tarde. 11 meses de alineadores y un blanqueamiento final lo demostraron lo contrario.',
    meta: ['11 meses', 'Invisible', 'mar 2026'],
    before: IMAGES.caso2Antes,
    after: IMAGES.caso2Despues,
  },
];

export const TR_FAQ: { q: string; a: string }[] = [
  {
    q: '¿Los tratamientos duelen?',
    a: 'Trabajamos con técnicas suaves y, cuando hace falta, anestesia y sedación consciente. Si en algún momento sientes incomodidad, paramos. Sin preguntas.',
  },
  {
    q: '¿Puedo pagar en cuotas?',
    a: 'Sí. Aceptamos efectivo, Yape, Plin, transferencias y tarjetas. Para tratamientos mayores ofrecemos planes en cuotas sin intereses.',
  },
  {
    q: '¿La evaluación tiene costo?',
    a: 'La evaluación inicial es sin costo cuando viene incluida en el paquete Sonrisa Fresh. Te enviamos el detalle por WhatsApp antes de tu cita.',
  },
  {
    q: '¿Cuánto dura un diseño de sonrisa?',
    a: 'Entre 3 y 5 sesiones según el caso. Empezamos con una simulación digital para que apruebes el resultado antes de tocar un solo diente.',
  },
  {
    q: '¿Atienden niños?',
    a: 'Sí, desde los 5 años. Tenemos un protocolo especial para que su primera experiencia sea tranquila y hasta divertida.',
  },
  {
    q: '¿Cada cuánto debo hacerme una limpieza?',
    a: 'Recomendamos cada 6 meses. En tu cita te decimos exactamente cuándo volver, según la salud de tus encías.',
  },
];
