import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'
import { types } from "../types/types"


// Listar Productos
export const listProductosSync = (product) => {
  return {
    type: types.listProducts,
    payload: product
  }
}

export const listProductosAsync = () => {
  return async (dispatch) => {
    const colectionList = await getDocs(collection(db, 'api-merch'))
    const products = []
    console.log(colectionList)
    colectionList.forEach(list => {
      products.push({
        ...list.data()
      })
    })
    dispatch(listProductosSync(products))
  }
}