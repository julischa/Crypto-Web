import React from "react";
import "./index.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoinsPage from "./Pages/CoinsPage";
import Coin from "./Pages/Coin";
import SignUp from "./Pages/SignUp";
import Banner from "./components/Banner";
import { UserContextProvider } from "./Context/UserContext";
import Register from "./Pages/Register";

function App() {
  //console.log(app);
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="coins" element={<CoinsPage />} />
          <Route path="coins/:coinName" element={<Coin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
