import { Reducer } from 'redux';
import { IMovie } from '../../types/movietypes';

export interface MoviesState {
  movies: IMovie[];
  favorites: IMovie[];
}

const initialState: MoviesState = {
  movies: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const SET_MOVIES = 'SET_MOVIES';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  payload: IMovie[];
}

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: IMovie;
}

export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: string;
}

export type MoviesActionTypes = SetMoviesAction | AddFavoriteAction | RemoveFavoriteAction;

export const moviesReducer: Reducer<MoviesState, MoviesActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_FAVORITE:
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case REMOVE_FAVORITE:
      const filteredFavorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      return {
        ...state,
        favorites: filteredFavorites,
      };
    default:
      return state;
  }
};
