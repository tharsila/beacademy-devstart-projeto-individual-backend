import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/Image'
import Button from '../components/Button'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/logo.PNG" width="30px" height="30px" />
          <span>HelpCat</span>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <Link href="/#home"><a>Home</a></Link>
            </li>
            <li>
             <Link href="/#about"><a>Sobre</a></Link> 
            </li>
            <li>
              <Link href="/#contact"><a>Contato</a></Link>
            </li>
            <li>
              <Button text="Contribuir" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}