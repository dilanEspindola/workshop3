import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";

export const context = createContext();

export const useAuth = () => useContext(context);

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  const userEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const cerrarSesion = async () => {
    await signOut(auth);
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
        loginEmailPassword,
        cerrarSesion,
        userState,
        loading,
      }}
    >
      {children}
    </context.Provider>
  );
};
