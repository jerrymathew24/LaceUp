import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart-context.jsx";
import { WishlistProvider } from "./context/wishlist-context.jsx";
import { AuthProvider } from "./context/auth-context.jsx";
import { AddressProvider } from "./context/address-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AddressProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
      </AddressProvider>
    </BrowserRouter>
  </StrictMode>
);
