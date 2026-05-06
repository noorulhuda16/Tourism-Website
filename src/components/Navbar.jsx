import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/siteData'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Skardu
      </a>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ label, target }) => (
          <li key={target}>
            <a onClick={() => scrollTo(target)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
