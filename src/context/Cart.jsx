import { createContext, useContext, useState, useEffect } from "react";

export const context = createContext();

export const useCart = () => useContext(context);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();

  return (
    <context.Provider value={{ cart, setCart }}>{children}</context.Provider>
  );
};
