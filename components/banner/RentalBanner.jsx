import React from 'react'
import styles from './RentalBanner.module.css'

import Image from 'next/image'
import Link from 'next/link'

import rentImage from '../../public/rent.jpeg'

const RentalBanner = () => {
  return (
    <div className={styles.rentalbanner}>
      <div className={styles.left}>
        <Image
          src={rentImage}
          width={600}
          height={400}
          placeholder='blur'
          alt='image for rent'
        ></Image>
      </div>
      <div className={styles.right}>
        <h4>Rent a home</h4>
        <h3>
          Rental homes for <br /> Everyone
        </h3>
        <p>
          Explore from Apartments, builder floors, villas <br />
          and more
        </p>
        <Link href='/'>Explore Renting</Link>
      </div>
    </div>
  )
}

export default RentalBanner
