import Link from 'next/link';
import Head from 'next/head';
import Title from '../../components/title/Title'
import List from '../../components/list/List'

export default function Pet() {
  return (
    <>
    <Head>
      <title>Página de Pets</title>
    </Head>
    <Title 
    title="" 
    subtitle={
      <>
        Com um pequeno valor mensal, você <br/>
        pode <strong>ajudar um pet virtualmente</strong>
      </>
    }/>
    <List />
    <div>
      <Link href="/"><a>Voltar para home</a></Link>
    </div>
    </>
    
  )
}