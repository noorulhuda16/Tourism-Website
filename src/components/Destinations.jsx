import { DESTINATIONS } from '../data/siteData'
import styles from './Destinations.module.css'

function DestTile({ dest, style }) {
  return (
    <div className={styles.tile} style={style}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url('${dest.image}')` }}
      />
      <div className={styles.fg} />
      <div className={styles.arrow}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
      <div className={styles.body}>
        <div className={styles.tag}>{dest.tag}</div>
        <h3 className={styles.name}>
          {dest.name.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h3>
        <p className={styles.desc}>{dest.desc}</p>
      </div>
    </div>
  )
}

export default function Destinations() {
  return (
    <section id="destinations" className={styles.grid}>
      {DESTINATIONS.map((dest) => (
        <DestTile
          key={dest.id}
          dest={dest}
          style={dest.span > 1 ? { gridRow: `span ${dest.span}` } : {}}
        />
      ))}
    </section>
  )
}
