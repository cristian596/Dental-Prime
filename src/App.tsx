import type { ComponentType } from 'react'
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { BookingForm } from './components/sections/BookingForm'
import { Facilities } from './components/sections/Facilities'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
import { Financing } from './components/sections/Financing'
import { Stats } from './components/sections/Stats'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Specialists } from './components/sections/Specialists'
import { Testimonials } from './components/sections/Testimonials'
import { Treatments } from './components/sections/Treatments'
import type { SectionTone } from './components/ui/Section'
import { clinic } from './config/clinic'
import { sectionVisible } from './lib/sections'

interface PageSection {
  id: string
  Component: ComponentType<{ tone: SectionTone }>
}

// Orden de la página tras el Hero. Las secciones sin datos se omiten (ver src/lib/sections.ts).
const pageSections: PageSection[] = [
  { id: 'cifras', Component: Stats },
  { id: clinic.treatments.id, Component: Treatments },
  { id: clinic.howItWorks.id, Component: HowItWorks },
  { id: clinic.specialists.id, Component: Specialists },
  { id: clinic.financing.id, Component: Financing },
  { id: clinic.facilities.id, Component: Facilities },
  { id: clinic.testimonials.id, Component: Testimonials },
  { id: clinic.faqSection.id, Component: Faq },
  { id: clinic.booking.id, Component: BookingForm },
].filter(({ id }) => sectionVisible[id] !== false)

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Los fondos alternan según las secciones realmente visibles, empezando por tint. */}
        {pageSections.map(({ id, Component }, index) => (
          <Component key={id} tone={index % 2 === 0 ? 'tint' : 'white'} />
        ))}
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
