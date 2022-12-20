import React from 'react'
import styles from './Noresult.module.css'

import { FaRegSadTear } from 'react-icons/fa'
import Link from 'next/link'

const Noresult = () => {
  return (
    <div className={styles.noResult}>
      <div className={styles.sorry}>
        <p>
          Sorry <FaRegSadTear /> , No result found !!!
        </p>
        <div className={styles.buttons}>
          <Link href='/search?purpose=for-rent'>Rent property</Link>
          <Link href='/search?purpose=for-sale'>Buy property</Link>
        </div>
      </div>
    </div>
  )
}

export default Noresult
