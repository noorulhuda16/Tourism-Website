import useReveal from '../hooks/useReveal'
import { SEASONS } from '../data/siteData'
import styles from './Seasons.module.css'

function SeasonCard({ season, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: delay }}
    >
      <img
        className={styles.img}
        src={season.image}
        alt={season.name}
        loading="lazy"
        style={season.filter ? { filter: season.filter } : {}}
      />
      <div className={styles.overlay} />
      <div className={styles.body}>
        <div className={styles.temp}>{season.temp}</div>
        <div className={styles.name}>{season.name}</div>
        <p className={styles.note}>{season.note}</p>
      </div>
    </div>
  )
}

export default function Seasons() {
  const { ref: topRef, visible: topVisible } = useReveal()

  return (
    <section id="seasons" className={styles.section}>
      <div
        ref={topRef}
        className={`${styles.top} ${topVisible ? styles.topVisible : ''}`}
      >
        <div className="section-tag centered" style={{ marginBottom: '16px' }}>
          Plan Your Journey
        </div>
        <h2 className={styles.heading}>The Rhythm of the Valley</h2>
        <p className={styles.sub}>Every season reveals a completely different Skardu.</p>
      </div>

      <div className={styles.grid}>
        {SEASONS.map((season, i) => (
          <SeasonCard
            key={season.id}
            season={season}
            delay={`${i * 0.1}s`}
          />
        ))}
      </div>
    </section>
  )
}
