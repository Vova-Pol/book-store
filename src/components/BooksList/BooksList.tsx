import { FC } from 'react';
import './BooksList.css';
import { Book } from '../../store/types';
import { Card } from '../Book/Book';

interface CardsListProps {
  booksList: Book[];
  favouritesList: Book[];
}

export const CardsList: FC<CardsListProps> = ({
  booksList,
  favouritesList,
}) => {
  return (
    <ul className="cards-list">
      {booksList.map((book: Book, i) => {
        return <Card key={i} bookData={book} favourites={favouritesList} />;
      })}
    </ul>
  );
};
