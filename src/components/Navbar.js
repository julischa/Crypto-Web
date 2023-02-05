import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

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
          {user ? (
            <li>
              <Link onClick={logout}>Welcome, {user.displayName}!</Link>
            </li>
          ) : (
            <li>
              <Link
                to={
                  window.location.pathname === "/login" ||
                  window.location.pathname === "/register"
                    ? ""
                    : "/login"
                }
                className="bluebutton"
              >
                {window.location.pathname === "/login" ||
                window.location.pathname === "/register"
                  ? ""
                  : "Login"}
              </Link>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
