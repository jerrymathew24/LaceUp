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


export const userSignUp = async (firstName, lastName, email, password) => {
  const url ="https://api.escuelajs.co/api/v1/users/"
  try {
    const {data} = await axios.post(url, {
      firstName: firstName,
      lastName: lastName,
      email:email,
      password:password
    })
    console.log(data);
    return data
  } catch (error) {
    return error
  }
}