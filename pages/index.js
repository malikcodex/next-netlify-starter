import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cars On Deal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome To The Cars On Deal Platform. We Are Working And Soon We Are Bringing The Module" />
        <p className="description">
          <a className="my-btn">Checkout Tools</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
