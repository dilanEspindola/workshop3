// Base
import React from "react";

// Components
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <>
      <div className="w-auto p-4 h-[calc(100vh-44px)] overflow-y-auto">
        <Slider />

        <Search />

        <ProductList />
      </div>

      <Navbar />
    </>
  )
};

export default Home;
