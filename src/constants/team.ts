import type { TeamMember } from '../types';
import { IMAGES } from './images';

/** Equipo del studio. */
export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Sebastián Vega',
    role: 'Director clínico',
    specialty: 'Implantología & Diseño de sonrisa',
    bio: '12 años transformando sonrisas. Formado en Madrid y São Paulo, especialista en implantes y rehabilitación estética.',
    initials: 'SV',
    credentials: ['CDP 19083', 'UPCH', 'ITI Member'],
    photo: IMAGES.docVega,
  },
  {
    name: 'Dra. Camila Reyes',
    role: 'Cirujana dentista',
    specialty: 'Estética dental & Ortodoncia',
    bio: 'Especialista en alineadores invisibles y ortodoncia adulta. Fundadora del programa "Sonríe sin miedo".',
    initials: 'CR',
    credentials: ['CDP 28471', 'Invisalign Pro', 'UPSMP'],
    photo: IMAGES.docReyes,
  },
  {
    name: 'Dr. Joaquín Morales',
    role: 'Endodoncista',
    specialty: 'Endodoncia microscópica',
    bio: 'Master en endodoncia con microscopio operatorio. Conocido por sus tratamientos de raíz indoloros.',
    initials: 'JM',
    credentials: ['CDP 31204', 'Master UCH'],
    photo: IMAGES.docMorales,
  },
  {
    name: 'Lucía Mendoza',
    role: 'Coordinadora',
    specialty: 'Experiencia del paciente',
    bio: 'El primer rostro que verás al entrar. Lleva la agenda, el WhatsApp, y se asegura de que tu visita sea perfecta.',
    initials: 'LM',
    credentials: ['Hospitality', 'Concierge'],
    photo: IMAGES.coordMendoza,
  },
];
