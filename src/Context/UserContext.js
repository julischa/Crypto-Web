import { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const UserContext = createContext();

//component always with capital letters
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  //this fn needs to be async or work this .then()
  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ user, setUser, createUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
