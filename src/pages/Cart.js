import { useState } from "react";
import { getDataLocalStorage } from "../services/localStorage";

const Cart = () => {
  const [contador, setContador] = useState(1);
  const getData = getDataLocalStorage();

  return (
    <div className="p-3 flex flex-col gap-5">
      {getData.map((product) => (
        <div className="flex items-center border-2" key={product.id}>
          <img src={product.img} alt={product.name} className="w-6/12" />
          <div className="flex flex-col">
            <p>{product.category}</p>
            <h1 className="mb-2">{product.name}</h1>
            <p>
              color: <span>{product.color}</span>
            </p>
            <p>
              size: <span>{product.size}</span>
            </p>
            <p>$ {product.price}</p>
            <div className="ml-20 flex gap-2p-4">
              <button> - </button>
              <p>{contador}</p>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
