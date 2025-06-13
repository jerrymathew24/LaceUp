import { useAuth } from "../../context/auth-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export const Login = () => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { email, password, authDispatch } = useAuth();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
  e.preventDefault();
  const data = await userLogin(email, password);

  if (data?.access_token) {
    localStorage.setItem("token", data.access_token);
    localStorage.setItem("email", email);

    const savedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
    const savedWishlist = JSON.parse(localStorage.getItem(`wishlist_${email}`)) || [];

    cartDispatch({ type: "INITIALIZE_CART", payload: savedCart });
    wishlistDispatch({ type: "INITIALIZE_WISHLIST", payload: savedWishlist });

    authDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });

    navigate("/");
  } else {
    authDispatch({
      type: "RESET_LOGIN_FORM",
      payload: {
        email: "",
        password: "",
      },
    });
    alert("Login failed. Please check your email or password.");
  }
};

  const onEmailChange = (e) => {
    authDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    authDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl">Login</h2>
      <div className="flex flex-col gap-2">
        <span>Email *</span>
        <input
          value={email}
          onChange={onEmailChange}
          className="border-b-2"
          type="email"
          required
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Password *</span>
        <input
          value={password}
          onChange={onPasswordChange}
          className="border-b-2"
          type="password"
          required
          placeholder="Password"
        />
      </div>
      <div className="flex justify-between mx-4 mt-6">
        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          Login
        </button>
        <button
          onClick={() => navigate("/auth/signUp")}
          type="button"
          className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
