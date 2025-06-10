import { useLogin } from "../../context/loginContext";

export const Login = () => {
  const { loginDispatch } = useLogin();

  const onFormSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={onFormSubmit}>
      <div className="">
        <span>Email *</span>
        <input onChange={onEmailChange} type="email" required />
      </div>
      <div className="">
        <span>Password *</span>
        <input onChange={onPasswordChange} type="password" required />
      </div>
      <div className="">
        <button className='mt-2 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors'>
          Login
        </button>
      </div>
    </form>
  );
};
