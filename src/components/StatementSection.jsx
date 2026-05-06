import useParallax from '../hooks/useParallax'
import useReveal from '../hooks/useReveal'
import { IMAGES } from '../data/siteData'
import styles from './StatementSection.module.css'

export default function StatementSection() {
  const imgRef = useParallax(0.4)
  const { ref: contentRef, visible } = useReveal()

  return (
    <section className={styles.statement} id="statement">
      <div
        ref={imgRef}
        className={styles.bg}
        style={{ backgroundImage: `url('${IMAGES.village}')` }}
      />
      <div className={styles.overlay} />
      <div
        ref={contentRef}
        className={`${styles.content} ${visible ? styles.visible : ''}`}
      >
        <span className={styles.mark}>"</span>
        <p className={styles.text}>
          The mountains are not stadiums where I satisfy my ambition to achieve,
          they are cathedrals where I practise my religion.
        </p>
        <span className={styles.attr}>Reinhold Messner · Legendary Alpinist</span>
      </div>
    </section>
  )
}
