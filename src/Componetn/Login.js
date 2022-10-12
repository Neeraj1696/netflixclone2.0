import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className=" flex justify-between p-4 items-center">
        <Link to="/">
          <img
            className="w-26 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </Link>

        <button
          onClick={() => setSignIn(true)}
          className="bg-red-700 p-2 rounded-lg   "
        >
          Sign In
        </button>
      </div>
      {signIn ? (
        <SignInScreen />
      ) : (
        <div className="text-center pt-40   ">
          <h1 className="text-4xl font-bold  ">
            Unlimited films, Tv Programs and More
          </h1>
          <h2 className="pt-4 font-bold">Watch anywhere.cancel any time</h2>
          <p className="text-sm pt-1">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email "
              className="p-2 w-72 mt-8 border-none outline-none bg-slate-700 text-white"
            />
            <button onClick={() => setSignIn(true)} className="bg-red-600 p-2">
              GET STARTED
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
