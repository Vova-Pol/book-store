import { Book } from './states';

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

export type Action =
  | GetBooksErrorAction
  | GetBooksSendReqAction
  | GetBooksSuccessAction;
