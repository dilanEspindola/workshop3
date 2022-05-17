// Base
import React from "react";

// Material UI
import { Card, IconButton } from "@mui/material";

// Icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../redux/actions/productsActions";

const CardProduct = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerCLickCard = () => {
    dispatch(getProduct(props.id));
    navigate(`/detail/${props.id}`);
  };

  const handleClickFavorites = () => {
    // console.log(props);
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(props);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);

    // const favorite = {
    //   id: props.id,
    //   name: props.name,
    //   price: props.price,
    //   image: props.image,
    // };

    // if (localStorage.getItem("favorites") === null) {
    //   let favorites = [];
    //   favorites.push(favorite);
    //   localStorage.setItem("favorites", JSON.stringify(favorite));
    // } else {
    //   let favorites = JSON.parse(localStorage.getItem("favorites"));
    //   favorites.push(favorite);
    //   localStorage.setItem("favorites", JSON.stringify(favorites));
      // let exist = false;
      // favorites.forEach((item) => {
      //   if (item.id === favorite.id) {
      //     exist = true;
      //   }
      // });

      // if (exist) {
      //   alert("Product already added to favorites");
      // } else {
      //   favorites.push(favorite);
      //   localStorage.setItem("favorites", JSON.stringify(favorites));
      // }
    // }
  };

  return (
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
          src={props.img}
          alt={props.name}
        />
      </div>

      <div className="absolute top-0 right-0">
        <IconButton onClick={handleClickFavorites}>
          <FavoriteBorderIcon />
        </IconButton>
      </div>

      <div className="text-sm p-1" onClick={handlerCLickCard}>
        <h3 className="mb-1 font-light">{props.name}</h3>
        <p className="font-normal">{props.price}</p>
      </div>
    </Card>
  );
};

export default CardProduct;
