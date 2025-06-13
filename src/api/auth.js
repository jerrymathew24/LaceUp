import axios from "axios";

export const userLogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const { data } = await axios.post(url, {
      email: email,
      password: password,
    });
    console.log({ data });

    return data;
  } catch (error) {
    return error;
  }
};export const userSignUp = async (name, email, password) => {
  const url = "https://api.escuelajs.co/api/v1/users/";
  try {
    const { data } = await axios.post(url, {
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=150&h=150",
      role: "customer", // REQUIRED to avoid 500
    });
    console.log("Signup Success:", data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Signup API Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Signup Error:", error);
    }
    return null;
  }
};
