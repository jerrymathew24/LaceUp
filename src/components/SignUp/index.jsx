import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { userSignUp } from "../../api/auth";

export const SignUp = () => {
  const { name, email, password, authDispatch } = useAuth();
  const navigate = useNavigate();

  const onNameChange = (e) =>
    authDispatch({
      type: "NAME",
      payload: {
        value: e.target.value,
      },
    });

  const onEmailChange = (e) =>
    authDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });

  const onPasswordChange = (e) =>
    authDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });


  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await userSignUp(name, email, password);
      if (data?.id) {
        alert("Signup successful! Please log in.");
        navigate("/auth/login");
      } else {
      authDispatch({
        type: "RESET_SIGNUP_FORM",
        payload: {
          name: "",
          email: "",
          password: ""}})
        alert("Signup failed. Try again.");
      }
    } catch (error) {
      alert("Signup failed. See console for more info.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl mb-6">Sign Up</h2>

      <div className="flex flex-col gap-2">
        <span>Name *</span>
        <input
          value={name}
          onChange={onNameChange}
          className="border-b-2 p-1"
          type="text"
          required
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <span>Email *</span>
        <input
          value={email}
          onChange={onEmailChange}
          className="border-b-2 p-1"
          type="email"
          required
          placeholder="example@gmail.com"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <span>Password *</span>
        <input
          value={password}
          onChange={onPasswordChange}
          className="border-b-2 p-1"
          type="password"
          required
          placeholder="Password"
        />
      </div>

      <div className="flex justify-between mx-4 mt-6">
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded transition-colors"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={() => navigate("/auth/login")}
          className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
};
