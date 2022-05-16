// Base
import React from 'react'

// Material UI
import { Card, IconButton } from '@mui/material'

// Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const CardProduct = (props) => {
  return (
    <Card
      className="relative w-[170px] h-[240px] border-2"
      variant="outlined"
    >
      <div
        className="
          flex justify-center
          w-full h-[170] py-5
          bg-gradient-to-r from-[#7FE0F2] via-white to-[#FCFFFF]
        "
      >
        <img
          className=" w-full h-[130] object-cover"
          src="https://res.cloudinary.com/karvaroz/image/upload/v1652709137/my-merc/product1_vnb3o5.png"
          alt={props.name}
          />
      </div>

      <div className="absolute top-2 right-2">
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </div>

      <div className="text-sm p-1">
        <h3 className="mb-1 font-light">
          hola
        </h3>
        <p className="font-normal">
          $120
        </p>
      </div>
    </Card>
  )
}

export default CardProduct
