import React from 'react'
import { useSelector} from 'react-redux'
import styles from './Pagination.module.css'
// import * as actions from '../../redux/actions'

function Pagination({totalCards, cardsPerPage, paginate}) {
  // eslint-disable-next-line
  const page = useSelector(state => state.page)
  // eslint-disable-next-line
  const games = useSelector(state => state.games)


  // const totalPages = Math.ceil(totalCards / cardsPerPage);
  // const pageNumbers = Array.from({length: totalPages}, (_, i) => i + 1);
  
  let pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
  <div className={styles.paginateContainer}>
    <ul>
      {pageNumbers.map(number =>(
          <li key={number}>
            {/*eslint-disable-next-line */}
          <a href='#' onClick={()=> paginate(number)}>{number}</a>
          </li>
        ))}
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
