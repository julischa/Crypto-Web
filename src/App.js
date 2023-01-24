import React from 'react'
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CoinsPage from './Pages/CoinsPage';
//import Slider from 'react-slick';
//import Coins from './components/Coins';
  
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='coins' element={<CoinsPage />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
