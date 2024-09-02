import { RootState } from '../store/store';

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectFavorites = (state: RootState) => state.movies.favorites;