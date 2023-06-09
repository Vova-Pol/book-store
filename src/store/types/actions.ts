import { IBook } from './states';

// Books

export enum ACTION_TYPES_GET_BOOKS {
  GET_BOOKS_SEND_REQ = 'GET_BOOKS_SEND_REQ',
  GET_BOOKS_ERROR = 'GET_BOOKS_ERROR',
  GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS',
}

interface GetBooksSendReqAction {
  type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_SEND_REQ;
}

interface GetBooksErrorAction {
  type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_ERROR;
  payload: string;
}

interface GetBooksSuccessAction {
  type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_SUCCESS;
  payload: IBook[];
}

export type ActionGetBooks =
  | GetBooksErrorAction
  | GetBooksSendReqAction
  | GetBooksSuccessAction;

// Favourites

export enum ACTION_TYPES_FAVOURITES {
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES',
}

interface AddToFavourites {
  type: ACTION_TYPES_FAVOURITES.ADD_TO_FAVOURITES;
  payload: IBook;
}

interface RemoveFromFavourites {
  type: ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES;
  payload: IBook;
}

export type ActionFavourites = RemoveFromFavourites | AddToFavourites;
