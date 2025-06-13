import { createContext,useContext,useReducer, useEffect  } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext();


const initialState = {
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
}

const WishlistProvider = ({ children })=> {
    const [{wishlist}, wishlistDispatch] = useReducer(wishlistReducer, initialState)


return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
        {children}
    </WishlistContext.Provider>
);
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist}