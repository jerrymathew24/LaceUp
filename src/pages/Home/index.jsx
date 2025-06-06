import { getAllProducts } from "../../api/getAllProducts";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
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
