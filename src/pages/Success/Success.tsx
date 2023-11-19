import React from 'react';
import './Success.css';

export const Success = () => {
  return (
    <div className="success">
      <h1 className="success__title">Ваш заказ оформлен!</h1>
      <p className="success__text">
        Номер заказа: №{Math.floor(Math.random() * (100000 - 10000) + 10000)}
      </p>
    </div>
  );
};
