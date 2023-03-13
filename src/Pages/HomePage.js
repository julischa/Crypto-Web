import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p className="p1">
        Navigating the sea<br></br>
        of information in crypto.{" "}
      </p>
      <p className="p2">
        Login now for unlimited <br></br>access to our platform.
      </p>
      <div className="btn-container">
        <button className="register-btn">
          <Link classN to="/coins">
            Browse Coins
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
