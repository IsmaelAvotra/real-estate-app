import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real estate app</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
