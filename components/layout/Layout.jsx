import Head from 'next/head'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real estate app</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Find your dream home with our comprehensive real estate listings. Browse houses for sale in Saudi Arabia and discover your perfect property. Our experienced agents are here to help you every step of the way.'
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
