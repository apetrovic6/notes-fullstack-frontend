import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = async (userLogin, setValue) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/",
      userLogin
    );
    const {
      data: jwt,
      config: { data: user },
    } = response;

    const decodedJwt = jwtDecode(jwt);
    const username = JSON.parse(user);

    setValue({ userName: username.username, userId: decodedJwt._id });

    localStorage.setItem("token", jwt);
  } catch (err) {
    console.log(err);
  }
};

export default Login;
