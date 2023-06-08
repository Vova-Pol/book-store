import { FC, useState } from 'react';
import './Card.css';
import { Book } from '../../store/types';

import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { useActions } from '../../hooks/useActions';

export const Card: FC<Book> = ({
  image,
  price,
  title,
  subtitle,
  isbn13,
  url,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToFavourites, removeFromFavourites } = useActions();

  const handleLike: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    const bookData = { image, price, title, subtitle, isbn13, url };
    if (isLiked) {
      removeFromFavourites(bookData);
      setIsLiked(false);
    } else {
      addToFavourites(bookData);
      setIsLiked(true);
    }
  };

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
        <button
          type="button"
          className="card__favourite-button"
          onClick={handleLike}
        >
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>
    </li>
  );
};
