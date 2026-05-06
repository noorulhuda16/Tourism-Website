import styles from './Footer.module.css'

const FOOTER_LINKS = [
  { label: 'Getting There', section: 'hero' },
  { label: 'Permits', section: 'hero' },
  { label: 'Stay', section: 'hero' },
  { label: 'Cuisine', section: 'hero' },
  { label: 'Safety', section: 'hero' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div className={styles.brandName}>SKARDU</div>
        <div className={styles.brandTag}>Gilgit-Baltistan, Pakistan · 2,438m above sea level</div>
      </div>

      <div className={styles.links}>
        {FOOTER_LINKS.map(({ label }) => (
          <a key={label} className={styles.link}>{label}</a>
        ))}
      </div>

      <div className={styles.copy}>
        Photos: Unsplash (Shoaib Khan, RAMSHA ASAD, Waqas Akhtar) · Free to use under Unsplash License · © {new Date().getFullYear()} Skardu Tourism
      </div>
    </footer>
  )
}
