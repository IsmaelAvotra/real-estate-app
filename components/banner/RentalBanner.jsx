import Image from 'next/image'
import Link from 'next/link'

// import styles CSS
import styles from './RentalBanner.module.css'

// import image for banner
import rentImage from '../../public/rent.jpg'

const RentalBanner = () => {
  return (
    <div className={styles.rentalbanner}>
      <div className={styles.left}>
        <Link href='/rent.jpg' target='_blank'>
          <Image
            src={rentImage}
            width={600}
            height={400}
            placeholder='blur'
            alt='image for rent'
          ></Image>
        </Link>
      </div>
      <div className={styles.right}>
        <span>Rent a home</span>
        <h3>
          Rental homes for <br /> Everyone
        </h3>
        <p>
          Explore from Apartments, builder floors, villas <br />
          and more
        </p>
        <Link href='/search?purpose=for-rent'>Explore Renting</Link>
      </div>
    </div>
  )
}

export default RentalBanner
