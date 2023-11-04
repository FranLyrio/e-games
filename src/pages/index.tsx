import Head from 'next/head'
import Title from '@components/Heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js boilerplate</title>
        <meta
          name="description"
          content="Projeto utilizado como base para desenvolvimento de aplicações Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>Next.js boilerplate</Title>
      </main>
    </>
  )
}
