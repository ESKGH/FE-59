import { createStore, combineReducers, applyMiddleware } from 'redux';
import { moviesReducer, MoviesState } from '../reducers/moviesreducers.ts';
import { MoviesActionTypes } from '../reducers/moviesreducers.ts';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
//   applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, MoviesActionTypes>)
);

export default store;