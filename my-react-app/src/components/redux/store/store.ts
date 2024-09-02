import { createStore, combineReducers } from 'redux';
import { moviesReducer } from '../reducers/moviesreducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
