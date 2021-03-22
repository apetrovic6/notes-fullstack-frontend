import { useState } from "react";
import Link from "next/link";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const userLogin = {
      username,
      password,
    };
    try {
      const { data: jwt } = await axios.post(
        "http://localhost:5000/api/auth/",
        userLogin
      );
      console.log(jwt);
      localStorage.setItem("token", jwt);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">Login</h1>
      <div className="w-screen h-screen flex items-center justify-center ">
        <form onSubmit={onSubmit} className="border shadow-lg py-8 px-8">
          <div className="text-5xl flex text-center ">
            <h1 className="mx-2  px-2 w-full mx-2 px-2 w-full">Login</h1>
          </div>

          <div className="my-2">
            <div className="mb-2">
              <label htmlFor="username" className="text-2xl mx-2">
                Username
              </label>
            </div>
            <div>
              <input
                id="username"
                className="border px-2 mx-2 w-full"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <label htmlFor="password" className="text-2xl mx-2">
                Password
              </label>
            </div>
            <div>
              <input
                id="password"
                className="border px-2 mx-2 w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="text-xl border shadow-xl px-2 hover:bg-gray-200">
              Login
            </button>
          </div>
          <h3 className="text-center mt-4 mb-2">Don't have an account yet?</h3>
          <Link href="/Register">
            <a className="flex justify-center text-xl border px-2 hover:bg-gray-200">
              Register
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
