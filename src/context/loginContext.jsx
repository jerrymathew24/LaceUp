import { useContext, createContext, useReducer } from "react";
import { LoginReducer } from "../reducers/login-reducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
    email: "",
    password: "",
    token: ""
  };

  const [{ email, password, token }, loginDispatch] = useReducer(
    LoginReducer,
    initialState
  );

  return (
    <LoginContext.Provider value={{ email, password,token, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext)
export {LoginProvider, useLogin}