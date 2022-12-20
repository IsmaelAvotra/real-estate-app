import React, { useState } from 'react'
import Link from 'next/link'

// import styles CSS
import styles from './Navbar.module.css'

// import react icons
import { GiHamburgerMenu, GiHouseKeys } from 'react-icons/gi'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { FaUserCircle, FaHome, FaMoneyBillAlt } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <FaHome />
          <h1>New Home</h1>
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
          <Link href='/'>
            {' '}
            <AiOutlineUserAdd /> Inscription
          </Link>
          <Link href='/'>
            <AiOutlineUser /> Connection
          </Link>
          <Link href='/search?purpose=for-sale'>
            {' '}
            <FaMoneyBillAlt /> Buy Property
          </Link>
          <Link href='/search?purpose=for-rent'>
            <GiHouseKeys /> Rent Property
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
