import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className={styles.footer}>
      <p>
        © created by <span>Ismael Avotra</span> {date} | All rights reserved
      </p>
    </div>
  )
}

export default Footer
