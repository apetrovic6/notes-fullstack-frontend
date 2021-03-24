import { useState, useContext } from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Login from "../utils/Login";
import Register from "../utils/Register";
const Signup = () => {
  const { setValue } = useContext(UserContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, password };

    await Register(newUser);
    await Login(newUser, setValue);
    await router.push("/Notes");
  };

  return (
    <div>
      <h1 className="text-4xl">Register</h1>
      <div className="w-screen h-screen flex items-center justify-center ">
        <form onSubmit={onSubmit} className="border shadow-lg py-8 px-8">
          <div className="text-5xl flex text-center ">
            <h1 className="mx-2 px-2 w-full">Register</h1>
          </div>

          <div className="my-2">
            <div className="mb-2">
              <label htmlFor="username" className="text-2xl mx-2">
                Username
              </label>
            </div>
            <div>
              <input
                className="border px-2 mx-2 w-full"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                required
                minLength={5}
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
                className="border px-2 mx-2 w-full"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                required
                minLength={5}
                maxLength={100}
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="text-xl border shadow-xl px-2 hover:bg-gray-200">
              Register
            </button>
          </div>
          <h3 className="text-center mt-4 mb-2">Already have an account?</h3>
          <Link href="/">
            <a className="flex justify-center text-xl border px-2 hover:bg-gray-200">
              Login
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
