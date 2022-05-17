// Base
import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { listProductosAsync } from "../redux/actions/productsActions";

// Components
import CardProduct from "./CardProduct";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(listProductosAsync());
  }, [dispatch]);

  return (
    <div
      className="
          w-full h-full z-0
        grid grid-cols-2
        gap-4 gap-y-4 grid-flow-row auto-rows-max
        justify-items-stretch
        overflow-x-hidden
      "
    >
      {products.map((product, index) => (
        <CardProduct
          key={index}
          id={product.id}
          image={product.img}
          name={product.name}
          vote={product.price}
          {...product}
        />
      ))}
    </div>
  );
};

export default ProductList;
