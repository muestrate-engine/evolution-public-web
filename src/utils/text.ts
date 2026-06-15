/** Divide una cita alrededor de un fragmento a resaltar (para renderizar en <em>). */
export function splitQuote(quote: string, highlight?: string) {
  if (!highlight || !quote.includes(highlight)) return { before: quote, mark: '', after: '' };
  const [before, after] = quote.split(highlight);
  return { before, mark: highlight, after };
}
