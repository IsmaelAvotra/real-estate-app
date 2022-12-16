import React, { useState } from 'react'
import Link from 'next/link'

// import styles CSS
import styles from './Navbar.module.css'

// import react icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle, FaHome } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <FaHome />
          <h1>Your Home</h1>
        </Link>
      </div>

      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.profile}>
          <GiHamburgerMenu />
          <FaUserCircle />
        </div>
        <div
          className={
            isOpen ? styles.navigation + ' ' + styles.active : styles.navigation
          }
        >
          <Link href='/'>Inscription</Link>
          <Link href='/'>Connection</Link>
          <Link href='/search?purpose=for-sale'>Buy Property</Link>
          <Link href='/search?purpose=for-rent'>Rent Property</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
