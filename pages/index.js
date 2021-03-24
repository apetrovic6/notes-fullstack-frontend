import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Login from "../utils/Login";
import jwtDecode from "jwt-decode";
const Signin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { value, setValue } = useContext(UserContext);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const userLogin = {
      username,
      password,
    };
    Login(userLogin, setValue);
  };
  if (value.userId) {
    router.replace("/Notes");
  }
  return (
    <div>
      <div className="w-screen h-screen flex items-center justify-center ">
        <form onSubmit={onSubmit} className="border shadow-lg py-8 px-8">
          <div className="text-5xl flex text-center ">
            <h1 className="mx-2 px-2 w-full">Login</h1>
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
                required
                minLength={1}
                maxLength={20}
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
                required
                minLength={5}
                maxLength={100}
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="text-xl border shadow-xl px-2 hover:bg-gray-200">
              Login
            </button>
          </div>
          <h3 className="text-center mt-4 mb-2">Don't have an account yet?</h3>
          <Link href="/Signup">
            <a className="flex shadow-md justify-center text-xl border px-2 hover:bg-gray-200">
              Register
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
