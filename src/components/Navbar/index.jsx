import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()
  return (
    <header className="flex justify-between bg-green-900 text-amber-100 p-4">
      <div onClick={() => navigate('/')} className="text-3xl hover:cursor-pointer" >LaceUp</div>
      <nav className="ml-auto flex gap-2 self-center">
        <span onClick={()=>navigate('/cart')} className="material-symbols-outlined px-6 hover:cursor-pointer">shopping_cart</span>
        <span className="material-symbols-outlined px-6 hover:cursor-pointer">favorite</span>
        <span className="material-symbols-outlined px-6 hover:cursor-pointer">account_circle</span>
      </nav>
    </header>
  );
};
