import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProductosAsync } from "../redux/actions/productsActions";
import { addCartToLocalStorage } from "../services/localStorage";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  console.log(products);

  useEffect(() => {
    dispatch(listProductosAsync());
  }, [dispatch]);

  if (!products) return window.location.reload(true);

  if (products < 1) return <h1>loading...</h1>;

  const singleProduct = products.find((product) => product.id == id);

  const handleCart = (data) => {
    addCartToLocalStorage(data);
  };

  return (
    <div className="flex flex-col text-center h-screen">
      <img src={singleProduct.img} alt={singleProduct.name} />
      <h1>{singleProduct.name}</h1>
      <span>{singleProduct.price}</span>
      <p>{singleProduct.description}</p>
      <p>{singleProduct.size}</p>
      <p>{singleProduct.color}</p>
      <p>{singleProduct.category}</p>
      <button
        className="border-12 bg-slate-200 w-6/12 mx-auto mt-5"
        onClick={() => handleCart(singleProduct)}
      >
        añadir al carrito
      </button>
    </div>
  );
};

export default Detail;
