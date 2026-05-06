import useParallax from '../hooks/useParallax'
import useReveal from '../hooks/useReveal'
import { IMAGES } from '../data/siteData'
import styles from './CTASection.module.css'

export default function CTASection() {
  const imgRef = useParallax(0.38)
  const { ref: contentRef, visible } = useReveal()

  return (
    <section id="cta" className={styles.section}>
      <div
        ref={imgRef}
        className={styles.bg}
        // style={{ backgroundImage: `url('${IMAGES.cta}')` }}
      />
      <div className={styles.overlay} />
      <div
        ref={contentRef}
        className={`${styles.content} ${visible ? styles.visible : ''}`}
      >
        <div className="section-tag centered" style={{ marginBottom: '24px' }}>
          Your Journey Awaits
        </div>
        <h2 className={styles.heading}>
          Begin your<br />
          <em>Skardu</em><br />
          story.
        </h2>
        <p className={styles.sub}>
          From first-time visitors to seasoned alpinists — the valley opens
          itself to all who seek the extraordinary.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>
            Plan My Trip ↗
          </button>
          <button className={styles.btnOutline}>
            When to Visit 
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </section>
  )
}
