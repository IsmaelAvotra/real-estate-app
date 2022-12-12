import Link from 'next/link'
import Image from 'next/image'

// import components
import RentalBanner from '../components/banner/RentalBanner'
import BuyBanner from '../components/banner/BuyBanner'

export default function Home() {
  return (
    <div className='home'>
      <RentalBanner />
      <BuyBanner />
    </div>
  )
}
