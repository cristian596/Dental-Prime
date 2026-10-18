import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { clinic } from '../../config/clinic'
import { Button } from '../ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { nav } = clinic
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <nav aria-label={nav.ariaLabel} className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="font-serif text-2xl font-bold tracking-wide text-brand-700">
          {clinic.name}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink-soft hover:text-brand-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href={nav.cta.href} className="max-lg:hidden !px-5 !py-2 text-sm">
          {nav.cta.label}
        </Button>

        <button
          type="button"
          className="rounded-full p-2 text-ink hover:bg-brand-100 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? nav.closeMenu : nav.openMenu}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-brand-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close} className="block py-3 font-medium text-ink">
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
  )
}
