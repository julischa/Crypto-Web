import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Register = () => {
  const { createUser, error } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateUser = (event) => {
    createUser(userName, email, password);
  };

  return (
    <div className="form-container d-flex justify-content-center text-light">
      <div className="form-container p-5">
        <h1 className="text-center text-light">Register for access</h1>
        <label
          className="text-light"
          htmlFor="userName"
          style={{ fontFamily: "SpaceGrotesk" }}
        >
          Choose Username
        </label>
        <input
          className="form-control rounded-0 mb-2"
          style={{ fontFamily: "SpaceGrotesk" }}
          value={userName}
          type="userName"
          name="userName"
          id="userName"
          onChange={handleUserNameChange}
        ></input>
        <label className="text-light" htmlFor="email">
          E-Mail
        </label>
        <input
          className="form-control rounded-0 mb-2"
          value={email}
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
          style={{
            fontFamily: "SpaceGrotesk",
            borderColor: error ? "aquamarine" : "",
          }}
        ></input>
        {error && <div style={{ color: "aquamarine" }}>{error}</div>}
        <label htmlFor="password" className="text-light">
          Password
        </label>
        <input
          className="form-control rounded-0 mb-2"
          value={password}
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
        ></input>
        <button className="btn-2 my-4" onClick={handleCreateUser}>
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Register;
