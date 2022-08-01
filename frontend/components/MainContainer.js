import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/MainContainer.module.scss'
import NavbarAdmin from '../components/NavbarAdmin/NavbarAdmin'
import {useRouter} from 'next/router'

export default function MainContainer({children}) {
  const router = useRouter()

  return (
    <>
      {router.pathname === '/' || router.pathname === '/pets' || router.pathname === '/login' || router.pathname === '/register'? <Navbar/> : <NavbarAdmin/> }
      <main id="home" className={styles.container}>
        {children}
      </main>
      <Footer/>
    </>
  )
}