import styles from './Title.module.scss'

export default function Title({title, subtitle}) {
  return (
    <>
      <div className={styles.space_top}></div>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>

    </>
  )
}