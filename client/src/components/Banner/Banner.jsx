import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { pageTitle } from '../../App'
import styles from './Banner.module.css'
import { Link } from 'react-router-dom'
import * as actions from '../../redux/actions'

export default function Banner() {
  const [name, setName] = useState({
    name: ''
  })
  const dispatch = useDispatch()

  function handleChange (e) {
    setName({...name, [e.target.name]: [e.target.value]})
  }

  function handleSearch (e) {
    e.preventDefault()
    dispatch(actions.searchName(name))
    setName({
      name: ''
    })
  }


  return (
    <div className={styles.banner}>
      <Link to={'/home'}>
        <h1 className={styles.title}>{pageTitle}</h1>
        </Link>
        <Link to={'/videogames/create'}><h3>Agregar</h3></Link>
        <form onSubmit={handleSearch} className={styles.searchBar2}>
          <input type="text" name="name" placeholder='Ingrese un nombre de videojuego' onChange={handleChange}/>
          <button type='submit'>Buscar</button>
        </form>
    </div>
  )
}
