import { FC, useState } from 'react';
import './BookCounter.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartBook, IBook } from '../../store/types';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useTypedSelector';

interface BookCounterProps {
  handleOnZero: () => void;
  bookData: IBook;
}

export const BookCounter: FC<BookCounterProps> = ({
  handleOnZero,
  bookData,
}) => {
  const { cart } = useAppSelector((state) => state.cartState);

  const cartBook = cart.find(
    (cartBook: CartBook) => cartBook.book.isbn13 === bookData.isbn13,
  );

  const [amount, setAmount] = useState(cartBook ? cartBook.quantity : 1);

  const { addToCart, removeFromCart } = useActions();

  const handlePlus: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setAmount(amount + 1);
    addToCart(bookData);
  };

  const handleMinus: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (amount === 1) {
      handleOnZero();
    } else {
      setAmount(amount - 1);
    }
    removeFromCart(bookData);
  };

  return (
    <div className="book-counter">
      <button className="book-counter__button" onClick={handleMinus}>
        <AiOutlineMinus />
      </button>
      <span className="book-counter__amount">{amount}</span>
      <button className="book-counter__button" onClick={handlePlus}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};
