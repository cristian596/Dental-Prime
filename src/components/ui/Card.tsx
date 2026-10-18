import type { ElementType, ReactNode } from 'react'

interface CardProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Card({ as: Tag = 'div', className = '', children }: CardProps) {
  return (
    <Tag className={`overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm ${className}`}>
      {children}
    </Tag>
  )
}
