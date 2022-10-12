import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";

function SignInScreen() {
  const auth = getAuth(app);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Sucessfull Register");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        console.log(errorCode);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        console.log(errorCode);
      });
  };

  return (
    <div>
      <div className="text-center ">
        <h1 className="text-4xl mb-4 mt-48 font-bold">Sign In</h1>
        <div>
          <div className=" ">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-72 p-1 outline-none text-black text-center"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="pt-4">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-72 p-1 outline-none text-black text-center"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={signIn}
            className="bg-red-900  p-2 mt-8 rounded-sm hover:bg-white text-black   w-72 "
          >
            Sign In
          </button>
          <div className="mt-4">
            <span className="text-gray-400">
              New to Netflix ?{" "}
              <button type="submit" onClick={register} className="text-red-500">
                Sign up now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
