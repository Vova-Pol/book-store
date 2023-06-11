import { FC, useState } from 'react';
import './BookCounter.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MouseEventHandler } from 'react';

interface BookCounterProps {
  handleOnZero: () => void;
}

export const BookCounter: FC<BookCounterProps> = ({ handleOnZero }) => {
  const [amount, setAmount] = useState(1);

  const handlePlus: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setAmount(amount + 1);
  };

  const handleMinus: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (amount <= 1) {
      handleOnZero();
    } else {
      setAmount(amount - 1);
    }
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
