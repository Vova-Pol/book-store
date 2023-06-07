export interface BooksState {
  isLoading: boolean;
  error: string;
  booksList: Book[];
}

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
