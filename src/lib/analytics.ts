import { readConsent } from './consent'

type GtagWindow = Window & { dataLayer?: unknown[] } & Record<string, unknown>

const SCRIPT_ID = 'dp-gtag'
const EXPIRED = 'expires=Thu, 01 Jan 1970 00:00:00 GMT'

function gaId(): string {
  const id = String(import.meta.env.VITE_GA_ID ?? '').trim()
  // Formato de ID de medición de GA4; evita inyectar texto arbitrario en la URL del script.
  return /^G-[A-Z0-9]+$/i.test(id) ? id : ''
}

/** Añade el script de gtag solo si hay consentimiento aceptado y VITE_GA_ID está definido. */
export function loadAnalytics(): void {
  const id = gaId()
  if (!id || readConsent() !== 'accepted' || document.getElementById(SCRIPT_ID)) return

  const w = window as unknown as GtagWindow
  w[`ga-disable-${id}`] = false
  w.dataLayer = w.dataLayer || []
  const queue = w.dataLayer
  // gtag.js exige recibir el objeto `arguments`, no un array.
  w.gtag = function () {
    // oxlint-disable-next-line prefer-rest-params
    queue.push(arguments)
  }
  const gtag = w.gtag as (...args: unknown[]) => void
  gtag('js', new Date())
  gtag('config', id)

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
}

/** Al rechazar tras haber aceptado: apaga GA y borra sus cookies (_ga, _ga_*, _gid). */
export function disableAnalytics(): void {
  const id = gaId()
  if (id) (window as unknown as GtagWindow)[`ga-disable-${id}`] = true
  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0].trim()
    if (name !== '_ga' && name !== '_gid' && !name.startsWith('_ga_')) continue
    document.cookie = `${name}=; ${EXPIRED}; path=/`
    document.cookie = `${name}=; ${EXPIRED}; path=/; domain=${location.hostname}`
    document.cookie = `${name}=; ${EXPIRED}; path=/; domain=.${location.hostname}`
  }
}
