import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, user } = useContext(UserContext);

  function handleSubmit(event, email, password) {
    event.preventDefault();
    login(email, password)
      .then(() => {
        console.log("User logged in successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div>
      <div className="form-container d-flex justify-content-center text-light">
        <div className="form-container p-5">
          <h1 className="text-center text-light">Sign into your account</h1>
          <form
            className="form"
            onSubmit={(event) => handleSubmit(event, email, password)}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control rounded-0 mb-2"
                type="text" //email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control rounded-0 mb-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button className="btn-2 my-4">Log in</button>
            <div className="form-group">
              <label className="me-4">No account? </label>
              <Link to="/register" id="register-link">
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
