import Text from '../components/Text';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Header from '../components/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <Grid>
        <Card>
          <Text size={'XXXL'} color={'primary'} weight={'light'}>Astrid Hernandez</Text>
        </Card>
      </Grid>
    </div>
  )
}
