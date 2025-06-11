import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const Navbar = () => {
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, authDispatch } = useAuth();
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/auth/login");
    setIsAccountDropDownOpen(false);
  };

  const onLogoutClick = () => {
    authDispatch({
      type: "LOGOUT",
    });
    navigate("/auth/login");
    setIsAccountDropDownOpen(false);
  };

  const onSignUpClick = () => {
    navigate("/auth/signup");
    setIsAccountDropDownOpen(false);
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
        <span
          onClick={() => navigate("/cart")}
          className="material-symbols-outlined px-6 hover:cursor-pointer"
        >
          shopping_cart
        </span>
        <span
          onClick={() => navigate("/wishlist")}
          className="material-symbols-outlined px-6 hover:cursor-pointer"
        >
          favorite
        </span>
        <div className="relative">
          <span
            onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            className="material-symbols-outlined px-6 hover:cursor-pointer"
          >
            account_circle
          </span>
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
