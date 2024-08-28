import { Reducer } from 'redux';
import { IMovie } from '../../types/movietypes';

export interface MoviesState {
  movies: IMovie[];
}

const initialState: MoviesState = {
  movies: [],
};

const SET_MOVIES = 'SET_MOVIES';

export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  payload: IMovie[];
}

export type MoviesActionTypes = SetMoviesAction;

export const moviesReducer: Reducer<MoviesState, MoviesActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};