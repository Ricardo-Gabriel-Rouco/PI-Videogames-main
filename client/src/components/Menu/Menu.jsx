import React from 'react'
import styles from './Menu.module.css'
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <Link to={'/home'}>
        <li>VideoJuegos</li>
        </Link>
        <li>Generos</li>
        <Link to={'/videogames/create'}>
          <li>Agregar</li>
        </Link>
        <li>Acerca De</li>
      </ul>
    </nav>
  )
}
