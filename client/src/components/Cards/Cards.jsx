// eslint-disable-next-line 
import React, { useEffect } from 'react';
// eslint-disable-next-line 
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Cards.module.css';
// import * as actions from '../../redux/actions';

export default function Cards({variableX}) {

  const games = useSelector(state=>state.games)

  if (!games.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.pages}>
        <div>
          {variableX?.map((game, j) => (
            <Card
              key={j}
              id={game.id}
              name={game.name}
              image={game.image}
              genre={game.genre}
              release={game.released}
            />
          ))}
        </div>
      </div>
      <Pagination/>
    </>
  );
}
