import { combineReducers, createStore } from 'redux';
import { BooksState, Action, ACTION_TYPES } from '../types';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoading: false,
  error: '',
  booksList: [],
};

const booksReducer = (
  state: BooksState = initialState,
  action: Action,
): BooksState => {
  switch (action.type) {
    case ACTION_TYPES.GET_BOOKS_SEND_REQ:
      return { ...state, isLoading: true, error: '', booksList: [] };

    case ACTION_TYPES.GET_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        booksList: [],
      };

    case ACTION_TYPES.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        booksList: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  booksState: booksReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
