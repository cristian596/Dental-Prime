import { useEffect, useRef, useState } from 'react'
import { clinic } from '../../config/clinic'
import { disableAnalytics, loadAnalytics } from '../../lib/analytics'
import { OPEN_COOKIE_SETTINGS_EVENT, readConsent, writeConsent } from '../../lib/consent'
import { Button } from '../ui/Button'

export function CookieBanner() {
  const { cookieBanner: c } = clinic
  const [visible, setVisible] = useState(() => readConsent() === null)
  const ref = useRef<HTMLDivElement>(null)

  // Si ya aceptó antes, carga la analítica al abrir la página.
  useEffect(() => {
    loadAnalytics()
    const reopen = () => setVisible(true)
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
  }, [])

  // Publica la altura del banner para que el botón flotante de WhatsApp suba por encima.
  useEffect(() => {
    const root = document.documentElement
    const el = ref.current
    if (!visible || !el) return
    const update = () => root.style.setProperty('--cookie-banner-h', `${el.offsetHeight}px`)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => {
      observer.disconnect()
      root.style.removeProperty('--cookie-banner-h')
    }
  }, [visible])

  if (!visible) return null

  function accept() {
    writeConsent('accepted')
    loadAnalytics()
    setVisible(false)
  }

  function reject() {
    writeConsent('rejected')
    disableAnalytics()
    setVisible(false)
  }

  return (
    <div
      ref={ref}
      role="region"
      aria-label={c.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-100 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink">{c.title}. </span>
          {c.text}{' '}
          {clinic.cookiePolicyUrl && (
            <a
              href={clinic.cookiePolicyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline underline-offset-4"
            >
              {c.policyLinkLabel}
            </a>
          )}
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-3 md:w-80">
          <Button variant="outline" onClick={reject} className="!px-4 !py-2.5 text-sm">
            {c.rejectLabel}
          </Button>
          <Button variant="outline" onClick={accept} className="!px-4 !py-2.5 text-sm">
            {c.acceptLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
