import { clinic } from '../../config/clinic'
import { facilities } from '../../data/facilities'
import { SectionTitle } from '../ui/SectionTitle'

export function Facilities() {
  const { facilities: f } = clinic
  return (
    <section id={f.id} aria-labelledby={`${f.id}-titulo`} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle id={`${f.id}-titulo`} title={f.title} subtitle={f.subtitle} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((photo) => (
            <li key={photo.id}>
              <img
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
