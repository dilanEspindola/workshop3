import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";


import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";

/* UPDATE DATA USER*/

export const updateUser = (email, user) => {
  return async (dispatch) => {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const datosQ = await getDocs(q);
    let id;
    datosQ.forEach(async (docu) => {
      id = docu.id;
    });
    const docRef = doc(db, "users", id);
    await updateDoc(docRef, user)
      .then((resp) => {
        dispatch(updateUserSync(user));
        Swal.fire("Bien Hecho!", "Actualizado correctamente!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Oops...", "Ha ocurrido un error", "error");
      });
  };
};

export const updateUserSync = (user) => {
  return {
    type: types.updateUser,
    payload: user,
  };
};
