export const ProductCard = ({ product }) => {
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
        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined px-6 hover:cursor-pointer">
            favorite
          </span>
          Add To Wishlist
        </button>
        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-base">
            shopping_cart
          </span>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
