<<<<<<< HEAD
import React from 'react';
=======
import { getDataLocalStorage } from "../services/localStorage"
import Navbar from "../components/Navbar";
>>>>>>> f3d055c81b9ba13866e61521816bb1f6ce34438b

const Cart = () => {
  const getData = getDataLocalStorage();

  return (
    <>
      <div className="p-3 flex flex-col gap-5">
        {!getData ? (
          <div className="absolute flex flex-col justify-center items-center h-full">
            <h1 className="mb-8 text-lg text-gray-600">
              No hay productos agregados al carrito
            </h1>
            <img
              className="w-[250px]"
              src="https://res.cloudinary.com/dz8on44po/image/upload/v1652836985/block-master/weg0sl7nnwmel1vv5thn.png"
              alt=""
            />
          </div>
        ) : (
          getData.map((product) => (
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
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <Navbar />
    </>
  );
};

export default Cart;
