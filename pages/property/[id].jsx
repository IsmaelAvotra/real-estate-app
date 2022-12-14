import React, { useState } from 'react'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import styles from './PropertyDetails.module.css'

import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import {
  FaBed,
  FaBath,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from 'react-icons/fa'

// import milify for round numbers
import millify from 'millify'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react'

// import styles for swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import modules swiper
import { Pagination, Navigation } from 'swiper'

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
  return (
    <div className={styles.propertydetails}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Image
            src={photos[0].url}
            width={800}
            height={500}
            alt='image house'
          />
        </div>
        <div className={styles.right}>
          <Image
            src={photos[1].url}
            width={250}
            height={200}
            alt='image house'
          />
          <Image
            src={photos[2].url}
            width={250}
            height={200}
            alt='image house'
          />
          <Image
            src={photos[3].url}
            width={250}
            height={200}
            alt='image house'
          />
          <Image
            src={photos[4].url}
            width={250}
            height={200}
            alt='image house'
          />
        </div>
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
            <img
              src={agency?.logo?.url}
              alt='logo agency'
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className={styles.description}>
          <p>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </p>
          <p className={styles.text}>{title}</p>
          <p>{description}</p>
        </div>
        <div className='flex-wrap'>
          <div className='one'>
            <span>Type</span>
            <p>{type}</p>
          </div>
          <div className='two'>
            <span>Purpose</span>
            <p>{purpose}</p>
          </div>
          {furnishingStatus && (
            <div className='three'>
              <span>Furnishing Status</span>
              <p>{furnishingStatus}</p>
            </div>
          )}
        </div>
        <div className='amenities'>
          {amenities.length && <h1>Facilities</h1>}
          <div className='amenity'>
            {amenities?.map((item) =>
              item?.amenities?.map((amenity) => (
                <p key={amenity.text}>{amenity.text}</p>
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
  // console.log(data.photos)
  return {
    props: {
      propertyDetails: data,
    },
  }
}
