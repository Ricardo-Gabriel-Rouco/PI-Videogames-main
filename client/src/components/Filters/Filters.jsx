import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Filters.module.css'
import * as actions from '../../redux/actions'

function Filters({genres}) {
  const dispatch = useDispatch()
  // const VG = useSelector(state=> state.games)
  
  function filter(genre){
    dispatch(actions.filterbyGenre(genre))
  }

  function order(orden){
    dispatch(actions.orderBy(orden))
  }

  function rate(rate){
    dispatch(actions.orderByRating(rate))
  }
  
  function isInDb(exist){
    dispatch(actions.existInDb(exist))
  }

  return (
    <div className={styles.filters}>
      <div className={styles.dropdown}>
      <button className={styles.dropButton}>Genero</button>
      <div className={styles.dropdowncontent}>
        <button onClick={()=> filter('ALL')} key='all'>Todos</button>
        {genres.map(opcion => (
          <button onClick={() => filter(opcion.name)} key={opcion.name}>{opcion.name}</button>
        ))}
      </div>
      </div>
      <div className={styles.dropdown}>
      <button className={styles.dropButton}>Ordenar</button>
      <div className={styles.dropdowncontent}>
          <button onClick={() => order('ASC')}>A - Z ↑</button>
          <button onClick={() => order('DESC')}>Z - A ↓</button>
          <button onClick={() => rate('ASC')}>Rating ↑</button>
          <button onClick={() => rate('DESC')}>Rating ↓</button>
      </div>
      <div>
      </div>
      </div>
      <div className={styles.dropdown}>
      <button className={styles.dropButton}>Guardado?</button>
      <div className={styles.dropdowncontent}>
          <button onClick={() => isInDb('API')}>API</button>
          <button onClick={() => isInDb('DB')}>DB</button>
          <button onClick={() => isInDb('ALL')}>TODOS</button>
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default Filters