import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProductosAsync } from "../redux/actions/productsActions";
import { addCartToLocalStorage } from "../services/localStorage";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  console.log(products);

  useEffect(() => {
    dispatch(listProductosAsync());
  }, [dispatch]);

  if (!products) return window.location.reload(true);

  if (products < 1) return <Loader />;

  const singleProduct = products.find((product) => product.id == id);

  const handleCart = (data) => {
    addCartToLocalStorage(data);
  };

  return (
    <>
      <div className="w-full h-screen p-4">
        <div className="w-full flex flex-col">
          <div className="h-[300px] flex justify-center items-center bg-[#7FE0F2]/30">
            <img
              className="w-[280px]"
              src={singleProduct.img}
              alt={singleProduct.name}
            />
          </div>

          <section
            className="flex items-center justify-between w-full h-auto my-4"
          >
            <h1 className="capitalize">{singleProduct.name}</h1>
            <span className="font-semibold"> $ {singleProduct.price}</span>
          </section>

          <p className="text-left font-light mb-3">
            {singleProduct.description}
          </p>

          <div className="flex justify-evenly w-full">
            <p><span className="font-semibold">Talla: </span>{singleProduct.size}</p>
            <p><span className="font-semibold">Calor: </span>{singleProduct.color}</p>
          </div>

          <button
            className="w-full h-12 bg-primary mt-20 uppercase text-white rounded-md"
            onClick={() => handleCart(singleProduct)}
          >
            añadir al carrito
          </button>
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Detail;
