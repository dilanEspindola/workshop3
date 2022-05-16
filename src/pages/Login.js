// Base
import React from "react";
import { Link } from "react-router-dom";

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Login = () => {
  return (
    <div
      className="
      relative
      flex flex-col justify-between
      w-screen h-screen p-4
      bg-white
    "
    >
      <header className="w-full h-8">
        <Link
          className="flex items-center justify-start gap-2 py-1"
          to="/register"
        >
          <ArrowBackIosNewIcon />
          Register
        </Link>
      </header>

      <main className="w-full h-auto mb-[152px]">
        <h3 className="mb-16 text-primary font-bold text-5xl uppercase">
          Style your Clothes
        </h3>
        <form>
          <input
            className="
            w-full h-12
            px-4 py-2 mb-3
            border border-gray-400 rounded-md
          "
            type="email"
            placeholder="Email"
          />

          <input
            className="
            w-full h-12
            px-4 py-2 mb-16
            border border-gray-400 rounded-md
          "
            type="password"
            placeholder="Password"
          />

          <button
            className="
            w-full h-12 px-4 py-2
            bg-primary text-white
            rounded-md"
          >
            Sign up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
