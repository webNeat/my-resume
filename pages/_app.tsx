import {AppProps} from 'next/app'
import Head from 'next/head'
import './style.css'

export default ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <title>Amine Ben hammou</title>
      <link rel="stylesheet" href="/css/fontawesome.css" />
    </Head>
    <Component {...pageProps} />
  </>
)
