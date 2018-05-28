import { ADD_PRODUCT, GET_ALL, GET_PRODUCT_BY_ID, GET_RANDOM_PRODUCTS, UPDATE_PRODUCT } from '../constants/actionTypesProduct'
import initialState from '../data/initialState'

export default function (state = initialState, action) {
  const currentState = Object.assign({}, state)
  switch (action.type) {
    case ADD_PRODUCT:
      const product = action.product
      if (currentState.productData.indexOf(product) === -1) {
        currentState.productData.push(product)
      }
      return currentState
    case GET_ALL:
      return 1
    case GET_PRODUCT_BY_ID:
      return 1
    case GET_RANDOM_PRODUCTS:
      return 1
    case UPDATE_PRODUCT:
      const newProduct = action.product
      const id = action.id
      currentState.productData[id] = newProduct
      return currentState
    default:
      return state
  }
}
