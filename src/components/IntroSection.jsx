import useParallax from '../hooks/useParallax'
import useReveal from '../hooks/useReveal'
import { IMAGES } from '../data/siteData'
import styles from './IntroSection.module.css'

export default function IntroSection() {
  const imgRef = useParallax(0.4)
  const { ref: textRef, visible } = useReveal()

  return (
    <section className={styles.intro} id="intro">
      <div
        ref={imgRef}
        className={styles.bg}
        // style={{ backgroundImage: `url('${IMAGES.intro}')` }}
      />
      <div className={styles.overlay} />

      <div
        ref={textRef}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        <div className="section-tag centered" style={{ marginBottom: '28px' }}>
          The Valley of Giants
        </div>
        <h2 className={styles.heading}>
          A land carved by glaciers,<br />cradled by the sky.
        </h2>
        <p className={styles.body}>
          Skardu lies at the convergence of three of the world's mightiest mountain
          ranges — the Karakoram, the Himalayas, and the Hindu Kush. Home to five of
          Earth's fourteen eight-thousanders, turquoise lakes of impossible stillness,
          and a culture forged across millennia of the Silk Road.
        </p>
      </div>
    </section>
  )
}
