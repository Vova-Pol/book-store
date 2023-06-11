import { FC, useState } from 'react';
import './Book.css';
import { IBook } from '../../store/types';

import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineHeart,
} from 'react-icons/ai';
import { useActions } from '../../hooks/useActions';
import { BookCounter } from '../BookCounter/BookCounter';

interface BookProps {
  bookData: IBook;
  favourites: IBook[] | [];
  isLayoutRow: boolean;
}

export const Book: FC<BookProps> = ({ bookData, favourites, isLayoutRow }) => {
  const [isLiked, setIsLiked] = useState(
    favourites.some((fav: IBook) => fav.isbn13 === bookData.isbn13),
  );
  const [isAddedToCart, setIsAddedToCart] = useState(false);

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

  const handleCart: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    setIsAddedToCart(true);
  };

  const handleAmountZero = () => {
    setIsAddedToCart(false);
  };

  return (
    <li className={isLayoutRow ? 'book book_layout_row' : 'book'}>
      <img
        className={
          isLayoutRow ? 'book__image book__image_layout_row' : 'book__image'
        }
        src={bookData.image}
      ></img>
      <div
        className={
          isLayoutRow
            ? 'book__info-container_layout_row book__info-container'
            : 'book__info-container'
        }
      >
        <div className="book__info">
          <h3 className="book__title">{bookData.title}</h3>
          <p className="book__price">{bookData.price}</p>
        </div>
        <div className="book__buttons">
          {isAddedToCart ? (
            <BookCounter handleOnZero={handleAmountZero} />
          ) : (
            <button
              type="button"
              className="book__cart-button"
              onClick={handleCart}
            >
              <AiOutlineShoppingCart />
            </button>
          )}
          <button
            type="button"
            className={
              isLiked
                ? 'book__favourite-button_type_liked book__favourite-button'
                : 'book__favourite-button'
            }
            onClick={handleLike}
          >
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>
    </li>
  );
};
