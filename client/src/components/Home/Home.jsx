import React from 'react'

import styles from './Home.module.css'
import Pagination from '../Pagination/Pagination'
import Cards from '../Cards/Cards'
import Filters from '../Filters/Filters'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as actions from '../../redux/actions'

export default function Home() {
  const games = useSelector((state) => state.games);
  const genres = useSelector((state) => state.genres)
  const page = useSelector(state=> state.page)
  const dispatch = useDispatch();

  
  function paginate(number){
    dispatch(actions.changePage(number))
  }

  const [cardsPerPage] = useState(15)

  useEffect(() => {
    if (!games.length) {
      dispatch(actions.fetchGames());
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!genres.length) {
      dispatch(actions.fetchGenres());
    }
    // eslint-disable-next-line
  }, []);
  // dispatch, games

  const totalCards = games.length
  const lastGame = page * cardsPerPage
  const firstGame = lastGame - cardsPerPage
  let variableX = games.slice(firstGame, lastGame)



  return (
    <div className={styles.home}>

      <Filters genres={genres} />
      <Cards variableX={variableX}/>
      <Pagination  totalCards={totalCards} cardsPerPage={cardsPerPage} paginate={paginate}/>
    </div>
  )
}
