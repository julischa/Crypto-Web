import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
//import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //extract login function from userContext
  const { login } = useContext(UserContext);
  //const redirectTo = useNavigate()

  function handleSubmit(event, email, password) {
    event.preventDefault();
    login(email, password);
  }

  // the useEffect acts like a listener, that senses changes
  //in states, in this case listens to changes in user that comes from UserContext
  //useEffect(() => {
  //    if (user !== '') redirectTo("/")
  //}, [user])

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
                type="text"
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
            <button className="btn-2 my-4">Log in</button>
            <div className="form-group">
              <label className="me-4">No account? </label>
              <Link to="/register">Register now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
