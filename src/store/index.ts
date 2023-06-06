import { createStore } from 'redux';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

export const ACTIONS = {
  GET_BOOKS_SEND_REQ: 'GET_BOOKS_SEND_REQ',
  GET_BOOKS_ERROR: 'GET_BOOKS_ERROR',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_BOOKS_SEND_REQ:
      return { ...state, isLoading: true, error: '', data: [] };

    case ACTIONS.GET_BOOKS_ERROR:
      return { ...state, isLoading: false, error: action.payload, data: [] };

    case ACTIONS.GET_BOOKS_SUCCESS:
      return { ...state, isLoading: false, error: '', data: action.payload };

    default:
      return state;
  }
};

export const store = createStore(booksReducer);
