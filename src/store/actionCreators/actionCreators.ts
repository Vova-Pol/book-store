import {
  ACTION_TYPES_CART,
  ACTION_TYPES_FAVOURITES,
  ACTION_TYPES_GET_BOOKS,
  IBook,
} from '../types';
import { sendGetRequest } from '../../utils/utils';
import {
  BOOKS_LS_KEY,
  BOOKS_URL,
  CART_LS_KEY,
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

export const addToFavourites = (book: IBook) => {
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

export const removeFromFavourites = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES,
      payload: book,
    });

    try {
      if (localStorage.getItem(FAVOURITES_LS_KEY)) {
        const favourites = JSON.parse(localStorage.getItem(FAVOURITES_LS_KEY)!);
        const newFavourites = favourites.filter(
          (fav: IBook) => fav.isbn13 !== book.isbn13,
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

export const addToCart = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPES_CART.ADD_TO_CART,
      payload: book,
    });

    // try {
    //   if (!localStorage.getItem(CART_LS_KEY)) {
    //     localStorage.setItem(CART_LS_KEY, JSON.stringify([[book, 1]]));
    //   } else {
    //     const cart = JSON.parse(localStorage.getItem(CART_LS_KEY)!);
    //     const bookIsInCart = cart.some(
    //       (entry: [IBook, number]) => entry[0].isbn13 === book.isbn13,
    //     );
    //     if (bookIsInCart) {
    //       const newCart = cart.map((entry: [IBook, number]) => {
    //         return entry[0].isbn13 === book.isbn13
    //           ? [book, entry[1] + 1]
    //           : entry;
    //       });

    //       localStorage.setItem(CART_LS_KEY, JSON.stringify(newCart));
    //     } else {
    //       cart.push([book, 1]);
    //       localStorage.setItem(CART_LS_KEY, JSON.stringify(cart));
    //     }
    //   }
    // } catch (err: any) {
    //   console.error('Ошибка при записи данных в локальное хранилище.');
    //   console.error(`Запись объекта ${book} с ключом ${CART_LS_KEY}`);
    //   console.error({ errorMessage: err.message });
    // }
  };
};

export const removeFromCart = (book: IBook) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: ACTION_TYPES_CART.REMOVE_FROM_CART, payload: book });

    // try {
    //   if (!localStorage.getItem(CART_LS_KEY)) {
    //     throw new Error('Попытка удалить несуществующий объект');
    //   } else {
    //     const cart = JSON.parse(localStorage.getItem(CART_LS_KEY)!);
    //     const newCart = cart.map((entry: [IBook, number]) => {
    //       if (entry[0].isbn13 === book.isbn13) {
    //         return [book, entry[1] - 1];
    //       } else {
    //         return entry;
    //       }
    //     });
    //     const filteredCart = newCart.filter(
    //       (entry: [IBook, number]) => entry[1] !== 0,
    //     );

    //     localStorage.setItem(CART_LS_KEY, JSON.stringify(filteredCart));
    //   }
    // } catch (err: any) {
    //   console.error('Ошибка при записи данных в локальное хранилище.');
    //   console.error(`Удаление объекта ${book} с ключом ${CART_LS_KEY}`);
    //   console.error({ errorMessage: err.message });
    // }
  };
};
