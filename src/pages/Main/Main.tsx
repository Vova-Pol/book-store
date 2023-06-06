import React, { useEffect } from 'react';
import './Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { BOOKS_URL } from '../../utils/constants';
import { ACTIONS } from '../../store';

export const Main = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_BOOKS_SEND_REQ });

    fetch(BOOKS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject('Произошла ошибка');
        }
      })
      .then((data) => {
        dispatch({ type: ACTIONS.GET_BOOKS_SUCCESS, payload: data.books });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.GET_BOOKS_ERROR, payload: err });
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
