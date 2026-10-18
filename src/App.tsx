import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { BookingForm } from './components/sections/BookingForm'
import { Facilities } from './components/sections/Facilities'
import { Financing } from './components/sections/Financing'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Specialists } from './components/sections/Specialists'
import { Testimonials } from './components/sections/Testimonials'
import { Treatments } from './components/sections/Treatments'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <HowItWorks />
        <Specialists />
        <Financing />
        <Facilities />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
