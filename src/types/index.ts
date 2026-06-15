/**
 * Tipos compartidos de Evolution Studio Dental.
 * Centraliza las interfaces usadas por componentes y constantes.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Identificador del icono a renderizar (ver components/icons). */
  icon: 'instagram' | 'facebook' | 'whatsapp' | 'tiktok';
}

export interface BusinessHours {
  label: string;
  value: string;
}

/** Información de contacto / negocio reutilizada en todo el sitio. */
export interface SiteInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  address: {
    street: string;
    district: string;
    city: string;
    postalCode: string;
    full: string;
    mapsUrl: string;
    /** URL para incrustar en un <iframe> de Google Maps. */
    embedUrl: string;
  };
  hours: BusinessHours[];
  url: string;
}

export type TreatmentCategory = 'estetica' | 'preventivo' | 'especialidad';

export interface Treatment {
  slug: string;
  number: string;
  title: string;
  description: string;
  priceFrom: string;
  category: TreatmentCategory;
  icon: string;
  /** Líneas de meta opcionales (ej. "3–5 sesiones"). */
  meta?: string[];
  /** Variante visual dentro del bento de tratamientos. */
  variant?: 'feat' | 'dark' | 'default';
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  initials: string;
  credentials: string[];
  photo: string;
}

export interface Testimonial {
  quote: string;
  /** Fragmento a resaltar dentro de la cita (se renderiza en <em>). */
  highlight?: string;
  name: string;
  initial: string;
  treatment: string;
  date: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

/** Metadatos SEO por página. */
export interface SeoMeta {
  title: string;
  description: string;
  /** Ruta canónica relativa, ej. "/nosotros". */
  path: string;
  /** Imagen Open Graph (ruta absoluta desde public). */
  image?: string;
  keywords?: string[];
  /** Tipo de Open Graph. */
  type?: 'website' | 'article';
  noindex?: boolean;
  /** Preguntas frecuentes para datos estructurados FAQPage. */
  faq?: { q: string; a: string }[];
  /** Texto alternativo de la imagen Open Graph. */
  imageAlt?: string;
}
