import { FC } from 'react';
import './BooksList.css';
import { IBook } from '../../store/types';
import { Book } from '../Book/Book';

interface BooksListProps {
  booksList: IBook[];
  favouritesList: IBook[];
  isLayoutRow: boolean;
}

export const BooksList: FC<BooksListProps> = ({
  booksList,
  favouritesList,
  isLayoutRow,
}) => {
  return (
    <ul
      className={
        isLayoutRow ? 'books-list books-list_layout_row' : 'books-list'
      }
    >
      {booksList.map((book: IBook, i) => {
        return (
          <Book
            key={book.isbn13}
            bookData={book}
            favourites={favouritesList}
            isLayoutRow={isLayoutRow}
          />
        );
      })}
    </ul>
  );
};
