import { FavouritesState } from '../types';
import { ActionFavourites, ACTION_TYPES_FAVOURITES } from '../types';

const initialState = {
  favourites: [],
};

export const favouritesReducer = (
  state: FavouritesState = initialState,
  action: ActionFavourites,
) => {
  switch (action.type) {
    case ACTION_TYPES_FAVOURITES.ADD_TO_FAVOURITES:
      return { ...state, favourites: [...state.favourites, action.payload] };

    case ACTION_TYPES_FAVOURITES.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (book) => book.isbn13 !== action.payload.isbn13,
        ),
      };
    default:
      return state;
  }
};
