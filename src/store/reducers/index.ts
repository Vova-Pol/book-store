import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { favouritesReducer } from './favouritesReducer';

export const rootReducer = combineReducers({
  booksState: booksReducer,
  favouritesState: favouritesReducer,
});
