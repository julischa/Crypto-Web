import { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

//component always with capital letters
const UserContextProvider = ({ children }) => {
  const redirectTo = useNavigate();
  const [user, setUser] = useState("");

  //this fn needs to be async or work this .then()
  const createUser = async (email, password, userName) => {
    console.log("userName", userName);
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
      alert("register succesful");
      setUser(newUser.user);
      redirectTo("/", { replace: true });
    } catch (error) {
      console.log("error :>> ", error);
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
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    //redirectTo("/");
  };

  const logout = () => {
    setUser("");
    redirectTo("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, createUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
