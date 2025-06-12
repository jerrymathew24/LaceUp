import { useContext, createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    token: {access_token: localStorage.getItem('token') || '', refresh_token:''},
  };

  const [{ name, email, password, token }, authDispatch] =
    useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{ name, email, password, token, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
