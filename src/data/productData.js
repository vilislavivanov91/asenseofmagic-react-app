import store from '../reduxStore'
import { addProduct } from '../actions/productsAction'

const Data = {
  getAll: () => {
    const currentState = store.getState().productReducer.productData
    return currentState
  },
  getProductById: (id) => {
    return Data.getAll().find(p => p.id === id) || Data.getAll().find(p => p.id === id - 1)
  },
  getRandomProducts: (count) => {
    let products = []
    let randomIndexArr = []
    const allProductsLength = Data.getAll().length
    while (count > 0) {
      let randomIndex = Math.floor(Math.random() * allProductsLength) + 1

      if (randomIndexArr.indexOf(randomIndex) === -1) {
        randomIndexArr.push(randomIndex)
        const product = Data.getProductById(randomIndex)
        if (products.indexOf(product) < 0) {
          products.push(product)
          count -= 1
        }
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
