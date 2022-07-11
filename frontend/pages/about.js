import styles from '../styles/About.module.scss'
import Image from 'next/image'
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>Sobre</h2>
      <div className={styles.info}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit nesciunt ex voluptatibus voluptatem aliquid molestiae, quam veniam ipsam similique eum modi, ipsum rem temporibus sint nulla ab reiciendis tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut similique voluptates facilis molestias dolor. Itaque sapiente possimus optio at neque aperiam dolorum veniam, soluta nisi velit, minima libero voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur amet vero natus deserunt, quod corporis quibusdam reiciendis quo consequatur necessitatibus iusto accusantium, esse dolorum fuga quos fugiat ex provident. Vitae!</p>
        </div>
        <Image src="/images/about.jpg" width="400" height="400" style={{borderRadius:'20px'}}/>
      </div>
    
    </section>
  )
}