import * as actionCartTypes from '../constants/actionCartTypes'
import initialState from '../data/initialCartData'

export default function (state = initialState, action) {
  let currentState = Object.assign({}, state)

  switch (action.type) {
    case actionCartTypes.ADD_PRODUCT:
      currentState.products.push(action.product)
      console.log(currentState)
      return currentState

    case actionCartTypes.GET_PRODUCTS_PRICE:
      let totalPrice = 0
      currentState.products.forEach(p => {
        totalPrice += p.price
      })
      currentState.totalPrice = totalPrice
      console.log(currentState)
      return currentState

    case actionCartTypes.REMOVE_PRODUCT:
      const product = action.product
      if (currentState.products.indexOf(product >= 0)) {
        const productIndex = currentState.products.indexOf(product)
        currentState.products.splice(productIndex, 1)
      }
      console.log(currentState)
      return currentState
    default: return state
  }
}
