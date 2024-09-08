import { Head } from '@inertiajs/react'
import { Resume } from '~/components'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Amine Ben hammou (webNeat)</title>
        <meta
          name="description"
          content="I like to solve challenging problems using efficient algorithms and high quality code."
        />
      </Head>
      <Resume {...props} />
    </>
  )
}
