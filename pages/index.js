import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="text-4xl">Login</h1>
      <div className="w-screen h-screen flex items-center justify-center ">
        <form className="border shadow-lg py-8 px-8">
          <div className="">
            <span className="text-3xl flex text-justify ">
              <div className="mx-2">
                <button className="mx-2  px-2 w-full">Login</button>
              </div>
              <div className="mx-2 ">
                <button className="mx-2  px-2 w-full">Register</button>
              </div>
            </span>
          </div>
          <div className="my-2">
            <div className="mb-2">
              <label className="text-2xl mx-2">Username</label>
            </div>
            <div>
              <input
                className="border px-2 mx-2 w-full"
                placeholder="Username"
              />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <label className="text-2xl mx-2">Password</label>
            </div>
            <div>
              <input
                className="border px-2 mx-2 w-full"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
