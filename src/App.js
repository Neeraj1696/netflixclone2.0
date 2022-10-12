import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Componetn/Home";
import Login from "./Componetn/Login";
import SignInScreen from "./Componetn/SignInScreen";

function App() {
  const user = null;

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignInScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
