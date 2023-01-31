import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import "./Navbar.css";
//import useContext, userContext

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  //extract user from userContext

  return (
    <nav className="header mb-5">
      <div className="container">
        <div className="nav-menu mx-auto">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coins">Coins</Link>
          </li>
          <li>
            <a href="/">NFT</a>
          </li>
          <li>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/signup" className="bluebutton">
                Login
              </Link>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
