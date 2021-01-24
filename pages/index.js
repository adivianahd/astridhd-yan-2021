import Head from 'next/head';
import Text from '../components/Text';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrid Hernandez</title>
      </Head>

      <main>
        <Text size={'XXXL'} color={'primary'} weight={'light'}>Astrid Hernandez</Text>
        <Text size={'XXL'} color={'accent'} weight={'bold'}>Astrid Hernandez</Text>
        <Text size={'XL'} color={'muted'} weight={'regular'}>Astrid Hernandez</Text>
      </main>
    </div>
  )
}
