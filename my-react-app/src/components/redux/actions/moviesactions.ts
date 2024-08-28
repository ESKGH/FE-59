import { IMovie } from '../../types/movietypes';

export const setMovies = (movies: IMovie[]) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};