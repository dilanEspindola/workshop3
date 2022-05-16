// Base
import React from 'react'

// Material UI
import { Card, IconButton } from '@mui/material'

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const CardProduct = (props) => {
  return (
    <Card
      className="relative w-full h-[220px] border-2"
      variant="outlined"
    >
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
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </div>

      <div className="text-sm p-1">
        <h3 className="mb-1 font-light">
          {props.name}
        </h3>
        <p className="font-normal">
          {props.price}
        </p>
      </div>
    </Card>
  )
}

export default CardProduct