import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Search.module.css'

import { baseUrl, fetchApi } from '../utils/fetchApi'
import Image from 'next/image'

import Property from '../components/property/Property'

const SearchPage = ({ properties }) => {
  const router = useRouter()
  const { purpose } = router.query
  return (
    <div className={styles.search}>
      <div className='filters'></div>
      <div className={styles.resultsContent}>
        <h2> Properties {purpose}</h2>
        <div className={styles.results}>
          {properties.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent'
  const rentFrequency = query.rentFrequency || 'yearly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalID = query.categoryExternalID || '4'

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  )

  return {
    props: {
      properties: data?.hits,
    },
  }
}
