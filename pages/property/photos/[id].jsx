import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Photos.module.css'
import { MdClose } from 'react-icons/md'

import { baseUrl, fetchApi } from '../../../utils/fetchApi'

const Photos = ({ propertyDetails: { photos } }) => {
  const [model, setModel] = useState(false)
  const [tempImagesrc, setTempImagesrc] = useState('')
  const getImage = (url) => {
    setModel(true)
    setTempImagesrc(url)
  }
  return (
    <>
      <div
        className={model ? styles.popUp + ' ' + styles.active : styles.popUp}
      >
        <div className={styles.popUpContent}>
          <Image src={tempImagesrc} width={600} height={400} alt='pop-up' />
          <div className={styles.icon} onClick={() => setModel(false)}>
            <MdClose />
          </div>
        </div>
      </div>
      <div className={styles.photos}>
        {photos.map((photo) => {
          return (
            <div
              className={styles.image}
              key={photo.id}
              onClick={() => getImage(photo.url)}
            >
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
    </>
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
