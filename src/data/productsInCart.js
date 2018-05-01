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
  }
}

export default Data
