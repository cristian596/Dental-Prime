import { clinic } from '../../config/clinic'
import { facilities } from '../../data/facilities'
import { Section } from '../ui/Section'
import { SectionTitle } from '../ui/SectionTitle'

// Rejilla asimétrica: una imagen principal y dos secundarias.
const featured = facilities.slice(0, 3)

export function Facilities() {
  const { facilities: f } = clinic
  return (
    <Section id={f.id} labelledBy={`${f.id}-titulo`}>
      <SectionTitle id={`${f.id}-titulo`} title={f.title} subtitle={f.subtitle} />
      <ul className="grid grid-cols-1 gap-4 xl:h-[520px] xl:grid-cols-3 xl:grid-rows-2 xl:gap-6">
        {featured.map((photo, index) => (
          <li key={photo.id} className={`min-h-0 ${index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}`}>
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
