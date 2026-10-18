export interface Testimonial {
  id: string
  name: string
  treatment: string
  text: string
  /** Entero de 1 a 5 */
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonio-1',
    name: 'María Fernanda G.',
    treatment: 'Diseño de sonrisa',
    text: 'Quedé fascinada con el resultado. Me explicaron todo el proceso y el trato fue excelente desde la primera cita.',
    rating: 5,
  },
  {
    id: 'testimonio-2',
    name: 'Carlos Duarte',
    treatment: 'Implante unitario',
    text: 'Tenía mucho miedo al procedimiento y no sentí dolor. Hoy como de todo y nadie nota cuál es el implante.',
    rating: 5,
  },
  {
    id: 'testimonio-3',
    name: 'Valentina Ruiz',
    treatment: 'Alineadores invisibles',
    text: 'Terminé mi tratamiento antes de lo previsto y sin que nadie se diera cuenta. Totalmente recomendados.',
    rating: 4,
  },
]
