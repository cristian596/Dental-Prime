import { useEffect, useRef, useState } from 'react'

const ROOT_MARGIN_BOTTOM = 80

/**
 * Marca el elemento como visible una sola vez, al entrar en pantalla.
 * `visible` arranca en true (HTML inicial y sin JavaScript); solo se pasa a false
 * tras montar en el cliente, si el elemento aún está por debajo del viewport.
 */
export function useReveal<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el || typeof IntersectionObserver === 'undefined') return
    if (el.getBoundingClientRect().top < window.innerHeight - ROOT_MARGIN_BOTTOM) return

    // eslint-disable-next-line react-hooks/set-state-in-effect -- se oculta solo tras montar en el cliente
    setVisible(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: `0px 0px -${ROOT_MARGIN_BOTTOM}px 0px` },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled])

  return { ref, visible }
}
