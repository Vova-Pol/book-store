import { useEffect, useState } from 'react';
import './Main.css';
import { Book } from '../../store/types';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { Card } from '../../components/Card/Card';

export const Main = () => {
  const { getBooksList } = useActions();
  const { booksList, error, isLoading } = useAppSelector(
    (state) => state.booksState,
  );

  useEffect(() => {
    getBooksList();
  }, []);

  return (
    <div className="main">
      <h1 className="main__title">Книги & Код</h1>
      {error && <h3>Что-то пошло не так...</h3>}
      {isLoading && <h3>Загрузка...</h3>}
      {booksList && (
        <ul className="main__books-list">
          {booksList.map((book: Book, i) => {
            return <Card key={i} {...book} />;
          })}
        </ul>
      )}
    </div>
  );
};
