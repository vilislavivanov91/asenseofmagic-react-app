import store from '../reduxStore'
import { addProduct } from '../actions/productsAction'

const Data = {
  getAll: () => {
    const currentState = store.getState().productReducer.productData
    return currentState
  },
  getProductById: (id) => {
    let product
    Data.getAll().forEach(p => {
      if (p.id === id) {
        product = p
      }
    })
    return product
  },
  getRandomProducts: (count) => {
    let products = []
    let randomIndexArr = []
    const allProductsLenght = Data.getAll().length
    while (count > 0) {
      let randomIndex = Math.floor(Math.random() * allProductsLenght) + 1

      if (randomIndexArr.indexOf(randomIndex) >= 0) {
      } else {
        randomIndexArr.push(randomIndex)
        const product = Data.getProductById(randomIndex)
        products.push(product)
        count -= 1
      }
    }
    return products
  },
  addProduct: (product) => {
    const id = Data.getAll().length
    product.id = id
    product.comments = ''
    product.rateValue = 0
    product.rateCount = 0
    product.available = true

    store.dispatch(addProduct(product))
  }
}

export default Data
