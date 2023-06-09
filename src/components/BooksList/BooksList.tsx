import { FC } from 'react';
import './BooksList.css';
import { IBook } from '../../store/types';
import { Book } from '../Book/Book';

interface BooksListProps {
  booksList: IBook[];
  favouritesList: IBook[];
}

export const BooksList: FC<BooksListProps> = ({
  booksList,
  favouritesList,
}) => {
  return (
    <ul className="books-list">
      {booksList.map((book: IBook, i) => {
        return <Book key={i} bookData={book} favourites={favouritesList} />;
      })}
    </ul>
  );
};
