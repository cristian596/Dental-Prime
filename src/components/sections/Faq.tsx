import { clinic } from '../../config/clinic'
import { Accordion } from '../ui/Accordion'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

export function Faq() {
  const { faqSection: s, faq } = clinic
  return (
    <Section id={s.id} labelledBy={`${s.id}-titulo`}>
      <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-16">
        <SectionTitle id={`${s.id}-titulo`} title={s.title} subtitle={s.subtitle} align="left" />
        <Accordion idPrefix={s.id} items={faq} />
      </div>
    </Section>
  )
}
