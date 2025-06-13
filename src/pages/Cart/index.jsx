import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cart-context";
import { CartProductCard } from "../../components/CartProductCard.jsx";
import { PriceDetails } from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/index.jsx";

export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <h2 className="text-2xl text-center text-emerald-800 p-5">My Cart</h2>
        {cart?.length > 0 ? (
          <div className="flex justify-center gap-8">
            <div>
              {cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </div>
            <div>
              <PriceDetails />
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-center text-3xl text-gray-600">
              Cart is empty
            </h1>
            <button
              onClick={() => navigate("/")}
              className="mx-auto mt-12 text-4xl bg-green-700 hover:bg-green-800 text-white py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors hover:cursor-pointer "
            >
              SHOP NOW!!
            </button>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
