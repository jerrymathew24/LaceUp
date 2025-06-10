import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart-context.jsx";
import { WishlistProvider } from "./context/wishlist-context.jsx";
import { LoginProvider } from "./context/loginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>
);
