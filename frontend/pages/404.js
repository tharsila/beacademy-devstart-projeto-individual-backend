import Link from 'next/link'
import Head from 'next/head'
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <h1>404</h1>
      <p>Parece que essa página não existe</p>
      <Link href="/"><a>Voltar para home</a></Link>
    </>
  )
}