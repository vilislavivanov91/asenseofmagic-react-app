import * as cartTypes from '../constants/actionCartTypes'

export const addProductInCart = (product) => {
  return {
    type: cartTypes.ADD_PRODUCT,
    product
  }
}
export const getProductsInCart = () => {
  return {
    type: cartTypes.GET_ALL_PRODUCTS
  }
}
export const removeProductFromCart = (product) => {
  return {
    type: cartTypes.REMOVE_PRODUCT,
    product
  }
}
export const getTotalPriceInCart = () => {
  return {
    type: cartTypes.GET_PRODUCTS_PRICE
  }
}
