import { useEffect, useState } from 'react';
import './Main.css';
import { Book } from '../../store/types';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { Card } from '../../components/Card/Card';
import { useLocalStorgae } from '../../hooks/useLocalStorage';
import { FAVOURITES_LS_KEY } from '../../utils/constants';
import { CardsList } from '../../components/App/CardsList/CardsList';

export const Main = () => {
  const { getBooksList } = useActions();
  const { booksList, error, isLoading } = useAppSelector(
    (state) => state.booksState,
  );

  const { getLocalStorage } = useLocalStorgae();
  const favouritesList = getLocalStorage(FAVOURITES_LS_KEY)
    ? getLocalStorage(FAVOURITES_LS_KEY)
    : [];

  useEffect(() => {
    getBooksList();
  }, []);

  return (
    <div className="main">
      <h1 className="main__title">Топ 20 книг-новинок по программированию</h1>
      {error && <h3>Что-то пошло не так...</h3>}
      {isLoading && <h3>Загрузка...</h3>}
      {booksList && (
        <CardsList booksList={booksList} favouritesList={favouritesList} />
      )}
    </div>
  );
};
