import { FC } from 'react';
import { Book } from '../../types';

export const Card: FC<Book> = ({ image, price, title, subtitle }) => {
  return <li className="card">{title}</li>;
};
