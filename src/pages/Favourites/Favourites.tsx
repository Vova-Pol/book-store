import React from 'react';
import './Favourites.css';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Book } from '../../store/types';
import { Card } from '../../components/Card/Card';

export const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.favouritesState);

  return (
    <div className="favourites">
      <h1 className="favourites__title">Избранное</h1>
      <ul className="favourites__list">
        {favourites.map((book: Book, i) => (
          <Card key={i} bookData={book} favourites={favourites} />
        ))}
      </ul>
    </div>
  );
};
