// Base
import React from 'react'
import { Link } from 'react-router-dom'

const Initial = () => {
  return (
    <div
      className="
        w-screen h-screen
        bg-cover bg-no-repeat
        bg-[url('https://res.cloudinary.com/dz8on44po/image/upload/v1652722976/block-master/ikc7x740x2kafeox5xsn.png')]
      "
    >
      <div className="relative w-screen h-screen bg-gradient-to-t from-black">
        <div className="absolute bottom-20 left-4">
          <h1 className="mb-8 text-white font-bold text-5xl uppercase">
            Style your Clothes
          </h1>

          <section className="flex flex-col w-[calc(100vw-36px)]">
            <Link
              className="
                w-full h-11
                mb-3 py-3
                bg-white rounded-md
                text-center text-sm font-normal uppercase
              "
              to="/login"
            >
              Sing in
            </Link>

            <Link
              className="
                w-full h-11
                mb-3 py-3
                bg-transparent rounded-md border-2 border-white
                text-center text-sm font-normal uppercase text-white
              "
              to="/register"
            >
              Sing up
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Initial