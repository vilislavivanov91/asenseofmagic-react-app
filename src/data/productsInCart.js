let allProducts = []

const Data = {
  addProduct: (product) => {
    // Validation
    allProducts.push(product)
  },
  getAllProducts: () => {
    return allProducts.slice(0)
  },
  removeProductById: (id) => {
    allProducts.forEach(p => {
      if (p.id === id) {
        const index = allProducts.indexOf(p)
        allProducts.slice(index, 1)
      }
    })
  },
  getProductsPrice: () => {
    let price = 0
    Data.getAllProducts().forEach(p => {
      price += p.price
    })
    return price
  }
}

export default Data
