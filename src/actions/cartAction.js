import {ADD_PRODUCT, GET_ALL_PRODUCTS, REMOVE_PRODUCT, GET_PRODUCTS_PRICE} from '../constants/actionTypes'

export const add = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}
export const getAll = () => {
  return {
    type: GET_ALL_PRODUCTS
  }
}
export const remove = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product
  }
}
export const getTotalPrice = () => {
  return {
    type: GET_PRODUCTS_PRICE
  }
}
