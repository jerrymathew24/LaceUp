import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { WishlistProductCard } from "../../components/WishlistProductCard/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";

export const Wishlist = () => {
  const { wishlist } = useWishlist()
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main>
        <h2 className="text-2xl text-center text-emerald-800 p-5">My Wishlist</h2>
        {wishlist?.length > 0 ? (
          <div className="flex justify-center gap-8">
            <div>
              {wishlist.map((product) => (
                <WishlistProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
            <>
                
          <h1 className="text-center text-3xl text-gray-600">Wishlist is empty</h1>
          <button onClick={()=>navigate('/')} className="mx-auto mt-12 text-4xl bg-green-700 hover:bg-green-800 text-white py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors hover:cursor-pointer ">
                       
                       SHOP NOW!!
                    </button>
            </>
        )}
      </main>
      <Footer />
    </>
  );
};
