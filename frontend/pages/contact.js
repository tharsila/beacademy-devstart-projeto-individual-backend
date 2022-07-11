import Input from '../components/form/Input'
import SubmitButton from '../components/form/SubmitButton'
import styles from '../styles/Contact.module.scss'
import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contato</h2>
      <div>
        <Image src="/images/contact.jpg" width="480" height="400" style={{borderRadius:'20px'}}/>
        <form className={styles.form}>
          <Input type="text" text="Nome" name="name" placeholder="Preencha seu nome"/>
          <Input type="email" text="Email" name="email" placeholder="Preencha seu email" />
          <label>
            <span>Mensagem</span>
            <textarea id="" cols="30" rows="10" placeholder="Deixe sua mensagem"></textarea>
          </label>
          <SubmitButton text="Enviar"/>
        </form>
      </div>
    </section>

  )
}