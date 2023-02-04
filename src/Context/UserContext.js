import { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseErrors } from "../utils/firebaseErrors";

const UserContext = createContext();

//component always with capital letters
const UserContextProvider = ({ children }) => {
  const redirectTo = useNavigate();
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  //this fn needs to be async or work this .then()
  const createUser = async (userName, email, password) => {
    // console.log("userName", userName);
    // console.log("email", email);
    // console.log("password", password);
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("newUser", newUser);

      const updatedUser = await updateProfile(auth.currentUser, {
        displayName: userName,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      console.log("updatedUser", updatedUser);
      setUser(newUser.user);
      redirectTo("/", { replace: true });
    } catch (error) {
      //if there is an error i set the property message to my error state
      setError(firebaseErrors(error.message));
      //setError(error.message);
    }
  };

  const login = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        redirectTo("/");
        // ...
        console.log("userCredential.user :>> ", userCredential.user);
      })
      .catch((error) => {});

    //redirectTo("/");
  };

  const logout = () => {
    setUser("");
    redirectTo("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, createUser, login, logout, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
