import { useContext, createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    token: "",
  };

  const [{ firstName, lastName, email, password, token }, authDispatch] =
    useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{ firstName, lastName, email, password, token, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
