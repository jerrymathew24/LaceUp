import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";

export const PriceDetails = () => {

    const {cart } = useCart()
    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-[400px] max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Price Details</h2>

      <div className="flex justify-between mb-2 text-sm text-gray-700">
        <span>Price ({cart.length})</span>
        <span>₹ {totalCartAmount}</span>
      </div>

      

      <div className="flex justify-between mb-2 text-sm text-gray-700">
        <span>Delivery Charges</span>
        <span className="text-green-600">{deliveryCharge}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-base font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹ {totalCartAmount + deliveryCharge}</span>
      </div>

      <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
        Place Order
      </button>
    </div>
  );
};
