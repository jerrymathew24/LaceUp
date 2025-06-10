export const SignUp = () => {
  return (
    <form className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl">Sign Up</h2>
      <div className="flex flex-col gap-2">
        <span>First Name *</span>
        <input type="text" 
          className="border-b-2"  required />
      </div>
      <div className="flex flex-col gap-2">
        <span>Last Name *</span>
        <input type="text"           className="border-b-2" required />
      </div>
      <div className="flex flex-col gap-2">
        <span>Email *</span>
        <input type="email" 
          className="border-b-2" required />
      </div>
      <div className="flex flex-col gap-2">
        <span>Password *</span>
        <input type="password" 
          className="border-b-2" required />
      </div>
      <div className="mx-4">
        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          Sign Up
        </button>
      </div>
    </form>
  );
};
