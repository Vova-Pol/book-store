import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { favouritesReducer } from './favouritesReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  booksState: booksReducer,
  favouritesState: favouritesReducer,
  cartState: cartReducer,
});
