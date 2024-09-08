import { Head } from '@inertiajs/react'
import { Resume } from '~/components'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Develop - Amine Ben hammou (webNeat)</title>
        <meta name="description" content="This is the dev branch!" />
      </Head>
      <Resume {...props} />
    </>
  )
}
