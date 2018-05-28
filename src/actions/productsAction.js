import { ADD_PRODUCT, GET_ALL, GET_PRODUCT_BY_ID, GET_RANDOM_PRODUCTS, UPDATE_PRODUCT } from '../constants/actionTypesProduct'

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const getAll = () => {
  return {
    type: GET_ALL
  }
}

export const getProductById = (id) => {
  return {
    type: GET_PRODUCT_BY_ID,
    id
  }
}

export const getRandomProduct = () => {
  return {
    type: GET_RANDOM_PRODUCTS
  }
}

export const updateProduct = (id, product) => {
  return {
    type: UPDATE_PRODUCT,
    id,
    product
  }
}
