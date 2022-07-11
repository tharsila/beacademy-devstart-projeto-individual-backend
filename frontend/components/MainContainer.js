import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/MainContainer.module.scss'

export default function MainContainer({children}) {
  return (
    <>
      <Navbar/>
        <main id="home" className={styles.container}>{children}</main>
      <Footer/>
    </>
  )
}