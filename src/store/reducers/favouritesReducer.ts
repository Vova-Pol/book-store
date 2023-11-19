import { FavouritesState } from '../types';
import { ActionFavourites, ACTION_TYPES_FAVOURITES } from '../types';

const initialState = {
  favourites: [],
};

export const favouritesReducer = (
  state: FavouritesState = initialState,
  action: ActionFavourites,
) => {
  let newState;
  switch (action.type) {
    case ACTION_TYPES_FAVOURITES.ADD_TO_FAVOURITES:
      newState = {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
      // localStorage.setItem(
      //   FAVOURITES_LS_KEY,
      //   JSON.stringify(newState.favourites),
      // );
      return newState;

    case ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES:
      newState = {
        ...state,
        favourites: state.favourites.filter(
          (book) => book.isbn13 !== action.payload.isbn13,
        ),
      };
      // localStorage.setItem(
      //   FAVOURITES_LS_KEY,
      //   JSON.stringify(newState.favourites),
      // );
      return newState;
    default:
      return state;
  }
};
