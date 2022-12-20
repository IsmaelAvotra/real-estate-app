import React from 'react'
import Link from 'next/link'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import { millify } from '../../utils/millify'
import styles from './PropertyDetails.module.css'

import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import { FaBed, FaBath } from 'react-icons/fa'
import { GrGallery } from 'react-icons/gr'

import { useRouter } from 'next/router'

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className={styles.propertydetails}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Link href={`/property/photos/${id}`}>
            <Image
              src={photos[0].url}
              width={800}
              height={500}
              alt='image house'
              placeholder='blur'
              blurDataURL={photos[0].url}
            />
          </Link>
        </div>
        <div className={styles.right}>
          {photos.slice(1, 5).map((photo) => {
            return (
              <Link href={`/property/photos/${id}`} key={photo.id}>
                <Image
                  src={photo.url}
                  width={250}
                  height={200}
                  alt='image house'
                  placeholder='blur'
                  blurDataURL={photo.url}
                />
              </Link>
            )
          })}
        </div>
        <Link href={`/property/photos/${id}`} className={styles.allPhotos}>
          <GrGallery />
          <p>See all photos</p>
        </Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.agency}>
          <div className={styles.price}>
            <p>{isVerified && <GoVerified />}</p>
            <p>
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </p>
          </div>
          <div className='agencyname'>
            <Image
              src={agency?.logo?.url}
              alt='logo agency'
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.rooms}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {area.toFixed(2)} sqft{' '}
            <BsGridFill />
          </p>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.flexwrap}>
          <div className='one'>
            <span>Type :</span>
            <p>{type}</p>
          </div>
          <div className='two'>
            <span>Purpose :</span>
            <p>{purpose}</p>
          </div>

          <div className='three'>
            <span>Furnishing Status :</span>
            <p>{furnishingStatus ? furnishingStatus : 'Not furnished'}</p>
          </div>
        </div>
        <div className={styles.facilities}>
          {amenities.length > 0 && <h3>Facilities :</h3>}
          <div className={styles.facility}>
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <p key={amenity.text}>{amenity?.text}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
  return {
    props: {
      propertyDetails: data,
    },
  }
}
