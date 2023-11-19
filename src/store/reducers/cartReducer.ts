import { ACTION_TYPES_CART, CartBook, CartState } from '../types';
import { CART_LS_KEY } from '../../utils/constants';
import { ActionCart } from '../types';

const initialState: CartState = {
  cart: localStorage.getItem(CART_LS_KEY)
    ? JSON.parse(localStorage.getItem(CART_LS_KEY)!)
    : [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: ActionCart,
): CartState => {
  let isAlreadyInCart;
  let newState;
  switch (action.type) {
    case ACTION_TYPES_CART.ADD_TO_CART:
      isAlreadyInCart = state.cart.some(
        (cartBook: CartBook) => cartBook.book.isbn13 === action.payload.isbn13,
      );

      if (isAlreadyInCart) {
        const newCart = state.cart.map((cartBook: CartBook) => {
          if (cartBook.book.isbn13 === action.payload.isbn13)
            cartBook.quantity++;
          return cartBook;
        });

        newState = { ...state, cart: newCart };

        localStorage.setItem(CART_LS_KEY, JSON.stringify(newState.cart));

        return newState;
      } else {
        const newCart = [...state.cart];
        newCart.push({ book: action.payload, quantity: 1 });

        newState = { ...state, cart: newCart };

        localStorage.setItem(CART_LS_KEY, JSON.stringify(newState.cart));

        return newState;
      }

    case ACTION_TYPES_CART.REMOVE_FROM_CART:
      isAlreadyInCart = state.cart.some(
        (cartBook: CartBook) => cartBook.book.isbn13 === action.payload.isbn13,
      );
      const amountInCart = state.cart.find(
        (cartBook: CartBook) => cartBook.book.isbn13 === action.payload.isbn13,
      )?.quantity;

      if (amountInCart === 1) {
        const newCart = state.cart.filter(
          (cartBook: CartBook) => cartBook.book.isbn13 != action.payload.isbn13,
        );

        newState = { ...state, cart: newCart };

        localStorage.setItem(CART_LS_KEY, JSON.stringify(newState.cart));

        return newState;
      }

      if (isAlreadyInCart) {
        const newCart = state.cart.map((cartBook: CartBook) => {
          if (cartBook.book.isbn13 === action.payload.isbn13)
            cartBook.quantity--;
          return cartBook;
        });

        newState = { ...state, cart: newCart };

        localStorage.setItem(CART_LS_KEY, JSON.stringify(newState.cart));

        return newState;
      } else {
        throw new Error(
          'Вы пытаетесь удалить из корзины товар, которого в ней нет',
        );
      }

    default:
      return state;
  }
};
