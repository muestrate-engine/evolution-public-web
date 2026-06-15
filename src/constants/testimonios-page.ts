/** Contenido específico de la página de Testimonios. */

export const TS_RATING_BARS: { stars: number; pct: number }[] = [
  { stars: 5, pct: 94 },
  { stars: 4, pct: 5 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

export const TS_TRUST: { value: string; suffix?: string; label: string; desc: string }[] = [
  { value: '+800', label: 'Pacientes atendidos', desc: 'Sonrisas cuidadas desde 2014, y contando.' },
  { value: '4.9', suffix: '/5', label: 'Valoración promedio', desc: '812 reseñas verificadas en Google Maps.' },
  { value: '12', label: 'Años de experiencia', desc: 'Trayectoria clínica acumulada del equipo.' },
  { value: '94', suffix: '%', label: 'Recomendaría el studio', desc: 'De pacientes regresaría y nos referiría.' },
];

export interface FeaturedQuote {
  quote: string;
  highlight: string;
  name: string;
  initials: string;
  meta: string;
}

export const TS_FEATURED_MAIN: FeaturedQuote = {
  quote:
    'Llevaba años evitando al dentista por miedo. En Evolution me explicaron cada paso, pararon cuando lo necesité y, al final, salí con una sonrisa que no reconocía como mía. Hoy vuelvo cada seis meses sin pensarlo dos veces.',
  highlight: 'salí con una sonrisa que no reconocía como mía.',
  name: 'María Fernández',
  initials: 'MF',
  meta: 'Diseño de sonrisa · abril 2026',
};

export const TS_FEATURED_SIDE: FeaturedQuote[] = [
  {
    quote: 'Por primera vez no sentí ansiedad en una limpieza. Me explicaron todo sin que tuviera que preguntar.',
    highlight: 'Me explicaron todo sin que tuviera que preguntar.',
    name: 'Diego Salazar',
    initials: 'DS',
    meta: 'Limpieza · marzo 2026',
  },
  {
    quote: 'Lo que más me sorprendió fue el seguimiento. Me escribieron a los tres días para ver cómo estaba.',
    highlight: 'el seguimiento.',
    name: 'Valeria Cortez',
    initials: 'VC',
    meta: 'Blanqueamiento · febrero 2026',
  },
];

export const TS_TABS: { label: string; value: string }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Diseño de sonrisa', value: 'diseno' },
  { label: 'Ortodoncia', value: 'ortodoncia' },
  { label: 'Limpieza', value: 'limpieza' },
  { label: 'Implantes', value: 'implantes' },
  { label: 'Blanqueamiento', value: 'blanqueamiento' },
  { label: 'Endodoncia', value: 'endodoncia' },
];

export interface Opinion {
  category: string;
  cat: string;
  quote: string;
  highlight: string;
  name: string;
  initials: string;
  date: string;
}

export const TS_OPINIONS: Opinion[] = [
  {
    category: 'Diseño de sonrisa',
    cat: 'diseno',
    quote: 'Vi mi nueva sonrisa en la simulación antes de empezar. El resultado fue idéntico a lo que me prometieron. Natural, nada falso.',
    highlight: 'idéntico a lo que me prometieron.',
    name: 'Rodrigo Paredes',
    initials: 'RP',
    date: 'abril 2026',
  },
  {
    category: 'Ortodoncia',
    cat: 'ortodoncia',
    quote: 'Hice ortodoncia invisible a los 34 y nadie en la oficina se dio cuenta. La Dra. Camila me dio confianza desde el primer día.',
    highlight: 'nadie en la oficina se dio cuenta.',
    name: 'Jimena Núñez',
    initials: 'JN',
    date: 'marzo 2026',
  },
  {
    category: 'Implantes',
    cat: 'implantes',
    quote: 'Perdí un molar hace años y por fin me animé. El implante se siente como un diente real, sin molestias. Ojalá lo hubiera hecho antes.',
    highlight: 'se siente como un diente real,',
    name: 'Carlos Gálvez',
    initials: 'CG',
    date: 'febrero 2026',
  },
  {
    category: 'Limpieza',
    cat: 'limpieza',
    quote: 'Profilaxis sin dolor y la higienista me enseñó una técnica de cepillado que de verdad uso todos los días. El studio huele increíble.',
    highlight: 'de verdad uso todos los días.',
    name: 'Ana Medina',
    initials: 'AM',
    date: 'marzo 2026',
  },
  {
    category: 'Blanqueamiento',
    cat: 'blanqueamiento',
    quote: 'Una sola sesión y la diferencia fue notoria pero natural. Sin esa sensibilidad horrible que tuve en otra clínica. Recomendadísimo.',
    highlight: 'notoria pero natural.',
    name: 'Lucía Palomino',
    initials: 'LP',
    date: 'enero 2026',
  },
  {
    category: 'Endodoncia',
    cat: 'endodoncia',
    quote: 'Le tenía pánico al tratamiento de conducto. El Dr. Morales lo hizo sin que sintiera absolutamente nada. Salí sin entender por qué tenía tanto miedo.',
    highlight: 'sin que sintiera absolutamente nada.',
    name: 'Fernando Ríos',
    initials: 'FR',
    date: 'febrero 2026',
  },
  {
    category: 'Diseño de sonrisa',
    cat: 'diseno',
    quote: 'Carillas que cambiaron mi forma de hablar y reír en fotos. Dejé de taparme la boca. El antes y después no me lo creo ni yo.',
    highlight: 'Dejé de taparme la boca.',
    name: 'Paula Tello',
    initials: 'PT',
    date: 'diciembre 2025',
  },
  {
    category: 'Ortodoncia',
    cat: 'ortodoncia',
    quote: 'Mi hija de 15 hizo su ortodoncia aquí y el trato con adolescentes es de otro nivel. Cada control fue puntual y bien explicado.',
    highlight: 'el trato con adolescentes es de otro nivel.',
    name: 'Sandra Mori',
    initials: 'SM',
    date: 'noviembre 2025',
  },
  {
    category: 'Limpieza',
    cat: 'limpieza',
    quote: 'Voy cada seis meses y siempre es la misma calma. Nunca me sentí presionada a comprar tratamientos que no necesito. Pura honestidad.',
    highlight: 'Nunca me sentí presionada',
    name: 'Gabriela Vargas',
    initials: 'GV',
    date: 'enero 2026',
  },
];
