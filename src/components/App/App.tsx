import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../../pages/Main/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
