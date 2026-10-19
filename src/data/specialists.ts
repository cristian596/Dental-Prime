export interface Specialist {
  id: string
  name: string
  specialty: string
  yearsExperience: number
  photo: { src: string; alt: string }
}

export const specialists: Specialist[] = [
  {
    id: 'laura-mendoza',
    name: 'Dra. Laura Mendoza',
    specialty: 'Estética dental y diseño de sonrisa',
    yearsExperience: 12,
    photo: { src: '/images/Laura%20Mendoza.webp', alt: 'Retrato de la Dra. Laura Mendoza, especialista en estética dental' },
  },
  {
    id: 'andres-rivera',
    name: 'Dr. Andrés Rivera',
    specialty: 'Ortodoncia y ortopedia maxilar',
    yearsExperience: 15,
    photo: { src: '/images/Andres%20Rivera.webp', alt: 'Retrato del Dr. Andrés Rivera, ortodoncista' },
  },
  {
    id: 'camila-torres',
    name: 'Dra. Camila Torres',
    specialty: 'Implantología y cirugía oral',
    yearsExperience: 10,
    photo: { src: '/images/Camila%20Torres.webp', alt: 'Retrato de la Dra. Camila Torres, especialista en implantes' },
  },
  {
    id: 'francisco-tavarez',
    name: 'Dr. Francisco Tavarez',
    specialty: 'Higiene oral y ortodoncia',
    yearsExperience: 5,
    photo: { src: '/images/Francisco%20Tavarez.webp', alt: 'Retrato del Dr. Francisco Tavarez, especialista de DENTAL PRIME' },
  },
]
