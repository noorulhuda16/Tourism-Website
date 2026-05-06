import { useEffect, useRef, useState } from 'react'

/**
 * useReveal
 * Returns a ref and a boolean `visible`.
 * When the element enters the viewport, `visible` becomes true.
 * @param {number} threshold - 0–1, how much of the element must be visible
 * @param {string} rootMargin - e.g. '0px 0px -40px 0px'
 */
export default function useReveal(threshold = 0.12, rootMargin = '0px 0px -40px 0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // only trigger once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}
