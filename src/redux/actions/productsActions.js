import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

// Listar Productos
export const listProductosSync = (product) => {
  return {
    type: types.listProducts,
    payload: product,
  };
};

export const listProductosAsync = () => {
  return async (dispatch) => {
    const colectionList = await getDocs(collection(db, "api-merch"));
    const products = [];
    // console.log(colectionList)
    colectionList.forEach((list) => {
      products.push({
        ...list.data(),
      });
    });
    dispatch(listProductosSync(products));
  };
};

/* SEARCH */

export const searchProduct = (search) => {
  return async (dispatch) => {
    const productsCollection = collection(db, "api-merch");
    const q = query(productsCollection, where("name", "==", search));
    const datosQ = await getDocs(q);
    const product = [];
    datosQ.forEach((docu) => {
      product.push({
        ...docu.data(),
      });
    });
    dispatch(searchProductSync(product));
    dispatch(listProductosSync(product));
  };
};

export const searchProductSync = (product) => {
  return {
    type: types.searchProduct,
    payload: product,
  };
};

/* GET DETAIL */

export const getProduct = (id) => {
  return async (dispatch) => {
    const productsCollection = collection(db, "api-merch");
    const q = query(productsCollection, where("id", "==", id));
    const datosQ = await getDocs(q);
    let idProduct;

    datosQ.forEach(async (docu) => {
      idProduct = docu.id;
    });

    const myDocRef = doc(db, "api-merch", idProduct);
    const myDoc = await getDoc(myDocRef);
    if (myDoc.exists()) {
      // console.log("Document data:", myDoc.data());
    }

    dispatch(getProductSync(myDoc));
  };
};

export const getProductSync = (myDoc) => {
  return {
    type: types.detailProduct,
    payload: myDoc,
  };
};
