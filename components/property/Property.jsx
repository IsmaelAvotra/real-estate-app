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

// import milify for round numbers
import millify from 'millify'

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
          ></Image>
        </div>
        <div className={styles.bottom}>
          <div className={styles.agency}>
            <div className={styles.price}>
              <p>{isVerified && <GoVerified />}</p>
              <p>
                MAD {millify(price)} {rentFrequency && `/${rentFrequency}`}
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
            <p className={styles.text}>
              {title.length > 40 ? title.substring(0, 40) + '...' : title}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Property
