import { IMAGES } from './images';

/** Contenido específico de la página Equipo. */

export const EQ_STATS: { value: string; suffix?: string; label: string }[] = [
  { value: '7', label: 'Profesionales en el studio' },
  { value: '12', label: 'Años de experiencia clínica' },
  { value: '+40', label: 'Horas de formación al año' },
  { value: '4.9', suffix: '/5', label: 'Valoración de pacientes' },
];

export const EQ_PILLARS: { tag: string; title: string; text: string; icon: string }[] = [
  {
    tag: 'Pilar 01',
    title: 'Decisiones compartidas',
    text: 'Los casos complejos los revisamos juntos. Tres especialistas pensando en tu sonrisa, no uno solo.',
    icon: 'users',
  },
  {
    tag: 'Pilar 02',
    title: 'Explicar es la regla',
    text: 'Nadie toca tu boca sin antes contarte qué va a pasar. Hablamos claro, sin tecnicismos ni prisa.',
    icon: 'message',
  },
  {
    tag: 'Pilar 03',
    title: 'Cuidado sin miedo',
    text: 'Sedación consciente, pausas cuando las necesites y un trato calmado. Tú llevas el ritmo, siempre.',
    icon: 'shield',
  },
];

export interface ProfileData {
  name: string;
  role: string;
  specialty: string;
  initials: string;
  years: string;
  bio: string;
  experience: { yr: string; text: string; sub?: string }[];
  education: { yr: string; text: string; sub?: string }[];
  credentials: string[];
  gradient: string;
  photo: string;
}

export const EQ_PROFILES: ProfileData[] = [
  {
    name: 'Dr. Sebastián Vega',
    role: 'Director clínico',
    specialty: 'Implantología & Diseño de sonrisa',
    initials: 'SV',
    years: '12 años',
    bio: 'Fundador y director clínico de Evolution. Ha rehabilitado más de 500 sonrisas combinando implantes, carillas y planificación digital. Cree que la estética sin función no sirve de nada — y que ninguna sonrisa debería sentirse ajena.',
    experience: [
      { yr: '2014–hoy', text: 'Director clínico', sub: 'Evolution Studio Dental' },
      { yr: '2010–14', text: 'Implantología', sub: 'Clínica Dental Madrid Centro' },
      { yr: '+500', text: 'Casos de rehabilitación oral completados' },
    ],
    education: [
      { yr: '2009', text: 'Cirujano Dentista', sub: 'Univ. Peruana Cayetano Heredia' },
      { yr: '2012', text: 'Máster en Implantología', sub: 'Univ. Complutense de Madrid' },
      { yr: '2016', text: 'Fellowship en estética', sub: 'APCD São Paulo' },
    ],
    credentials: ['COP 19083', 'ITI Member', 'Digital Smile Design', 'UPCH'],
    gradient: 'linear-gradient(160deg, #C8E3DC, #5E9D90)',
    photo: IMAGES.docVega,
  },
  {
    name: 'Dra. Camila Reyes',
    role: 'Cirujana dentista',
    specialty: 'Estética dental & Ortodoncia',
    initials: 'CR',
    years: '10 años',
    bio: 'Cofundadora del studio y creadora del programa "Sonríe sin miedo" para pacientes con ansiedad dental. Especialista en alineadores invisibles y ortodoncia adulta, con un enfoque que mezcla precisión clínica y mucha paciencia.',
    experience: [
      { yr: '2014–hoy', text: 'Cofundadora & ortodoncia', sub: 'Evolution Studio Dental' },
      { yr: '2018', text: 'Crea el programa', sub: '"Sonríe sin miedo"' },
      { yr: '+300', text: 'Tratamientos de ortodoncia invisible' },
    ],
    education: [
      { yr: '2011', text: 'Cirujana Dentista', sub: 'Univ. San Martín de Porres' },
      { yr: '2015', text: 'Especialidad en Ortodoncia', sub: 'Univ. Peruana Cayetano Heredia' },
      { yr: '2019', text: 'Certificación Invisalign', sub: 'Align Technology' },
    ],
    credentials: ['COP 28471', 'Invisalign Provider', 'Ortodoncia UPCH', 'USMP'],
    gradient: 'linear-gradient(160deg, #F5EFE6, #98CAC0)',
    photo: IMAGES.docReyes,
  },
  {
    name: 'Dr. Joaquín Morales',
    role: 'Endodoncista',
    specialty: 'Endodoncia microscópica',
    initials: 'JM',
    years: '9 años',
    bio: 'El especialista al que llaman cuando duele. Trabaja con microscopio operatorio para tratamientos de raíz precisos y, sobre todo, indoloros. Su lema: "un buen endodoncista es el que no recordarás haber visitado".',
    experience: [
      { yr: '2019–hoy', text: 'Endodoncia microscópica', sub: 'Evolution Studio Dental' },
      { yr: '2015–19', text: 'Endodoncista asociado', sub: 'Centro Dental Lima Norte' },
      { yr: '+700', text: 'Tratamientos de conducto realizados' },
    ],
    education: [
      { yr: '2014', text: 'Cirujano Dentista', sub: 'Univ. Nacional Mayor de San Marcos' },
      { yr: '2017', text: 'Máster en Endodoncia', sub: 'Univ. de Chile' },
      { yr: '2021', text: 'Microscopía operatoria', sub: 'Curso internacional, México' },
    ],
    credentials: ['COP 31204', 'Máster UCH', 'Microscopía operatoria', 'UNMSM'],
    gradient: 'linear-gradient(160deg, #98CAC0, #2F564F)',
    photo: IMAGES.docMorales,
  },
];

export const EQ_CERTS: { title: string; text: string; meta: string; icon: string }[] = [
  {
    title: 'ISO 9001:2015',
    text: 'Sistema de gestión de calidad certificado para todos nuestros procesos clínicos y de atención.',
    meta: 'Vigente · Auditoría anual',
    icon: 'check-task',
  },
  {
    title: 'Colegio Odontológico del Perú',
    text: 'Todos los profesionales del studio están colegiados y habilitados por el COP.',
    meta: 'Colegiatura vigente',
    icon: 'shield',
  },
  {
    title: 'ITI International',
    text: 'Membresía activa en el International Team for Implantology — red global de implantología basada en evidencia.',
    meta: 'Miembro acreditado',
    icon: 'award',
  },
  {
    title: 'Invisalign Provider',
    text: 'Acreditación oficial de Align Technology para tratamientos con alineadores invisibles.',
    meta: 'Provider certificado',
    icon: 'tiktok',
  },
  {
    title: 'Bioseguridad & Esterilización',
    text: 'Protocolo de esterilización con autoclave clase B y trazabilidad de instrumental en cada cita.',
    meta: 'Norma MINSA · DIGESA',
    icon: 'heart',
  },
  {
    title: 'Digital Smile Design',
    text: 'Certificación en planificación digital de sonrisa — simulación del resultado antes de empezar.',
    meta: 'DSD Clinic',
    icon: 'grid',
  },
];

export const EQ_SUPPORT: { name: string; dept: string; role: string; text: string; initials: string; gradient: string; photo: string }[] = [
  {
    name: 'Lucía Mendoza',
    dept: 'Coordinación',
    role: 'Coordinadora del paciente',
    text: 'El primer rostro que verás al entrar. Lleva la agenda, el WhatsApp y se asegura de que tu visita sea perfecta de inicio a fin.',
    initials: 'LM',
    gradient: 'linear-gradient(160deg, #C8E3DC, #5E9D90)',
    photo: IMAGES.coordMendoza,
  },
  {
    name: 'Andrea Quispe',
    dept: 'Recepción',
    role: 'Recepción & admisión',
    text: 'Te recibe con un café, organiza tus documentos y resuelve cualquier duda sobre horarios, pagos o cuotas.',
    initials: 'AQ',
    gradient: 'linear-gradient(160deg, #E8E2D7, #98CAC0)',
    photo: IMAGES.staffQuispe,
  },
  {
    name: 'Paola Torres',
    dept: 'Higiene',
    role: 'Higienista dental',
    text: 'Especialista en profilaxis y educación de higiene. Te enseña la técnica de cepillado que de verdad funciona para ti.',
    initials: 'PT',
    gradient: 'linear-gradient(160deg, #98CAC0, #2F564F)',
    photo: IMAGES.staffTorres,
  },
  {
    name: 'Renzo Flores',
    dept: 'Asistencia',
    role: 'Asistente clínico',
    text: 'Acompaña cada procedimiento, prepara el instrumental esterilizado y mantiene todo a punto durante tu cita.',
    initials: 'RF',
    gradient: 'linear-gradient(160deg, #F5EFE6, #C8E3DC)',
    photo: IMAGES.staffFlores,
  },
];

export const EQ_TRAINING: { yr: string; title: string; text: string; pills: string[] }[] = [
  {
    yr: '2026',
    title: 'Congreso de Estética Dental — Lima',
    text: 'Todo el equipo clínico asistió al congreso anual, con foco en carillas ultrafinas y adhesión de nueva generación.',
    pills: ['Estética', 'Adhesión', 'Congreso'],
  },
  {
    yr: '2025',
    title: 'Workshop de cirugía guiada por computadora',
    text: 'El Dr. Vega completó la certificación en planificación y colocación de implantes con guías quirúrgicas digitales.',
    pills: ['Implantología', 'Cirugía guiada'],
  },
  {
    yr: '2025',
    title: 'Actualización en manejo de la ansiedad dental',
    text: 'La Dra. Reyes y el equipo de apoyo se formaron en técnicas de comunicación y sedación consciente para pacientes temerosos.',
    pills: ['Sonríe sin miedo', 'Sedación'],
  },
  {
    yr: '2024',
    title: 'Certificación en endodoncia microscópica avanzada',
    text: 'El Dr. Morales renovó su certificación internacional en tratamientos de conducto con microscopio operatorio.',
    pills: ['Endodoncia', 'Microscopía'],
  },
  {
    yr: 'Siempre',
    title: 'Sesiones clínicas internas mensuales',
    text: 'Una vez al mes el equipo se reúne a revisar casos complejos, compartir aprendizajes y alinear criterios de atención.',
    pills: ['Casos clínicos', 'Equipo'],
  },
];
