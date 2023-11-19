import './Cart.css';
import { useAppSelector } from '../../hooks/useTypedSelector';
import { BooksList } from '../../components/BooksList/BooksList';
import { CartBook, IBook } from '../../store/types';
import { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cart } = useAppSelector((state) => state.cartState);
  const { clearCart } = useActions();
  const navigateTo = useNavigate();
  const [booksList, setBooksList] = useState<IBook[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length === 0) return;

    setBooksList(cart.map((cartBook: CartBook) => cartBook.book));

    const total = cart
      .reduce(
        (acc: number, cartBook: CartBook): number =>
          acc +
          Number(cartBook.book.price.replace('$', '')) * cartBook.quantity,
        0,
      )
      .toFixed(2);

    setTotal(Number(total));
  }, [cart]);

  function handleSubmit() {
    clearCart();
    navigateTo('/success');
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Корзина</h1>
      {cart.length === 0 ? (
        <p className="cart__no-items-text">В корзине пока ничего нет</p>
      ) : (
        <>
          <BooksList booksList={booksList} isLayoutRow={true} />
          <div className="cart__total-container">
            <span className="cart__total">{`Общая стоимость: $${total}`}</span>
            <button className="cart__place-order-button" onClick={handleSubmit}>
              Офромить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};
