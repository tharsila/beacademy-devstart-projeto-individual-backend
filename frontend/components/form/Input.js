import styles from './Input.module.scss'

export default function Input({type, text, name, placeholder, handleOnchange, value}) {
  return (
    <label htmlFor={name} className={styles.form_control}>
      <span>{text}</span>
      <input 
      type={type} 
      name={name} 
      placeholder={placeholder}
      onChange={handleOnchange}
      value={value}
      />
    </label>
  )
}