import type { NavLink } from '../types';

/** Navegación principal del header. */
export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Tratamientos', href: '/tratamientos' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Contacto', href: '/contacto' },
];

/** Enlaces del footer agrupados por columna. */
export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: 'Tratamientos',
    links: [
      { label: 'Diseño de sonrisa', href: '/tratamientos' },
      { label: 'Implantes', href: '/tratamientos' },
      { label: 'Ortodoncia', href: '/tratamientos' },
      { label: 'Blanqueamiento', href: '/tratamientos' },
      { label: 'Limpieza', href: '/tratamientos' },
      { label: 'Endodoncia', href: '/tratamientos' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Equipo', href: '/equipo' },
      { label: 'Testimonios', href: '/testimonios' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Trabaja con nosotros', href: '/contacto' },
    ],
  },
];
