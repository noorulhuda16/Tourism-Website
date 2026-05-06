import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { EXPERIENCES } from '../data/siteData'
import styles from './Experiences.module.css'

function ExpCard({ exp }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={exp.image}
        alt={exp.name}
        loading="lazy"
        style={exp.filter ? { filter: exp.filter } : {}}
      />
      <div className={styles.cardOverlay} />
      <div className={styles.cardBody}>
        <div className={styles.num}>{exp.num} / {exp.subtitle}</div>
        <div className={styles.name}>
          {exp.name.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </div>
        <p className={styles.detail}>{exp.detail}</p>
      </div>
    </div>
  )
}

export default function Experiences() {
  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const { ref: headerRef, visible: headerVisible } = useReveal()
  const { ref: hintRef, visible: hintVisible } = useReveal()

  const onMouseDown = (e) => {
    isDragging.current = true
    trackRef.current.style.cursor = 'grabbing'
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const onMouseLeave = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const onMouseUp = () => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.8
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section id="experiences" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
      >
        <div>
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            What To Do
          </div>
          <h2 className={styles.heading}>
            Experiences<br />beyond ordinary.
          </h2>
        </div>
        <p className={styles.sub}>
          Drag to explore the full breadth of what Skardu offers — from summits to stillness.
        </p>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        style={{ cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {EXPERIENCES.map((exp) => (
          <ExpCard key={exp.id} exp={exp} />
        ))}
      </div>

      <div
        ref={hintRef}
        className={`${styles.hint} ${hintVisible ? styles.hintVisible : ''}`}
      >
        Drag to explore all experiences →
      </div>
    </section>
  )
}
