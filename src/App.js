import React from 'react'
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CoinsPage from './Pages/CoinsPage';
import Coin from './Pages/Coin';
  
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='coins' element={<CoinsPage />} />
        <Route path='coins/:coinName' element={<Coin />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
