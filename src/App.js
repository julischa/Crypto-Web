import React from 'react'
import './index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
  
function App() {
  return (
    <div>
      <Navbar/>
      <p className='text-center'>Navigating the sea
        of information
        in crypto.

      </p>
    </div>
  );
}

export default App;
