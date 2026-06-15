import type { SiteInfo, SocialLink } from '../types';

/**
 * Información central del negocio. Único lugar para editar teléfono,
 * WhatsApp, correo, dirección y horarios — se consume en todo el sitio.
 */
export const SITE: SiteInfo = {
  name: 'Evolution Studio Dental',
  legalName: 'Evolution Studio Dental',
  tagline: 'Tu sonrisa, en su mejor versión.',
  description:
    'Cuidado dental con trato humano, estética elegante y precios justos. Te explicamos cada paso, sin sorpresas — para que sonrías sin miedo.',
  phone: '+51 955 276 569',
  phoneHref: 'tel:+51955276569',
  whatsapp: '+51 955 276 569',
  whatsappUrl:
    'https://wa.me/51955276569?text=Hola%20Evolution,%20quiero%20agendar%20una%20cita',
  email: 'lapreventivaejh@gmail.com',
  address: {
    street: 'Jr. Ica 113, 2.º nivel Of. 09',
    district: 'Huancayo',
    city: 'Huancayo',
    postalCode: '12001',
    full: 'Jr. Ica 113, 2.º nivel Of. 09, Huancayo, Junín',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-12.069299943655524,-75.20574306510962',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.85156478389732!2d-75.20574306510962!3d-12.069299943655524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97d258502765%3A0x4743bd553b5f8b66!2sConsultorio%20odontol%C3%B3gico%20%22La%20preventiva%22!5e0!3m2!1ses!2spe!4v1781503630446!5m2!1ses!2spe',
  },
  hours: [
    { label: 'Lunes a Viernes', value: '9:00 — 19:00' },
    { label: 'Sábado', value: '9:00 — 14:00' },
    { label: 'Domingo', value: 'Cerrado' },
  ],
  url: 'https://evolutiondental.pe',
};

export const SOCIALS: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/evolutiondental', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com/evolutiondental', icon: 'facebook' },
  { label: 'WhatsApp', href: SITE.whatsappUrl, icon: 'whatsapp' },
  { label: 'TikTok', href: 'https://tiktok.com/@evolutiondental', icon: 'tiktok' },
];

/** Resumen de reputación, reutilizado en hero, stats y testimonios. */
export const RATING = {
  score: '4.9',
  outOf: '5',
  count: '800+',
  source: 'Google Maps',
};
