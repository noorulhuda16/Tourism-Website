import useParallax from '../hooks/useParallax'
import useReveal from '../hooks/useReveal'
import styles from './ParallaxBand.module.css'

export default function ParallaxBand({ band }) {
  const imgRef = useParallax(0.38)
  const { ref: captionRef, visible } = useReveal()
  const isRight = band.align === 'right'

  return (
    <div className={styles.band}>
      <div
        ref={imgRef}
        className={styles.img}
        style={{ backgroundImage: `url('${band.image}')` }}
      />
      <div
        className={styles.gradient}
        style={{
          background: isRight
            ? 'linear-gradient(to left, rgba(4,8,16,0.88) 0%, rgba(4,8,16,0.15) 55%, transparent 100%)'
            : 'linear-gradient(to right, rgba(4,8,16,0.88) 0%, rgba(4,8,16,0.15) 55%, transparent 100%)',
        }}
      />
      <div
        ref={captionRef}
        className={`${styles.caption} ${isRight ? styles.right : styles.left} ${visible ? styles.visible : ''}`}
      >
        <div className="section-tag" style={{ marginBottom: '14px' }}>
          {band.tag}
        </div>
        <h2 className={styles.title}>
          {band.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>
        <p className={styles.desc}>{band.desc}</p>
      </div>
    </div>
  )
}
