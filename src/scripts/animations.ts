/**
 * Animaciones del sitio con GSAP + ScrollTrigger.
 *
 * - Se re-ejecuta en cada navegación (View Transitions de Astro) escuchando
 *   `astro:page-load`, y limpia los ScrollTriggers previos para no acumularlos.
 * - Respeta `prefers-reduced-motion`.
 * - No requiere tocar el markup: revela por selectores del sistema de diseño
 *   (titulares, eyebrows, leads y tarjetas <article>).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'power3.out';

function reveal() {
  // Limpia triggers de la página anterior.
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const main = document.querySelector('main');
  if (!main || prefersReduced) return;

  const firstSection = main.querySelector('section');

  // 1) Entrada del hero (primer bloque) — inmediata, con stagger.
  if (firstSection) {
    const heroBits = firstSection.querySelectorAll<HTMLElement>(
      ':scope .eyebrow, :scope h1, :scope p, :scope .badges, :scope .btn'
    );
    if (heroBits.length) {
      gsap.from(heroBits, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: EASE,
        stagger: 0.08,
        clearProps: 'transform,opacity',
      });
    }
    // Arte del hero: aparición suave con leve escala.
    const heroArt = firstSection.querySelector<HTMLElement>(':scope .relative:last-child, :scope .grid > div:last-child');
    if (heroArt) {
      gsap.from(heroArt, { opacity: 0, scale: 0.96, duration: 1.1, ease: EASE, delay: 0.15, clearProps: 'all' });
    }
  }

  // 2) Titulares / eyebrows / leads — revelado al entrar en viewport.
  const headings = gsap.utils.toArray<HTMLElement>('.h-section, .lead, .eyebrow');
  headings.forEach((el) => {
    if (firstSection && firstSection.contains(el)) return; // ya animados arriba
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: EASE,
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: el, start: 'top 86%', once: true },
    });
  });

  // 3) Tarjetas — revelado en lote con stagger por fila.
  ScrollTrigger.batch('main article', {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.from(batch, {
        y: 36,
        opacity: 0,
        duration: 0.7,
        ease: EASE,
        stagger: 0.09,
        overwrite: true,
        clearProps: 'transform,opacity',
      }),
  });

  // Recalcula posiciones cuando las imágenes terminan de cargar.
  ScrollTrigger.refresh();
}

document.addEventListener('astro:page-load', reveal);
window.addEventListener('load', () => ScrollTrigger.refresh());
