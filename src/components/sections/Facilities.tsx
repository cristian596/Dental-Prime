import { clinic } from '../../config/clinic'
import { facilities } from '../../data/facilities'
import { Section } from '../ui/Section'
import type { SectionTone } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// Rejilla asimétrica con 3 fotos (una principal y dos secundarias); con 1 o 2 se reparte el ancho completo.
const featured = facilities.slice(0, 3)

// Clases completas para que Tailwind las detecte.
const gridByCount: Record<number, string> = {
  1: 'xl:grid-cols-1 xl:grid-rows-1',
  2: 'xl:grid-cols-2 xl:grid-rows-1',
  3: 'xl:grid-cols-3 xl:grid-rows-2',
}

export function Facilities({ tone }: { tone: SectionTone }) {
  const { facilities: f } = clinic
  return (
    <Section id={f.id} tone={tone} labelledBy={`${f.id}-titulo`}>
      <SectionTitle id={`${f.id}-titulo`} title={f.title} subtitle={f.subtitle} />
      <ul className={`grid grid-cols-1 gap-4 xl:h-[520px] xl:gap-6 ${gridByCount[featured.length]}`}>
        {featured.map((photo, index) => (
          <li key={photo.id} className={`min-h-0 ${featured.length === 3 && index === 0 ? 'xl:col-span-2 xl:row-span-2' : ''}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm xl:aspect-auto xl:h-full"
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
