import styles from './NavbarAdmin.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarAdmin() {
  return (
    <>
      <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a style={{display:'flex', alignItems:'center', gap:'1rem'}} >
              <Image src="/images/logo.PNG" alt={'HelpCat'} width="30px" height="30px" />
              <span>HelpCat</span>
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            <li>
              <Link href="/pets/dashboard"><a>Dashboard</a></Link>
            </li>
            <li>
              <Link href="/pets/dashboard/register"><a>Cadastrar Pet</a></Link>
            </li>
            <li>
              <Link href="/pets/dashboard/report"><a>Relatorio de Adoções</a></Link> 
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}