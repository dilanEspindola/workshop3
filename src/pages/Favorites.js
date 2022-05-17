// Material UI
import { Card, IconButton } from "@mui/material";

// Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const getFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    return favorites;
  };

  const handleClickRemoveFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    // const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    // localStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("remove");
    return favorites;
  };

  return (
    <div
      className="
          w-full h-full z-0
          grid grid-cols-2
          gap-6 gap-y-12 grid-flow-row auto-rows-max
          justify-items-stretch
          overflow-x-hidden
        "
    >
      {getFavorites().map((favorite) => (
        <Card className="relative w-full h-[220px] border-2" variant="outlined">
          <div
            className="
          flex justify-center
          w-full h-[170] py-5 object-cover
          bg-gradient-to-r from-[#7FE0F2] via-white to-[#FCFFFF]
        "
          >
            <img
              className=" w-full h-[130px] object-cover object-top"
              src={favorite.img}
              alt={favorite.name}
            />
          </div>

          <div className="absolute top-0 right-0">
            <IconButton onClick={handleClickRemoveFavorites}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>

          <div className="text-sm p-1">
            <h3 className="mb-1 font-light">{favorite.name}</h3>
            <p className="font-normal">{favorite.price}</p>
          </div>
        </Card>
      ))}

      <Navbar />
    </div>
  );
};

export default Favorites;
