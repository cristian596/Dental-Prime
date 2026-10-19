import type { ReactNode } from 'react'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export function Container({ className = '', children }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-6 xl:px-10 ${className}`}>{children}</div>
}
