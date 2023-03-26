import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const Register = () => {
  const { createUser, error, setError } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    if (!isChecked) {
      setError("🚨 Please acknowledge the terms and conditions");
      return;
    }
    createUser(userName, email, password);
  };

  return (
    <div className="form-container d-flex justify-content-center text-black">
      <div className="form-container p-5">
        <h1 className="text-center text-black">Register for access</h1>
        <label
          className="text-black"
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
        <label className="text-black" htmlFor="email">
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
          }}
        ></input>
        <label
          htmlFor="password"
          className="text-black"
          style={{
            fontFamily: "SpaceGrotesk",
          }}
        >
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
        <div>
          <input
            type="checkbox"
            id="terms"
            onClick={() => setIsChecked(!isChecked)}
          />
          <label className="mx-2" htmlFor="terms">
            I acknowledge the terms and conditions
          </label>
        </div>
        <button className="btn-3 my-4" onClick={handleCreateUser}>
          Sign up now
        </button>
        {error && <div style={{ color: "#ed2939" }}>{error}</div>}
      </div>
    </div>
  );
};

export default Register;
