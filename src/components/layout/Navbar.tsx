import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { sectionVisible } from '../../lib/sections'
import { Button } from '../ui/Button'

// Los enlaces a secciones ocultas por falta de datos no se muestran.
const links = clinic.nav.links.filter((link) => sectionVisible[link.href.slice(1)] !== false)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { nav } = clinic
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    html.classList.add('overflow-hidden')
    const mq = window.matchMedia('(min-width: 1024px)')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const onChange = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => {
      html.classList.remove('overflow-hidden')
      mq.removeEventListener('change', onChange)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
        <nav aria-label={nav.ariaLabel} className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 xl:h-24 xl:px-10 xl:py-0">
          <a href="#inicio" className="font-serif text-2xl font-bold tracking-wide text-brand-700 xl:text-3xl">
            {clinic.name}
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center text-sm font-medium text-ink-soft hover:text-brand-700 xl:text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href={nav.cta.href} className="max-lg:hidden !px-5 !py-2 text-sm xl:origin-right xl:scale-105 xl:!px-7 xl:!py-3 xl:text-base">
            {nav.cta.label}
          </Button>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-brand-100 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        {open && (
          <div id="menu-movil" className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-brand-100 bg-white px-6 pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="flex min-h-11 items-center py-3 font-medium text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href={nav.cta.href} onClick={close} className="mt-3 w-full">
              {nav.cta.label}
            </Button>
          </div>
        )}
      </header>

      {open && <div aria-hidden="true" onClick={close} className="fixed inset-0 z-[45] bg-brand-900/30 backdrop-blur-md lg:hidden" />}
    </>
  )
}
