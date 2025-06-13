import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { AuthLogin } from "./pages/AuthLogin";
import { AuthSignUp } from "./pages/AuthSignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/signUp" element={<AuthSignUp />} />
      </Routes>
    </div>
  );
}
export default App;
