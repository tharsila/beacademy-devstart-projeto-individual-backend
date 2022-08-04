import styles from './NavbarAdmin.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { ApiServiceSanctum } from '../../data/services/ApiServiceSanctum'

export default function NavbarAdmin() {
  const router = useRouter()
  const logout = () => {
    const csrf = ApiServiceSanctum.get('/sanctum/csrf-cookie')
    ApiServiceSanctum.get('/sanctum/csrf-cookie')
    .then(() => {
      ApiServiceSanctum.post('api/logout', csrf)
    })
    .then(() => {
      destroyCookie(undefined,'nextauth.token')
      router.push('/login')
    })
  }

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
             <Link href="/dashboard"><a>Dashboard</a></Link>
            </li>
            <li>
              <Link href="/dashboard/register"><a>Cadastrar Pet</a></Link>
            </li>
            <li>
              <Link href="/dashboard/report"><a>Relatorio de Adoções</a></Link> 
            </li>
            <li>
              <a onClick={logout} style={{cursor: 'pointer'}}>Sair</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}