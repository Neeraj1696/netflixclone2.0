import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-slate-800 text-center lg:text-left p-6 ">
        <div className="text-white text-center p-4 background-color: rgba(0, 0, 0, 0.2)">
          © 2021 Copyright
          <Link
            className="text-white justify-center items-center relative "
            to="https://www.netflix.com/in/"
          >
            Netflix Footer || It is Use For Education Purpose Only
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
