import { Head } from '@inertiajs/react'
import { Resume } from '~/components'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Amine Ben hammou (webNeat)</title>
        <meta
          name="description"
          content="I am a software engineer with focus on web development and performance optimization."
        />
      </Head>
      <Resume {...props} />
    </>
  )
}
