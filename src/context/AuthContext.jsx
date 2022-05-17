import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export const context = createContext();

export const useAuth = () => useContext(context);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioActual) => {
      setUserState(usuarioActual);
      setLoading(false);
    });
  }, []);

  // console.log(userState);

  return (
    <context.Provider
      value={{ signInWithGoogle, signInWithFacebook, userState, loading }}
    >
      {children}
    </context.Provider>
  );
};
