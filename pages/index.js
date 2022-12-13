const baseUrl = 'https://bayut.p.rapidapi.com'
import { fetchApi } from '../utils/fetchApi'
import Property from '../components/property/Property'

import styles from '../styles/Home.module.css'

// import components
import RentalBanner from '../components/banner/RentalBanner'
import BuyBanner from '../components/banner/BuyBanner'

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className='home'>
      <RentalBanner />
      <div className={styles.examples}>
        {propertiesForRent.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      <BuyBanner />
      <div className={styles.examples}>
        {propertiesForSale.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
