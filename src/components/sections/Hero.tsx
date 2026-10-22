import { CalendarCheck, MessageCircle, Smile, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { clinic } from '../../config/clinic'
import type { HeroBadgeIcon } from '../../config/clinic'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const badgeIcons: Record<HeroBadgeIcon, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  calendar: CalendarCheck,
}

// Posición de cada insignia sobre el borde del marco. La tercera se oculta en móvil para no tapar la foto.
const badgePositions = [
  '-left-3 top-8 md:-left-6 md:top-12',
  '-right-3 top-1/2 md:-right-6',
  'bottom-10 left-6 hidden md:flex md:-left-6',
]

export function Hero() {
  const { hero, nav } = clinic
  return (
    <section
      id={hero.id}
      className="relative isolate flex min-h-[100svh] scroll-mt-20 flex-col overflow-hidden bg-brand-50 pt-24 xl:scroll-mt-28 xl:pt-32"
    >
      <Container className="flex flex-1 items-center xl:max-w-[1920px] xl:px-16 min-[2000px]:px-24">
        <div className="grid w-full items-center gap-12 py-10 md:py-14 xl:grid-cols-2 xl:gap-16 2xl:gap-24">
          <div className="text-left">
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={nav.cta.href} className="min-h-12">
                {nav.cta.label}
              </Button>
              <Button
                variant="outline"
                href={buildWhatsAppUrl(clinic.whatsappNumber, clinic.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12"
              >
                <MessageCircle aria-hidden="true" size={20} />
                {hero.whatsappLabel}
              </Button>
            </div>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {clinic.trustPoints.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Icon size={18} className="text-brand-700" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-2xl pb-4 pr-4 xl:max-w-none">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-brand-100 md:translate-x-6 md:translate-y-6" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={1456}
                height={816}
                loading="eager"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover object-center xl:aspect-[5/4]"
              />
            </div>
            {hero.badges.map((key, i) => {
              const Icon = badgeIcons[key]
              return (
                <span
                  key={key}
                  aria-hidden="true"
                  className={`absolute flex size-16 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg ring-4 ring-brand-50 ${badgePositions[i] ?? 'hidden'}`}
                >
                  <Icon size={28} />
                </span>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
