export interface Specialist {
  id: string
  name: string
  specialty: string
  yearsExperience: number
  photo: { src: string; alt: string }
}

export const specialists: Specialist[] = [
  {
    id: 'especialista-1',
    name: 'Dra. Laura Mendoza',
    specialty: 'Estética dental y diseño de sonrisa',
    yearsExperience: 12,
    photo: { src: '/images/especialista-1.webp', alt: 'Retrato de la Dra. Laura Mendoza, especialista en estética dental' },
  },
  {
    id: 'especialista-2',
    name: 'Dr. Andrés Rivera',
    specialty: 'Ortodoncia y ortopedia maxilar',
    yearsExperience: 15,
    photo: { src: '/images/especialista-2.webp', alt: 'Retrato del Dr. Andrés Rivera, ortodoncista' },
  },
  {
    id: 'especialista-3',
    name: 'Dra. Camila Torres',
    specialty: 'Implantología y cirugía oral',
    yearsExperience: 10,
    photo: { src: '/images/especialista-3.webp', alt: 'Retrato de la Dra. Camila Torres, especialista en implantes' },
  },
]
