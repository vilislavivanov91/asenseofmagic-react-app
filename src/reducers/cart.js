import { ADD_PRODUCT, GET_PRODUCTS_PRICE, REMOVE_PRODUCT } from '../constants/actionTypes'
import initialState from '../data/initialCartData'

export default function (state = initialState, action) {
  let currentState = Object.assign({}, state)

  switch (action.type) {
    case ADD_PRODUCT:
      if (currentState.products.indexOf(action.product) === -1) {
        currentState.products.push(action.product)
      } else {
        console.log(`Product - ${action.product.name} is already added in your cart!`)
      }
      return currentState

    case GET_PRODUCTS_PRICE:
      let totalPrice = 0
      currentState.products.forEach(p => {
        totalPrice += p.price
      })
      currentState.totalPrice = totalPrice
      return currentState

    case REMOVE_PRODUCT:
      const product = action.product
      if (currentState.products.indexOf(product >= 0)) {
        const productIndex = currentState.products.indexOf(product)
        currentState.products.splice(productIndex, 1)
      }
      return currentState
    default: return state
  }
}
