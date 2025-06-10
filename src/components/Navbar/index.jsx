import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/loginContext";

export const Navbar = () => {
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, loginDispatch } = useLogin();

  const onLoginClick = () => {
    if(token?.access_token){
    navigate("/auth/login");
    }else{
      loginDispatch({
        type:'LOGOUT',

      })
      navigate('/auth/login')
    }
  };

  const navigate = useNavigate();
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
            <div className="mt-2 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
              <button onClick={onLoginClick}>
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
