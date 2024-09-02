import { IMovie } from '../../types/movietypes';
import { RemoveFavoriteAction } from '../reducers/moviesreducers';


export const setMovies = (movies: IMovie[]) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const addFavorite = (movie: IMovie) => {
  return {
    type: 'ADD_FAVORITE',
    payload: movie,
  };
  
};

export const removeFavorite = (imdbID: string): RemoveFavoriteAction => ({
  type: 'REMOVE_FAVORITE',
  payload: imdbID,
});