import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducers/address-reducer";

const AddressContext = createContext();

const initialState = {
  address: {},
};

const AddressProvider = ({ children }) => {
  const [{ address }, addressDispatch] =
    useReducer(addressReducer, initialState);

   
  return (
    <AddressContext.Provider value={{ address, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);
export { AddressProvider, useAddress };
