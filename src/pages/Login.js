// Base
import React from "react";
import { Link, Navigate } from "react-router-dom";

// router-dom
import { useNavigate } from "react-router-dom";

// auth context
import { useAuth } from "../context/AuthContext";

//  hook useForm
import { useForm } from "../hooks/useForm";

// Icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Login = () => {
  const navigate = useNavigate();
  const { loginEmailPassword } = useAuth();

  const { handleInputChange, values } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = values;
      await loginEmailPassword(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            className="
            w-full h-12
            px-4 py-2 mb-3
            border border-gray-400 rounded-md
          "
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />

          <input
            className="
            w-full h-12
            px-4 py-2 mb-16
            border border-gray-400 rounded-md
          "
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInputChange}
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
