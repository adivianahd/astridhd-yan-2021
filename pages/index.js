import Head from 'next/head';
import Text from '../components/Text';
import Card from '../components/Card';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrid Hernandez</title>
      </Head>
      <main>
        <Card>
          <Text size={'XXXL'} color={'primary'} weight={'light'}>Astrid Hernandez</Text>
        </Card>
      </main>
    </div>
  )
}
