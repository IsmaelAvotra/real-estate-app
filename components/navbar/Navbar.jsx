import React, { useState } from 'react'
import styles from './Navbar.module.css'

import Link from 'next/link'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle, FaHome } from 'react-icons/fa'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <FaHome />
          <h1>Your Home</h1>
        </Link>
      </div>

      <div className={styles.search}>
        <form>
          <input type='text' placeholder='Search here...' />
          <AiOutlineSearch />
        </form>
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
          <Link href='/'>Buy Property</Link>
          <Link href='/'>Rent Property</Link>
        </div>
      </div>
    </div>
  )
}

export default navbar