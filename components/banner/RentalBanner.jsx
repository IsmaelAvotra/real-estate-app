import React from 'react'
import styles from './RentalBanner.module.css'

import Image from 'next/image'
import Link from 'next/link'

const imageUrl =
  'https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'

const RentalBanner = () => {
  return (
    <div className={styles.rentalbanner}>
      <div className={styles.left}>
        <Image src={imageUrl} width={600} height={400}></Image>
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
