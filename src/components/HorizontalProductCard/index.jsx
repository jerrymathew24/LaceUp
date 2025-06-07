export const HorizontalProductCard = ({ product }) => {
    return (
        <div className="flex bg-white shadow-md rounded-xl overflow-hidden w-full max-w-3xl mx-auto p-4 mb-4">
            <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1 ml-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                    <div className="flex items-center gap-4 mt-3">
                        <span className="text-lg font-bold text-green-600">₹ {product.price}</span>
                        <div className="flex items-center border rounded-md px-2">
                            <button className="px-2 py-1 text-lg font-bold hover:text-red-500">-</button>
                            <span className="px-3 select-none">1</span>
                            <button className="px-2 py-1 text-lg font-bold hover:text-green-500">+</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">

                    <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded flex items-center justify-center gap-2 transition-colors">
                        <span className="material-symbols-outlined px-2 hover:cursor-pointer">
                            delete
                        </span>
                        Remove from Cart
                    </button>
                    <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded flex items-center justify-center gap-2 transition-colors">
                        <span className="material-symbols-outlined px-2 hover:cursor-pointer">
                            favorite
                        </span>
                        Add To Wishlist
                    </button>

                </div>
            </div>
        </div>
    );
};
