import useParallax from '../hooks/useParallax'
import { IMAGES } from '../data/siteData'
import styles from './Hero.module.css'

export default function Hero() {
  const imgRef = useParallax(0.45)

  const scrollToIntro = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Parallax background image */}
      <div
        ref={imgRef}
        className={styles.bg}
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      />

      {/* Dark gradient overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Pakistan · Gilgit-Baltistan · 2,438m
          <span className={styles.eyebrowLine} />
        </div>

        <h1 className={styles.title}>
          Skar<em>du</em>
        </h1>

        <p className={styles.subtitle}>Where Heaven Meets Earth</p>

        <button className={styles.cta} onClick={scrollToIntro} data-hover>
          Begin the Journey
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
