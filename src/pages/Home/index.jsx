import { getAllProducts } from "../../api/getAllProducts";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export const Home = () => {
  
  const [products, setProducts] = useState([]);

  const {cart} = useCart()
  console.log("cartttt-array", {cart});

  const {wishlist} = useWishlist()
  console.log("wishlistttt-array", {wishlist});


useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getAllProducts();
      console.log("Data received:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchData();
}, []);


  return (
    <>
      <Navbar />
      <main className="flex flex-wrap justify-center gap-4 mt-6 bg-amber-50">
        {
            products?.length > 0 && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </main>
    </>
  );
};
