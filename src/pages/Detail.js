import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Detail = () => {
  const { img, name, price, description, size, color, category } = useSelector(
    store => store.products
  );
  return (
    <div className='flex flex-col text-center h-screen'>
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <span>{price}</span>
      <p>{description}</p>
      <p>{size}</p>
      <p>{color}</p>
      <p>{category}</p>
      <Navbar />
    </div>
  );
};

export default Detail;
