import Image from 'next/image'
import Link from 'next/link'

// import styles CSS
import styles from './BuyBanner.module.css'

// import image for banner
import buyImage from '../../public/buy.jpg'

const BuyBanner = () => {
  return (
    <div className={styles.buybanner}>
      <div className={styles.left}>
        <Link href='/buy.jpg' target='_blank'>
          <Image
            src={buyImage}
            width={600}
            height={400}
            placeholder='blur'
            alt='buy image'
          ></Image>
        </Link>
      </div>
      <div className={styles.right}>
        <span>buy a home</span>
        <h3>
          Find, Buy & Own Your <br /> Dream Home
        </h3>
        <p>
          Explore from Apartments, builder floors, villas <br />
          and more
        </p>
        <Link href='/search?purpose=for-sale'>Explore Buying</Link>
      </div>
    </div>
  )
}

export default BuyBanner
