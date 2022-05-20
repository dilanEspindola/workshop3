import React from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/actions/productsActions';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchSubmit = e => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
    dispatch(searchProduct(search));
  };
  return (
    <div className='w-full my-5'>
      <form className='place-items-center' onSubmit={handleSearchSubmit}>
        <input
          type='text'
          className='
            p-2
            text-gray-400
            border-solid border-2
            border-gray-400
            rounded-lg w-full
          '
          placeholder='Search'
          name='search'
        />
        {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
            Search
            </button> */}
      </form>
    </div>
  );
};

export default Search;
