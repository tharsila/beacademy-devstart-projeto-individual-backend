import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import About from './about'
import Contact from './contact'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Pets, Gatos, Felinos, Adoção"/>
      <meta name="description" content="Ajude quem precisa de ajuda"/>
    </Head>
    <div className={styles.left}>
      <section className={styles.home}>
        <h1 className={styles.title}>Ajude quem <br/>precisa de ajuda</h1>
        <Image src="/images/vector.png" width="250px" height="20px"/>
        <p>Com apenas 1 real você pode ajudar a alimentar gatos de ruas.</p>
        <div >
          <Button text="Contribuir" />
          <a href="#contact">Entrar em contato</a>
        </div>
      </section>
      <section>
        <div className="hero">
          <Image src="/images/gato-hero.PNG" width="680px" height="680px"/>
        </div>
      </section>
    </div>
    <About/>
    <Contact/>
    </>
  )
}
