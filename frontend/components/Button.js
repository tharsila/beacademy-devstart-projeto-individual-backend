import Link from 'next/link'
import styles from '../styles/Button.module.scss'
export default function Button({text}) {
  return (

    <Link href="/pets"><a className={styles.btn} style={{ color: '#ffffff', fontWeight: '400' }}>{text}</a></Link>
  
  )
}