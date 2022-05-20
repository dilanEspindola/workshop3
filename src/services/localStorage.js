export const addCartToLocalStorage = (cart) => {
  if (!JSON.parse(localStorage.getItem("cart"))) {
    let addCart = [];
    addCart.push(cart);
    localStorage.setItem("cart", JSON.stringify(addCart));
  } else {
    let cartLocal = JSON.parse(localStorage.getItem("cart"));
    cartLocal.push(cart);
    localStorage.setItem("cart", JSON.stringify(cartLocal));
  }
};

export const getDataLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart"));
};
