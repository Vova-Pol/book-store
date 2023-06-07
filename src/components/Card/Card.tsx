import { FC } from 'react';
import './Card.css';
import { Book } from '../../store/types';

import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';

export const Card: FC<Book> = ({ image, price, title, subtitle }) => {
  return (
    <li className="card">
      <img className="card__image" src={image}></img>
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{price}</p>
      </div>
      <div className="card__buttons">
        <button type="button" className="card__cart-button">
          <AiOutlineShoppingCart />
        </button>
        <button type="button" className="card__favourite-button">
          <AiOutlineHeart />
        </button>
      </div>
    </li>
  );
};
