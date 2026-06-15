import type { SeoMeta } from '../types';
import { IMAGES } from '../constants/images';

export const homeSeo: SeoMeta = {
  title: 'Evolution Studio Dental | Tu sonrisa, en su mejor versión',
  description:
    'Studio dental en el centro de Huancayo. Cuidado con trato humano, estética elegante y precios justos. Diseño de sonrisa, implantes, ortodoncia y más. Agenda tu cita.',
  path: '/',
  image: IMAGES.ogDefault,
  keywords: [
    'dentista Huancayo',
    'clínica dental Huancayo',
    'diseño de sonrisa',
    'implantes dentales',
    'ortodoncia',
    'blanqueamiento dental',
  ],
  type: 'website',
};
