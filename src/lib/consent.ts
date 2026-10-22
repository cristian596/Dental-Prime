export type Consent = 'accepted' | 'rejected'

const STORAGE_KEY = 'dp_cookie_consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'dp:open-cookie-settings'

// Respaldo en memoria: si localStorage falla, la decisión vale solo durante esta visita.
let memoryConsent: Consent | null = null

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value === 'accepted' || value === 'rejected') return value
    return memoryConsent
  } catch {
    return memoryConsent
  }
}

export function writeConsent(value: Consent): void {
  memoryConsent = value
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Sin localStorage el banner volverá a mostrarse en la próxima visita.
  }
}

/** Vuelve a mostrar el banner (botón "Configurar cookies" del footer). */
export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
