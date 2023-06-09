// Books

export interface BooksState {
  isLoading: boolean;
  error: string;
  booksList: IBook[];
}

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

// Favourites

export interface FavouritesState {
  favourites: IBook[] | [];
}
