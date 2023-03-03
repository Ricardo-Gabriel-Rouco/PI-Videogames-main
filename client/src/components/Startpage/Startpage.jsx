import React from 'react'
import styles from './Startpage.module.css'

import image from '../../assets/bonfireanimated.gif'

export default function Startpage(props) {
  const {start} = props

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Api Videojuegos</h1>
      <div className={styles.startOptions}>
      <button className={styles.start} onClick={start}><img src={image} alt='Imagine just an awesome background about Dark Souls'/>Iniciar</button>
      <button className={styles.start} onClick={start}><img src={image} alt='Imagine just an awesome background about Dark Souls'/>Musica?</button>
      <button className={styles.start} ><img src={image} alt='Imagine just an awesome background about Dark Souls'/>About</button>
      </div>
    </div>
  )
}
