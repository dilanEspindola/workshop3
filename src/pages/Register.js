// Base
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Context
import { useAuth } from "../context/AuthContext";

// hook useForm
import { useForm } from "../hooks/useForm";

// Material UI
import { IconButton } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Register = () => {
  const { handleInputChange, values } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { signInWithGoogle, userEmailPassword } = useAuth();
  const navigate = useNavigate();

  const loginGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    try {
      await userEmailPassword(email, password);
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
          to="/login"
        >
          <ArrowBackIosNewIcon />
          Login
        </Link>
      </header>

      <main className="w-full h-auto mb-16">
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
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
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

        <div className="mt-4 text-center">
          <p className="mb-4 text-primary">or</p>

          <div className="w-full flex item-center justify-center">
            <IconButton size="large">
              <FacebookIcon sx={{ fontSize: 32 }} color="primary" />
            </IconButton>

            <IconButton size="large" onClick={loginGoogle}>
              <GoogleIcon sx={{ fontSize: 32 }} color="primary" />
            </IconButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
