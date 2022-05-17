import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
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

  const userEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

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

  return (
    <context.Provider
      value={{
        signInWithGoogle,
        signInWithFacebook,
        userEmailPassword,
        userState,
        loading,
      }}
    >
      {children}
    </context.Provider>
  );
};
