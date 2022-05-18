// Material UI
import { Card, IconButton } from "@mui/material";
import ReactImageMagnify from 'react-image-magnify'

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
    console.log(favorites)

    const newFavorites = favorites.filter(favorite => {
      return favorites.includes(favorite.id)
    })
    console.log(newFavorites)

    localStorage.setItem("favorites", JSON.stringify(newFavorites))
    window.location.reload();
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 font-bold">Favoritos</h2>
      <div
        className="
            w-full h-full z-0
            grid grid-cols-2
            gap-6 gap-y-12 grid-flow-row auto-rows-max
            justify-items-stretch
            overflow-x-hidden
          "
      >
        {
          getFavorites().length === 0
            ? (<div className="absolute flex flex-col justify-center items-center h-full">
              <h1 className="mb-8 text-lg text-gray-600">No hay productos agregados a favoritos</h1>
              <img className="w-[250px]" src="https://res.cloudinary.com/dz8on44po/image/upload/v1652836985/block-master/weg0sl7nnwmel1vv5thn.png" alt=""/>
            </div>)
            : (
              getFavorites().map((favorite) => (
                <Card key={favorite.id}
                  className="relative w-full h-[220px] border-2" variant="outlined"
                >
                  <div
                    className="
                      flex justify-center
                      w-full h-[170] py-5 object-cover
                      bg-gradient-to-r from-[#7FE0F2] via-white to-[#FCFFFF]
                    "
                  >
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: `${favorite.name}`,
                        isFluidWidth: true,
                        width: 100,
                        height: 130,
                        src: `${favorite.img}`
                      },
                      largeImage: {
                        src: `${favorite.img}`,
                        width: 300,
                        height: 330
                      }
                    }}
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
              ))
            )
        }
        <Navbar />
      </div>
    </div>
  );
};

export default Favorites;
