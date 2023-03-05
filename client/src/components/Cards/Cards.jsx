// eslint-disable-next-line 
import React from 'react';
// eslint-disable-next-line 
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';
// import * as actions from '../../redux/actions';

export default function Cards({variableX}) {

  const games = useSelector(state=>state.games)


  return (
    <div className={styles.pages}>
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
  );
}
