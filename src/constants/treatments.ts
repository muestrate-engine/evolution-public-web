import type { Treatment } from '../types';

/** Catálogo de tratamientos mostrado en el bento de la home y la página de tratamientos. */
export const TREATMENTS: Treatment[] = [
  {
    slug: 'diseno-de-sonrisa',
    number: 'Más solicitado',
    title: 'Diseño de sonrisa',
    description:
      'Carillas de porcelana, resinas y plan estético personalizado. Diseñamos tu sonrisa contigo — con simulación digital antes de empezar.',
    priceFrom: 'Desde S/ 1,800',
    category: 'estetica',
    icon: 'sparkle',
    meta: ['3–5 sesiones', 'Sedación opcional'],
    variant: 'feat',
  },
  {
    slug: 'limpieza-profunda',
    number: '01',
    title: 'Limpieza profunda',
    description: 'Detartraje, profilaxis y plan personalizado.',
    priceFrom: 'Desde S/ 80',
    category: 'preventivo',
    icon: 'shield-check',
  },
  {
    slug: 'blanqueamiento',
    number: '02',
    title: 'Blanqueamiento',
    description: 'Resultados visibles en una sola sesión.',
    priceFrom: 'Desde S/ 350',
    category: 'estetica',
    icon: 'sun',
  },
  {
    slug: 'implantes-dentales',
    number: 'Premium',
    title: 'Implantes dentales',
    description:
      'Soluciones permanentes con tecnología de última generación. Recuperas función y estética para toda la vida.',
    priceFrom: 'Desde S/ 3,200',
    category: 'especialidad',
    icon: 'shield',
    meta: ['Cirugía guiada'],
    variant: 'dark',
  },
  {
    slug: 'ortodoncia',
    number: '03',
    title: 'Ortodoncia',
    description: 'Brackets estéticos y alineadores invisibles.',
    priceFrom: 'Desde S/ 2,400',
    category: 'especialidad',
    icon: 'activity',
  },
  {
    slug: 'resinas-esteticas',
    number: '04',
    title: 'Resinas estéticas',
    description: 'Reparaciones discretas, color a medida.',
    priceFrom: 'Desde S/ 120',
    category: 'estetica',
    icon: 'shield',
  },
  {
    slug: 'endodoncia',
    number: '05',
    title: 'Endodoncia',
    description: 'Tratamiento de raíz, sin dolor.',
    priceFrom: 'Desde S/ 380',
    category: 'especialidad',
    icon: 'smile',
  },
  {
    slug: 'protesis',
    number: '06',
    title: 'Prótesis',
    description: 'Removibles y fijas, totalmente a medida.',
    priceFrom: 'Desde S/ 600',
    category: 'especialidad',
    icon: 'cross',
  },
];

/** Pestañas de filtrado de tratamientos. */
export const TREATMENT_TABS: { label: string; value: 'todos' | Treatment['category'] }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Estética', value: 'estetica' },
  { label: 'Preventivo', value: 'preventivo' },
  { label: 'Especialidad', value: 'especialidad' },
];
