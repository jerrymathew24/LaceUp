import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { AddressForm } from "../addressForm";
import { useAddress } from "../../context/address-context";

export const PriceDetails = () => {
  const APIKEY = "rzp_test_jptkYmRlh3dK8K";

  const { cart, cartDispatch } = useCart();
  const { address, addressDispatch } = useAddress();
  console.log("Current Address:", address);

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 49;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      console.log("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: APIKEY,
      amount: (totalCartAmount + deliveryCharge) * 100,
      currency: "INR",
      name: "LaceUp by Jerry Mathew",
      description: "Thank you for shopping with us.",
      image:
        "https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",
      handler: ({ payment_id }) => {
        cartDispatch({ type: "RESET_CART" });
        localStorage.removeItem(`${email}_cart`);
        navigate("/");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleAddressSubmit = (data) => {
    addressDispatch({ type: "SET_ADDRESS", payload: data });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-[400px] max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Price Details
      </h2>

      <div className="flex justify-between mb-2 text-sm text-gray-700">
        <span>Price ({cart.length})</span>
        <span>₹ {totalCartAmount}</span>
      </div>

      <div className="flex justify-between mb-2 text-sm text-gray-700">
        <span>Delivery Charges</span>
        <span className="text-green-600">₹ {deliveryCharge}</span>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-base font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹ {totalCartAmount + deliveryCharge}</span>
      </div>

      {!address?.fullName ? (
        <AddressForm onSubmit={handleAddressSubmit} />
      ) : (
        <div className="mt-4 text-sm text-gray-700">
          <h3 className="font-semibold mb-2">Shipping Address:</h3>
          <p>{address.fullName}</p>
          <p>{address.street}</p>
          <p>
            {address.city}, {address.state} - {address.zip}
          </p>
          <p>{address.country}</p>

          <button
            onClick={() => addressDispatch({ type: "RESET_ADDRESS" })}
            className="text-blue-600 underline text-sm mt-2"
          >
            Edit Address
          </button>
        </div>
      )}

      <button
        onClick={displayRazorpay}
        className="w-full mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        disabled={!address?.fullName}
      >
        Place Order
      </button>
    </div>
  );
};
