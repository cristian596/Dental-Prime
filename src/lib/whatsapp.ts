/** Devuelve un enlace wa.me con el mensaje codificado. `numero` en formato internacional. */
export function buildWhatsAppUrl(numero: string, mensaje: string): string {
  const digits = numero.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(mensaje)}`
}
