import type { ReactNode } from 'react'
import { useReveal } from '../../lib/useReveal'
import { Container } from './Container'

export type SectionTone = 'white' | 'tint'

interface SectionProps {
  id: string
  /** white: fondo blanco. tint: fondo brand-50. Alternar entre secciones consecutivas. */
  tone?: SectionTone
  /** id del título (aria-labelledby). */
  labelledBy?: string
  ariaLabel?: string
  /** Aparición al hacer scroll. Desactivar en secciones above-the-fold (LCP). */
  reveal?: boolean
  children: ReactNode
}

export function Section({ id, tone = 'white', labelledBy, ariaLabel, reveal = true, children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLElement>(reveal)
  const revealClass = visible
    ? 'motion-safe:translate-y-0 motion-safe:opacity-100 motion-safe:transition motion-safe:duration-700 motion-safe:ease-out'
    : 'motion-safe:translate-y-6 motion-safe:opacity-0'

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={`scroll-mt-20 xl:scroll-mt-28 py-20 xl:py-28 ${tone === 'tint' ? 'bg-brand-50' : 'bg-white'} ${revealClass}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
