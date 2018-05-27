import * as actionCartTypes from '../constants/actionCartTypes'
import initialState from '../data/initialCartData'

export default function (state = initialState, action) {
  let currentState = Object.assign({}, state)

  switch (action.type) {
    case actionCartTypes.ADD_PRODUCT:
      if (currentState.products.indexOf(action.product) === -1) {
        currentState.products.push(action.product)
      } else {
        console.log(`Product - ${action.product.name} is already added in your cart!`)
      }
      return currentState

    case actionCartTypes.GET_PRODUCTS_PRICE:
      let totalPrice = 0
      console.log(currentState.products)
      currentState.products.forEach(p => {
        totalPrice += p.price
      })
      currentState.totalPrice = totalPrice
      return currentState

    case actionCartTypes.REMOVE_PRODUCT:
      const product = action.product
      if (currentState.products.indexOf(product >= 0)) {
        const productIndex = currentState.products.indexOf(product)
        currentState.products.splice(productIndex, 1)
      }
      return currentState
    default: return state
  }
}
