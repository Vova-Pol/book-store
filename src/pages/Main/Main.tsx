import React, { useEffect } from 'react';
import './Main.css';

export const Main = () => {
  return (
    <div className="main">
      <h1 className="main__title">КнигоЕд</h1>
      <ul className="main__books-list"></ul>
    </div>
  );
};
