import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { SignUp } from "../../components/SignUp";

export const AuthSignUp = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-1">
        <SignUp />
      </main>
      <Footer />
    </>
  );
};
