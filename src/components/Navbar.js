import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const location = useLocation();

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
            {user ||
            location.pathname === "/signup" ||
            location.pathname === "/register" ? (
              ""
            ) : (
              <Link to="/signup" className="bluebutton">
                Login
              </Link>
            )}
            {user ? (
              <button className="bluebutton" onClick={logout}>
                Logout
              </button>
            ) : (
              ""
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
