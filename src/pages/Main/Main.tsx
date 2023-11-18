import { useEffect, useState, FC } from 'react';
import './Main.css';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { BooksList } from '../../components/BooksList/BooksList';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';

export const Main: FC = () => {
  const [isLayoutRow, setIsLayoutRow] = useState(false);
  const { getBooksList } = useActions();
  const { booksList, error, isLoading } = useAppSelector(
    (state) => state.booksState,
  );

  useEffect(() => {
    getBooksList();
  }, []);

  return (
    <div className="main">
      <h1 className="main__title">Топ 20 новинок по программированию</h1>
      <div className="main__filters">
        <button
          className="main__column-button"
          onClick={() => {
            setIsLayoutRow(false);
          }}
        >
          <LuLayoutGrid />
        </button>
        <button
          className="main__row-button"
          onClick={() => {
            setIsLayoutRow(true);
          }}
        >
          <LuLayoutList />
        </button>
      </div>
      {error && <h3 className="main__error-text">Что-то пошло не так...</h3>}
      {isLoading && <h3 className="main__loading-text">Загрузка...</h3>}
      {booksList && (
        <BooksList booksList={booksList} isLayoutRow={isLayoutRow} />
      )}
    </div>
  );
};
