import { FC, useState } from 'react';
import './Book.css';
import { Book } from '../../store/types';

import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { useActions } from '../../hooks/useActions';

interface CardProps {
  bookData: Book;
  favourites: Book[] | [];
}

export const Card: FC<CardProps> = ({ bookData, favourites }) => {
  const [isLiked, setIsLiked] = useState(
    favourites.some((fav: Book) => fav.isbn13 === bookData.isbn13),
  );

  const { addToFavourites, removeFromFavourites } = useActions();

  const handleLike: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
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
      <img className="card__image" src={bookData.image}></img>
      <div className="card__info-container">
        <div className="card__info">
          <h3 className="card__title">{bookData.title}</h3>
          <p className="card__price">{bookData.price}</p>
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
      </div>
    </li>
  );
};
