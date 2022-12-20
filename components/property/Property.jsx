import Link from 'next/link'
import Image from 'next/image'

// import styles CSS
import styles from '../../styles/Home.module.css'

// import react icons
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import { FaBed, FaBath } from 'react-icons/fa'

// import default image when no image
import defaultImage from '../../public/house.jpg'

import { millify } from '../../utils/millify'

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`}>
      <article className={styles.property}>
        <div className={styles.top}>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            width={400}
            height={300}
            alt='image property'
            placeholder='blur'
            blurDataURL={coverPhoto.url}
            loading='lazy'
          ></Image>
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
                width={40}
                height={40}
                placeholder='blur'
                blurDataURL={agency?.logo.url}
              />
            </div>
          </div>
          <div className={styles.description}>
            <p>
              {rooms} <FaBed /> | {baths} <FaBath /> | {area.toFixed(2)} sqft{' '}
              <BsGridFill />
            </p>
            <p className={styles.text}>
              {title.length > 35 ? title.substring(0, 35) + '...' : title}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Property
