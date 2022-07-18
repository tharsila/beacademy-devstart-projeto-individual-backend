import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>

      <div style={{marginTop: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Image src="/images/404.svg" width="500px" height="500px"/>
        <p style={{marginBottom: '2.3rem', fontWeight: 'bold', fontSize:'1.2rem'}}>Parece que essa página não existe</p>
      </div>
    </>
  )
}