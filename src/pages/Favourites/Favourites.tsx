import { FC } from 'react';
import './Favourites.css';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { BooksList } from '../../components/BooksList/BooksList';

export const Favourites: FC = () => {
  const { favourites } = useAppSelector((state) => state.favouritesState);

  return (
    <div className="favourites">
      <h1 className="favourites__title">Избранное</h1>
      {favourites.length === 0 ? (
        <p className="favourites__no-fav-text">В избранном пока ничего нет</p>
      ) : (
        <BooksList
          booksList={favourites}
          favouritesList={favourites}
          isLayoutRow={true}
        />
      )}
    </div>
  );
};
