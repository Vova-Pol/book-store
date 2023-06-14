import './Cart.css';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { BooksList } from '../../components/BooksList/BooksList';
import { CartBook, IBook } from '../../store/types';
import { useEffect, useState } from 'react';

export const Cart = () => {
  const { cart } = useAppSelector((state) => state.cartState);
  const [booksList, setBooksList] = useState<IBook[]>([]);

  useEffect(() => {
    setBooksList(cart.map((cartBook: CartBook) => cartBook.book));
  }, [cart]);

  return (
    <div className="cart">
      <h1 className="cart__title">Корзина</h1>
      {cart.length === 0 ? (
        <p className="cart__no-items-text">В корзине пока ничего нет</p>
      ) : (
        <BooksList booksList={booksList} isLayoutRow={true} />
      )}
    </div>
  );
};
