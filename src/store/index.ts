import { createStore } from 'redux';
import { BooksState, Action, ACTION_TYPES } from '../types';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

const booksReducer = (
  state: BooksState = initialState,
  action: Action,
): BooksState => {
  switch (action.type) {
    case ACTION_TYPES.GET_BOOKS_SEND_REQ:
      return { ...state, isLoading: true, error: '', data: [] };

    case ACTION_TYPES.GET_BOOKS_ERROR:
      return { ...state, isLoading: false, error: action.payload, data: [] };

    case ACTION_TYPES.GET_BOOKS_SUCCESS:
      return { ...state, isLoading: false, error: '', data: action.payload };

    default:
      return state;
  }
};

export const store = createStore(booksReducer);
