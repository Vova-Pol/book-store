import React, { useEffect } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKS_URL } from '../../utils/constants';
import { ACTION_TYPES } from '../../store';

export const Main = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.GET_BOOKS_SEND_REQ });

    fetch(BOOKS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({ message: 'Произошла ошибка' });
        }
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.GET_BOOKS_SUCCESS, payload: data.books });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.GET_BOOKS_ERROR, payload: err.message });
      });
  }, []);

  console.log(booksState);
  return (
    <div className="main">
      <h1 className="main__title">КнигоЕд</h1>
      <ul className="main__books-list"></ul>
    </div>
  );
};
