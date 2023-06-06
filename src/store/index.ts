import { createStore } from 'redux';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

interface BooksState {
  isLoading: boolean;
  error: string;
  data: Book[];
}

interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export enum ACTION_TYPES {
  GET_BOOKS_SEND_REQ = 'GET_BOOKS_SEND_REQ',
  GET_BOOKS_ERROR = 'GET_BOOKS_ERROR',
  GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
}

interface GetBooksSendReqAction {
  type: ACTION_TYPES.GET_BOOKS_SEND_REQ;
}

interface GetBooksErrorAction {
  type: ACTION_TYPES.GET_BOOKS_ERROR;
  payload: string;
}

interface GetBooksSuccessAction {
  type: ACTION_TYPES.GET_BOOKS_SUCCESS;
  payload: Book[];
}

type Action =
  | GetBooksErrorAction
  | GetBooksSendReqAction
  | GetBooksSuccessAction;

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
