import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount"; 

export const PriceDetails = () => {

    const APIKEY = 'rzp_test_jptkYmRlh3dK8K';

    const { cart, cartDispatch } = useCart();
    const navigate = useNavigate();


    const totalCartAmount = getTotalCartAmount(cart)
    const deliveryCharge = 49

    const loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src= src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };
  
    const displayRazorpay = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
        if(!response){
          console.log('no response')
        }
  
        const options = {
          key: APIKEY,
          amount: (totalCartAmount + deliveryCharge) * 100,
          curreny: "INR",
          name: "LaceUp by Jerry Mathew",
          description: "Thank you for shopping with us.",
          image: "https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",
  
          handler: ({payment_id}) => {
              cartDispatch({type: "CLEAR"});
              navigate("/")
          }
        }
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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

      <button onClick={displayRazorpay} className="w-full mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
        Place Order
      </button>
    </div>
  );
};