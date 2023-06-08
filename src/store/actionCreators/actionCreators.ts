import {
  ACTION_TYPES_FAVOURITES,
  ACTION_TYPES_GET_BOOKS,
  Book,
} from '../types';
import { sendGetRequest } from '../../utils/utils';
import {
  BOOKS_LS_KEY,
  BOOKS_URL,
  FAVOURITES_LS_KEY,
} from '../../utils/constants';
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

export const addToFavourites = (book: Book) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_FAVOURITES.ADD_TO_FAVOURITES,
      payload: book,
    });

    try {
      if (localStorage.getItem(FAVOURITES_LS_KEY)) {
        const favourites = JSON.parse(localStorage.getItem(FAVOURITES_LS_KEY)!);
        favourites.push(book);
        localStorage.setItem(FAVOURITES_LS_KEY, JSON.stringify(favourites));
      } else {
        localStorage.setItem(FAVOURITES_LS_KEY, JSON.stringify([book]));
      }
    } catch (err: any) {
      console.error('Ошибка при записи данных в локальное хранилище.');
      console.error(`Запись объекта ${book} с ключом ${FAVOURITES_LS_KEY}`);
      console.error({ errorMessage: err.message });
    }
  };
};

export const removeFromFavourites = (book: Book) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES,
      payload: book,
    });

    try {
      if (localStorage.getItem(FAVOURITES_LS_KEY)) {
        const favourites = JSON.parse(localStorage.getItem(FAVOURITES_LS_KEY)!);
        const newFavourites = favourites.filter(
          (fav: Book) => fav.isbn13 !== book.isbn13,
        );
        localStorage.setItem(FAVOURITES_LS_KEY, JSON.stringify(newFavourites));
      }
    } catch (err: any) {
      console.error('Ошибка при записи данных в локальное хранилище.');
      console.error(`Удаление объекта ${book} с ключом ${FAVOURITES_LS_KEY}`);
      console.error({ errorMessage: err.message });
    }
  };
};
