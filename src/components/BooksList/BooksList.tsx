import { FC } from 'react';
import './BooksList.css';
import { IBook } from '../../store/types';
import { Book } from '../Book/Book';

interface BooksListProps {
  booksList: IBook[];
  isLayoutRow: boolean;
}

export const BooksList: FC<BooksListProps> = ({ booksList, isLayoutRow }) => {
  return (
    <ul
      className={
        isLayoutRow ? 'books-list books-list_layout_row' : 'books-list'
      }
    >
      {booksList.map((book: IBook, i) => {
        return (
          <Book key={book.isbn13} bookData={book} isLayoutRow={isLayoutRow} />
        );
      })}
    </ul>
  );
};
