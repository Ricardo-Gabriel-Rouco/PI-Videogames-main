const {FETCH_GAMES,
  CHANGE_PAGE,
  FILTER_BY_GENRE,
  FETCH_GENRES,
  ORDER_BY,
  RATE_BY,
  EXIST,
  PLATFORMS,
  SEARCH_NAME} = require('./types') 

const initialState = {
  games: [],
  unfilteredGames: [],
  unorderedGames: [],
  allGames: [],
  genres: [],
  page: 1,
  filtered: [],
  platforms: []
}

export function rootReducer(state = initialState, {type, payload}){
  switch (type) {
    case FETCH_GAMES:
    return {
      ...state,
      games: payload,
      unfilteredGames: payload,
      allGames: payload
    };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload
      }
    
    case FETCH_GENRES:
      return {
        ...state,
        genres: payload
      }
    
    case FILTER_BY_GENRE:
      const filtered = state.games
      const unfiltered = state.unfilteredGames
      const filteredByGenre = payload !== 'ALL'? filtered.filter(g => g.genre.includes(payload)) : unfiltered

      return {
        ...state,
        games: filteredByGenre
      }

      case ORDER_BY:
        switch (payload) {
          case 'ASC':
            const sortedAsc = [...state.games].sort((a, b) => a.name.localeCompare(b.name));
            return {
              ...state,
              games: sortedAsc
            };
        
          case 'DESC':
            const sortedDesc = [...state.games].sort((a, b) => b.name.localeCompare(a.name));
            return {
              ...state,
              games: sortedDesc
            };
      
          default:
            return state;
        }

        case RATE_BY:
          switch (payload) {
            case 'ASC':
              const sortedAsc = [...state.games].sort((a, b) => b.rating - a.rating);
              return {
                ...state,
                games: sortedAsc
              };
          
            case 'DESC':
              const sortedDesc = [...state.games].sort((a, b) => a.rating - b.rating);
              return {
                ...state,
                games: sortedDesc
              };
        
            default:
              return state;
          }
        
        case EXIST:
          const withoutFilter = state.allGames
          const filteredApi = state.allGames;
          const filteredDb = state.allGames
          switch (payload) {
            case 'API':
              const filterApi = filteredApi.filter(g => !isNaN(g.id));
              return {
                ...state,
                games: filterApi
              };
      
            case 'DB':
              const filterDb = filteredDb.filter(g => isNaN(g.id));
              return {
                ...state,
                games: filterDb
              };

            case 'ALL':
              return {
                ...state,
                games: withoutFilter
              };

            default:
              return state;
          }
      case PLATFORMS:
        return {
          ...state,
          platforms: payload
        }

        case SEARCH_NAME:
          return {
            ...state,
            games: payload
          }
        
      

    default:
      return state;
  }
}

