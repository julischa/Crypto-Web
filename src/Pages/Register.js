import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Register = () => {
  //extract function from UserContext
  const { createUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 className="form-container d-flex justify-content-center text-light">
        Sign up
      </h1>
      <input
        value={email}
        type="email"
        name="email"
        id="email"
        onChange={handleEmailChange}
      ></input>
      <label className="text-light" htmlFor="email">
        E-Mail
      </label>
      <input
        value={password}
        type="password"
        name="password"
        id="password"
        onChange={handlePasswordChange}
      ></input>
      <label htmlFor="password" className="text-light">
        Password
      </label>
      <button onClick={() => createUser(email, password)}>Sign up now</button>
    </div>
  );
};

export default Register;
