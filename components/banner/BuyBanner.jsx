import Image from 'next/image'
import Link from 'next/link'

// import styles CSS
import styles from './BuyBanner.module.css'

// import image for banner
import buyImage from '../../public/buy.jpeg'

const BuyBanner = () => {
  return (
    <div className={styles.buybanner}>
      <div className={styles.left}>
        <Image
          src={buyImage}
          width={600}
          height={400}
          placeholder='blur'
          alt='buy image'
        ></Image>
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
        <Link href='/search'>Explore Buying</Link>
      </div>
    </div>
  )
}

export default BuyBanner
