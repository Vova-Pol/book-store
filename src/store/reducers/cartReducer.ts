import { ACTION_TYPES_CART, CartBook, CartState } from '../types';
import { CART_LS_KEY } from '../../utils/constants';
import { ActionCart } from '../types';

const initialState: CartState = {
  cart: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: ActionCart,
): CartState => {
  let isAlreadyInCart;
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

        return { ...state, cart: newCart };
      } else {
        const newCart: CartBook[] = state.cart;
        newCart.push({ book: action.payload, quantity: 1 });
        return { ...state, cart: newCart };
      }

    case ACTION_TYPES_CART.REMOVE_FROM_CART:
      isAlreadyInCart = state.cart.some(
        (cartBook: CartBook) => cartBook.book.isbn13 === action.payload.isbn13,
      );

      if (isAlreadyInCart) {
        const newCart = state.cart.map((cartBook: CartBook) => {
          if (cartBook.book.isbn13 === action.payload.isbn13)
            cartBook.quantity--;
          return cartBook;
        });
        return { ...state, cart: newCart };
      } else {
        throw new Error(
          'Вы пытаетесь удалить из корзины товар, которого в ней нет',
        );
      }

    default:
      return state;
  }
};
