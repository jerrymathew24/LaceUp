import axios from "axios";

export const userLogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const { data } = await axios.post(url, {
      email: email,
      password: password,
    });
    console.log({data});
    
    return data
  } catch (error) {
    return error;
  }
};


export const userSignUp = async (name, email, password) => {
  const url ="https://api.escuelajs.co/api/v1/users/"
 try {
    const { data } = await axios.post(url, {
      name: name,
      email: email,
      password: password,
      avatar: "https://api.lorem.space/image/face?w=150&h=150"
    });
    console.log({data});
    return data
  } catch (error) {
    return error
  }
}