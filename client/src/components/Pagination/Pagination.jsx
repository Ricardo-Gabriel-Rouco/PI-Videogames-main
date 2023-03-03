import React from 'react'
import { useSelector} from 'react-redux'
import styles from './Pagination.module.css'
import {GoArrowLeft, GoArrowRight} from 'react-icons/go'
// import * as actions from '../../redux/actions'

function Pagination({totalCards, cardsPerPage, paginate, backPage, nextPage}) {
  // eslint-disable-next-line
  const page = useSelector(state => state.page)
  // eslint-disable-next-line
  // const games = useSelector(state => state.games)

  
  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  const hasPrevious = page > 1;
  const hasNext = page < pageNumbers.length;


  return (
  <div className={styles.paginateContainer}>
    <ul>
      {hasPrevious && (
        // eslint-disable-next-line 
        <li><a href='#' onClick={() => backPage()}><GoArrowLeft/></a></li>
      )}
      {pageNumbers.map(number =>(
        <li key={number} className={page===number? styles.current : '' }>
      {/*eslint-disable-next-line */}
        <a href='#' onClick={()=> paginate(number)}>{number}</a>
        </li>
        ))}
      {hasNext && (
        // eslint-disable-next-line 
        <li><a href='#' onClick={()=> nextPage()}><GoArrowRight/></a></li>
      )}
    </ul>
  </div>
  )
}

export default Pagination









//   
//   return (
//     
//   )
// }

