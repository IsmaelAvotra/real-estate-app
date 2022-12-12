import React from 'react'
import styles from './BuyBanner.module.css'
import Image from 'next/image'
import Link from 'next/link'

const imageUrl =
  'https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'

const BuyBanner = () => {
  return (
    <div className={styles.buybanner}>
      <div className={styles.left}>
        <Image src={imageUrl} width={600} height={400}></Image>
      </div>
      <div className={styles.right}>
        <h4>buy a home</h4>
        <h3>
          Find, Buy & Own Your <br /> Dream Home
        </h3>
        <p>
          Explore from Apartments, builder floors, villas <br />
          and more
        </p>
        <Link href='/'>Explore Buying</Link>
      </div>
    </div>
  )
}

export default BuyBanner
