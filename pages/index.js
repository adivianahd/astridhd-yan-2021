import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Text from '../components/Text';
import Button from '../components/MyButton';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Astrid Hernandez</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienenidos a mi pagina!
        </h1>

        <p className={styles.description}>
          Astrid Hernandez
          <code className={styles.code}>Pagina principal</code>
        </p>
        <Text size={'XXL'} color={'COLOR'} weight={'BOLD'}>Soy texto de pueba</Text>

        <Button/>
      </main>

      <footer className={styles.footer}>
        <div>Astrid footer :)</div>
      </footer>
    </div>
  )
}
