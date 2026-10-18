import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'light'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors'
const variants: Record<Variant, string> = {
  primary: 'bg-brand-700 text-white shadow-sm hover:bg-brand-600',
  outline: 'border border-brand-700 text-brand-700 hover:bg-brand-100',
  light: 'border border-white bg-transparent text-white hover:bg-white/15',
}

type ButtonProps = { variant?: Variant; className?: string; children: ReactNode } & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
)

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (props.href !== undefined) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
