import { FETCH_GAMES, 
  CHANGE_PAGE,
  FILTER_BY_GENRE, 
  FETCH_GENRES,
  ORDER_BY,
  RATE_BY,
  EXIST,
  PLATFORMS,
  POST_GAME,
  SEARCH_NAME
  } from "./types";
import axios from 'axios'

export const fetchGames = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.games.length > 1) {
      dispatch({ type: FETCH_GAMES, payload: state.games });
    } else {
      axios.get('http://localhost:5000/videogames')
        .then(results => {
          dispatch({type: FETCH_GAMES, payload: [...results.data]})
        })
        .catch(error => console.log(error))
    }
  }
}

export const changePage = (page) => {
  return(dispatch) => {
    dispatch({ type: CHANGE_PAGE, payload: page })
  }
}

export const fetchGenres = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.genres.length > 1) {
      dispatch({ type: FETCH_GENRES, payload: state.genres });
    } else {
      axios.get('http://localhost:5000/genres')
        .then(results => {
          dispatch({type: FETCH_GENRES, payload: [...results.data]})
        })
        .catch(error => console.log(error))
    }
  }
}

export const filterbyGenre = (genre) => {
  return(dispatch) =>{
    dispatch({type: FILTER_BY_GENRE, payload: genre})
  }
}

export const orderBy = (order) => {
  return(dispatch) => {
    dispatch({type: ORDER_BY, payload: order})
  }
}

export const orderByRating = (order) => {
  return(dispatch) => {
    dispatch({type: RATE_BY, payload: order})
  }
}

export const existInDb = (isInDb) => {
  return(dispatch) => {
    dispatch({type: EXIST, payload: isInDb})
  }
}

export const fetchPlatforms = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (state.platforms.length > 1) {
      dispatch({ type: PLATFORMS, payload: state.platforms });
    } else {
      axios.get('http://localhost:5000/platforms')
        .then(results => {
          dispatch({type: PLATFORMS, payload: [...results.data]})
        })
        .catch(error => console.log(error))
    }
  }
}

export function postGame(payload) {
  return async function () {
      try {
          const apiData = await axios.post("http://localhost:5000/videogames", payload);
          return {
              type: POST_GAME,
              payload: apiData,
          };
      } catch (error) {
          alert('No se pudo agregar el Juego')
          throw new Error("No se pudo agregar el Juego");
      }
  };
}

export const searchName = (payload) => {
  return (dispatch) => {
      if(!payload){
        console.log(payload)
        axios.get('http://localhost:5000/videogames')
        .then(results => {
          dispatch({type: FETCH_GAMES, payload: [...results.data]})
        })
        .catch(error => console.log(error))
      }
      else if(payload.name) {
        axios.get(`http://localhost:5000/videogame?name=${payload.name}`)
          .then(results => {
            dispatch({type: SEARCH_NAME, payload: [...results.data]})
          })
          .catch(error => console.log(error))
      }

    }
  }