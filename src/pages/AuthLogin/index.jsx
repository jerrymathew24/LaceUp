import { Login } from "../../components/Login";
import { Navbar } from "../../components/Navbar";

export const AuthLogin = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-36">
      <Login />
      </main>
    </>
  );
};
