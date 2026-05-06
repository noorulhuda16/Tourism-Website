import useReveal from '../hooks/useReveal'
import { STATS } from '../data/siteData'
import styles from './StatsBar.module.css'

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      {STATS.map(({ number, label }, i) => {
        const { ref, visible } = useReveal()
        return (
          <div
            key={label}
            ref={ref}
            className={`${styles.item} ${visible ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <span className={styles.number}>{number}</span>
            <div className={styles.label}>{label}</div>
          </div>
        )
      })}
    </div>
  )
}
