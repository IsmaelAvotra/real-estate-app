import React from 'react'
import Image from 'next/image'
import styles from './Photos.module.css'

import { baseUrl, fetchApi } from '../../../utils/fetchApi'

const Photos = ({ propertyDetails: { photos } }) => {
  return (
    <div className={styles.photos}>
      {photos.map((photo) => {
        return (
          <div className={styles.image} key={photo.id}>
            <Image
              src={photo.url}
              width={600}
              height={400}
              alt='all photos'
              placeholder='blr'
              blurDataURL={photo.url}
            />
          </div>
        )
      })}
    </div>
  )
}
export default Photos

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

  return {
    props: {
      propertyDetails: data,
    },
  }
}
