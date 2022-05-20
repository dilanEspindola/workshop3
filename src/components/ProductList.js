// Base
import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { listProductosAsync } from '../redux/actions/productsActions';

// Components
<<<<<<< HEAD
import CardProduct from './CardProduct';
=======
import CardProduct from "./CardProduct";
import Loader from "./Loader";
>>>>>>> f3d055c81b9ba13866e61521816bb1f6ce34438b

const ProductList = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(store => store.products);

  useEffect(() => {
    dispatch(listProductosAsync());
  }, [dispatch]);

  if (!products) return <h1>loading...</h1>;

  return (
    <div
      className='
          w-full h-full z-0
          grid grid-cols-2
          gap-6 gap-y-12 grid-flow-row auto-rows-max
          justify-items-stretch
          overflow-x-hidden
        '
    >
      {products.length < 1 ? (
        <Loader />
      ) : (
        products.map((product, index) => (
          <CardProduct
            key={index}
            id={product.id}
            image={product.img}
            name={product.name}
            vote={product.price}
            {...product}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
