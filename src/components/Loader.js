import React from 'react'
import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div
      className="
        absolute top-0 left-0
        w-screen h-screen
        flex flex-col justify-center items-center
        bg-white"
      >
      <img
        src="https://res.cloudinary.com/dz8on44po/image/upload/v1652840039/block-master/p1k2gma0nlawojtbj2js.png" alt="Loader"
        className="w-[230px] mb-10"
      />

      <CircularProgress />
    </div>
  )
}

export default Loader