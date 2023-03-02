import React from 'react'
import styles from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
  return (
    <div className={styles.container}>
      <Link to={`/videogames/${props.id}`} state={{genre: props.genre, release: props.release}}>
        <li key={props.name}>
          <div>
            <img src={props.image} alt="Just another gamephoto" />
          </div>
          <span >{props.name}</span>
          {props.genre.map(g =>(<p>{g}</p>))}
        </li>
      </Link>
    </div>
  )
}
