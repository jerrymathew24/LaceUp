export const Navbar = () => {
  return (
    <header className="flex justify-between bg-green-900 text-amber-100 p-4 ">
      <div className="text-3xl" >LaceUp</div>
      <nav className="ml-auto flex gap-2 self-center">
        <span className="material-symbols-outlined px-6 hover:cursor-pointer">shopping_cart</span>
        <span className="material-symbols-outlined px-6 hover:cursor-pointer">favorite</span>
        <span className="material-symbols-outlined px-6 hover:cursor-pointer">account_circle</span>
      </nav>
    </header>
  );
};
