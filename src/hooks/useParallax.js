import { useEffect, useRef } from 'react'

/**
 * useParallax
 * Attaches a scroll-based translateY to a ref element.
 * @param {number} factor - how much the element moves relative to scroll (0.3 = subtle, 0.6 = strong)
 */
export default function useParallax(factor = 0.4) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      const section = el.parentElement
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      // only compute when section is visible
      if (rect.bottom < -100 || rect.top > vh + 100) return
      const progress = (vh - rect.top) / (vh + rect.height)
      const offset = (progress - 0.5) * rect.height * factor
      el.style.transform = `translateY(${offset}px)`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // run once on mount

    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])

  return ref
}
