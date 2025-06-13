export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-10">
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-lg mb-3">LaceUp</h4>
          <p className="text-gray-400">
            Premium products, everyday style. Shop the latest collections with comfort and confidence.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/products" className="hover:text-gray-300">Shop</a></li>
            <li><a href="/cart" className="hover:text-gray-300">Cart</a></li>
            <li><a href="/wishlist" className="hover:text-gray-300">Wishlist</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
          <p className="text-gray-400">Email: support@laceup.shop</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">Instagram</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">Twitter</a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">Facebook</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 py-4 border-t border-gray-700 text-xs">
        © {new Date().getFullYear()} LaceUp. All rights reserved. Made with care by Jerry Mathew.
      </div>
      
    </footer>
  );
};
