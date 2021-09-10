import {AppProps} from 'next/app'
import Head from 'next/head'
import './style.css'

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <title>Amine Ben hammou</title>
      <meta
        name="description"
        content="I like to solve challenging problems using efficient algorithms and high quality code."
      />
      <link rel="stylesheet" href="/css/fontawesome.css" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
