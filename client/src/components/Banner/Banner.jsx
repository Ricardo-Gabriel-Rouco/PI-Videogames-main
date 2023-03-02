import React from 'react'
import { pageTitle } from '../../App'
import styles from './Banner.module.css'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div>
      <ul className={styles.banner}>
        <Link to={'/home'}>
        <li className={styles.title}>{pageTitle}</li>
        </Link>
        <li className={styles.searchBar2}>
          <input type="search" id="site-search" name="q"/>
          <button>Search</button>
        </li>
      </ul>
    </div>
  )
}
