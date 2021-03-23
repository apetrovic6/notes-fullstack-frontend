import axios from "axios";
const Register = async (newUser) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/users/create`,
      newUser
    );

    localStorage.setItem(
      "token",
      response.headers["x-auth-token"],
      response.data
    );
  } catch (err) {
    console.log(err);
  }
};
export default Register;
