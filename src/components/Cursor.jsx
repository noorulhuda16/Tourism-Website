import { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${hovered ? styles.dotHovered : ''}`}
      />
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovered ? styles.ringHovered : ''}`}
      />
    </>
  )
}
