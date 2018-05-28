import { ADD_PRODUCT, GET_ALL, GET_PRODUCT_BY_ID, GET_RANDOM_PRODUCTS } from '../constants/actionTypesProduct'
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
    default:
      return state
  }
}
