import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();

  const navigate = useNavigate();

  const isProductInCart = findProductInCart(cart, product.id);
  const isProductInWishlist = findProductInWishlist(wishlist, product.id);

  const onCartClick = (product) => {
    if (!isProductInCart) {
      if (isProductInWishlist) {
        const updatedWishlist = wishlist.filter(
          (item) => item.id !== product.id
        );
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: { id: product.id },
        });
      }
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
    } else {
      navigate("/cart");
    }
  };

  const onWishlistClick = (product) => {

    if (!isProductInWishlist) {
      if (isProductInCart) {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { id: product.id },
        });
      }
      const updatedWishlist = [...wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      });
    } else {
      navigate("/wishlist");
    }

    console.log("Wishlist after update", wishlist);
  };

  return (
    <div className="w-72 bg-white rounded-md shadow relative flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-72 w-full overflow-hidden">
        <img
          src={product.images[0]}
          alt="shoes"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-sans text-gray-800 truncate">
          {product.title}
        </h2>

        <p className="text-green-600 font-medium text-md">₹ {product.price}</p>
        <button
          onClick={() => onWishlistClick(product)}
          className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined text-base hover:cursor-pointer">
            {isProductInWishlist ? "" : "favorite"}
          </span>
          {isProductInWishlist ? "Go to Wishlist" : "Add To Wishlist"}
        </button>

        <button
          onClick={() => onCartClick(product)}
          className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors"
        >
          <span className="material-symbols-outlined text-base hover:cursor-pointer">
            {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
          </span>
          {isProductInCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
