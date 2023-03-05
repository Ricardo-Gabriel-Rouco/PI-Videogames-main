import React from 'react'
import styles from './Startpage.module.css'
import {ImVolumeMute2, ImVolumeMedium} from 'react-icons/im'
import image from '../../assets/bonfireanimated.gif'

export default function Startpage(props) {
  const {start, goToAbout} = props
  const {togglePlay} = props
  const {isPlaying} = props

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Api Videojuegos</h1>
      <div className={styles.startOptions}>
      <button className={styles.start} onClick={start}><img src={image} alt='Imagine just an awesome background about Dark Souls'/>Iniciar</button>
      <button className={styles.start} onClick={() => togglePlay()}><img src={image} alt='Imagine just an awesome background about Dark Souls'/>Musica {isPlaying? <ImVolumeMedium className={styles.icons}/> : <ImVolumeMute2 className={styles.icons}/>}  </button>
      <button className={styles.start} onClick={()=> goToAbout()}><img src={image} alt='Imagine just an awesome background about Dark Souls'/>About</button>
      </div>
    </div>
  )
}
