import type { ReactNode } from 'react'
import { Container } from './Container'

export type SectionTone = 'white' | 'tint'

interface SectionProps {
  id: string
  /** white: fondo blanco. tint: fondo brand-50. Alternar entre secciones consecutivas. */
  tone?: SectionTone
  /** id del título (aria-labelledby). */
  labelledBy?: string
  ariaLabel?: string
  children: ReactNode
}

export function Section({ id, tone = 'white', labelledBy, ariaLabel, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={`scroll-mt-20 xl:scroll-mt-28 py-20 xl:py-28 ${tone === 'tint' ? 'bg-brand-50' : 'bg-white'}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
