import { FC } from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../../pages/Main/Main';
import { Routes, Route } from 'react-router-dom';
import { Favourites } from '../../pages/Favourites/Favourites';
import { Cart } from '../../pages/Cart/Cart';
import { Footer } from '../Footer/Footer';
import { Success } from '../../pages/Success/Success';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
