import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { signInWithGoogle, signInWithFacebook, userState, loading } =
    useAuth();
  const navigate = useNavigate();

  const loginGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={loginGoogle}>google</button>
    </div>
  );
};

export default Login;
