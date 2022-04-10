import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3 className="text-2xl font-bold my-4">Pleas Login now</h3>
      <div className="">
          {/* Button Signin With Google */}
        <button onClick={signInWithGoogle} className="border rounded-lg border-emerald-500 p-2 my-3 font-semibold">
          Google Sign In
        </button>
      </div>
      {/* Form */}
      <form action="">
          {/* input email */}
        <input
          className="border rounded-lg border-emerald-500 p-2 font-semibold m-2"
          type="email"
          name=""
          placeholder="Your Email"
        />
        <br />
        {/* input password */}
        <input
          className="border rounded-lg border-emerald-500 p-2 font-semibold m-2"
          type="password"
          name=""
          placeholder="Your Password"
        />
        <br />
        {/* submit button */}
        <input
          className="border border-emerald-500 rounded-lg font-bold px-4 py-2 my-2 hover:bg-green-500 hover:text-white"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
