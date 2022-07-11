import styles from '../styles/Form.module.scss'
export default function Form() {
  return (
    <form className={styles.form}>
      <label>
        <span>Nome</span>
        <input type="name" placeholder="Preencha seu nome" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" placeholder="Preencha seu e-mail" />
      </label>
      <label>
        <span>Mensagem</span>
        <textarea id="" cols="30" rows="10" style={{resize:"none"}}placeholder="Deixe sua mensagem"></textarea>
      </label>
    </form>
  )
}