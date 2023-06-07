import { BooksState } from '../types';
import { Action } from '../types';
import { ACTION_TYPES } from '../types';

const initialState = {
  isLoading: false,
  error: '',
  booksList: [],
};

export const booksReducer = (
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
