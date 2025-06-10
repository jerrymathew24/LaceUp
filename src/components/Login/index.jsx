import { useLogin } from "../../context/loginContext";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { email, password, loginDispatch } = useLogin();
  const navigate = useNavigate()

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if(data.access_token){
       navigate('/')
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[400px] p-10">
      <h2 className="flex justify-center text-3xl">Login</h2>
      <div className="flex flex-col gap-2">
        <span>Email *</span>
        <input
          onChange={onEmailChange}
          className="border-b-2"
          type="email"
          required
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Password *</span>
        <input
          onChange={onPasswordChange}
          className="border-b-2"
          type="password"
          required
          placeholder="Password"
        />
      </div>
      <div className="mx-4">
        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
          Login
        </button>
      </div>
    </form>
  );
};
