import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Register = () => {
  //extract function from UserContext
  const { createUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-container p-5">
        <h1 className="text-light text-center">Sign up</h1>
        <label className="text-light" htmlFor="email">
          E-Mail
        </label>
        <input
          className="form-control rounded-0 mb-3"
          value={email}
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
        ></input>
        <label className="text-light" htmlFor="userName">
          User Name
        </label>
        <input
          className="form-control rounded-0 mb-3"
          value={userName}
          type="userName"
          name="userName"
          id="userName"
          onChange={handleUserNameChange}
        ></input>
        <label htmlFor="password" className="text-light">
          Password
        </label>
        <input
          className="form-control rounded-0 mb-3"
          value={password}
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
        ></input>
        <button
          className="btn-2 my-5"
          onClick={() => createUser(email, password, userName)}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Register;
