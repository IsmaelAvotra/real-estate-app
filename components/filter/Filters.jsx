import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Filters.module.css'

import { MdFilterList } from 'react-icons/md'

import { filterData, getFilterValues } from '../../utils/filterData'

const Filters = () => {
  const [filters] = useState(filterData)
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const router = useRouter()

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query })
  }

  return (
    <section className={styles.filters}>
      <p onClick={() => setFilterIsOpen(!filterIsOpen)}>
        Search properties by filters <MdFilterList />{' '}
      </p>
      <div
        className={
          filterIsOpen
            ? styles.filtersContent + ' ' + styles.active
            : styles.filtersContent
        }
      >
        {filters?.map((filter) => (
          <div className={styles.filter} key={filter.queryName}>
            <select
              name='filters'
              id='filters'
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value} name='option'>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Filters
