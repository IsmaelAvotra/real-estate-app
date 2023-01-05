import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>
        © created by{' '}
        <Link href='https://portfolio-ismael.vercel.app/' target='_blank'>
          <span>Ismael Avotra</span>
        </Link>{' '}
        {date} | All rights reserved
      </p>
    </footer>
  )
}

export default Footer
