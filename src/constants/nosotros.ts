import type { Value } from '../types';

/** Línea de tiempo de la historia del studio. */
export const MILESTONES: { year: string; title: string; text: string }[] = [
  {
    year: '2014',
    title: 'Una idea simple',
    text: 'La Dra. Camila y el Dr. Sebastián abren un pequeño consultorio con una convicción: que ir al dentista no tiene que dar miedo. Empiezan con dos sillones y muchas ganas.',
  },
  {
    year: '2018',
    title: 'Nace "Sonríe sin miedo"',
    text: 'Lanzamos nuestro programa de atención para pacientes con ansiedad dental. La voz se corre y empezamos a recibir personas que no visitaban a un dentista hacía años.',
  },
  {
    year: '2021',
    title: 'El studio en el centro de Huancayo',
    text: 'Nos mudamos a un espacio diseñado de cero para sentirse como un atelier: luz natural, plantas y cero ambiente de clínica. El equipo crece a cuatro especialistas.',
  },
  {
    year: '2024',
    title: 'Diseño de sonrisa digital',
    text: 'Incorporamos simulación digital y escaneo intraoral. Ahora puedes ver tu nueva sonrisa antes de empezar — sin moldes incómodos, sin sorpresas.',
  },
  {
    year: '2026',
    title: '800 sonrisas y contando',
    text: 'Hoy somos un studio con 4.9 estrellas y más de 800 pacientes que regresan. Pero la idea sigue siendo la misma de 2014: cuidar personas, no dientes.',
  },
];

/** Los seis valores ampliados de la página Nosotros. */
export const MISSION_VALUES: Value[] = [
  {
    title: 'Trato humano',
    description: 'Te explicamos cada paso, preguntamos cómo te sientes y nunca te apuramos. Tú llevas el ritmo, siempre.',
    icon: 'heart',
  },
  {
    title: 'Estética elegante',
    description: 'Un espacio luminoso y cuidado en cada detalle. Más cerca de un atelier que de una clínica fría.',
    icon: 'shield',
  },
  {
    title: 'Precios justos',
    description: 'Estimados claros antes de cualquier cita, y planes en cuotas sin intereses. Sin letra chica.',
    icon: 'dollar',
  },
  {
    title: 'Honestidad',
    description: 'Solo recomendamos lo que realmente necesitas. Si algo puede esperar, te lo decimos.',
    icon: 'badge-check',
  },
  {
    title: 'Seguimiento real',
    description: 'Te escribimos a los tres días para saber cómo te sientes. Cuidarte no termina cuando sales.',
    icon: 'check-circle',
  },
  {
    title: 'Mejora constante',
    description: 'Invertimos en tecnología y formación para que recibas lo mejor de la odontología actual.',
    icon: 'sparkle',
  },
];

/** Pasos de la filosofía de atención. */
export const PHILOSOPHY_STEPS: { title: string; text: string }[] = [
  {
    title: 'Conversación por WhatsApp',
    text: 'Nos cuentas qué buscas. Te enviamos un estimado claro y agendamos en el horario que más te acomode.',
  },
  {
    title: 'Bienvenida en el studio',
    text: 'Llegas, te recibe Lucía, te ofrecemos un café o agua. Cero apuro, cero sala de espera incómoda.',
  },
  {
    title: 'Evaluación tranquila',
    text: 'Revisamos tu boca y conversamos. Te explicamos todo lo que vemos, con palabras simples y sin tecnicismos.',
  },
  {
    title: 'Plan a tu medida',
    text: 'Te proponemos opciones con precios claros — tú decides el ritmo y el alcance. Nunca decidimos por ti.',
  },
  {
    title: 'Tratamiento sin miedo',
    text: 'Trabajamos a tu ritmo, con sedación consciente si la necesitas. Te avisamos cada paso antes de darlo.',
  },
  {
    title: 'Seguimiento humano',
    text: 'Te escribimos a los 3 días para saber cómo te sientes. Siempre. Porque cuidarte no termina cuando sales.',
  },
];
