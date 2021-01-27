import Head from 'next/head';
import Text from '../components/Text';
import Card from '../components/Card';
import Grid from '../components/Grid';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrid Hernandez</title>
      </Head>
      <main>
        <Grid>
          <Card>
            <Text size={'XXXL'} color={'primary'} weight={'light'}>Astrid Hernandez</Text>
          </Card>
        </Grid>
      </main>
    </div>
  )
}
