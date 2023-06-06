import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav-links">
          <Link to="/">Главная</Link>
        </div>
        <div className="header__user-links">
          <Link to="/favourites">Избранное</Link>
          <Link to="/cart">Корзина</Link>
        </div>
      </nav>
    </header>
  );
};
