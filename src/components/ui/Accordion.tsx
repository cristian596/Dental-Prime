import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  idPrefix: string
  items: AccordionItem[]
}

export function Accordion({ idPrefix, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <div className="divide-y divide-brand-100 overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${idPrefix}-boton-${index}`
        const panelId = `${idPrefix}-panel-${index}`
        return (
          <div key={item.question}>
            <h3 className="font-sans">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left text-lg font-semibold text-ink hover:bg-brand-50"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  size={22}
                  className={`shrink-0 text-brand-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="px-6 pb-5 text-ink-soft">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
