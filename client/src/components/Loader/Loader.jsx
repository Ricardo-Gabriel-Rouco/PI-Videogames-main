import React from 'react'
import styles from './Loader.module.css'
import image from '../../assets/loading.gif'

function Loader() {
  return (
    <div className={styles.loader}>

      <img src={image} alt="Imagine is loading" />
    </div>
  )
}

export default Loader