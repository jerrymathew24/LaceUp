import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export const Navbar = () => {
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, authDispatch } = useAuth();
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const email = localStorage.getItem("email");



  const onLoginClick = () => {
    navigate("/auth/login");
    setIsAccountDropDownOpen(false);

    localStorage.setItem("email", email);

const savedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
const savedWishlist = JSON.parse(localStorage.getItem(`wishlist_${email}`)) || [];

cartDispatch({ type: "INITIALIZE_CART", payload: savedCart });
wishlistDispatch({ type: "INITIALIZE_WISHLIST", payload: savedWishlist });

  };
const onLogoutClick = () => {
  const email = localStorage.getItem("email");

  if (email) {
    localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
    localStorage.setItem(`wishlist_${email}`, JSON.stringify(wishlist));
  }

  authDispatch({ type: "LOGOUT" });
  cartDispatch({ type: "RESET_CART" });
  wishlistDispatch({ type: "RESET_WISHLIST" });

  localStorage.removeItem("token");
  localStorage.removeItem("email");

  navigate("/auth/login");
  setIsAccountDropDownOpen(false);
};


 const onSignUpClick = () => {
  authDispatch({ type: "RESET_SIGNUP_FORM" });
  setIsAccountDropDownOpen(false);
  navigate("/auth/signup");
};


  return (
    <header className="flex justify-between bg-green-900 text-amber-100 p-4">
      <div
        onClick={() => navigate("/")}
        className="text-3xl hover:cursor-pointer"
      >
        LaceUp
      </div>
      <nav className="ml-auto flex gap-2 self-center">
        <div
          className="flex flex-col items-center px-6 hover:cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <span className="material-symbols-outlined ">shopping_cart</span>
          {token?.access_token && <span className="text-sm px-2">{cart.length}</span>}
        </div>
        <div
          className="flex flex-col items-center px-6 hover:cursor-pointer"
          onClick={() => navigate("/wishlist")}
        >
          <span className="material-symbols-outlined">favorite</span>
          {token?.access_token && <span className="text-sm px-2">{wishlist.length}</span>}
        </div>

        <div
          className="relative flex flex-col"
          onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
        >
          <span className="material-symbols-outlined px-6 hover:cursor-pointer">
            account_circle
          </span>{token?.access_token && <span className="text-sm px-2 hover:cursor-pointer">{email}</span>}

          {isAccountDropDownOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-amber-50 rounded-md shadow-lg z-10">
              <div className="p-1 space-y-1">
                {token?.access_token ? (
                  <button
                    onClick={onLogoutClick}
                    className="w-full text-left px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded flex items-center transition-colors"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={onLoginClick}
                      className="w-full text-left px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded flex items-center transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={onSignUpClick}
                      className="w-full text-left px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded flex items-center transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
