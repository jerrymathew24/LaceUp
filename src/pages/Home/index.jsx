import { getAllProducts } from "../../api/getAllProducts";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory";
import { Footer } from "../../components/Footer";


export const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
        const categories = await getAllCategories();
        const updatedCategories = [...categories, {id:'1a', name:'All'}]
        setCategories(updatedCategories)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const filterByCategories = getProductsByCategory(products, selectedCategory)


  return (
    <>
      <Navbar />
      <main className=''>
        <div className="flex gap-2 px-3 mt-3 ">
          {
            categories?.length > 0 && categories.map(category => <div onClick={() => onCategoryClick(category.name)}>  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-green-600 hover:cursor-pointer rounded-full">
              {category.name}
            </span>
            </div>)
          }
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 bg-amber-50">
          {
            filterByCategories?.length > 0 ?( filterByCategories.map((product) => <ProductCard key={product.id} product={product} />)):(<h2>No Products found. Selected Category is Empty.</h2>)
          }
        </div>
      </main>
      <Footer />
    </>
  );
};
