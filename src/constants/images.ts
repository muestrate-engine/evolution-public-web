/**
 * Imágenes placeholder (Unsplash) — TEMPORALES.
 * Centralizadas aquí para poder reemplazarlas por fotos reales del studio
 * en un solo lugar. Todas las URLs verificadas (200).
 */
const U = 'https://images.unsplash.com/photo-';

/** Construye una URL de Unsplash optimizada (auto-format, recorte y calidad). */
function img(id: string, w: number, h?: number) {
  const size = h ? `w=${w}&h=${h}` : `w=${w}`;
  return `${U}${id}?auto=format&fit=crop&crop=faces,center&${size}&q=80`;
}

export const IMAGES = {
  // ---- Hero / studio ----
  heroSmile: img('1588776814546-1ffcf47267a5', 900, 1260),
  studioInterior: img('1629909615184-74f495363b67', 900, 1125),
  studioDetail: img('1606811841689-23dfddce3e95', 800, 800),
  nosotrosHero: img('1629909613654-28e377c37b09', 1100, 760),
  nosotrosHistoria: img('1609840114035-3c981b782dfe', 800, 980),

  // ---- Tratamientos (4:3) ----
  tratEstetica: img('1598256989800-fe5f95da9787', 1000, 750),
  tratOrtodoncia: img('1612349317150-e413f6a5b16d', 1000, 750),
  tratGeneral: img('1571772996211-2f02c9727629', 1000, 750),
  tratPediatria: img('1494790108377-be9c29b29330', 1000, 750),
  tratEncias: img('1629909613654-28e377c37b09', 1000, 750),

  // ---- Casos antes/después ----
  caso1Antes: img('1500648767791-00dcc994a43e', 600, 600),
  caso1Despues: img('1487412947147-5cebf100ffc2', 600, 600),
  caso2Antes: img('1573496359142-b8d87734a5a2', 600, 600),
  caso2Despues: img('1438761681033-6461ffad8d80', 600, 600),

  // ---- Retratos del equipo (4:5) ----
  docVega: img('1622253692010-333f2da6031d', 600, 750),
  docReyes: img('1559839734-2b71ea197ec2', 600, 750),
  docMorales: img('1537368910025-700350fe46c7', 600, 750),
  coordMendoza: img('1594824476967-48c8b964273f', 600, 750),
  staffQuispe: img('1582750433449-648ed127bb54', 600, 600),
  staffTorres: img('1612531386530-97286d97c2d2', 600, 600),
  staffFlores: img('1607990281513-2c110a25bd8c', 600, 600),

  // ---- Open Graph (1200x630, landscape para compartir) ----
  ogDefault: img('1588776814546-1ffcf47267a5', 1200, 630),
  ogNosotros: img('1629909613654-28e377c37b09', 1200, 630),
  ogTratamientos: img('1598256989800-fe5f95da9787', 1200, 630),
  ogEquipo: img('1622253692010-333f2da6031d', 1200, 630),
} as const;
