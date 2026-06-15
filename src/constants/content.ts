import type { Stat, Testimonial, Value } from '../types';

/** Estadísticas de confianza (sección Stats). */
export const STATS: Stat[] = [
  {
    label: 'Sonrisas atendidas',
    value: '+800',
    description: 'Pacientes que regresan, en promedio cada 6 meses.',
  },
  {
    label: 'Años cuidando sonrisas',
    value: '12',
    description: 'De experiencia clínica acumulada en el equipo.',
  },
  {
    label: 'Reseñas en Google',
    value: '4.9',
    suffix: '/5',
    description: '800+ reseñas verificadas — sin filtros, sin ediciones.',
  },
  {
    label: 'Tasa de regreso',
    value: '94',
    suffix: '%',
    description: 'De pacientes vuelve para su segunda cita.',
  },
];

/** Valores / pilares del studio (sección Nosotros). */
export const VALUES: Value[] = [
  {
    title: 'Trato humano',
    description: 'Te explicamos paso a paso. Tú llevas el ritmo.',
    icon: 'heart',
  },
  {
    title: 'Estética cuidada',
    description: 'Espacios diseñados para que te sientas en casa.',
    icon: 'check-circle',
  },
  {
    title: 'Precios justos',
    description: 'Estimados claros antes de cualquier cita.',
    icon: 'dollar',
  },
  {
    title: 'Seguimiento',
    description: 'Te escribimos a los 3 días para saber cómo estás.',
    icon: 'badge-check',
  },
];

/** Testimonios verificados. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Llegué con miedo. Salí con una sonrisa que no reconocía como mía. El trato es algo aparte — me explicaron cada paso, sin prisa.',
    highlight: 'no reconocía como mía.',
    name: 'María Fernández',
    initial: 'M',
    treatment: 'Diseño de sonrisa',
    date: 'abr 2026',
    rating: 5,
  },
  {
    quote:
      'Me explicaron cada paso sin que tuviera que preguntar. Por primera vez no sentí ansiedad en una limpieza. El studio es luminoso y huele a flores.',
    highlight: 'Por primera vez no sentí ansiedad',
    name: 'Diego Salazar',
    initial: 'D',
    treatment: 'Limpieza',
    date: 'mar 2026',
    rating: 5,
  },
  {
    quote:
      'El studio es precioso, pero lo que más me sorprendió fue el seguimiento. Me escribieron a los tres días para ver cómo estaba. Eso no lo había vivido nunca.',
    highlight: 'el seguimiento.',
    name: 'Valeria Cortez',
    initial: 'V',
    treatment: 'Blanqueamiento',
    date: 'feb 2026',
    rating: 5,
  },
];
