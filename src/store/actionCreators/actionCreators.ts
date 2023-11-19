import {
  ACTION_TYPES_CART,
  ACTION_TYPES_FAVOURITES,
  ACTION_TYPES_GET_BOOKS,
  IBook,
} from '../types';
import { sendGetRequest } from '../../utils/utils';
import { BOOKS_URL } from '../../utils/constants';
import { Dispatch } from 'redux';

export const getBooksList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_SEND_REQ });

      const { books } = await sendGetRequest(BOOKS_URL);

      dispatch({
        type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_SUCCESS,
        payload: books,
      });
    } catch (err: any) {
      dispatch({
        type: ACTION_TYPES_GET_BOOKS.GET_BOOKS_ERROR,
        payload: err.message,
      });
    }
  };
};

export const addToFavourites = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_FAVOURITES.ADD_TO_FAVOURITES,
      payload: book,
    });
  };
};

export const removeFromFavourites = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES,
      payload: book,
    });
  };
};

export const addToCart = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_CART.ADD_TO_CART,
      payload: book,
    });
  };
};

export const removeFromCart = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ACTION_TYPES_CART.REMOVE_FROM_CART, payload: book });
  };
};

export const clearCart = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ACTION_TYPES_CART.CLEAR_CART });
  };
};
